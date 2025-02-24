function $(e){return e.includes(":")?6:e.includes(".")?4:0}function b(e){const t=$(e);if(!t)throw new Error(`Invalid IP address: ${e}`);let n=0n,r=0n;const l=Object.create(null);if(t===4)for(const s of e.split(".").map(BigInt).reverse())n+=s*2n**r,r+=8n;else{if(e.includes(".")&&(l.ipv4mapped=!0,e=e.split(":").map(o=>{if(o.includes(".")){const[p,c,i,f]=o.split(".").map(a=>Number(a).toString(16).padStart(2,"0"));return`${p}${c}:${i}${f}`}else return o}).join(":")),e.includes("%")){let o;[,e,o]=/(.+)%(.+)/.exec(e)||[],l.scopeid=o}const s=e.split(":"),u=s.indexOf("");if(u!==-1)for(;s.length<8;)s.splice(u,0,"");for(const o of s.map(p=>BigInt(parseInt(p||"0",16))).reverse())n+=o*2n**r,r+=16n}return l.number=n,l.version=t,l}function x({number:e,version:t,ipv4mapped:n,scopeid:r},{compress:l=!0,hexify:s=!1}={}){let u=t===4?24n:112n;const o=t===4?8n:16n;let p=e;const c=[];for(;u>0n;){const i=2n**u;c.push(p/i),p=e%i,u-=o}if(c.push(p),t===4)return c.join(".");{let i="";if(n&&!s){for(const[f,a]of c.entries())f<6?i+=`${a.toString(16)}:`:i+=`${String(a>>8n)}.${String(a&255n)}${f===6?".":""}`;l&&(i=g(i.split(":")))}else l?i=g(c.map(f=>f.toString(16))):i=c.map(f=>f.toString(16)).join(":");return r?`${i}%${r}`:i}}function g(e){let t=null,n=null;for(const[r,l]of e.entries())l==="0"?n?n.add(r):n=new Set([r]):n&&((!t||n.size>t.size)&&(t=n),n=null);(!t&&n||n&&t&&n.size>t.size)&&(t=n);for(const r of t||[])e[r]=":";return e.filter(Boolean).join(":").replace(/:{2,}/,"::")}const I={4:32,6:128};function v(e){return e.includes("/")?$(e):0}function w(e){const t=v(e),n=Object.create(null);let r;if(t)r=e,n.version=t;else{const d=$(e);if(d)r=`${e}/${I[d]}`,n.version=d;else throw new Error(`Network is not a CIDR or IP: ${e}`)}const[l,s]=r.split("/");if(!/^[0-9]+$/.test(s))throw new Error(`Network is not a CIDR or IP: ${e}`);const{number:u,version:o,ipv4mapped:p,scopeid:c}=b(l);n.ip=x({number:u,version:o,ipv4mapped:p,scopeid:c}),n.cidr=`${n.ip}/${s}`,n.prefix=s,n.prefixPresent=!!t;const i=I[o],f=u.toString(2).padStart(i,"0"),a=Number(i-Number(s)),m=f.substring(0,i-a);return n.start=BigInt(`0b${m}${"0".repeat(a)}`),n.end=BigInt(`0b${m}${"1".repeat(a)}`),n}export{w as p};
