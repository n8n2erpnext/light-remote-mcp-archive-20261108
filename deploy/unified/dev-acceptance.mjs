import fs from 'node:fs';
import https from 'node:https';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {apiPath,API_CONTRACT_VERSION} from '../../lib/api-contract.mjs';
import {DESKTOP_OWNER_CLIENT_ID,DESKTOP_OWNER_RESOURCE,DESKTOP_OWNER_SCOPE} from '../../plugin-server/desktop-auth-v4-contract.mjs';

const env=JSON.parse(fs.readFileSync('/state/runtime-env.json','utf8'));
if(env.LR_UNIFIED_DISPOSABLE_DEV!=='1')throw Error('disposable_dev_required');
const origin=env.LIGHT_REMOTE_PLUGIN_ORIGIN;
const ca=fs.readFileSync('/state/pki/public-ca.crt');
const credentials=JSON.parse(fs.readFileSync('/state/fixture-credentials.json','utf8'));
const report={sourceCommit:env.LR_UNIFIED_SOURCE_COMMIT,apiContractVersion:API_CONTRACT_VERSION,layer:'real-private-dev-integration',physicalAcceptance:false,checks:[],notVerified:['Windows native IPC/vault/tray on new artifact','Native Agent enrollment and live signed B approval','Positive device-signed Wall SSO relay','Reboot/rollback on Windows','macOS/Linux full installer']};
function record(name,actual){report.checks.push({name,status:'PASS',...actual})}
function request(path,{method='GET',body,headers={}}={}){
 return new Promise((resolve,reject)=>{
  const payload=body===undefined?null:Buffer.from(typeof body==='string'?body:JSON.stringify(body));
  const req=https.request(new URL(path,origin),{method,ca,rejectUnauthorized:true,minVersion:'TLSv1.3',headers:{...(payload?{'content-type':'application/json','content-length':payload.length}:{}),...headers}},res=>{
   const parts=[];let size=0;
   res.on('data',x=>{size+=x.length;if(size>4*1024*1024)req.destroy(Error('response_limit'));else parts.push(x)});
   res.on('end',()=>{const text=Buffer.concat(parts).toString();let json;try{json=JSON.parse(text)}catch{}resolve({status:res.statusCode,headers:res.headers,text,json})});
  });
  req.setTimeout(10000,()=>req.destroy(Error('candidate_request_timeout')));req.on('error',reject);if(payload)req.write(payload);req.end();
 });
}
async function login(actor){
 const out=await request('/account/api?action=login',{method:'POST',body:credentials[actor],headers:{origin}});
 assert.equal(out.status,200,'real Portal password login');
 const cookie=out.headers['set-cookie']?.find(x=>x.startsWith('__Host-light_remote_account='));
 assert.ok(cookie?.includes('HttpOnly')&&cookie.includes('Secure'),'secure account cookie required');
 return cookie.split(';')[0];
}
const native=token=>({authorization:'Bearer '+token});
async function authorize(cookie){
 const verifier=crypto.randomBytes(32).toString('base64url'),state=crypto.randomBytes(32).toString('base64url'),nonce=crypto.randomBytes(32).toString('base64url');
 const redirect='http://127.0.0.1:45123/desktop/v4/callback';
 const query=new URLSearchParams({client_id:DESKTOP_OWNER_CLIENT_ID,resource:DESKTOP_OWNER_RESOURCE,scope:DESKTOP_OWNER_SCOPE,response_type:'code',code_challenge_method:'S256',code_challenge:crypto.createHash('sha256').update(verifier).digest('base64url'),redirect_uri:redirect,state,install_nonce:nonce});
 const consent=await request(apiPath('ownerAuthorize')+'?'+query,{headers:{cookie}});
 assert.equal(consent.status,200,'Owner consent page must come from real backend');
 const csrf=/name="csrf" value="([A-Za-z0-9_-]{43})"/.exec(consent.text)?.[1];assert.ok(csrf,'consent CSRF');
 const approve=await request(apiPath('ownerAuthorize'),{method:'POST',body:new URLSearchParams({csrf,decision:'approve'}).toString(),headers:{origin,cookie,'content-type':'application/x-www-form-urlencoded'}});
 assert.equal(approve.status,303,'explicit browser Owner consent');
 const callback=new URL(approve.headers.location);assert.equal(callback.origin,new URL(redirect).origin);assert.equal(callback.searchParams.get('state'),state);
 const exchange={code:callback.searchParams.get('code'),code_verifier:verifier,redirect_uri:redirect,install_nonce:nonce,state};
 const token=await request(apiPath('ownerToken'),{method:'POST',body:exchange});assert.equal(token.status,200,'PKCE exchange');assert.equal(token.json.scope,DESKTOP_OWNER_SCOPE);
 assert.match(token.json.access_token,/^[A-Za-z0-9_-]{43}$/);
 const replay=await request(apiPath('ownerToken'),{method:'POST',body:exchange});assert.equal(replay.status,401,'one-time authorization code replay');
 record('Portal Owner consent -> PKCE native token; code replay rejected',{statusCode:200,replayStatus:replay.status});
 return token.json;
}
try{
 let healthy=false;
 for(let i=0;i<60;i++){
  try{const out=await request('/healthz');if(out.status===200&&out.json?.ok){assert.equal(out.headers['x-light-remote-api-version'],API_CONTRACT_VERSION);healthy=true;break}}catch{}
  await new Promise(r=>setTimeout(r,1000));
 }
 assert.ok(healthy,'Plugin and Operator startup with real PG/Redis');record('real Plugin health/version header',{statusCode:200});
 const cross=await request('/account/api?action=login',{method:'POST',body:credentials.owner,headers:{origin:'https://foreign.invalid'}});assert.equal(cross.status,403);record('cross-origin Portal mutation denied',{statusCode:cross.status});
 const unauth=await request(apiPath('ownerSnapshot'),{method:'POST',body:{}});assert.equal(unauth.status,401);record('snapshot route enabled and unauthenticated caller denied',{statusCode:unauth.status});
 const cookie=await login('owner');const foreign=await login('foreign');
 const tokens=await authorize(cookie);record('two real Portal accounts use durable PG credentials',{accounts:2});
 const session=await request(apiPath('ownerSession'),{headers:native(tokens.access_token)});assert.equal(session.status,200);assert.equal(session.json.accountId,'unified-dev-owner');record('native Owner live family/session verified',{statusCode:session.status});
 const browser=await request(apiPath('ownerSession'),{headers:{...native(tokens.access_token),origin,cookie}});assert.equal(browser.status,403);record('native session refuses browser cookie/origin',{statusCode:browser.status});
 const snapshot=await request(apiPath('ownerSnapshot'),{method:'POST',body:{},headers:native(tokens.access_token)});assert.equal(snapshot.status,200,'real Operator snapshot');assert.equal(snapshot.json.ok,true);record('Desktop snapshot -> real private Operator -> PG/Redis',{statusCode:200});
 for(const kind of ['devices','grants','usage','jobs','sessions']){
  const page=await request(apiPath('ownerSnapshot'),{method:'POST',body:{page:{kind,limit:10}},headers:native(tokens.access_token)});
  assert.equal(page.status,200,'typed page '+kind);assert.equal(page.json.ok,true);record('Owner-scoped typed '+kind+' page',{statusCode:page.status});
 }
 const invalid=await request(apiPath('ownerSnapshot'),{method:'POST',body:{accountId:'foreign',page:{kind:'devices',limit:10}},headers:native(tokens.access_token)});assert.equal(invalid.status,403);record('caller cannot inject a foreign account into snapshot',{statusCode:invalid.status});
 // An ordinary registered account cannot mint an Owner native token.
 const q=new URLSearchParams({client_id:DESKTOP_OWNER_CLIENT_ID,resource:DESKTOP_OWNER_RESOURCE,scope:DESKTOP_OWNER_SCOPE,response_type:'code',code_challenge_method:'S256',code_challenge:crypto.randomBytes(32).toString('base64url'),redirect_uri:'http://127.0.0.1:45123/desktop/v4/callback',state:crypto.randomBytes(32).toString('base64url'),install_nonce:crypto.randomBytes(32).toString('base64url')});
 const other=await request(apiPath('ownerAuthorize')+'?'+q,{headers:{cookie:foreign}});assert.ok([400,403].includes(other.status));record('foreign non-Owner cannot enter Owner consent',{statusCode:other.status});
 const sso=await request(apiPath('ownerWallTicket'),{method:'POST',body:{deviceId:'unified-nonexistent'},headers:native(tokens.access_token)});assert.ok([400,401,403].includes(sso.status),'SSO enabled but foreign/unknown target denied');record('real mTLS SSO route denies unknown target',{statusCode:sso.status});
 const fresh=await request(apiPath('ownerRefresh'),{method:'POST',body:{refresh_token:tokens.refresh_token}});assert.equal(fresh.status,200);assert.notEqual(fresh.json.refresh_token,tokens.refresh_token);record('native refresh token rotates atomically',{statusCode:200});
 const logout=await request(apiPath('ownerLogout'),{method:'POST',body:{},headers:native(fresh.json.access_token)});assert.equal(logout.status,200);
 const revoked=await request(apiPath('ownerSession'),{headers:native(fresh.json.access_token)});assert.equal(revoked.status,401);
 const revokedRefresh=await request(apiPath('ownerRefresh'),{method:'POST',body:{refresh_token:fresh.json.refresh_token}});assert.equal(revokedRefresh.status,401);record('logout revokes access and refresh family',{accessStatus:401,refreshStatus:401});
 report.result='PASS';
}catch(error){report.result='FAIL';report.failure={name:error.name,message:String(error.message).slice(0,250)};process.exitCode=1}
finally{
 fs.writeFileSync('/state/integration-report.json',JSON.stringify(report,null,2)+'\n',{mode:0o600});
 console.log(JSON.stringify(report,null,2));
}
