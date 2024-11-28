import{_ as k,a as o,c as l,b as s,t as r,r as N,o as I,s as S,g as O,d as n,q as d,F as p,h as m,w as y,k as f,e as h,i as v,f as x}from"./index-CX_YbBLs.js";import{L as i}from"./localeText--wrl5EBW.js";import{C as P}from"./storageMount.vue_vue_type_style_index_0_scoped_5d74c517_lang-CXN4eTZW.js";const $={class:"mb-1 d-flex gap-5"},M={class:"title"},B={class:"ms-auto"},L={__name:"process",props:["process","cpu"],setup(c){return(e,u)=>(o(),l("div",$,[s("small",M,[u[0]||(u[0]=s("i",{class:"bi bi-code-square me-2"},null,-1)),s("samp",null,r(c.process.command?c.process.command:c.process.name),1)]),s("small",B,r(c.cpu?c.process.cpu_percent:Math.round((c.process.memory_percent+Number.EPSILON)*10)/10)+"% ",1)]))}},w=k(L,[["__scopeId","data-v-484827dd"]]),j={class:"text-body row g-2"},C={class:"col-sm-6"},E={class:"card rounded-3 h-100 shadow"},G={class:"card-body p-4"},V={class:"row"},q={class:"col-sm-12 d-flex flex-column gap-3"},T={class:"d-flex align-items-center"},U={class:"text-muted mb-0"},D={class:"ms-auto mb-0"},F={key:0},z={key:1,class:"spinner-border"},A={class:"progress",role:"progressbar",style:{height:"10px"}},H={class:"d-flex gap-1"},J={class:"position-relative"},K={class:"col-sm-6"},Q={class:"card rounded-3 h-100 shadow"},R={class:"card-body p-4"},W={class:"row"},X={class:"col-sm-12 d-flex flex-column gap-3"},Y={class:"d-flex align-items-center"},Z={class:"text-muted"},ss={class:"ms-auto"},es={key:0},ts={key:1,class:"spinner-border"},os={class:"progress",role:"progressbar",style:{height:"10px"}},ls={class:"d-flex align-items-center"},as={class:"mb-0 ms-auto"},rs={class:"progress",role:"progressbar",style:{height:"10px"}},ns={class:"position-relative"},cs={class:"col-sm-12"},ds={class:"card rounded-3 h-100 shadow"},is={class:"card-body p-4 d-flex gap-3 flex-column"},us={class:"d-flex align-items-center"},_s={class:"text-muted mb-0"},ps={class:"ms-auto mb-0"},ms={key:0},hs={key:1,class:"spinner-border"},vs={key:0,class:"row g-3"},bs={class:"col-sm-6 fadeIn"},gs={class:"d-flex mb-2"},ys={class:"mb-0"},fs={class:"mb-0 ms-auto d-flex gap-2"},xs={class:"text-info"},ws={class:"text-warning"},ks={class:"progress",role:"progressbar",style:{height:"10px"}},Ns={class:"col-sm-12"},Is={class:"card rounded-3 h-100 shadow"},Ss={class:"card-body p-4 d-flex gap-3 flex-column"},Os={class:"d-flex align-items-center"},Ps={class:"text-muted mb-0"},$s={class:"ms-auto mb-0"},Ms={key:0},Bs={key:1,class:"spinner-border"},Ls={class:"row g-3"},js={class:"col-sm-6 fadeIn"},Cs={class:"d-flex mb-2"},Es={class:"mb-0"},Gs={class:"mb-0 ms-auto d-flex gap-2"},Vs={class:"text-success"},qs={class:"progress",role:"progressbar",style:{height:"20px"}},Ts={__name:"systemStatus",setup(c){const e=N(void 0);let u=null;I(()=>{b(),u=setInterval(()=>{b()},5e3)}),S(()=>{clearInterval(u)});const b=()=>{O("/api/systemStatus",{},g=>{e.value=g.data})};return(g,a)=>(o(),l("div",j,[s("div",C,[s("div",E,[s("div",G,[s("div",V,[s("div",q,[s("div",T,[s("h3",U,[a[0]||(a[0]=s("i",{class:"bi bi-cpu-fill me-2"},null,-1)),n(i,{t:"CPU"})]),s("h3",D,[e.value?(o(),l("span",F,r(e.value.cpu.cpu_percent)+"% ",1)):(o(),l("span",z))])]),s("div",A,[s("div",{class:"progress-bar",style:d({width:`${e.value?.cpu.cpu_percent}%`})},null,4)]),s("div",H,[(o(!0),l(p,null,m(e.value?.cpu.cpu_percent_per_cpu,(t,_)=>(o(),v(P,{square:!0,key:_,align:_+1>Math.round(e.value?.cpu.cpu_percent_per_cpu.length/2),core_number:_,percentage:t},null,8,["align","core_number","percentage"]))),128))]),a[1]||(a[1]=s("h5",{class:"mb-0"},"Processes",-1)),s("div",J,[n(f,{name:"process"},{default:y(()=>[(o(!0),l(p,null,m(e.value?.process.cpu_top_10,t=>(o(),v(w,{key:t.pid,cpu:!0,process:t},null,8,["process"]))),128))]),_:1})])])])])])]),s("div",K,[s("div",Q,[s("div",R,[s("div",W,[s("div",X,[s("div",Y,[s("h3",Z,[a[2]||(a[2]=s("i",{class:"bi bi-memory me-2"},null,-1)),n(i,{t:"Memory"})]),s("h3",ss,[e.value?(o(),l("span",es,r(e.value.memory.virtual_memory.percent)+"% ",1)):(o(),l("span",ts))])]),s("div",os,[s("div",{class:"progress-bar bg-info",style:d({width:`${e.value?.memory.virtual_memory.percent}%`})},null,4)]),s("div",ls,[a[3]||(a[3]=s("h6",{class:"mb-0"},"Swap Memory",-1)),s("h6",as,r(e.value?.memory.swap_memory.percent)+"%",1)]),s("div",rs,[s("div",{class:"progress-bar bg-info-subtle",style:d({width:`${e.value?.memory.swap_memory.percent}%`})},null,4)]),a[4]||(a[4]=s("h5",{class:"mb-0"},"Processes",-1)),s("div",ns,[n(f,{name:"process"},{default:y(()=>[(o(!0),l(p,null,m(e.value?.process.memory_top_10,t=>(o(),v(w,{key:t.pid,process:t},null,8,["process"]))),128))]),_:1})])])])])])]),s("div",cs,[s("div",ds,[s("div",is,[s("div",us,[s("h3",_s,[a[5]||(a[5]=s("i",{class:"bi bi-ethernet me-2"},null,-1)),n(i,{t:"Network"})]),s("h3",ps,[e.value?(o(),l("span",ms,[n(i,{t:Object.keys(e.value.network).length+" Interface"+(Object.keys(e.value.network).length>1?"s":"")},null,8,["t"])])):(o(),l("span",hs))])]),e.value?(o(),l("div",vs,[(o(!0),l(p,null,m(Object.keys(e.value.network).sort(),(t,_)=>(o(),l("div",bs,[s("div",gs,[s("h6",ys,[s("samp",null,r(t),1)]),s("h6",fs,[s("span",xs,[a[6]||(a[6]=s("i",{class:"bi bi-arrow-down"},null,-1)),x(" "+r(Math.round((e.value.network[t].byte_recv/1024e6+Number.EPSILON)*1e4)/1e4)+" GB ",1)]),s("span",ws,[a[7]||(a[7]=s("i",{class:"bi bi-arrow-up"},null,-1)),x(" "+r(Math.round((e.value.network[t].byte_sent/1024e6+Number.EPSILON)*1e4)/1e4)+" GB ",1)])])]),s("div",ks,[e.value.network[t].byte_recv>0?(o(),l("div",{key:0,class:"progress-bar bg-info",style:d({width:`${e.value.network[t].byte_recv/(e.value.network[t].byte_sent+e.value.network[t].byte_recv)*100}%`})},null,4)):h("",!0),e.value.network[t].byte_sent>0?(o(),l("div",{key:1,class:"progress-bar bg-warning",style:d({width:`${e.value.network[t].byte_sent/(e.value.network[t].byte_sent+e.value.network[t].byte_recv)*100}%`})},null,4)):h("",!0)])]))),256))])):h("",!0)])])]),s("div",Ns,[s("div",Is,[s("div",Ss,[s("div",Os,[s("h3",Ps,[a[8]||(a[8]=s("i",{class:"bi bi-cpu-fill me-2"},null,-1)),n(i,{t:"Storage"})]),s("h3",$s,[e.value?(o(),l("span",Ms,[n(i,{t:Object.keys(e.value.disk).length+" Partition"+(Object.keys(e.value.disk).length>1?"s":"")},null,8,["t"])])):(o(),l("span",Bs))])]),s("div",Ls,[e.value?(o(!0),l(p,{key:0},m(Object.keys(e.value.disk).sort(),(t,_)=>(o(),l("div",js,[s("div",Cs,[s("h6",Es,[s("samp",null,r(t),1)]),s("h6",Gs,[s("span",Vs,r(Math.round((e.value.disk[t].used/1024e6+Number.EPSILON)*100)/100)+" / "+r(Math.round((e.value.disk[t].total/1024e6+Number.EPSILON)*100)/100)+" GB Used ",1)])]),s("div",qs,[s("div",{class:"progress-bar bg-success",style:d({width:`${e.value.disk[t].percent}%`})},r(e.value.disk[t].percent)+"% ",5)])]))),256)):h("",!0)])])])])]))}},zs=k(Ts,[["__scopeId","data-v-eebd6280"]]);export{zs as default};
