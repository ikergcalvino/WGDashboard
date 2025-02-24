import{_ as x,c as l,a as t,b as o,h as p,m as b,x as v,C as k,w as _,T as y,d as h,k as T,g as A,D as w,r as f,z as R,f as r,e as S,F as C,i as L,t as i}from"./index-ovlZ7z6B.js";import{O as M,a as O,l as V}from"./osmapSocket-D7ur1BRn.js";import{L as $}from"./localeText-BUvaTJPm.js";const D={name:"traceroute",components:{OsmapSocket:O,LocaleText:$,OSMap:M},data(){return{ipAddress:void 0}},setup(){const n=w();let e,c=f(!1);const u=f([]);try{e=V(),e.connect(),console.info("Successfully connected to socket.io")}catch{console.assert("Failed to connect socket.io")}return e.on("tracerouteResponse",(...m)=>{let d=m[0];d.status&&c.value?(console.log(d.data),d.data.id=R().toString(),u.value.push(d.data)):(n.newMessage("Server",d.message,"danger"),c.value=!1)}),e.on("tracerouteResponseEnd",()=>{c.value=!1}),{store:n,sio:e,tracerouteResult:u,tracing:c}},methods:{execute(){this.ipAddress&&(this.tracing=!0,this.tracerouteResult=void 0,A("/api/traceroute/execute",{ipAddress:this.ipAddress},n=>{n.status?this.tracerouteResult=n.data:this.store.newMessage("Server",n.message,"danger"),this.tracing=!1}))},executeSocket(){this.ipAddress&&this.sio.connected&&(this.tracerouteResult=[],this.tracing=!0,this.sio.emit("traceroute",{ipAddress:this.ipAddress}))}}},N={class:"mt-md-5 mt-3 text-body"},B={class:"container-md"},E={class:"mb-3 text-body"},F={class:"d-flex gap-2 mb-3 flex-column"},G={class:"flex-grow-1"},I={class:"mb-1 text-muted",for:"ipAddress"},H=["disabled"],K=["disabled"],P={key:0,class:"d-block"},z={key:1,class:"d-block"},U={class:"position-relative"},j={key:"table",class:"w-100 mt-2"},q={class:"table table-sm rounded-3 w-100"},J={scope:"col"},Q={scope:"col"},W={scope:"col"},X={scope:"col"},Y={scope:"col"},Z={scope:"col"},tt={key:0},et={key:0},st={colspan:"6",class:"text-muted text-center"};function ot(n,e,c,u,m,d){const a=p("LocaleText"),g=p("OsmapSocket");return r(),l("div",N,[t("div",B,[t("h3",E,[o(a,{t:"Traceroute"})]),t("div",F,[t("div",G,[t("label",I,[t("small",null,[o(a,{t:"Enter IP Address / Hostname"})])]),b(t("input",{disabled:this.tracing,id:"ipAddress",class:"form-control rounded-3","onUpdate:modelValue":e[0]||(e[0]=s=>this.ipAddress=s),onKeyup:e[1]||(e[1]=k(s=>this.execute(),["enter"])),type:"text"},null,40,H),[[v,this.ipAddress]])]),t("button",{class:"btn btn-primary rounded-3 position-relative flex-grow-1",disabled:this.tracing||!this.ipAddress,onClick:e[2]||(e[2]=s=>this.executeSocket())},[o(y,{name:"slide"},{default:_(()=>[this.tracing?(r(),l("span",z,e[4]||(e[4]=[t("span",{class:"spinner-border spinner-border-sm","aria-hidden":"true"},null,-1),t("span",{class:"visually-hidden",role:"status"},"Loading...",-1)]))):(r(),l("span",P,e[3]||(e[3]=[t("i",{class:"bi bi-person-walking me-2"},null,-1),S("Trace! ")])))]),_:1})],8,K)]),t("div",U,[o(g,{d:this.tracerouteResult,type:"traceroute"},null,8,["d"]),t("div",j,[t("table",q,[t("thead",null,[t("tr",null,[t("th",J,[o(a,{t:"Hop"})]),t("th",Q,[o(a,{t:"IP Address"})]),t("th",W,[o(a,{t:"Average RTT (ms)"})]),t("th",X,[o(a,{t:"Min RTT (ms)"})]),t("th",Y,[o(a,{t:"Max RTT (ms)"})]),t("th",Z,[o(a,{t:"Geolocation"})])])]),t("tbody",null,[o(T,{name:"ping"},{default:_(()=>[(r(!0),l(C,null,L(this.tracerouteResult,s=>(r(),l("tr",{key:s.id},[t("td",null,[t("small",null,i(s.hop),1)]),t("td",null,[t("small",null,i(s.ip),1)]),t("td",null,[t("small",null,i(s.avg_rtt),1)]),t("td",null,[t("small",null,i(s.min_rtt),1)]),t("td",null,[t("small",null,i(s.max_rtt),1)]),t("td",null,[s.geo&&s.geo.status==="success"?(r(),l("span",tt,[t("small",null,i(s.geo.city)+", "+i(s.geo.country),1)])):h("",!0)])]))),128))]),_:1}),u.tracerouteResult.length===0?(r(),l("tr",et,[t("td",st,[t("small",null,[o(a,{t:"Traceroute results will show here"})])])])):h("",!0)])])])])])])}const rt=x(D,[["render",ot],["__scopeId","data-v-229344ca"]]);export{rt as default};
