import{_ as g,W as I,D as A,j as w,a as i,c as n,b as e,d as o,m as h,x as f,n as _,r as C,G as T,f as $,v as P,w as G,F as O,h as L,t as K,k as E,C as F,e as k,g as B,J as R,O as W,p as N,H as q,i as x,a5 as V,z as J}from"./index-BvKzxirn.js";import{L as u}from"./localeText-CpdDaUW7.js";const z={name:"endpointAllowedIps",components:{LocaleText:u},props:{data:Object,saving:Boolean},setup(){const l=I(),t=A();return{store:l,dashboardStore:t}},data(){return{endpointAllowedIps:JSON.parse(JSON.stringify(this.data.endpoint_allowed_ip)),error:!1}},methods:{checkAllowedIP(){let l=this.endpointAllowedIps.split(",").map(t=>t.replaceAll(" ",""));for(let t in l)if(!this.store.checkCIDR(l[t])){this.error||this.dashboardStore.newMessage("WGDashboard","Endpoint Allowed IPs format is incorrect","danger"),this.data.endpoint_allowed_ip="",this.error=!0;return}this.error=!1,this.data.endpoint_allowed_ip=this.endpointAllowedIps}},watch:{endpointAllowedIps(){this.checkAllowedIP()}}},H={for:"peer_endpoint_allowed_ips",class:"form-label"},Q={class:"text-muted"},Y=["disabled"];function Z(l,t,d,c,p,v){const s=w("LocaleText");return i(),n("div",null,[e("label",H,[e("small",Q,[o(s,{t:"Endpoint Allowed IPs"}),e("code",null,[o(s,{t:"(Required)"})])])]),h(e("input",{type:"text",class:_(["form-control form-control-sm rounded-3",{"is-invalid":p.error}]),disabled:this.saving,"onUpdate:modelValue":t[0]||(t[0]=a=>this.endpointAllowedIps=a),onBlur:t[1]||(t[1]=a=>this.checkAllowedIP()),id:"peer_endpoint_allowed_ips"},null,42,Y),[[f,this.endpointAllowedIps]])])}const X=g(z,[["render",Z]]),ee={name:"allowedIPsInput",components:{LocaleText:u},props:{data:Object,saving:Boolean,bulk:Boolean,availableIp:void 0},data(){return{allowedIp:[],availableIpSearchString:"",customAvailableIp:"",allowedIpFormatError:!1}},setup(l){const t=I(),d=A(),c=C("");return Object.keys(l.availableIp).length>0&&(c.value=Object.keys(l.availableIp)[0]),{store:t,dashboardStore:d,selectedSubnet:c}},computed:{searchAvailableIps(){return this.availableIpSearchString?this.availableIp[this.selectedSubnet].filter(l=>l.includes(this.availableIpSearchString)&&!this.data.allowed_ips.includes(l)):this.availableIp[this.selectedSubnet].filter(l=>!this.data.allowed_ips.includes(l))},inputGetLocale(){return T("Enter IP Address/CIDR")}},methods:{addAllowedIp(l){let t=l.split(",");for(let d=0;d<t.length;d++){let c=t[d].trim();if(this.store.checkCIDR(c))this.data.allowed_ips.push(c);else return this.allowedIpFormatError=!0,this.dashboardStore.newMessage("WGDashboard",`This Allowed IP address is invalid: ${c}`,"danger"),!1}return this.customAvailableIp="",!0}},watch:{customAvailableIp(){this.allowedIpFormatError=!1}},mounted(){if(this.availableIp!==void 0&&Object.keys(this.availableIp).length>0&&this.data.allowed_ips.length===0)for(let l in this.availableIp)this.availableIp[l].length>0&&this.addAllowedIp(this.availableIp[l][0])}},te={class:"d-flex flex-column flex-md-row mb-2"},se={for:"peer_allowed_ip_textbox",class:"form-label mb-0"},ae={class:"text-muted"},le={class:"form-check form-switch ms-md-auto"},oe={class:"form-check-label",for:"disableIPValidation"},ie={class:"d-flex"},ne=["onClick"],de={class:"d-flex gap-2 align-items-center"},re={class:"input-group"},ue=["placeholder","disabled"],ce=["disabled"],pe={class:"text-muted"},be={class:"dropdown flex-grow-1"},he=["disabled"],me={key:0,class:"dropdown-menu mt-2 shadow w-100 dropdown-menu-end rounded-3 pb-0",style:{width:"300px !important"}},_e={class:"px-3 d-flex gap-3 align-items-center"},ve={class:"px-3 overflow-x-scroll d-flex overflow-x-scroll overflow-y-hidden align-items-center gap-2"},fe=["onClick"],ke={class:"overflow-y-scroll",style:{height:"270px"}},ye={style:{}},ge=["onClick"],we={class:"me-auto"},xe={key:0},$e={class:"px-3 text-muted"};function Ie(l,t,d,c,p,v){const s=w("LocaleText");return i(),n("div",{class:_({inactiveField:this.bulk})},[e("div",te,[e("label",se,[e("small",ae,[o(s,{t:"Allowed IPs"}),t[5]||(t[5]=$()),e("code",null,[o(s,{t:"(Required)"})])])]),e("div",le,[h(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=a=>this.data.allowed_ips_validation=a),role:"switch",id:"disableIPValidation"},null,512),[[P,this.data.allowed_ips_validation]]),e("label",oe,[e("small",null,[o(s,{t:"Allowed IPs Validation"})])])])]),e("div",ie,[e("div",{class:_(["d-flex gap-2 flex-wrap",{"mb-2":this.data.allowed_ips.length>0}])},[o(E,{name:"list"},{default:G(()=>[(i(!0),n(O,null,L(this.data.allowed_ips,(a,b)=>(i(),n("span",{class:"badge rounded-pill text-bg-success",key:a},[$(K(a)+" ",1),e("a",{role:"button",onClick:S=>this.data.allowed_ips.splice(b,1)},t[6]||(t[6]=[e("i",{class:"bi bi-x-circle-fill ms-1"},null,-1)]),8,ne)]))),128))]),_:1})],2)]),e("div",de,[e("div",re,[h(e("input",{type:"text",class:_(["form-control form-control-sm rounded-start-3",{"is-invalid":this.allowedIpFormatError}]),placeholder:this.inputGetLocale,onKeyup:t[1]||(t[1]=F(a=>this.customAvailableIp?this.addAllowedIp(this.customAvailableIp):void 0,["enter"])),"onUpdate:modelValue":t[2]||(t[2]=a=>p.customAvailableIp=a),id:"peer_allowed_ip_textbox",disabled:d.bulk},null,42,ue),[[f,p.customAvailableIp]]),e("button",{class:_(["btn btn-sm rounded-end-3",[this.customAvailableIp?"btn-success":"btn-outline-success"]]),disabled:d.bulk||!this.customAvailableIp,onClick:t[3]||(t[3]=a=>this.addAllowedIp(this.customAvailableIp)),type:"button",id:"button-addon2"},t[7]||(t[7]=[e("i",{class:"bi bi-plus-lg"},null,-1)]),10,ce)]),e("small",pe,[o(s,{t:"or"})]),e("div",be,[e("button",{class:"btn btn-outline-secondary btn-sm dropdown-toggle rounded-3 w-100",disabled:!d.availableIp||d.bulk,"data-bs-auto-close":"outside",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[t[8]||(t[8]=e("i",{class:"bi bi-filter-circle me-2"},null,-1)),o(s,{t:"Pick Available IP"})],8,he),this.availableIp?(i(),n("ul",me,[e("li",null,[e("div",_e,[t[9]||(t[9]=e("label",{for:"availableIpSearchString",class:"text-muted"},[e("i",{class:"bi bi-search"})],-1)),h(e("input",{id:"availableIpSearchString",class:"form-control form-control-sm rounded-3","onUpdate:modelValue":t[4]||(t[4]=a=>this.availableIpSearchString=a)},null,512),[[f,this.availableIpSearchString]])]),t[11]||(t[11]=e("hr",{class:"my-2"},null,-1)),e("div",ve,[t[10]||(t[10]=e("small",{class:"text-muted"},"Subnet",-1)),(i(!0),n(O,null,L(Object.keys(this.availableIp),a=>(i(),n("button",{onClick:b=>this.selectedSubnet=a,class:_([{"bg-primary-subtle":this.selectedSubnet===a},"btn btn-sm text-primary-emphasis rounded-3"])},K(a),11,fe))),256))]),t[12]||(t[12]=e("hr",{class:"mt-2 mb-0"},null,-1))]),e("li",null,[e("div",ke,[(i(!0),n(O,null,L(this.searchAvailableIps,a=>(i(),n("div",ye,[e("a",{class:"dropdown-item d-flex",role:"button",onClick:b=>this.addAllowedIp(a)},[e("span",we,[e("small",null,K(a),1)])],8,ge)]))),256)),this.searchAvailableIps.length===0?(i(),n("div",xe,[e("small",$e,[o(s,{t:"No available IP containing"}),$(' "'+K(this.availableIpSearchString)+'"',1)])])):k("",!0)])])])):k("",!0)])])],2)}const Ae=g(ee,[["render",Ie],["__scopeId","data-v-edc0073c"]]),Pe={name:"dnsInput",components:{LocaleText:u},props:{data:Object,saving:Boolean},data(){return{error:!1,dns:JSON.parse(JSON.stringify(this.data.DNS))}},setup(){const l=I(),t=A();return{store:l,dashboardStore:t}},methods:{checkDNS(){if(this.dns){let l=this.dns.split(",").map(t=>t.replaceAll(" ",""));for(let t in l)if(!this.store.regexCheckIP(l[t])){this.error||this.dashboardStore.newMessage("WGDashboard","DNS format is incorrect","danger"),this.error=!0,this.data.DNS="";return}this.error=!1,this.data.DNS=this.dns}}},watch:{dns(){this.checkDNS()}}},Se={for:"peer_DNS_textbox",class:"form-label"},Ke={class:"text-muted"},Ce=["disabled"];function Oe(l,t,d,c,p,v){const s=w("LocaleText");return i(),n("div",null,[e("label",Se,[e("small",Ke,[o(s,{t:"DNS"})])]),h(e("input",{type:"text",class:_(["form-control form-control-sm rounded-3",{"is-invalid":this.error}]),disabled:this.saving,"onUpdate:modelValue":t[0]||(t[0]=a=>this.dns=a),id:"peer_DNS_textbox"},null,10,Ce),[[f,this.dns]])])}const Le=g(Pe,[["render",Oe]]),De={name:"nameInput",components:{LocaleText:u},props:{bulk:Boolean,data:Object,saving:Boolean}},Ne={for:"peer_name_textbox",class:"form-label"},Ve={class:"text-muted"},Te=["disabled"];function Be(l,t,d,c,p,v){const s=w("LocaleText");return i(),n("div",{class:_({inactiveField:this.bulk})},[e("label",Ne,[e("small",Ve,[o(s,{t:"Name"})])]),h(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:this.saving||this.bulk,"onUpdate:modelValue":t[0]||(t[0]=a=>this.data.name=a),id:"peer_name_textbox",placeholder:""},null,8,Te),[[f,this.data.name]])],2)}const Ue=g(De,[["render",Be]]),Me={name:"privatePublicKeyInput",components:{LocaleText:u},props:{data:Object,saving:Boolean,bulk:Boolean},setup(){const l=A(),t=I();return{dashboardStore:l,wgStore:t}},data(){return{keypair:{publicKey:"",privateKey:"",presharedKey:""},editKey:!1,error:!1}},methods:{genKeyPair(){this.editKey=!1,this.keypair=window.wireguard.generateKeypair(),this.data.private_key=this.keypair.privateKey,this.data.public_key=this.keypair.publicKey},testKey(l){return/^[A-Za-z0-9+/]{43}=?=?$/.test(l)},checkMatching(){try{this.keypair.privateKey&&this.wgStore.checkWGKeyLength(this.keypair.privateKey)&&(this.keypair.publicKey=window.wireguard.generatePublicKey(this.keypair.privateKey),window.wireguard.generatePublicKey(this.keypair.privateKey)!==this.keypair.publicKey?(this.error=!0,this.dashboardStore.newMessage("WGDashboard","Private key does not match with the public key","danger")):(this.data.private_key=this.keypair.privateKey,this.data.public_key=this.keypair.publicKey))}catch{this.error=!0,this.data.private_key="",this.data.public_key=""}}},mounted(){this.genKeyPair()},watch:{keypair:{deep:!0,handler(){this.error=!1,this.checkMatching()}}}},je={for:"peer_private_key_textbox",class:"form-label"},Ge={class:"text-muted"},Ee={class:"input-group"},Fe=["disabled"],Re=["disabled"],We={class:"d-flex flex-column flex-md-row mb-2"},qe={for:"public_key",class:"form-label mb-0"},Je={class:"text-muted"},ze={class:"form-check form-switch ms-md-auto"},He=["disabled"],Qe={class:"form-check-label",for:"enablePublicKeyEdit"},Ye=["disabled"];function Ze(l,t,d,c,p,v){const s=w("LocaleText");return i(),n("div",{class:_(["d-flex gap-2 flex-column",{inactiveField:this.bulk}])},[e("div",null,[e("label",je,[e("small",Ge,[o(s,{t:"Private Key"}),t[6]||(t[6]=$()),e("code",null,[o(s,{t:"(Required for QR Code and Download)"})])])]),e("div",Ee,[h(e("input",{type:"text",class:_(["form-control form-control-sm rounded-start-3",{"is-invalid":this.error}]),"onUpdate:modelValue":t[0]||(t[0]=a=>this.keypair.privateKey=a),disabled:!this.editKey||this.bulk,onBlur:t[1]||(t[1]=a=>this.checkMatching()),id:"peer_private_key_textbox"},null,42,Fe),[[f,this.keypair.privateKey]]),e("button",{class:"btn btn-outline-info btn-sm rounded-end-3",onClick:t[2]||(t[2]=a=>this.genKeyPair()),disabled:this.bulk,type:"button",id:"button-addon2"},t[7]||(t[7]=[e("i",{class:"bi bi-arrow-repeat"},null,-1)]),8,Re)])]),e("div",null,[e("div",We,[e("label",qe,[e("small",Je,[o(s,{t:"Public Key"}),t[8]||(t[8]=$()),e("code",null,[o(s,{t:"(Required)"})])])]),e("div",ze,[h(e("input",{class:"form-check-input",type:"checkbox",role:"switch",disabled:this.bulk,id:"enablePublicKeyEdit","onUpdate:modelValue":t[3]||(t[3]=a=>this.editKey=a)},null,8,He),[[P,this.editKey]]),e("label",Qe,[e("small",null,[o(s,{t:"Use your own Private and Public Key"})])])])]),h(e("input",{class:_(["form-control-sm form-control rounded-3",{"is-invalid":this.error}]),"onUpdate:modelValue":t[4]||(t[4]=a=>this.keypair.publicKey=a),onBlur:t[5]||(t[5]=a=>this.checkMatching()),disabled:!this.editKey||this.bulk,type:"text",id:"public_key"},null,42,Ye),[[f,this.keypair.publicKey]])])],2)}const Xe=g(Me,[["render",Ze]]),et={name:"bulkAdd",components:{LocaleText:u},props:{saving:Boolean,data:Object,availableIp:void 0},data(){return{numberOfAvailableIPs:null}},computed:{bulkAddGetLocale(){return T("How many peers you want to add?")},getNumberOfAvailableIPs(){return this.numberOfAvailableIPs?Object.values(this.numberOfAvailableIPs).reduce((l,t)=>l+t):"..."}},watch:{"data.bulkAdd":{immediate:!0,handler(l){l&&B("/api/getNumberOfAvailableIPs/"+this.$route.params.id,{},t=>{t.status&&(this.numberOfAvailableIPs=t.data)})}}}},tt={class:"form-check form-switch"},st=["disabled"],at={class:"form-check-label me-2",for:"bulk_add"},lt={class:"text-muted d-block"},ot={key:0,class:"form-group"},it=["max","placeholder"],nt={class:"text-muted"};function dt(l,t,d,c,p,v){const s=w("LocaleText");return i(),n("div",null,[e("div",tt,[h(e("input",{class:"form-check-input",type:"checkbox",role:"switch",disabled:!this.availableIp,id:"bulk_add","onUpdate:modelValue":t[0]||(t[0]=a=>this.data.bulkAdd=a)},null,8,st),[[P,this.data.bulkAdd]]),e("label",at,[e("small",null,[e("strong",null,[o(s,{t:"Bulk Add"})])])])]),e("p",{class:_({"mb-0":!this.data.bulkAdd})},[e("small",lt,[o(s,{t:"By adding peers by bulk, each peer's name will be auto generated, and Allowed IP will be assign to the next available IP."})])],2),this.data.bulkAdd?(i(),n("div",ot,[h(e("input",{class:"form-control form-control-sm rounded-3 mb-1",type:"number",min:"1",id:"bulk_add_count",max:this.availableIp.length,"onUpdate:modelValue":t[1]||(t[1]=a=>this.data.bulkAddAmount=a),placeholder:this.bulkAddGetLocale},null,8,it),[[f,this.data.bulkAddAmount]]),e("small",nt,[o(s,{t:"You can add up to "+v.getNumberOfAvailableIPs+" peers"},null,8,["t"])])])):k("",!0)])}const rt=g(et,[["render",dt]]),ut={name:"presharedKeyInput",components:{LocaleText:u},props:{data:Object,saving:Boolean},data(){return{enable:!1}},watch:{enable(){this.enable?this.data.preshared_key=window.wireguard.generateKeypair().presharedKey:this.data.preshared_key=""}}},ct={class:"d-flex align-items-start"},pt={for:"peer_preshared_key_textbox",class:"form-label"},bt={class:"text-muted"},ht={class:"form-check form-switch ms-auto"},mt=["disabled"];function _t(l,t,d,c,p,v){const s=w("LocaleText");return i(),n("div",null,[e("div",ct,[e("label",pt,[e("small",bt,[o(s,{t:"Pre-Shared Key"})])]),e("div",ht,[h(e("input",{class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":t[0]||(t[0]=a=>this.enable=a),id:"peer_preshared_key_switch"},null,512),[[P,this.enable]])])]),h(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:this.saving||!this.enable,"onUpdate:modelValue":t[1]||(t[1]=a=>this.data.preshared_key=a),id:"peer_preshared_key_textbox"},null,8,mt),[[f,this.data.preshared_key]])])}const vt=g(ut,[["render",_t]]),ft={name:"mtuInput",components:{LocaleText:u},props:{data:Object,saving:Boolean}},kt={for:"peer_mtu",class:"form-label"},yt={class:"text-muted"},gt=["disabled"];function wt(l,t,d,c,p,v){const s=w("LocaleText");return i(),n("div",null,[e("label",kt,[e("small",yt,[o(s,{t:"MTU"})])]),h(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[0]||(t[0]=a=>this.data.mtu=a),min:"0",id:"peer_mtu"},null,8,gt),[[f,this.data.mtu]])])}const xt=g(ft,[["render",wt]]),$t={name:"persistentKeepAliveInput",components:{LocaleText:u},props:{data:Object,saving:Boolean}},It={for:"peer_keep_alive",class:"form-label"},At={class:"text-muted"},Pt=["disabled"];function St(l,t,d,c,p,v){const s=w("LocaleText");return i(),n("div",null,[e("label",It,[e("small",At,[o(s,{t:"Persistent Keepalive"})])]),h(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[0]||(t[0]=a=>this.data.keepalive=a),id:"peer_keep_alive"},null,8,Pt),[[f,this.data.keepalive]])])}const Kt=g($t,[["render",St]]),Ct={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll",ref:"editConfigurationContainer"},Ot={class:"container d-flex h-100 w-100"},Lt={class:"m-auto modal-dialog-centered dashboardModal",style:{width:"1000px"}},Dt={class:"card rounded-3 shadow flex-grow-1"},Nt={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4"},Vt={class:"mb-0"},Tt={class:"card-body px-4 pb-4"},Bt={class:"d-flex flex-column gap-2"},Ut={class:"row gy-3"},Mt={key:0,class:"col-sm"},jt={class:"col-sm"},Gt={class:"col-sm"},Et={key:1,class:"col-12"},Ft={class:"form-check form-switch"},Rt={class:"form-check-label",for:"bullAdd_PresharedKey_Switch"},Wt={class:"fw-bold"},qt={key:0},Jt={class:"form-label d-block"},zt={class:"text-muted"},Ht={class:"btn-group",role:"group"},Qt={class:"btn btn-outline-primary btn-sm",for:"advanced_security_on"},Yt={class:"btn btn-outline-primary btn-sm",for:"advanced_security_off"},Zt={class:"d-flex mt-2"},Xt=["disabled"],es={key:0,class:"bi bi-plus-circle-fill me-2"},as={__name:"peerAddModal",emits:["close"],async setup(l,{emit:t}){let d,c;const p=A(),v=I(),s=C({bulkAdd:!1,bulkAddAmount:0,name:"",allowed_ips:[],private_key:"",public_key:"",DNS:p.Configuration.Peers.peer_global_dns,endpoint_allowed_ip:p.Configuration.Peers.peer_endpoint_allowed_ip,keepalive:parseInt(p.Configuration.Peers.peer_keep_alive),mtu:parseInt(p.Configuration.Peers.peer_mtu),preshared_key:"",preshared_key_bulkAdd:!1,advanced_security:"off",allowed_ips_validation:!0}),a=C([]),b=C(!1),S=R();[d,c]=W(()=>B("/api/getAvailableIPs/"+S.params.id,{},m=>{m.status&&(a.value=m.data)})),await d,c();const D=t,U=N(()=>v.Configurations.find(m=>m.Name===S.params.id).Protocol),M=N(()=>{let m=!0;return s.value.bulkAdd?(s.value.bulkAddAmount.length===0||s.value.bulkAddAmount>a.value.length)&&(m=!1):["allowed_ips","private_key","public_key","endpoint_allowed_ip","keepalive","mtu"].forEach(y=>{s.value[y].length===0&&(m=!1)}),m}),j=()=>{b.value=!0,J("/api/addPeers/"+S.params.id,s.value,m=>{m.status?(p.newMessage("Server","Peer created successfully","success"),D("addedPeers")):p.newMessage("Server",m.message,"danger"),b.value=!1})};return q(()=>s.value.bulkAddAmount,()=>{s.value.bulkAddAmount>a.value.length&&(s.value.bulkAddAmount=a.value.length)}),(m,r)=>(i(),n("div",Ct,[e("div",Ot,[e("div",Lt,[e("div",Dt,[e("div",Nt,[e("h4",Vt,[o(u,{t:"Add Peers"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:r[0]||(r[0]=y=>D("close"))})]),e("div",Tt,[e("div",Bt,[o(rt,{saving:b.value,data:s.value,availableIp:a.value},null,8,["saving","data","availableIp"]),r[5]||(r[5]=e("hr",{class:"mb-0 mt-2"},null,-1)),s.value.bulkAdd?k("",!0):(i(),x(Ue,{key:0,saving:b.value,data:s.value},null,8,["saving","data"])),s.value.bulkAdd?k("",!0):(i(),x(Xe,{key:1,saving:b.value,data:s.value},null,8,["saving","data"])),s.value.bulkAdd?k("",!0):(i(),x(Ae,{key:2,availableIp:a.value,saving:b.value,data:s.value},null,8,["availableIp","saving","data"])),o(X,{saving:b.value,data:s.value},null,8,["saving","data"]),o(Le,{saving:b.value,data:s.value},null,8,["saving","data"])]),r[7]||(r[7]=e("hr",null,null,-1)),e("div",Ut,[s.value.bulkAdd?k("",!0):(i(),n("div",Mt,[o(vt,{saving:b.value,data:s.value,bulk:s.value.bulkAdd},null,8,["saving","data","bulk"])])),e("div",jt,[o(xt,{saving:b.value,data:s.value},null,8,["saving","data"])]),e("div",Gt,[o(Kt,{saving:b.value,data:s.value},null,8,["saving","data"])]),s.value.bulkAdd?(i(),n("div",Et,[e("div",Ft,[h(e("input",{class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":r[1]||(r[1]=y=>s.value.preshared_key_bulkAdd=y),id:"bullAdd_PresharedKey_Switch",checked:""},null,512),[[P,s.value.preshared_key_bulkAdd]]),e("label",Rt,[e("small",Wt,[o(u,{t:"Pre-Shared Key"}),r[6]||(r[6]=$()),s.value.preshared_key_bulkAdd?(i(),x(u,{key:0,t:"Enabled"})):(i(),x(u,{key:1,t:"Disabled"}))])])])])):k("",!0)]),r[8]||(r[8]=e("hr",null,null,-1)),U.value==="awg"?(i(),n("div",qt,[e("h5",null,[o(u,{t:"AmneziaWG Peer Setting"})]),e("div",null,[e("label",Jt,[e("small",zt,[o(u,{t:"Advanced Security"})])]),e("div",Ht,[h(e("input",{type:"radio",class:"btn-check","onUpdate:modelValue":r[2]||(r[2]=y=>s.value.advanced_security=y),value:"on",name:"advanced_security_radio",id:"advanced_security_on",autocomplete:"off"},null,512),[[V,s.value.advanced_security]]),e("label",Qt,[o(u,{t:"On"})]),h(e("input",{type:"radio","onUpdate:modelValue":r[3]||(r[3]=y=>s.value.advanced_security=y),value:"off",class:"btn-check",name:"advanced_security_radio",id:"advanced_security_off",autocomplete:"off"},null,512),[[V,s.value.advanced_security]]),e("label",Yt,[o(u,{t:"Off"})])])])])):k("",!0),e("div",Zt,[e("button",{class:"ms-auto btn btn-dark btn-brand rounded-3 px-3 py-2 shadow",disabled:!M.value||b.value,onClick:r[4]||(r[4]=y=>j())},[b.value?k("",!0):(i(),n("i",es)),b.value?(i(),x(u,{key:1,t:"Adding..."})):(i(),x(u,{key:2,t:"Add"}))],8,Xt)])])])])])],512))}};export{as as default};
