(function(){"use strict";var e={6130:function(e,t,a){var r=a(144),i=a(3726),s=a(7505),n=a(9088),l=a(3102),o=function(){var e=this,t=e._self._c;return t(i.Z,{staticClass:"app"},[t("AppbarVue"),t(l.Z,[t("router-view")],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showScrollButton,expression:"showScrollButton"}],staticClass:"scroll-up-button",on:{click:e.scrollToTop}},[t("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Montserrat&display=swap",rel:"stylesheet"}}),t(n.Z,{staticClass:"scroll-up-icon",attrs:{color:"white"}},[e._v("mdi-chevron-up")])],1),t(s.Z,[t("footerCom")],1)],1)},c=[],u=a(1819),m=a(7970),d=a(1667),v=a(3265),f=a(8001),k=a(2515),p=a(2732),y=a(3845),g=function(){var e=this,t=e._self._c;return t("div",[t(u.Z,[t(p.Z,{staticClass:"mainHeader",attrs:{flat:"","hide-on-scroll":"","scroll-target":"#scrolling-techniques-4"}},[t("router-link",{attrs:{to:"/"}},[t("img",{staticStyle:{"max-width":"250px","max-height":"220px"},attrs:{src:a(419),alt:"Logo"}})]),t(k.Z),t(y.lj,{staticClass:"hidden-xs-only"},[t(m.Z,[t(f.Z,{staticClass:"d-flex"},[t(d.Z,{staticClass:"mr-4",attrs:{to:"/",link:""}},[t(v.km,[t(v.V9,[e._v("ANASAYFA")])],1)],1),t(d.Z,{staticClass:"mr-4",attrs:{to:"/hakkimizda",link:""}},[t(v.km,[t(v.V9,[e._v("HAKKIMIZDA")])],1)],1),t(d.Z,{attrs:{to:"/etkinlikler",link:""}},[t(v.km,[t(v.V9,[e._v("DAYANIŞMA FESTİVALİ")])],1)],1)],1)],1)],1)],1)],1)],1)},h=[],Z={name:"customNavbar",data(){return{}},methods:{goToLink(e){window.location.href=e}}},b=Z,C=a(1001),x=(0,C.Z)(b,g,h,!1,null,"5dd5307a",null),_=x.exports,z=a(3381),w=a(7024),S=a(1584),P=a(7894),A=function(){var e=this,t=e._self._c;return t(u.Z,{staticClass:"container"},[t(P.Z,[t(w.Z,{staticClass:"footer-column"},[t(S.Z,{staticClass:"logo-image",attrs:{src:a(8511),alt:"Logo"}})],1),t(w.Z,{staticClass:"footer-column; mt-4"},[t("h4",{staticClass:"black--text"},[e._v("İletişim")]),t("p",{staticClass:"black--text"},[e._v(" E-posta: iletisim@funforfavor.org"),t("br")])]),t(w.Z,{staticClass:"footer-column; mt-4"},[t("h4",{staticClass:"black--text"},[e._v("Sosyal Medya")]),t(z.Z,{staticClass:"mr-2",attrs:{icon:"",href:"https://www.instagram.com/funforfavor/"}},[t(n.Z,{attrs:{size:"24"}},[e._v("mdi-instagram")])],1),t(z.Z,{staticClass:"mr-2",attrs:{icon:"",href:"https://biletino.com/tr/u-jfvc/fun-for-favor/"}},[t(n.Z,{attrs:{size:"24"}},[e._v("mdi-ticket")])],1)],1)],1)],1)},j=[],F={name:"footerCom",data(){return{isFooterVisible:!1}}},O=F,B=(0,C.Z)(O,A,j,!1,null,"1d8273a8",null),T=B.exports,E={components:{AppbarVue:_,footerCom:T},data(){return{showScrollButton:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const e=window.pageYOffset||document.documentElement.scrollTop;this.showScrollButton=e>0},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},M=E,D=(0,C.Z)(M,o,c,!1,null,null,null),L=D.exports,H=a(154);r.ZP.use(H.Z);var I=new H.Z({}),V=a(8345),N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("welcomeCard"),t("homePage1")],1)},R=[],Y=a(8175),G=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{fluid:""}},[t(Y.Z,[t(S.Z,{staticClass:"image",attrs:{src:a(9678)}})],1)],1)},K=[],q={name:"welcomeCard",data(){return{}}},U=q,X=(0,C.Z)(U,G,K,!1,null,"cdb91d4e",null),$=X.exports,J=a(5255),Q=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{fluid:""}},[t(Y.Z,{staticClass:"card"},[t(P.Z,{attrs:{"no-gutters":""}},[t(w.Z,{staticClass:"text-center",attrs:{cols:"6"}},[t(J.ZB,[t("div",{staticClass:"text-container"},[t("p",{staticClass:"centered-text"},[e._v("Dayanışma Festivali yardımsever, üretken ve sevginin ekseninde bir toplumsal bilincin gelişmesini sağlamak amacıyla 20’den fazla sanatçıyı, sanatı ve sanatseveri dopdolu bir programla 23 Haziran Cuma günü Club Mirador’da buluşturuyor!")]),t("p",{staticClass:"centered-text"},[e._v("Festivalimiz kendi mesleklerinde çok başarılı olmalarının yanı sıra toplumsal konulara duyarlılık göstermiş, empati ruhunun yaygınlaşmasına katkıda bulunmuş, sosyal sorumluluk projelerinde istikrarlı biçimde yer almış ve deprem sürecinde seferber olmuş sanatçılara ve müzisyenlere teşekkür etmek amacıyla düzenlenen Dayanışma Ödülleri'ne ve iki ayrı sahnede farklı müzikal tarzlarda eş zamanlı olarak gerçekleşecek konser programına ev sahipliği yapacaktır.")]),t("p",{staticClass:"centered-text"},[e._v("Aktivite stantları, interaktif etkinlikler & oyunlar, bilim, sanat ve zanaat atölyeleri, resim & çizim alanları, yoga & meditasyon bölgeleri ve havuz aktiviteleri müzik ve sanata eşlik edecektir.")]),t("p",{staticClass:"centered-text"},[e._v("*Festivalimizde elde edilen tüm gelirler deprem bölgesinde tarifsiz kayıplar vermiş insanlarımıza destek olmak amacıyla Ahbap Derneği’ne ve İhtiyaç Haritası'na bağışlanacaktır.")]),t("p",{staticClass:"centered-text"},[e._v("#funforfavor")]),t(n.Z,[e._v("mdi-ticket")]),t(z.Z,{attrs:{outlined:"",href:"https://biletino.com/tr/e-nkr/dayanisma-festivali/"}},[e._v("Bilet Almak İçin")]),t(n.Z,[e._v("mdi-ticket")])],1)])],1),t(w.Z,{attrs:{cols:"6"}},[t(S.Z,{staticClass:"image",attrs:{src:a(2245)}})],1)],1)],1)],1)},W=[],ee={name:"homePage1",data(){return{}}},te=ee,ae=(0,C.Z)(te,Q,W,!1,null,"52999c2d",null),re=ae.exports,ie={name:"homePage",components:{welcomeCard:$,homePage1:re}},se=ie,ne=(0,C.Z)(se,N,R,!1,null,"6a443036",null),le=ne.exports,oe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t(k.Z),t("hakkimizdaCard"),t("misyonvizyonCard")],1)},ce=[],ue=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{fluid:""}},[t(Y.Z,{staticClass:"card"},[t(P.Z,{attrs:{"no-gutters":""}},[t(w.Z,{staticClass:"text-center",attrs:{cols:"6"}},[t(J.ZB,[t("div",{staticClass:"text-container"},[t("p",{staticClass:"centered-text"},[e._v("Fun For Favor; yardımsever, üretken ve sevginin ekseninde hareket ederek toplumdaki yardımlaşma ve dayanışma bilincini güçlendirmek için hayata geçirilmiş üniversite tabanlı bir sosyal girişimcilik projesidir.")]),t("p",{staticClass:"centered-text"},[e._v(" Çeşitli etkinlikler, sanat ve müzik gibi yaratıcı araçları dayanışma ve iyilik faaliyetlerine entegre ederek, insanların bu etkinliklere ilgi göstermesini ve katkıda bulunmasını sağlıyoruz. Bu sayede, ihtiyaç sahiplerine destek olurken pozitif bir etki yaratıp dayanışma ağlarının oluşmasına katkı sağlıyoruz. ")])])])],1),t(w.Z,{attrs:{cols:"6"}},[t(S.Z,{staticClass:"image",attrs:{src:a(7762)}})],1)],1)],1)],1)},me=[],de={name:"hakkimizdaCard",data(){return{}}},ve=de,fe=(0,C.Z)(ve,ue,me,!1,null,"785b7e14",null),ke=fe.exports,pe=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{fluid:""}},[t(Y.Z,{staticClass:"card"},[t(P.Z,{attrs:{"no-gutters":""}},[t(w.Z,{staticClass:"text-center",attrs:{cols:"6"}},[t(J.ZB,[t("div",{staticClass:"text-container"},[t("p",{staticClass:"centered-text"},[e._v("Biz; gençler olarak iyiliğin, müziğin ve sanatın birleştirici gücüne inanıyoruz.")]),t("p",{staticClass:"centered-text"},[e._v("Projemiz, insanların birbirine ve dünyaya karşı sorumluluklarını yerine getirirken yardımlaşma ve dayanışma kültürünü güçlendirmeyi hedefler. Bunun yanı sıra, üretkenliği ve yaratıcılığı teşvik etmek de projemizin önemli amaçlarındandır. Son olarak, vizyonumuz sevgi ve dayanışmanın merkezde olduğu bir toplum inşasına katkıda bulunmaktır.")]),t("p",{staticClass:"centered-text"},[e._v("Bu vizyon doğrultusunda, “entertaining” kanallarıyla desteklenen etkinlikler aracılığıyla toplumda bu kıymetli değerlerin yayılmasını ve güçlenmesini amaçlıyoruz. ")]),t("p",{staticClass:"centered-text"},[e._v("Fun For Favor olarak, her bireyin değerli ve katkısının önemli olduğu bu vizyon için çalışıyoruz.")])])])],1),t(w.Z,{attrs:{cols:"6"}},[t(S.Z,{staticClass:"image",attrs:{src:a(6724)}})],1)],1)],1)],1)},ye=[],ge={name:"misyonCard",data(){return{}}},he=ge,Ze=(0,C.Z)(he,pe,ye,!1,null,"6ca81089",null),be=Ze.exports,Ce={name:"aboutPage",components:{hakkimizdaCard:ke,misyonvizyonCard:be}},xe=Ce,_e=(0,C.Z)(xe,oe,ce,!1,null,null,null),ze=_e.exports,we=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("eventCard")],1)},Se=[],Pe=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{fluid:""}},[t(Y.Z,{staticClass:"card"},[t(P.Z,{attrs:{"no-gutters":""}},[t(w.Z,{staticClass:"text-center",attrs:{cols:"6"}},[t(J.ZB,[t("div",{staticClass:"text-container"},[t("p",{staticClass:"centered-text"},[e._v("Dayanışma Festivali yardımsever, üretken ve sevginin ekseninde bir toplumsal bilincin gelişmesini sağlamak amacıyla 20’den fazla sanatçıyı, sanatı ve sanatseveri dopdolu bir programla 23 Haziran Cuma günü Club Mirador’da buluşturuyor!")]),t("p",{staticClass:"centered-text"},[e._v("Festivalimiz kendi mesleklerinde çok başarılı olmalarının yanı sıra toplumsal konulara duyarlılık göstermiş, empati ruhunun yaygınlaşmasına katkıda bulunmuş, sosyal sorumluluk projelerinde istikrarlı biçimde yer almış ve deprem sürecinde seferber olmuş sanatçılara ve müzisyenlere teşekkür etmek amacıyla düzenlenen Dayanışma Ödülleri'ne ve iki ayrı sahnede farklı müzikal tarzlarda eş zamanlı olarak gerçekleşecek konser programına ev sahipliği yapacaktır.")]),t("p",{staticClass:"centered-text"},[e._v("Aktivite stantları, interaktif etkinlikler & oyunlar, bilim, sanat ve zanaat atölyeleri, resim & çizim alanları, yoga & meditasyon bölgeleri ve havuz aktiviteleri müzik ve sanata eşlik edecektir.")]),t("p",{staticClass:"centered-text"},[e._v("*Festivalimizde elde edilen tüm gelirler deprem bölgesinde tarifsiz kayıplar vermiş insanlarımıza destek olmak amacıyla Ahbap Derneği’ne ve İhtiyaç Haritası'na bağışlanacaktır.")]),t("p",{staticClass:"centered-text"},[e._v("#funforfavor")]),t(n.Z,[e._v("mdi-ticket")]),t(z.Z,{attrs:{outlined:"",href:"https://biletino.com/tr/e-nkr/dayanisma-festivali/"}},[e._v("Bilet Almak İçin")]),t(n.Z,[e._v("mdi-ticket")])],1)])],1),t(w.Z,{attrs:{cols:"6"}},[t(S.Z,{staticClass:"image",attrs:{src:a(2245)}})],1)],1)],1)],1)},Ae=[],je={name:"biletalCard",data(){return{}}},Fe=je,Oe=(0,C.Z)(Fe,Pe,Ae,!1,null,"3fb6850a",null),Be=Oe.exports,Te={name:"eventPage",components:{eventCard:Be}},Ee=Te,Me=(0,C.Z)(Ee,we,Se,!1,null,null,null),De=Me.exports,Le=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("iletisimCard")],1)},He=[],Ie=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{fluid:""}},[t(Y.Z,{staticClass:"card"},[t(P.Z,{attrs:{"no-gutters":""}},[t(w.Z,{staticClass:"text-center",attrs:{cols:"6"}},[t(u.Z,{staticClass:"container"},[t(P.Z,[t(w.Z,{staticClass:"footer-column",attrs:{cols:"12",md:"8"}},[t("h3",{staticClass:"black--text"},[e._v("FunForFavor -- LOGO GELEBİLİR --")]),t("p",{staticClass:"black--text"},[e._v(" Ankara, Türkiye ")])]),t(w.Z,{staticClass:"footer-column",attrs:{cols:"12",md:"8"}},[t("h4",{staticClass:"black--text"},[e._v("İletişim Bilgileri")]),t("p",{staticClass:"black--text"},[e._v(" E-posta: example@example.com"),t("br"),e._v(" Telefon: +90 123 456 7890 ")])]),t(w.Z,{staticClass:"footer-column",attrs:{cols:"12",md:"8"}},[t("h4",{staticClass:"black--text"},[e._v("Sosyal Medya")]),t(z.Z,{staticClass:"mr-2",attrs:{icon:"",href:"https://www.instagram.com/funforfavor/"}},[t(n.Z,{attrs:{size:"24"}},[e._v("mdi-instagram")])],1),t(z.Z,{staticClass:"mr-2",attrs:{icon:"",href:"https://biletino.com/tr/u-jfvc/fun-for-favor/"}},[t(n.Z,{attrs:{size:"24"}},[e._v("mdi-ticket")])],1),t(z.Z,{attrs:{icon:""}},[t(n.Z,{attrs:{size:"24"}},[e._v("mdi-youtube")])],1)],1)],1)],1)],1)],1)],1)],1)},Ve=[],Ne={name:"iletisimCard",data(){return{}}},Re=Ne,Ye=(0,C.Z)(Re,Ie,Ve,!1,null,"199739a8",null),Ge=Ye.exports,Ke={name:"contactPage",components:{iletisimCard:Ge}},qe=Ke,Ue=(0,C.Z)(qe,Le,He,!1,null,null,null),Xe=Ue.exports;r.ZP.use(V.Z);var $e=new V.Z({mode:"history",routes:[{path:"/",name:"HomePage",component:le},{path:"/hakkimizda",name:"aboutPage",component:ze},{path:"/etkinlikler",name:"EventsPage",component:De},{path:"/iletisim",name:"ContactPage",component:Xe}]}),Je=a(9669),Qe=a.n(Je),We=a(2346),et=a(629);r.ZP.use(et.ZP),Qe().defaults.xsrfCookieName="csrftoken",Qe().defaults.xsrfHeaderName="X-CSRFToken";const tt=new et.ZP.Store({state:{access:"",refresh:""},mutations:{initializeStore(e){localStorage.getItem("access")?(e.access=localStorage.getItem("access"),e.refresh=localStorage.getItem("refresh")):(e.access="",e.refresh="")},setAccess(e,t){e.access=t},setRefresh(e,t){e.refresh=t}},actions:{logOut({commit:e}){e("setAccess",""),e("setRefresh",""),localStorage.removeItem("access"),localStorage.removeItem("refresh")}}});tt.commit("initializeStore");var at=tt,rt=a(9891);r.ZP.config.productionTip=!1,r.ZP.use(We.Z,Qe()),new r.ZP({vuetify:I,router:$e,axios:Qe(),store:at,render:e=>e(L)}).$mount("#app");new I({lang:{locales:{tr:rt.Z},current:"tr"}})},8511:function(e,t,a){e.exports=a.p+"img/footer.3bd4203b.png"},419:function(e,t,a){e.exports=a.p+"img/funforfavorlogo.36718061.png"},9678:function(e,t,a){e.exports=a.p+"img/header-1.f3a7cb8e.jpg"},2245:function(e,t,a){e.exports=a.p+"img/inner-1.bba553cd.jpg"},7762:function(e,t,a){e.exports=a.p+"img/web-site-biz-kimiz.84d56ba3.png"},6724:function(e,t,a){e.exports=a.p+"img/web-site-vizyon.be3aac7a.png"}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,loaded:!1,exports:{}};return e[r](s,s.exports,a),s.loaded=!0,s.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,r,i,s){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],s=e[u][2];for(var l=!0,o=0;o<r.length;o++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[o])}))?r.splice(o--,1):(l=!1,s<n&&(n=s));if(l){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,i,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,n=r[0],l=r[1],o=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(o)var u=o(a)}for(t&&t(r);c<n.length;c++)s=n[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},r=self["webpackChunkfanforfavorvue"]=self["webpackChunkfanforfavorvue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(6130)}));r=a.O(r)})();
//# sourceMappingURL=app.d28dc4bb.js.map