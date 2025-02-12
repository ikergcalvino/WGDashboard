import{r as C,o as D,a as o,c as d,b as e,d as s,e as b,f as m,t as p,_ as k,W as L,D as y,g as H,G as N,w as l,F as $,h as w,n as S,i as g,T as M,j as _,k as T,l as G,S as A}from"./index-Dtibxnfz.js";import{L as v}from"./localeText-GaOVxp1i.js";import{M as V}from"./message-D0PdCF5p.js";import"./dayjs.min-DPqi2oRr.js";const W={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll"},U={class:"container d-flex h-100 w-100"},z={class:"m-auto modal-dialog-centered dashboardModal"},B={class:"card rounded-3 shadow flex-grow-1"},O={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4 pb-2"},R={class:"mb-0"},j={class:"card-body px-4 pb-4 d-flex flex-column gap-2"},F={class:"card text-decoration-none",target:"_blank",role:"button",href:"https://discord.gg/72TwzjeuWm"},q={class:"card-body d-flex gap-4 align-items-center"},I={class:"d-flex align-items-center"},E={class:"badge rounded-pill text-bg-primary ms-2"},J={key:0,class:"spinner-border spinner-border-sm",style:{width:"0.7rem",height:"0.7rem"}},P={key:1},K={class:"text-muted"},Q={class:"card text-decoration-none",href:"https://donaldzou.github.io/WGDashboard-Documentation/",target:"_blank"},X={class:"card-body d-flex gap-4 align-items-center"},Y={class:"mb-0"},Z={class:"text-muted"},ee={__name:"helpModal",setup(i){const t=C(!0),h=C(void 0);return D(()=>{t.value=!0,fetch("https://discord.com/api/guilds/1276818723637956628/widget.json").then(c=>c.json()).then(c=>{h.value=c,t.value=!1}).catch(()=>{t.value=!1})}),(c,a)=>(o(),d("div",W,[e("div",U,[e("div",z,[e("div",B,[e("div",O,[e("h4",R,[s(v,{t:"Help"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:a[0]||(a[0]=f=>c.$emit("close"))})]),e("div",j,[e("a",F,[e("div",q,[a[3]||(a[3]=e("h1",{class:"mb-0"},[e("i",{class:"bi bi-discord"})],-1)),e("div",null,[e("div",I,[a[2]||(a[2]=e("h5",{class:"mb-0"}," Discord Server ",-1)),e("span",E,[t.value?(o(),d("span",J)):b("",!0),h.value!==void 0&&!t.value?(o(),d("span",P,[a[1]||(a[1]=e("i",{class:"bi bi-person-fill me-2"},null,-1)),m(p(h.value.presence_count)+" Online ",1)])):b("",!0)])]),e("small",K,[s(v,{t:"Join our Discord server for quick help or chat about WGDashboard!"})])])])]),e("a",Q,[e("div",X,[a[4]||(a[4]=e("h1",{class:"mb-0"},[e("i",{class:"bi bi-hash"})],-1)),e("div",null,[e("h5",Y,[s(v,{t:"Official Documentation"})]),e("small",Z,[s(v,{t:"Official documentation contains User Guides and more..."})])])])])])])])])]))}},te={name:"navbar",components:{HelpModal:ee,LocaleText:v},setup(){const i=L(),t=y();return{wireguardConfigurationsStore:i,dashboardConfigurationStore:t}},data(){return{updateAvailable:!1,updateMessage:"Checking for update...",updateUrl:"",openHelpModal:!1}},computed:{getActiveCrossServer(){if(this.dashboardConfigurationStore.ActiveServerConfiguration)return new URL(this.dashboardConfigurationStore.CrossServerConfiguration.ServerList[this.dashboardConfigurationStore.ActiveServerConfiguration].host)}},mounted(){H("/api/getDashboardUpdate",{},i=>{i.status?(i.data&&(this.updateAvailable=!0,this.updateUrl=i.data),this.updateMessage=i.message):(this.updateMessage=N("Failed to check available update"),console.log(`Failed to get update: ${i.message}`))})}},se=["data-bs-theme"],oe={id:"sidebarMenu",class:"bg-body-tertiary sidebar border h-100 rounded-3 shadow overflow-y-scroll"},ae={class:"sidebar-sticky"},ne={class:"text-white text-center m-0 py-3 mb-2 btn-brand"},ie={key:0,class:"ms-auto"},re={class:"nav flex-column px-2 gap-1"},le={class:"nav-item"},de={class:"nav-item"},ce={class:"nav-item"},ue={class:"sidebar-heading px-3 mt-3 mb-1 text-muted text-center"},me={class:"nav flex-column px-2 gap-1"},_e={class:"nav-item"},he={class:"sidebar-heading px-3 mt-3 mb-1 text-muted text-center"},fe={class:"nav flex-column px-2 gap-1"},pe={class:"nav-item"},ve={class:"nav-item"},ge={class:"nav-item"},be={class:"nav flex-column px-2 mb-3"},xe={class:"nav-item"},Ce={class:"nav-item",style:{"font-size":"0.8rem"}},Se=["href"],ke={class:"nav-link text-muted rounded-3"},ye={key:1,class:"nav-link text-muted rounded-3"};function $e(i,t,h,c,a,f){const n=_("LocaleText"),u=_("RouterLink"),x=_("HelpModal");return o(),d("div",{class:S(["col-md-3 col-lg-2 d-md-block p-2 navbar-container",{active:this.dashboardConfigurationStore.ShowNavBar}]),"data-bs-theme":c.dashboardConfigurationStore.Configuration.Server.dashboard_theme},[e("nav",oe,[e("div",ae,[e("div",ne,[t[4]||(t[4]=e("h5",{class:"mb-0"}," WGDashboard ",-1)),f.getActiveCrossServer!==void 0?(o(),d("small",ie,[t[3]||(t[3]=e("i",{class:"bi bi-hdd-rack-fill me-2"},null,-1)),m(p(f.getActiveCrossServer.host),1)])):b("",!0)]),e("ul",re,[e("li",le,[s(u,{class:"nav-link rounded-3",to:"/","exact-active-class":"active"},{default:l(()=>[t[5]||(t[5]=e("i",{class:"bi bi-house me-2"},null,-1)),s(n,{t:"Home"})]),_:1})]),e("li",de,[s(u,{class:"nav-link rounded-3",to:"/settings","exact-active-class":"active"},{default:l(()=>[t[6]||(t[6]=e("i",{class:"bi bi-gear me-2"},null,-1)),s(n,{t:"Settings"})]),_:1})]),e("li",ce,[e("a",{class:"nav-link rounded-3",role:"button",onClick:t[0]||(t[0]=r=>a.openHelpModal=!0)},[t[7]||(t[7]=e("i",{class:"bi bi-question-circle me-2"},null,-1)),s(n,{t:"Help"})])])]),t[10]||(t[10]=e("hr",{class:"text-body my-2"},null,-1)),e("h6",ue,[s(n,{t:"WireGuard Configurations"})]),e("ul",me,[(o(!0),d($,null,w(this.wireguardConfigurationsStore.Configurations,r=>(o(),d("li",_e,[s(u,{to:"/configuration/"+r.Name+"/peers",class:"nav-link nav-conf-link rounded-3","active-class":"active"},{default:l(()=>[e("span",{class:S(["dot me-2",{active:r.Status}])},null,2),m(" "+p(r.Name),1)]),_:2},1032,["to"])]))),256))]),t[11]||(t[11]=e("hr",{class:"text-body my-2"},null,-1)),e("h6",he,[s(n,{t:"Tools"})]),e("ul",fe,[e("li",pe,[s(u,{to:"/system_status",class:"nav-link rounded-3","active-class":"active"},{default:l(()=>[s(n,{t:"System Status"})]),_:1})]),e("li",ve,[s(u,{to:"/ping",class:"nav-link rounded-3","active-class":"active"},{default:l(()=>[s(n,{t:"Ping"})]),_:1})]),e("li",ge,[s(u,{to:"/traceroute",class:"nav-link rounded-3","active-class":"active"},{default:l(()=>[s(n,{t:"Traceroute"})]),_:1})])]),t[12]||(t[12]=e("hr",{class:"text-body my-2"},null,-1)),e("ul",be,[e("li",xe,[e("a",{class:"nav-link text-danger rounded-3",onClick:t[1]||(t[1]=r=>this.dashboardConfigurationStore.signOut()),role:"button",style:{"font-weight":"bold"}},[t[8]||(t[8]=e("i",{class:"bi bi-box-arrow-left me-2"},null,-1)),s(n,{t:"Sign Out"})])]),e("li",Ce,[this.updateAvailable?(o(),d("a",{key:0,href:this.updateUrl,class:"text-decoration-none rounded-3",target:"_blank"},[e("small",ke,[s(n,{t:this.updateMessage},null,8,["t"]),t[9]||(t[9]=m(" (")),s(n,{t:"Current Version:"}),m(" "+p(c.dashboardConfigurationStore.Configuration.Server.version)+") ",1)])],8,Se)):(o(),d("small",ye,[s(n,{t:this.updateMessage},null,8,["t"]),m(" ("+p(c.dashboardConfigurationStore.Configuration.Server.version)+") ",1)]))])])])]),s(M,{name:"zoom"},{default:l(()=>[this.openHelpModal?(o(),g(x,{key:0,onClose:t[2]||(t[2]=r=>{a.openHelpModal=!1})})):b("",!0)]),_:1})],10,se)}const we=k(te,[["render",$e],["__scopeId","data-v-637e1869"]]),Me={name:"index",components:{Message:V,Navbar:we},async setup(){return{dashboardConfigurationStore:y()}},computed:{getMessages(){return this.dashboardConfigurationStore.Messages.filter(i=>i.show)}}},De=["data-bs-theme"],Le={class:"row h-100"},He={class:"col-md-9 col-lg-10 overflow-y-scroll mb-0 pt-2"},Ne={class:"messageCentre text-body position-absolute d-flex"};function Te(i,t,h,c,a,f){const n=_("Navbar"),u=_("RouterView"),x=_("Message");return o(),d("div",{class:"container-fluid flex-grow-1 main","data-bs-theme":this.dashboardConfigurationStore.Configuration.Server.dashboard_theme},[e("div",Le,[s(n),e("main",He,[(o(),g(A,null,{default:l(()=>[s(u,null,{default:l(({Component:r})=>[s(M,{name:"fade2",mode:"out-in",appear:""},{default:l(()=>[(o(),g(G(r)))]),_:2},1024)]),_:1})]),_:1})),e("div",Ne,[s(T,{name:"message",tag:"div",class:"position-relative flex-sm-grow-0 flex-grow-1 d-flex align-items-end ms-sm-auto flex-column gap-2"},{default:l(()=>[(o(!0),d($,null,w(f.getMessages.slice().reverse(),r=>(o(),g(x,{message:r,key:r.id},null,8,["message"]))),128))]),_:1})])])])],8,De)}const Ue=k(Me,[["render",Te],["__scopeId","data-v-2b7e9ff4"]]);export{Ue as default};
