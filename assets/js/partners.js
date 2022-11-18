(()=>{"use strict";const l={scroll(){document.body.style.overflow=""},unscroll(){document.body.style.overflow="hidden"}},o=function(o){(function(l){g.name.textContent=l.name,g.subtitle.textContent=l.subtitle,g.text.textContent=l.text,document.body.classList.contains("light-mode")?g.img.src=l.imgColorWhite:g.img.src=l.imgColor,""==l.subtitle?g.marker.style.display="none":g.marker.style.display=""})(o),g.popupLogo.classList.add("popup-logo_visible"),l.unscroll()},g={popupLogo:document.querySelector(".popup-logo"),img:document.querySelector(".popup-logo__img"),name:document.querySelector(".popup-logo__name"),subtitle:document.querySelector(".popup-logo__tag-text"),text:document.querySelector(".popup-logo__text"),marker:document.querySelector(".popup-logo__tag-marker"),closeBtn:document.querySelector(".popup-logo__close")};function e(){g.popupLogo.classList.remove("popup-logo_visible"),l.scroll()}function s(l){const o=document.createElement("button");return o.classList.add(l),o}function a(l,...o){const g=document.createElement("img");return g.src=l,g.classList.add(...o),g}function t(l,o){const g=document.createElement("p");return g.textContent=l,o.forEach((l=>{g.classList.add(l)})),g}function i(...l){const o=document.createElement("div");return o.classList.add(...l),o}g.closeBtn.addEventListener("click",e),g.popupLogo.addEventListener("click",(l=>{l.target.classList.contains("popup-logo")&&e()}));const m=document.querySelector(".big-logo__content-logo"),r=document.querySelector(".small-logo__content-logo");class n{constructor(l){this._popup=l,this.openPopup=this.openPopup.bind(this),this.closePopup=this.closePopup.bind(this),this._setEscHandler=this._setEscHandler.bind(this),this.setEventListeners=this.setEventListeners.bind(this)}openPopup(){this._popup.classList.add("popup-form_visible"),document.body.style.overflow="hidden",l.unscroll(),document.addEventListener("keydown",this._setEscHandler)}closePopup(){this._popup.classList.remove("popup-form_visible"),l.scroll(),document.removeEventListener("keydown",this._setEscHandler)}_setEscHandler(l){"Escape"===l.key&&this.closePopup()}setEventListeners(){this._popup.addEventListener("mousedown",(l=>{(l.target.classList.contains("popup-form_visible")||l.target.closest(".popup-form__close"))&&this.closePopup()}))}}class p extends n{constructor(l,o){super(l),this._form=l.querySelector(".form"),this._onSubmit=o,this._inputList=this._form.querySelectorAll(".form__item"),this._popupButton=this._form.querySelector(".form__btn"),this._inputValues={}}closePopup(){this._form.reset(),super.closePopup()}_getInputValues(){return this._inputList.forEach((l=>{this._inputValues[l.name]=l.value})),this._inputValues}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(l=>{l.preventDefault()}))}}const c={WRAPPER:document.querySelector(".wrapper"),CANVAS:document.querySelector(".canvas")},h=-180,b=180,u=-90,v=90,k="#FBFBFB",d="#A42E2C",C="#670E0E",w={rotation:0,time:0,ctx:void 0,dots:[],background:k,KKK:0,WIDTH:0,HEIGHT:0,colorFill:d,colorStroke:C};try{y(),requestAnimationFrame(y),function(){for(let l=0;l<500;l++)w.dots.push(f())}(),function(){const l=c.CANVAS.getContext("2d");l.fillRect(0,0,c.CANVAS.width,c.CANVAS.height),w.ctx=l}(),B(),B()}catch(l){}function W(l){l?(w.background=k,w.colorFill="#511112",w.colorStroke="#340D0F"):(w.background="#202020",w.colorFill=d,w.colorStroke=C)}function x(l){const o=20/l.z,g=w.WIDTH/2,e=w.HEIGHT/2,s=w.KKK*o*l.x+g,a=-w.KKK*o*l.y+e;l.xDisplay=s,l.yDisplay=a,w.ctx.beginPath(),w.ctx.ellipse(s,a,2,2,0,0,2*Math.PI),w.ctx.fill()}function _(l){l.links.forEach((o=>{w.ctx.beginPath(),w.ctx.moveTo(l.xDisplay,l.yDisplay),w.ctx.lineTo(o.xDisplay,o.yDisplay),w.ctx.stroke()}))}function B(){y(),w.time++,w.dots.forEach((l=>{l.a=l.a+l.da,l.b=l.b+l.db,function(l){l.x=0+1*Math.sin(-w.rotation-w.time/1e3+l.a)*Math.cos(l.b),l.y=0+1*Math.sin(l.b),l.z=20-1*Math.cos(l.b)*Math.cos(-w.rotation-w.time/1e3+l.a)}(l)})),w.dots.sort(((l,o)=>o.z-l.z)),w.dots.forEach((l=>{l.links=[],w.dots.forEach((o=>{var g,e;g=l,e=o,Math.sqrt(Math.pow(g.x-e.x,2)+Math.pow(g.y-e.y,2)+Math.pow(g.z-e.z,2))<.15&&l.links.push(o)}))})),w.ctx.fillStyle=w.background,w.ctx.fillRect(0,0,w.WIDTH,w.HEIGHT),w.ctx.fillStyle=w.colorFill,w.ctx.strokeStyle=w.colorStroke,w.dots.forEach(_),w.dots.forEach(x),requestAnimationFrame(B)}function f(...l){return l.length>0?{a:l[0],b:l[1],da:0,db:0,xDisplay:0,yDisplay:0,links:[]}:{a:(b-h)*Math.random()+h,b:(v-u)*Math.random()+u,da:.003*Math.random()-.0015,db:.003*Math.random()-.0015,links:[]}}function y(){const l=c.CANVAS.clientWidth,o=c.CANVAS.clientHeight,g=Math.min(l,o);w.KKK=g/3,w.WIDTH=l,w.HEIGHT=o,c.CANVAS.width=l,c.CANVAS.height=o}const E=document.querySelectorAll(".js_toggle_input");function S(){document.body.classList.add("light-mode"),W(!0),console.log("светлая тема")}function L(){document.body.classList.remove("light-mode"),W(!1),console.log("тёмная тема")}[{imgWhite:"/images/partners/big-logo/white/logo1.png",imgColor:"/images/partners/big-logo/color/logo1.png",imgBlack:"/images/partners/big-logo/black/logo1.png",imgColorWhite:"/images/partners/big-logo/color-white/logo1.png",subtitle:"",name:"Код безопасности",text:"Российский разработчик программных и аппаратных средств, обеспечивающих полную защиту ИТ-инфраструктуры: конечных станций и серверов, периметра сети, современных виртуальных инфраструктур и мобильных устройств."},{imgWhite:"/images/partners/big-logo/white/logo2.svg",imgColor:"/images/partners/big-logo/color/logo2.svg",imgBlack:"/images/partners/big-logo/black/logo2.svg",imgColorWhite:"/images/partners/big-logo/color-white/logo2.svg",subtitle:"Авторизованный партнер",name:"Positive technologies",text:"Российский разработчик решений для информационной безопасности."},{imgWhite:"/images/partners/big-logo/white/logo3.png",imgColor:"/images/partners/big-logo/color/logo3.png",imgBlack:"/images/partners/big-logo/black/logo3.png",imgColorWhite:"/images/partners/big-logo/color-white/logo3.png",subtitle:"Registered Partner",name:"Лаборатория Касперского",text:"Российский разработчик и производитель систем защиты от компьютерных вирусов, спама, хакерских атак и прочих киберугроз."},{imgWhite:"/images/partners/big-logo/white/logo4.png",imgColor:"/images/partners/big-logo/color/logo4.png",imgBlack:"/images/partners/big-logo/black/logo4.png",imgColorWhite:"/images/partners/big-logo/color-white/logo4.png",subtitle:"Partner",name:"Check Point",text:"Израильский разработчик решений по кибербезопасности."},{imgWhite:"/images/partners/big-logo/white/logo5.svg",imgColor:"/images/partners/big-logo/color/logo5.svg",imgBlack:"/images/partners/big-logo/black/logo5.svg",imgColorWhite:"/images/partners/big-logo/color-white/logo5.svg",subtitle:"Bronze",name:"UserGate",text:"Российский разработчик программного обеспечения и микроэлектроники в сфере информационной безопасности."},{imgWhite:"/images/partners/big-logo/white/logo6.png",imgColor:"/images/partners/big-logo/color/logo6.png",imgBlack:"/images/partners/big-logo/black/logo6.png",imgColorWhite:"/images/partners/big-logo/color-white/logo6.png",subtitle:"",name:"Ruseim",text:"Российский производитель, занимающийся созданием решений в области мониторинга и управления событиями информационной безопасности на основе анализа данных в реальном времени."},{imgWhite:"/images/partners/big-logo/white/logo7.svg",imgColor:"/images/partners/big-logo/color/logo7.svg",imgBlack:"/images/partners/big-logo/black/logo7.svg",imgColorWhite:"/images/partners/big-logo/color-white/logo7.svg",subtitle:"",name:"Aquarius",text:"Российский производитель компьютерной техники (серверы, системы хранения данных, клиентские устройства, отраслевые и специализированные IT‑решения и программно-аппаратные комплексы."},{imgWhite:"/images/partners/big-logo/white/logo8.png",imgColor:"/images/partners/big-logo/color/logo8.png",imgBlack:"/images/partners/big-logo/black/logo8.png",imgColorWhite:"/images/partners/big-logo/color-white/logo8.png",subtitle:"Бизнес-партнер",name:"Utinet",text:"Российский роизводитель серверов, систем хранения данных и программного обеспечения."},{imgWhite:"/images/partners/big-logo/white/logo9.png",imgColor:"/images/partners/big-logo/color/logo9.png",imgBlack:"/images/partners/big-logo/black/logo9.png",imgColorWhite:"/images/partners/big-logo/color-white/logo9.png",subtitle:"Авторизованный партнер",name:"Аэродиск",text:"Российский производитель инновационных решений в области хранения данных и виртуализации (системы хранения данных, гиперконвергентная система и программное обеспечение)."},{imgWhite:"/images/partners/big-logo/white/logo10.png",imgColor:"/images/partners/big-logo/color/logo10.png",imgBlack:"/images/partners/big-logo/black/logo10.png",imgColorWhite:"/images/partners/big-logo/color-white/logo10.png",subtitle:"Авторизованный партнер",name:"Звезда",text:"Российский разработчик и производитель вычислительного радиоэлектронного оборудования и ПО (вычислительные серверы, программно-определяемые системы хранения данных, автоматизированные рабочие места и тонкие клиенты). телекоммуникационное оборудование)"},{imgWhite:"/images/partners/big-logo/white/logo11.svg",imgColor:"/images/partners/big-logo/color/logo11.svg",imgBlack:"/images/partners/big-logo/black/logo11.svg",imgColorWhite:"/images/partners/big-logo/color-white/logo11.svg",subtitle:"",name:"Eltex",text:"Российский разработчик и производитель телекоммуникационного и сетевого оборудования, промышленных контроллеров для IoT."},{imgWhite:"/images/partners/big-logo/white/logo12.png",imgColor:"/images/partners/big-logo/color/logo12.png",imgBlack:"/images/partners/big-logo/black/logo12.png",imgColorWhite:"/images/partners/big-logo/color-white/logo12.png",subtitle:"Авторизованный партнер",name:"Р7-Офис",text:"Российский разработчик офисного программного обеспечения."},{imgWhite:"/images/partners/big-logo/white/logo13.svg",imgColor:"/images/partners/big-logo/color/logo13.svg",imgBlack:"/images/partners/big-logo/black/logo13.svg",imgColorWhite:"/images/partners/big-logo/color-white/logo13.svg",subtitle:"Авторизованный партнер",name:"Мой офис",text:"Российский разработчик безопасных офисных решений для общения и совместной работы с документами."},{imgWhite:"/images/partners/big-logo/white/logo14.svg",imgColor:"/images/partners/big-logo/color/logo14.svg",imgBlack:"/images/partners/big-logo/black/logo14.svg",imgColorWhite:"/images/partners/big-logo/color-white/logo14.svg",subtitle:"Торговый партнер",name:"CommuniGate Systems",text:"Российский разработчик программного обеспечения в области интегрированных коммуникаций."},{imgWhite:"/images/partners/big-logo/white/logo15.svg",imgColor:"/images/partners/big-logo/color/logo15.svg",imgBlack:"/images/partners/big-logo/black/logo15.svg",imgColorWhite:"/images/partners/big-logo/color-white/logo15.svg",subtitle:"Реселлер",name:"ROSA",text:"Российский разработчик системного ПО (настольные и серверные операционные системы, системы разворачивания облачных и инфраструктурных сервисов)."},{imgWhite:"/images/partners/big-logo/white/logo16.svg",imgColor:"/images/partners/big-logo/color/logo16.svg",imgBlack:"/images/partners/big-logo/black/logo16.svg",imgColorWhite:"/images/partners/big-logo/color-white/logo16.svg",subtitle:"Авторизованный партнер",name:"Yadro",text:"Российский производитель высокотехнологичного оборудования (серверы, системы хранения данных, инфраструктурные решения)."}].forEach((l=>{const g=function(l){const g=s("big-logo__btn"),e=i("big-logo__img-box","logo-img-box"),m=a(l.imgWhite,"big-logo__img-white","logo-img-box__grey-light"),r=a(l.imgBlack,"big-logo__img-black","logo-img-box__grey-dark"),n=a(l.imgColor,"big-logo__img-color","logo-img-box__color-light"),p=a(l.imgColorWhite,"big-logo__img-color-white","logo-img-box__color-dark"),c=i("big-logo__text-box"),h=i("big-logo__marker"),b=t(l.subtitle,["text-s","big-logo__logo-text"]);return e.append(m),e.append(r),e.append(n),e.append(p),g.append(e),""!=l.subtitle&&(c.append(h),c.append(b),g.append(c)),g.addEventListener("click",(g=>{o(l)})),g}(l);m.append(g)})),[{imgWhite:"/images/partners/small-logo/white/small-logo1.png",imgColor:"/images/partners/small-logo/color/small-logo1.png",imgBlack:"/images/partners/small-logo/black/small-logo1.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo1.png",subtitle:"Авторизованный партнер",name:"Киберпротект",text:"Российский разработчик ПО для защиты данных, резервного копирования и восстановления виртуальных, физических и облачных сред."},{imgWhite:"/images/partners/small-logo/white/small-logo2.png",imgColor:"/images/partners/small-logo/color/small-logo2.png",imgBlack:"/images/partners/small-logo/black/small-logo2.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo2.png",subtitle:"Авторизованный партнер",name:"Qtech",text:"Российский разработчик и производитель сетевого, телекоммуникационного и IT-оборудования для операторов связи, государственных структур и корпоративных сетей."},{imgWhite:"/images/partners/small-logo/white/small-logo3.png",imgColor:"/images/partners/small-logo/color/small-logo3.png",imgBlack:"/images/partners/small-logo/black/small-logo3.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo3.png",subtitle:"Авторизованный партнер",name:"Автограф",text:"Российский разработчик программного обеспечения, нормативных документов, аппаратно-программных комплексов в различных отраслях промышленности и транспорта городского, железнодорожного, метрополитена (графический редактор Автограф для инженерной и деловой векторной графики)."},{imgWhite:"/images/partners/small-logo/white/small-logo4.svg",imgColor:"/images/partners/small-logo/color/small-logo4.svg",imgBlack:"/images/partners/small-logo/black/small-logo4.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo4.svg",subtitle:"Торговый партнер",name:"РЕД СОФТ",text:"Российский поставщик решений в области управления информацией, основанных на программном обеспечении с открытым исходным кодом."},{imgWhite:"/images/partners/small-logo/white/small-logo5.svg",imgColor:"/images/partners/small-logo/color/small-logo5.svg",imgBlack:"/images/partners/small-logo/black/small-logo5.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo5.svg",subtitle:"Авторизованный партнер",name:"Горизонт-ВС",text:"Российский разработчик и производитель программно-аппаратных средств обеспечения информационной безопасности, систем мониторинга и управления IT-инфраструктурой, а также средств виртуализации и систем хранения данных."},{imgWhite:"/images/partners/small-logo/white/small-logo6.svg",imgColor:"/images/partners/small-logo/color/small-logo6.svg",imgBlack:"/images/partners/small-logo/black/small-logo6.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo6.svg",subtitle:"Сертифицированный партнер",name:"StaffCop",text:"Российский разработчик программ линейки StaffCop, предназначенных для обеспечения информационной безопасности и улучшения эффективности работы организаций и предприятий."},{imgWhite:"/images/partners/small-logo/white/small-logo7.png",imgColor:"/images/partners/small-logo/color/small-logo7.png",imgBlack:"/images/partners/small-logo/black/small-logo7.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo7.png",subtitle:"Авторизованный партнер",name:"DCN (Digital China Group Co., Ltd.)",text:"Китайский производитель коммутаторов, устройств беспроводной сети (точки доступа), маршрутизаторов, брандмауэров и шлюзов безопасности, систем хранения данных, CPE и облачных сервисов."},{imgWhite:"/images/partners/small-logo/white/small-logo8.svg",imgColor:"/images/partners/small-logo/color/small-logo8.svg",imgBlack:"/images/partners/small-logo/black/small-logo8.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo8.svg",subtitle:"Авторизованный партнер",name:"Sitronics",text:"Российский производитель высокотехнологичных серверов для безопасного анализа и хранения больших данных, а также для построения сложных архитектур и облачных вычислений."},{imgWhite:"/images/partners/small-logo/white/small-logo9.svg",imgColor:"/images/partners/small-logo/color/small-logo9.svg",imgBlack:"/images/partners/small-logo/black/small-logo9.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo9.svg",subtitle:"Авторизованный партнер",name:"ГК Astra Linux",text:"Российский производитель программного обеспечения, в том числе защищенных операционных систем и платформ виртуализации (Astra Linux, Брест, RuBackup)."},{imgWhite:"/images/partners/small-logo/white/small-logo10.png",imgColor:"/images/partners/small-logo/color/small-logo10.png",imgBlack:"/images/partners/small-logo/black/small-logo10.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo10.png",subtitle:"Авторизованный партнер",name:"Eurolan",text:"Российский производитель оборудования для построения структурированных кабельных систем."},{imgWhite:"/images/partners/small-logo/white/small-logo11.svg",imgColor:"/images/partners/small-logo/color/small-logo11.svg",imgBlack:"/images/partners/small-logo/black/small-logo11.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo11.svg",subtitle:"Авторизованный партнер",name:"Dr.Web",text:"Российский производитель антивирусных средств защиты информации."},{imgWhite:"/images/partners/small-logo/white/small-logo12.svg",imgColor:"/images/partners/small-logo/color/small-logo12.svg",imgBlack:"/images/partners/small-logo/black/small-logo12.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo12.svg",subtitle:"Сертифицированный установщик",name:"Parsec",text:"Российский разработчик и производитель решений в области СКУД и идентификации."},{imgWhite:"/images/partners/small-logo/white/small-logo13.png",imgColor:"/images/partners/small-logo/color/small-logo13.png",imgBlack:"/images/partners/small-logo/black/small-logo13.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo13.png",subtitle:"Авторизованный партнер",name:"MIND",text:"Российский разработчик решений в области видеоконференцсвязи."},{imgWhite:"/images/partners/small-logo/white/small-logo14.svg",imgColor:"/images/partners/small-logo/color/small-logo14.svg",imgBlack:"/images/partners/small-logo/black/small-logo14.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo14.svg",subtitle:"Авторизованный партнер",name:"Postgres Professional",text:"Российский разработчик систем управления базами данных."},{imgWhite:"/images/partners/small-logo/white/small-logo15.svg",imgColor:"/images/partners/small-logo/color/small-logo15.svg",imgBlack:"/images/partners/small-logo/black/small-logo15.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo15.svg",subtitle:"Интегратор",name:"Базальт СПО",text:"Российский разработчик российских операционных систем «Альт»."},{imgWhite:"/images/partners/small-logo/white/small-logo16.svg",imgColor:"/images/partners/small-logo/color/small-logo16.svg",imgBlack:"/images/partners/small-logo/black/small-logo16.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo16.svg",subtitle:"Gold Partner",name:"Lenovo",text:"Китайский производитель персональных компьютеров, серверов, мобильных устройств, программного обеспечения."},{imgWhite:"/images/partners/small-logo/white/small-logo17.svg",imgColor:"/images/partners/small-logo/color/small-logo17.svg",imgBlack:"/images/partners/small-logo/black/small-logo17.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo17.svg",subtitle:"Partner",name:"НИИ СОКБ",text:"Российский разработчик безопасной экосистемы прикладных сервисов для бизнеса SafeTechnology."},{imgWhite:"/images/partners/small-logo/white/small-logo18.png",imgColor:"/images/partners/small-logo/color/small-logo18.png",imgBlack:"/images/partners/small-logo/black/small-logo18.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo18.png",subtitle:"Certified Partner",name:"H3C",text:"Китайский производитель серверов, хранилищ, сетевого оборудования, гиперконвергентных систем и систем управления ИТ."},{imgWhite:"/images/partners/small-logo/white/small-logo19.png",imgColor:"/images/partners/small-logo/color/small-logo19.png",imgBlack:"/images/partners/small-logo/black/small-logo19.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo19.png",subtitle:"Gold Partner",name:"GoodWAN",text:"Российский разработчик и производитель оборудования для интернета вещей."},{imgWhite:"/images/partners/small-logo/white/small-logo20.svg",imgColor:"/images/partners/small-logo/color/small-logo20.svg",imgBlack:"/images/partners/small-logo/black/small-logo20.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo20.svg",subtitle:"Gold Partner",name:"TP-Link",text:"Китайский производитель компьютерного и телекоммуникационного оборудования."},{imgWhite:"/images/partners/small-logo/white/small-logo21.png",imgColor:"/images/partners/small-logo/color/small-logo21.png",imgBlack:"/images/partners/small-logo/black/small-logo21.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo21.png",subtitle:"Партнер",name:"RAIDIX",text:"Российский разработчик ПО для управления высокопроизводительными системами хранения данных."},{imgWhite:"/images/partners/small-logo/white/small-logo22.svg",imgColor:"/images/partners/small-logo/color/small-logo22.svg",imgBlack:"/images/partners/small-logo/black/small-logo22.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo22.svg",subtitle:"",name:"Infortrend Technology",text:"Тайваньский производитель корпоративных систем хранения данных, решений All Flash/гибридных SAN и NAS СХД, горизонтально масштабируемых NAS-систем, серверов и гибридных облачных решений."},{imgWhite:"/images/partners/small-logo/white/small-logo23.png",imgColor:"/images/partners/small-logo/color/small-logo23.png",imgBlack:"/images/partners/small-logo/black/small-logo23.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo23.png",subtitle:"",name:"Maipu Communication Technology",text:"Китайский производитель сетевого обрудования: маршрутизаторов, коммутаторов, VoIP-коммуникаций."},{imgWhite:"/images/partners/small-logo/white/small-logo24.png",imgColor:"/images/partners/small-logo/color/small-logo24.png",imgBlack:"/images/partners/small-logo/black/small-logo24.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo24.png",subtitle:"",name:"Infotecs",text:"Российский разработчик сертифицированного ПО в сфере информационной безопасности."},{imgWhite:"/images/partners/small-logo/white/small-logo25.svg",imgColor:"/images/partners/small-logo/color/small-logo25.svg",imgBlack:"/images/partners/small-logo/black/small-logo25.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo25.svg",subtitle:"",name:"КриптоПро",text:"Российский разработчик средств криптографической защиты информации."},{imgWhite:"/images/partners/small-logo/white/small-logo26.png",imgColor:"/images/partners/small-logo/color/small-logo26.png",imgBlack:"/images/partners/small-logo/black/small-logo26.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo26.png",subtitle:"",name:"Initi",text:"Российский разработчик ПО для мониторинга ИТ-инфраструктуры и сервисов."},{imgWhite:"/images/partners/small-logo/white/small-logo27.png",imgColor:"/images/partners/small-logo/color/small-logo27.png",imgBlack:"/images/partners/small-logo/black/small-logo27.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo27.png",subtitle:"",name:"Infinidat",text:"Израильский производитель систем хранения данных корпоративного класса нового поколения, решений для хранения и организации сверхбольших массивов данных."},{imgWhite:"/images/partners/small-logo/white/small-logo28.svg",imgColor:"/images/partners/small-logo/color/small-logo28.svg",imgBlack:"/images/partners/small-logo/black/small-logo28.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo28.svg",subtitle:"",name:"С-Терра СиЭсПи",text:"Российский разработчик и производитель средств сетевой информационной безопасности."},{imgWhite:"/images/partners/small-logo/white/small-logo29.png",imgColor:"/images/partners/small-logo/color/small-logo29.png",imgBlack:"/images/partners/small-logo/black/small-logo29.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo29.png",subtitle:"",name:"Baum",text:"Российский производитель высокопроизводительных, защищенных систем хранения данных большой ёмкости."},{imgWhite:"/images/partners/small-logo/white/small-logo30.svg",imgColor:"/images/partners/small-logo/color/small-logo30.svg",imgBlack:"/images/partners/small-logo/black/small-logo30.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo30.svg",subtitle:"",name:"Гравитон",text:"Российский разработчик и производитель вычислительной техники (клиентские и серверные системы, системы хранения данных, программно-апппаратный комплекс)."},{imgWhite:"/images/partners/small-logo/white/small-logo31.svg",imgColor:"/images/partners/small-logo/color/small-logo31.svg",imgBlack:"/images/partners/small-logo/black/small-logo31.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo31.svg",subtitle:"",name:"Ruijie Networks",text:"Китайский производитель коммутаторов, маршрутизаторов, беспроводных сетей, шлюзов, облачных сервисов, систем безопасности, управления ИТ, а также аутентификации и учета."},{imgWhite:"/images/partners/small-logo/white/small-logo32.svg",imgColor:"/images/partners/small-logo/color/small-logo32.svg",imgBlack:"/images/partners/small-logo/black/small-logo32.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo32.svg",subtitle:"",name:"DKC",text:"Российский производитель кабеленесущих систем и низковольтного оборудования."},{imgWhite:"/images/partners/small-logo/white/small-logo33.png",imgColor:"/images/partners/small-logo/color/small-logo33.png",imgBlack:"/images/partners/small-logo/black/small-logo33.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo33.png",subtitle:"",name:"IEK",text:"Российская производитель электротехнического и светотехнического оборудования, продукции для телекоммуникаций и оборудования промышленной автоматизации."},{imgWhite:"/images/partners/small-logo/white/small-logo34.png",imgColor:"/images/partners/small-logo/color/small-logo34.png",imgBlack:"/images/partners/small-logo/black/small-logo34.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo34.png",subtitle:"",name:"intellect",text:"Российский разработчик программного обеспечения для систем безопасности и видеонаблюдения."},{imgWhite:"/images/partners/small-logo/white/small-logo35.svg",imgColor:"/images/partners/small-logo/color/small-logo35.svg",imgBlack:"/images/partners/small-logo/black/small-logo35.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo35.svg",subtitle:"",name:"ISS",text:"Российский разработчик комплексных систем безопасности и решений для автоматизации технологических и бизнес-процессов."},{imgWhite:"/images/partners/small-logo/white/small-logo36.svg",imgColor:"/images/partners/small-logo/color/small-logo36.svg",imgBlack:"/images/partners/small-logo/black/small-logo36.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo36.svg",subtitle:"",name:"BioSmart",text:"Российский разработчик и производитель биометрических систем для идентификации человека по отпечатку пальцев, венам ладони и лицу."},{imgWhite:"/images/partners/small-logo/white/small-logo37.svg",imgColor:"/images/partners/small-logo/color/small-logo37.svg",imgBlack:"/images/partners/small-logo/black/small-logo37.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo37.svg",subtitle:"",name:"Borey",text:"Российский разработчик и производитель систем прецизионного кондиционирования, мини и контейнерных ЦОД."},{imgWhite:"/images/partners/small-logo/white/small-logo38.svg",imgColor:"/images/partners/small-logo/color/small-logo38.svg",imgBlack:"/images/partners/small-logo/black/small-logo38.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo38.svg",subtitle:"",name:"C3Solutions",text:"Российский производитель инженерных, телекоммуникационных и промышленных решений для объектов сферы IT."},{imgWhite:"/images/partners/small-logo/white/small-logo39.png",imgColor:"/images/partners/small-logo/color/small-logo39.png",imgBlack:"/images/partners/small-logo/black/small-logo39.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo39.png",subtitle:"",name:"RusGuard",text:"Российский производитель системы контроля и управления доступом."},{imgWhite:"/images/partners/small-logo/white/small-logo40.png",imgColor:"/images/partners/small-logo/color/small-logo40.png",imgBlack:"/images/partners/small-logo/black/small-logo40.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo40.png",subtitle:"",name:"Segnetics",text:"Российский разработчик и производитель промышленных контроллеров."},{imgWhite:"/images/partners/small-logo/white/small-logo41.svg",imgColor:"/images/partners/small-logo/color/small-logo41.svg",imgBlack:"/images/partners/small-logo/black/small-logo41.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo41.svg",subtitle:"",name:"Trassir",text:"Российский производитель систем видеонаблюдения (видеорегистраторы, IP-камеры различного радиуса действия и углов обзора, а также программные модули для бизнес-аналитики, видео-, аудио- и нейроаналитики)."},{imgWhite:"/images/partners/small-logo/white/small-logo42.svg",imgColor:"/images/partners/small-logo/color/small-logo42.svg",imgBlack:"/images/partners/small-logo/black/small-logo42.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo42.svg",subtitle:"",name:"ОВЕН",text:"Российский разработчик и производитель средств промышленной автоматизации."},{imgWhite:"/images/partners/small-logo/white/small-logo43.png",imgColor:"/images/partners/small-logo/color/small-logo43.png",imgBlack:"/images/partners/small-logo/black/small-logo43.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo43.png",subtitle:"",name:"TVT",text:"Китайский производитель оборудования для видеонаблюдения."},{imgWhite:"/images/partners/small-logo/white/small-logo44.png",imgColor:"/images/partners/small-logo/color/small-logo44.png",imgBlack:"/images/partners/small-logo/black/small-logo44.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo44.png",subtitle:"",name:"Vybos",text:"Российский разработчик комплексных технических решений по созданию доступной, отказоустойчивой информационной инфраcтруктуры в ЦОД"},{imgWhite:"/images/partners/small-logo/white/small-logo45.png",imgColor:"/images/partners/small-logo/color/small-logo45.png",imgBlack:"/images/partners/small-logo/black/small-logo45.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo45.png",subtitle:"",name:"Веза",text:"Российский производитель полного технологического цикла вентиляционного и климатического оборудования."},{imgWhite:"/images/partners/small-logo/white/small-logo46.png",imgColor:"/images/partners/small-logo/color/small-logo46.png",imgBlack:"/images/partners/small-logo/black/small-logo46.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo46.png",subtitle:"",name:"ГК Штиль",text:"Российский производитель систем электропитания (инверторные стабилизаторы напряжения, источники бесперебойного питания переменного и постоянного тока, инверторы и инверторные системы, установки электропитания постоянного тока, климатические шкафы)."},{imgWhite:"/images/partners/small-logo/white/small-logo47.png",imgColor:"/images/partners/small-logo/color/small-logo47.png",imgBlack:"/images/partners/small-logo/black/small-logo47.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo47.png",subtitle:"",name:"КАМА-Энергетика",text:"Российский производитель газопоршневых и дизельных электростанций и силовых установок."},{imgWhite:"/images/partners/small-logo/white/small-logo48.png",imgColor:"/images/partners/small-logo/color/small-logo48.png",imgBlack:"/images/partners/small-logo/black/small-logo48.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo48.png",subtitle:"",name:"НПП ЗЕВС",text:"Российский производитель систем кондиционирования воздуха."},{imgWhite:"/images/partners/small-logo/white/small-logo49.svg",imgColor:"/images/partners/small-logo/color/small-logo49.svg",imgBlack:"/images/partners/small-logo/black/small-logo49.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo49.svg",subtitle:"",name:"Парус электро",text:"Российский разработчик и производитель систем бесперебойного питания и другой преобразовательной техники."},{imgWhite:"/images/partners/small-logo/white/small-logo50.png",imgColor:"/images/partners/small-logo/color/small-logo50.png",imgBlack:"/images/partners/small-logo/black/small-logo50.png",imgColorWhite:"/images/partners/small-logo/color-white/small-logo50.png",subtitle:"",name:"РУСЭЛТ",text:"Российское производитель промышленного электротехнического оборудования."},{imgWhite:"/images/partners/small-logo/white/small-logo51.svg",imgColor:"/images/partners/small-logo/color/small-logo51.svg",imgBlack:"/images/partners/small-logo/black/small-logo51.svg",imgColorWhite:"/images/partners/small-logo/color-white/small-logo51.svg",subtitle:"Authorized Partner",name:"Huawei",text:"Китайский производитель интеллектуальных устройств и инфраструктуры в области информационно-коммуникационных технологий."}].forEach((l=>{const g=function(l){const g=s("small-logo__btn"),e=i("small-logo__img-box","logo-img-box"),m=a(l.imgWhite,"small-logo__img-white","logo-img-box__grey-light"),r=a(l.imgBlack,"small-logo__img-black","logo-img-box__grey-dark"),n=a(l.imgColor,"small-logo__img-color","logo-img-box__color-light"),p=a(l.imgColorWhite,"small-logo__img-color-white","logo-img-box__color-dark"),c=i("small-logo__text-box"),h=i("small-logo__marker"),b=t(l.subtitle,["text-s","small-logo__logo-text"]);return e.append(m),e.append(r),e.append(n),e.append(p),g.append(e),""!=l.subtitle&&(c.append(h),c.append(b),g.append(c)),g.addEventListener("click",(g=>{o(l)})),g}(l);r.append(g)})),"dark"===localStorage.getItem("theme")?(E.forEach((l=>{l.checked=!1})),L()):(E.forEach((l=>{l.checked=!0})),S()),E.forEach((l=>{l.addEventListener("change",(()=>{l.checked?(E.forEach((l=>{l.checked=!0})),localStorage.setItem("theme","light"),S()):(E.forEach((l=>{l.checked=!1})),localStorage.setItem("theme","dark"),L())}))})),function(){try{const o=document.querySelector(".js_header_btn"),g=document.querySelector(".js_menu"),e=document.querySelector(".js_menu_overlay"),s=document.querySelector(".js_menu_exit");g.style.display="",o.addEventListener("click",(()=>{e.classList.add("active"),g.classList.add("active-half"),s.classList.add("active"),l.unscroll()})),s.addEventListener("click",(()=>{a()})),e.addEventListener("click",(()=>{a()}));const a=()=>{e.classList.remove("active"),g.classList.remove("active-half","active-full"),s.classList.remove("active"),l.scroll()}}catch(l){}}(),function(){try{const l=document.querySelector("#popupform"),o=new p(l,(l=>{console.log(l),o.closePopup()}));o.setEventListeners(),document.querySelectorAll(".popup-form-open").forEach((l=>{l.addEventListener("click",(()=>{o.openPopup()}))}))}catch(l){console.log(l)}}()})();