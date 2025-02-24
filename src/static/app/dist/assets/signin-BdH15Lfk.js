import{_ as g,G as m,c as n,a as t,m as u,x as h,n as w,t as k,f as i,D as S,b as l,h as f,d as _,F as C,i as T,j as $,a0 as E,v as M,e as V,w as D,k as A,y as R,g as x}from"./index-ovlZ7z6B.js";import{M as P}from"./message-Bkq5CL_x.js";import{d as y}from"./dayjs.min-Bi0GPFvs.js";import{L}from"./localeText-BUvaTJPm.js";const U={name:"RemoteServer",props:{server:Object},data(){return{active:!1,startTime:void 0,endTime:void 0,errorMsg:"",refreshing:!1}},methods:{async handshake(){this.active=!1,this.server.host&&this.server.apiKey&&(this.refreshing=!0,this.startTime=void 0,this.endTime=void 0,this.startTime=y(),await fetch(`${this.server.host}/api/handshake`,{headers:{"content-type":"application/json","wg-dashboard-apikey":this.server.apiKey},method:"GET",signal:AbortSignal.timeout(5e3)}).then(s=>{if(s.status===200)return s.json();throw new Error(s.statusText)}).then(()=>{this.endTime=y(),this.active=!0}).catch(s=>{this.active=!1,this.errorMsg=s}),this.refreshing=!1)},async connect(){await fetch(`${this.server.host}/api/authenticate`,{headers:{"content-type":"application/json","wg-dashboard-apikey":this.server.apiKey},body:JSON.stringify({host:window.location.hostname}),method:"POST",signal:AbortSignal.timeout(5e3)}).then(s=>s.json()).then(s=>{this.$emit("setActiveServer"),this.$router.push("/")})}},mounted(){this.handshake()},computed:{getHandshakeTime(){return this.startTime&&this.endTime?`${y().subtract(this.startTime).millisecond()}ms`:this.refreshing?m("Pinging..."):this.errorMsg?this.errorMsg:"N/A"}}},q={class:"card rounded-3"},B={class:"card-body"},j={class:"d-flex gap-3 w-100 remoteServerContainer"},O={class:"d-flex gap-3 align-items-center flex-grow-1"},G={class:"d-flex gap-3 align-items-center flex-grow-1"},N={class:"d-flex gap-2 button-group"},K={class:"card-footer gap-2 d-flex align-items-center"},W={key:0,class:"spin ms-auto text-primary-emphasis"};function z(s,e,d,c,a,p){return i(),n("div",q,[t("div",B,[t("div",j,[t("div",O,[e[7]||(e[7]=t("i",{class:"bi bi-server"},null,-1)),u(t("input",{class:"form-control form-control-sm",onBlur:e[0]||(e[0]=o=>this.handshake()),"onUpdate:modelValue":e[1]||(e[1]=o=>this.server.host=o),type:"url"},null,544),[[h,this.server.host]])]),t("div",G,[e[8]||(e[8]=t("i",{class:"bi bi-key-fill"},null,-1)),u(t("input",{class:"form-control form-control-sm",onBlur:e[2]||(e[2]=o=>this.handshake()),"onUpdate:modelValue":e[3]||(e[3]=o=>this.server.apiKey=o),type:"text"},null,544),[[h,this.server.apiKey]])]),t("div",N,[t("button",{onClick:e[4]||(e[4]=o=>this.$emit("delete")),class:"ms-auto btn btn-sm bg-danger-subtle text-danger-emphasis border-1 border-danger-subtle"},e[9]||(e[9]=[t("i",{class:"bi bi-trash"},null,-1)])),t("button",{onClick:e[5]||(e[5]=o=>this.connect()),class:w([{disabled:!this.active},"ms-auto btn btn-sm bg-success-subtle text-success-emphasis border-1 border-success-subtle"])},e[10]||(e[10]=[t("i",{class:"bi bi-arrow-right-circle"},null,-1)]),2)])])]),t("div",K,[t("span",{class:w(["dot ms-0 me-2",[this.active?"active":"inactive"]])},null,2),t("small",null,k(this.getHandshakeTime),1),this.refreshing?(i(),n("div",W,e[11]||(e[11]=[t("i",{class:"bi bi-arrow-clockwise"},null,-1)]))):(i(),n("a",{key:1,role:"button",onClick:e[6]||(e[6]=o=>this.handshake()),class:"text-primary-emphasis text-decoration-none ms-auto disabled"},e[12]||(e[12]=[t("i",{class:"bi bi-arrow-clockwise me"},null,-1)])))])])}const F=g(U,[["render",z],["__scopeId","data-v-ed7817c7"]]),H={name:"RemoteServerList",setup(){return{store:S()}},components:{LocaleText:L,RemoteServer:F}},J={class:"w-100 mt-3"},Z={class:"d-flex align-items-center mb-3"},Q={class:"mb-0"},X={class:"w-100 d-flex gap-3 flex-column p-3 border border-1 border-secondary-subtle rounded-3",style:{height:"400px","overflow-y":"scroll"}},Y={key:0,class:"text-muted m-auto"};function ee(s,e,d,c,a,p){const o=f("LocaleText"),v=f("RemoteServer");return i(),n("div",J,[t("div",Z,[t("h5",Q,[l(o,{t:"Server List"})]),t("button",{onClick:e[0]||(e[0]=b=>this.store.addCrossServerConfiguration()),class:"btn bg-primary-subtle text-primary-emphasis border-1 border-primary-subtle shadow-sm ms-auto"},[e[1]||(e[1]=t("i",{class:"bi bi-plus-circle-fill me-2"},null,-1)),l(o,{t:"Server"})])]),t("div",X,[(i(!0),n(C,null,T(this.store.CrossServerConfiguration.ServerList,(b,r)=>(i(),$(v,{onSetActiveServer:I=>this.store.setActiveCrossServer(r),onDelete:I=>this.store.deleteCrossServerConfiguration(r),key:r,server:b},null,8,["onSetActiveServer","onDelete","server"]))),128)),Object.keys(this.store.CrossServerConfiguration.ServerList).length===0?(i(),n("h6",Y,[l(o,{t:"Click"}),e[2]||(e[2]=t("i",{class:"bi bi-plus-circle-fill mx-1"},null,-1)),l(o,{t:"to add your server"})])):_("",!0)])])}const te=g(H,[["render",ee]]),se={name:"signInInput",methods:{GetLocale:m},props:{id:"",data:"",type:"",placeholder:""},computed:{getLocaleText(){return m(this.placeholder)}}},oe=["type","id","name","placeholder"];function ie(s,e,d,c,a,p){return u((i(),n("input",{type:d.type,"onUpdate:modelValue":e[0]||(e[0]=o=>this.data[this.id]=o),class:"form-control rounded-3",id:this.id,name:this.id,autocomplete:"on",placeholder:this.getLocaleText,required:""},null,8,oe)),[[E,this.data[this.id]]])}const re=g(se,[["render",ie]]),ne={name:"signInTOTP",methods:{GetLocale:m},props:{data:""},computed:{getLocaleText(){return m("OTP from your authenticator")}}},ae=["placeholder"];function le(s,e,d,c,a,p){return u((i(),n("input",{class:"form-control totp",required:"",id:"totp",maxlength:"6",type:"text",inputmode:"numeric",autocomplete:"one-time-code",placeholder:this.getLocaleText,"onUpdate:modelValue":e[0]||(e[0]=o=>this.data.totp=o)},null,8,ae)),[[h,this.data.totp]])}const de=g(ne,[["render",le]]),ue={name:"signin",components:{SignInTOTP:de,SignInInput:re,LocaleText:L,RemoteServerList:te,Message:P},async setup(){const s=S();let e="dark",d=!1,c;return s.IsElectronApp||await Promise.all([x("/api/getDashboardTheme",{},a=>{e=a.data}),x("/api/isTotpEnabled",{},a=>{d=a.data}),x("/api/getDashboardVersion",{},a=>{c=a.data})]),s.removeActiveCrossServer(),{store:s,theme:e,totpEnabled:d,version:c}},data(){return{data:{username:"",password:"",totp:""},loginError:!1,loginErrorMessage:"",loading:!1}},computed:{getMessages(){return this.store.Messages.filter(s=>s.show)},applyLocale(s){return m(s)},formValid(){return this.data.username&&this.data.password&&(this.totpEnabled&&this.data.totp||!this.totpEnabled)}},methods:{GetLocale:m,async auth(){this.formValid?(this.loading=!0,await R("/api/authenticate",this.data,s=>{s.status?(this.loginError=!1,this.$refs.signInBtn.classList.add("signedIn"),s.message?this.$router.push("/welcome"):this.store.Redirect!==void 0?this.$router.push(this.store.Redirect):this.$router.push("/")):(this.store.newMessage("Server",s.message,"danger"),document.querySelectorAll("input[required]").forEach(e=>{e.classList.remove("is-valid"),e.classList.add("is-invalid")}),this.loading=!1)})):document.querySelectorAll("input[required]").forEach(s=>{s.value.length===0?(s.classList.remove("is-valid"),s.classList.add("is-invalid")):(s.classList.remove("is-invalid"),s.classList.add("is-valid"))})}}},ce=["data-bs-theme"],me={class:"login-box m-auto"},he={class:"m-auto signInContainer",style:{width:"700px"}},pe={class:"mb-0 text-body"},fe={class:"form-floating mb-2"},ge=["disabled"],be={for:"floatingInput",class:"d-flex"},ve={class:"form-floating mb-2"},xe=["disabled"],ye={for:"floatingInput",class:"d-flex"},_e={key:0,class:"form-floating mb-2"},$e=["disabled"],we={for:"floatingInput",class:"d-flex"},ke=["disabled"],Se={key:0,class:"d-flex w-100"},Ce={key:1,class:"d-flex w-100 align-items-center"},Te={key:2,class:"d-flex mt-3"},Le={class:"form-check form-switch ms-auto"},Ie=["disabled"],Ee={class:"form-check-label",for:"flexSwitchCheckChecked"},Me={class:"text-muted pb-3 d-block w-100 text-center mt-3"},Ve={class:"messageCentre text-body position-absolute d-flex"};function De(s,e,d,c,a,p){const o=f("LocaleText"),v=f("RemoteServerList"),b=f("Message");return i(),n("div",{class:"container-fluid login-container-fluid d-flex main flex-column py-4 text-body h-100",style:{"overflow-y":"scroll"},"data-bs-theme":this.theme},[t("div",me,[t("div",he,[t("h4",pe,[l(o,{t:"Welcome to"})]),e[10]||(e[10]=t("span",{class:"dashboardLogo display-3"},[t("strong",null,"WGDashboard")],-1)),this.store.CrossServerConfiguration.Enable?(i(),$(v,{key:1})):(i(),n("form",{key:0,onSubmit:e[3]||(e[3]=r=>{r.preventDefault(),this.auth()}),class:"mt-3"},[t("div",fe,[u(t("input",{type:"text",required:"",disabled:a.loading,"onUpdate:modelValue":e[0]||(e[0]=r=>this.data.username=r),name:"username",autocomplete:"username",autofocus:"",class:"form-control rounded-3",id:"username",placeholder:"Username"},null,8,ge),[[h,this.data.username]]),t("label",be,[e[5]||(e[5]=t("i",{class:"bi bi-person-circle me-2"},null,-1)),l(o,{t:"Username"})])]),t("div",ve,[u(t("input",{type:"password",required:"",disabled:a.loading,autocomplete:"current-password","onUpdate:modelValue":e[1]||(e[1]=r=>this.data.password=r),class:"form-control rounded-3",id:"password",placeholder:"Password"},null,8,xe),[[h,this.data.password]]),t("label",ye,[e[6]||(e[6]=t("i",{class:"bi bi-key-fill me-2"},null,-1)),l(o,{t:"Password"})])]),this.totpEnabled?(i(),n("div",_e,[u(t("input",{type:"text",id:"totp",required:"",disabled:a.loading,placeholder:"totp","onUpdate:modelValue":e[2]||(e[2]=r=>this.data.totp=r),class:"form-control rounded-3",maxlength:"6",inputmode:"numeric",autocomplete:"one-time-code"},null,8,$e),[[h,this.data.totp]]),t("label",we,[e[7]||(e[7]=t("i",{class:"bi bi-lock-fill me-2"},null,-1)),l(o,{t:"OTP from your authenticator"})])])):_("",!0),t("button",{class:"btn btn-lg btn-dark ms-auto mt-5 w-100 d-flex btn-brand signInBtn rounded-3",disabled:this.loading||!this.formValid,ref:"signInBtn"},[this.loading?(i(),n("span",Ce,[l(o,{t:"Signing In..."}),e[9]||(e[9]=t("span",{class:"spinner-border ms-auto spinner-border-sm",role:"status"},null,-1))])):(i(),n("span",Se,[l(o,{t:"Sign In"}),e[8]||(e[8]=t("i",{class:"ms-auto bi bi-chevron-right"},null,-1))]))],8,ke)],32)),this.store.IsElectronApp?_("",!0):(i(),n("div",Te,[t("div",Le,[u(t("input",{"onUpdate:modelValue":e[4]||(e[4]=r=>this.store.CrossServerConfiguration.Enable=r),disabled:a.loading,class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked"},null,8,Ie),[[M,this.store.CrossServerConfiguration.Enable]]),t("label",Ee,[l(o,{t:"Access Remote Server"})])])]))])]),t("small",Me,[V(" WGDashboard "+k(this.version)+" | Developed with ❤️ by ",1),e[11]||(e[11]=t("a",{href:"https://github.com/donaldzou",target:"_blank"},[t("strong",null,"Donald Zou")],-1))]),t("div",Ve,[l(A,{name:"message",tag:"div",class:"position-relative flex-sm-grow-0 flex-grow-1 d-flex align-items-end ms-sm-auto flex-column gap-2"},{default:D(()=>[(i(!0),n(C,null,T(p.getMessages.slice().reverse(),r=>(i(),$(b,{message:r,key:r.id},null,8,["message"]))),128))]),_:1})])],8,ce)}const qe=g(ue,[["render",De],["__scopeId","data-v-80e20da4"]]);export{qe as default};
