export default{
async fetch(r,env,ctx){
const cors={'Access-Control-Allow-Origin':'*',
'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE,OPTIONS',
'Access-Control-Allow-Headers':'Content-Type,X-Target,X-Cookies,X-XSRF-TOKEN',
'Access-Control-Expose-Headers':'X-Set-Cookies,X-Location,Content-Type,X-Status',
'Access-Control-Max-Age':'86400'};
if(r.method==='OPTIONS')return new Response(null,{headers:cors});
const t=r.headers.get('X-Target');
if(!t)return new Response(JSON.stringify({error:'Need X-Target header',ok:false}),{status:400,headers:{...cors,'Content-Type':'application/json'}});
let url;
try{url=new URL(t)}catch{return new Response(JSON.stringify({error:'Invalid URL'}),{status:400,headers:{...cors,'Content-Type':'application/json'}})}
if(!url.hostname.endsWith('wizzair.com'))return new Response(JSON.stringify({error:'Only wizzair.com allowed'}),{status:403,headers:{...cors,'Content-Type':'application/json'}});
const h=new Headers();
h.set('User-Agent','Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36');
h.set('Accept',r.headers.get('Accept')||'text/html,application/xhtml+xml,application/json,*/*;q=0.8');
h.set('Accept-Language','en-US,en;q=0.9');
if(r.headers.get('Content-Type'))h.set('Content-Type',r.headers.get('Content-Type'));
const ck=r.headers.get('X-Cookies');if(ck)h.set('Cookie',ck);
const xsrf=r.headers.get('X-XSRF-TOKEN');if(xsrf)h.set('X-XSRF-TOKEN',xsrf);
h.set('Referer','https://multipass.wizzair.com/');
h.set('Origin','https://multipass.wizzair.com');
try{
const resp=await fetch(t,{method:r.method,headers:h,
body:['GET','HEAD'].includes(r.method)?undefined:await r.arrayBuffer(),redirect:'manual'});
const rh=new Headers(cors);
rh.set('X-Status',String(resp.status));
const sc=resp.headers.getSetCookie?resp.headers.getSetCookie():[];
if(sc.length)rh.set('X-Set-Cookies',JSON.stringify(sc));
if(resp.status>=300&&resp.status<400){
rh.set('X-Location',resp.headers.get('Location')||'');
rh.set('Content-Type','application/json');
return new Response(JSON.stringify({redirect:resp.headers.get('Location'),status:resp.status,cookies:sc.length}),{status:200,headers:rh})}
const ct=resp.headers.get('Content-Type');if(ct)rh.set('Content-Type',ct);
return new Response(resp.body,{status:resp.status,headers:rh});
}catch(e){return new Response(JSON.stringify({error:e.message}),{status:502,headers:{...cors,'Content-Type':'application/json'}})}
}
};
