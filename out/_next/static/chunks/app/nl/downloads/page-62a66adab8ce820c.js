(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[856,867],{7768:function(e,l,t){Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,1159)),Promise.resolve().then(t.bind(t,8261))},1159:function(e,l,t){"use strict";t.d(l,{default:function(){return d}});var s=t(7437);function a(e){let l="text-portfolio-accent group-hover:font-bold ".concat(e.selected?"underline font-bold":""," ").concat(e.className||""),t="w-1.5 min-w-1.5 h-1.5 bg-portfolio-accent mr-4 rounded-full ".concat(e.dot?"block":"hidden"),a=e.newTab?"_blank":"";return(0,s.jsxs)("a",{href:e.href,target:a,className:"flex flex-row items-center group",children:[(0,s.jsx)("div",{className:t}),(0,s.jsx)("div",{className:l,children:e.text})]})}var n=t(6463),o=t(6648);function c(e){let l=e.path.includes("/en/")?"en":"nl",t="flex flex-row items-center ".concat(e.className),n=e.path.replace("/en/","/nl/"),o=e.path.replace("/nl/","/en/");return(0,s.jsxs)("div",{className:t,children:[(0,s.jsx)(a,{className:"text-2xl leading-10",newTab:!1,dot:!1,selected:"en"===l,href:o,text:"EN"}),(0,s.jsx)("div",{className:"text-2xl font-bold mx-2",children:"/"}),(0,s.jsx)(a,{className:"text-2xl leading-10",newTab:!1,dot:!1,selected:"nl"===l,href:n,text:"NL"})]})}function d(e){let{children:l,appState:t}=e,d=(0,n.usePathname)(),r=d.includes("/en/")?"en":"nl",i={projects:"/".concat(r,"/projects"),about:"/".concat(r,"/about"),contact:"/".concat(r,"/contact"),skills:"/".concat(r,"/skills"),downloads:"/".concat(r,"/downloads")};return(0,s.jsxs)("div",{className:"h-full w-full border-0 sm:border-[32px] border-portfolio-bg overflow-hidden flex bg-portfolio-bg relative",children:[(0,s.jsx)(o.default,{src:"/corner.svg",alt:"background image",width:"800",height:"800",className:"absolute flex justify-end z-0 bottom-0 flex overflow-hidden left-[670px] 2xl:left-auto right-auto 2xl:right-0"}),(0,s.jsx)("div",{className:"p-4 sm:p-8 w-full flex flex-col items-center border-portfolio-accent border relative bg-portfolio-specs overflow-y-auto scroll-smooth scrollbar scrollbar-thumb-portfolio-accent scrollbar-track-portfolio-bg",children:(0,s.jsxs)("div",{className:"max-w-7xl w-full flex flex-col 2xl:mr-16 relative",children:[(0,s.jsx)(c,{className:"md:absolute mb-8 md:mb-0 right-0",path:d}),(0,s.jsxs)("div",{className:"flex flex-row items-center",children:[(0,s.jsx)("div",{className:"lg:w-44",children:(0,s.jsx)("div",{className:"max-w-28 lg:max-w-36 hidden sm:block rounded-full border-portfolio-accent border overflow-hidden",children:(0,s.jsx)(o.default,{unoptimized:!0,src:"/profile.jpeg",alt:"profile image",width:"200",height:"200",className:"object-contain"})})}),(0,s.jsxs)("div",{className:"flex flex-col sm:ml-16",children:[(0,s.jsx)("div",{className:"text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-nowrap",children:t.labels.header.title}),(0,s.jsx)("div",{className:"text-lg md:text-xl lg:text-3xl",children:t.labels.header.subtitle})]})]}),(0,s.jsxs)("div",{className:"mt-8 flex flex-col lg:flex-row",children:[(0,s.jsxs)("div",{className:"flex flex-col hidden lg:block w-44 min-w-44",children:[(0,s.jsx)(a,{className:"text-2xl leading-10",newTab:!1,dot:!0,selected:d.includes("/projects"),href:i.projects,text:t.labels.menu.projects}),(0,s.jsx)(a,{className:"text-2xl leading-10",newTab:!1,dot:!0,selected:d.includes("/about"),href:i.about,text:t.labels.menu.about}),(0,s.jsx)(a,{className:"text-2xl leading-10",newTab:!1,dot:!0,selected:d.includes("/contact"),href:i.contact,text:t.labels.menu.contact}),(0,s.jsx)(a,{className:"text-2xl leading-10",newTab:!1,dot:!0,selected:d.includes("/skills"),href:i.skills,text:t.labels.menu.skills}),(0,s.jsx)(a,{className:"text-2xl leading-10",newTab:!1,dot:!0,selected:d.includes("/downloads"),href:i.downloads,text:t.labels.menu.downloads})]}),(0,s.jsxs)("div",{className:"flex flex-row block lg:hidden mb-8 flex-wrap",children:[(0,s.jsx)(a,{className:"text-2xl leading-10 mr-6",newTab:!1,dot:!1,selected:d.includes("/projects"),href:i.projects,text:t.labels.menu.projects}),(0,s.jsx)(a,{className:"text-2xl leading-10 mr-6",newTab:!1,dot:!1,selected:d.includes("/about"),href:i.about,text:t.labels.menu.about}),(0,s.jsx)(a,{className:"text-2xl leading-10 mr-6",newTab:!1,dot:!1,selected:d.includes("/contact"),href:i.contact,text:t.labels.menu.contact}),(0,s.jsx)(a,{className:"text-2xl leading-10 mr-6",newTab:!1,dot:!1,selected:d.includes("/skills"),href:i.skills,text:t.labels.menu.skills}),(0,s.jsx)(a,{className:"text-2xl leading-10",newTab:!1,dot:!1,selected:d.includes("/export"),href:i.downloads,text:t.labels.menu.downloads})]}),(0,s.jsx)("div",{className:"lg:ml-16 max-w-5xl w-full",children:l})]})]})})]})}},8261:function(e,l,t){"use strict";t.d(l,{default:function(){return i}});var s=t(7437);function a(e){var l,t;return e.cb?(0,s.jsx)("div",{className:null!==(l=e.className)&&void 0!==l?l:"",onClick:e.cb,children:(0,s.jsx)(n,{text:e.text,icon:e.icon})}):e.href?(0,s.jsx)("a",{className:null!==(t=e.className)&&void 0!==t?t:"",href:e.href,target:"_blank",children:(0,s.jsx)(n,{text:e.text,icon:e.icon})}):void 0}function n(e){return(0,s.jsxs)("div",{className:"text-portfolio-accent cursor-pointer hover:font-bold text-xl flex flex-row items-center",children:[(0,s.jsx)(e.icon,{className:"mr-2",size:24}),e.text]})}var o=t(3872),c=t(7501),d=t(1173),r=t.n(d);function i(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)(a,{className:"mb-4",text:e.labels.downloads.print,icon:o.rcQ,cb:function(){var l,t=null===(l=document.getElementById(e.exportId))||void 0===l?void 0:l.innerHTML,s=window.document.body.innerHTML;window.document.body.innerHTML=t,window.print(),window.document.body.innerHTML=s}}),(0,s.jsx)(a,{className:"hidden mb-4",text:e.labels.downloads.download,icon:o.yRW,cb:function(){var l=document.getElementById(e.exportId),t=l.scrollWidth,s=l.scrollHeight,a=t+80,n=1.3*a+80,o=Math.ceil(s/n)-1;r()(l).then(function(e){var l=e.toDataURL("image/jpeg",1),d=new c.kH("p","pt",[a,n]);d.addImage(l,"JPG",40,40,t,s);for(var r=1;r<=o;r++)d.addPage([a,n]),d.addImage(l,"JPG",40,-(n*r)+160,t,s);d.save("de-wit_software.pdf")})}}),(0,s.jsx)(a,{text:e.labels.downloads.source,icon:o.hJX,href:e.githubSource})]})}}},function(e){e.O(0,[240,337,505,595,231,282,971,23,744],function(){return e(e.s=7768)}),_N_E=e.O()}]);