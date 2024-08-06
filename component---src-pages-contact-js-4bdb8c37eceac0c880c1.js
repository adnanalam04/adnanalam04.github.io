"use strict";(self.webpackChunkadnan_alam_portfolio=self.webpackChunkadnan_alam_portfolio||[]).push([[209],{8351:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(6540),r=a(3895),i=a(5238),s=a(4714),o=a(7523);function l(e,t){[...t].reverse().forEach((a=>{const n=e.getVariant(a);n&&(0,s.U)(e,n),e.variantChildren&&e.variantChildren.forEach((e=>{l(e,t)}))}))}function c(){let e=!1;const t=new Set,a={subscribe(e){return t.add(e),()=>{t.delete(e)}},start(a,n){(0,i.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const r=[];return t.forEach((e=>{r.push((0,o._)(e,a,{transitionOverride:n}))})),Promise.all(r)},set(a){return(0,i.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach((e=>{!function(e,t){Array.isArray(t)?l(e,t):"string"==typeof t?l(e,[t]):(0,s.U)(e,t)}(e,a)}))},stop(){t.forEach((e=>{!function(e){e.values.forEach((e=>e.stop()))}(e)}))},mount(){return e=!0,()=>{e=!1,a.stop()}}};return a}var m=a(8601),d=a(5128);const u=function(){const e=(0,m.M)(c);return(0,d.E)(e.mount,[]),e};var f=a(3874),h=a(8027),g=Object.defineProperty,p=(e,t,a)=>((e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a)(e,"symbol"!=typeof t?t+"":t,a),v=new Map,E=new WeakMap,b=0,y=void 0;function N(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(a=e.root,a?(E.has(a)||(b+=1,E.set(a,b.toString())),E.get(a)):"0"):e[t]}`;var a})).toString()}function w(e,t,a={},n=y){if(void 0===window.IntersectionObserver&&void 0!==n){const r=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof a.threshold?a.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:i,elements:s}=function(e){const t=N(e);let a=v.get(t);if(!a){const n=new Map;let r;const i=new IntersectionObserver((t=>{t.forEach((t=>{var a;const i=t.isIntersecting&&r.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(a=n.get(t.target))||a.forEach((e=>{e(i,t)}))}))}),e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:i,elements:n},v.set(t,a)}return a}(a),o=s.get(e)||[];return s.has(e)||s.set(e,o),o.push(t),i.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(s.delete(e),i.unobserve(e)),0===s.size&&(i.disconnect(),v.delete(r))}}n.Component;var k=()=>{const{0:e,1:t}=(0,n.useState)(null),{0:a,1:i}=(0,n.useState)({name:"",email:"",message:""}),s=u(),[o,l]=function({threshold:e,delay:t,trackVisibility:a,rootMargin:r,root:i,triggerOnce:s,skip:o,initialInView:l,fallbackInView:c,onChange:m}={}){var d;const[u,f]=n.useState(null),h=n.useRef(),[g,p]=n.useState({inView:!!l,entry:void 0});h.current=m,n.useEffect((()=>{if(o||!u)return;let n;return n=w(u,((e,t)=>{p({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&s&&n&&(n(),n=void 0)}),{root:i,rootMargin:r,threshold:e,trackVisibility:a,delay:t},c),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,u,i,r,s,o,a,c,t]);const v=null==(d=g.entry)?void 0:d.target,E=n.useRef();u||!v||s||o||E.current===v||(E.current=v,p({inView:!!l,entry:void 0}));const b=[f,g.inView,g.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}({triggerOnce:!0,threshold:.1});(0,n.useEffect)((()=>{l&&s.start("visible")}),[s,l]);const c=e=>{i({...a,[e.target.name]:e.target.value})},m={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{type:"spring",damping:10,stiffness:100}}};return n.createElement(r.A,null,n.createElement(f.P.div,{className:"contact-container",initial:"hidden",animate:s,variants:m,ref:o},n.createElement("h1",{className:"glitch","data-text":"Get in Touch"},"Get in Touch"),n.createElement("div",{className:"contact-content"},n.createElement(f.P.div,{className:"contact-info",variants:m},n.createElement("h2",null,"Contact Information"),n.createElement("div",{className:"info-item"},n.createElement(h.maD,{className:"icon"}),n.createElement("a",{href:"mailto:adnanalam0004@gmail.com",className:"info-text"},"adnanalam0004@gmail.com")),n.createElement("div",{className:"info-item"},n.createElement(h.Cab,{className:"icon"}),n.createElement("a",{href:"tel:+918178756228",className:"info-text"},"+91 8178756228")),n.createElement("div",{className:"info-item"},n.createElement(h.QEs,{className:"icon"}),n.createElement("a",{href:"https://linkedin.com/in/adnanalam04",target:"_blank",rel:"noopener noreferrer",className:"info-text"},"linkedin.com/in/adnanalam04")),n.createElement("div",{className:"info-item"},n.createElement(h.hL4,{className:"icon"}),n.createElement("a",{href:"https://github.com/adnanalam04",target:"_blank",rel:"noopener noreferrer",className:"info-text"},"github.com/adnanalam04")),n.createElement("div",{className:"info-item"},n.createElement(h.vq8,{className:"icon"}),n.createElement("span",{className:"info-text"},"New Delhi, India")),n.createElement("div",{className:"linkedin-badge"},n.createElement("div",{className:"badge-base LI-profile-badge","data-locale":"en_US","data-size":"medium","data-theme":"dark","data-type":"VERTICAL","data-vanity":"adnanalam04","data-version":"v1"},n.createElement("a",{className:"badge-base__link LI-simple-link",href:"https://in.linkedin.com/in/adnanalam04?trk=profile-badge"},"Adnan Alam")))),n.createElement(f.P.form,{className:"contact-form",name:"contact",method:"POST","data-netlify":"true",onSubmit:async e=>{e.preventDefault(),t("submitting");try{(await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(a).toString()})).ok?(t("success"),i({name:"",email:"",message:""})):t("error")}catch(n){t("error")}},variants:m},n.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"name"},"Your Name"),n.createElement("input",{type:"text",id:"name",name:"name",required:!0,value:a.name,onChange:c})),n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"email"},"Your Email"),n.createElement("input",{type:"email",id:"email",name:"email",required:!0,value:a.email,onChange:c})),n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"message"},"Message"),n.createElement("textarea",{id:"message",name:"message",required:!0,value:a.message,onChange:c})),n.createElement("button",{type:"submit",disabled:"submitting"===e,className:"submit-btn"},"submitting"===e?"Sending...":"Send Message",n.createElement(h.Cer,{className:"send-icon"})),"success"===e&&n.createElement(f.P.p,{className:"form-status success",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.5}},"Message sent successfully!"),"error"===e&&n.createElement(f.P.p,{className:"form-status error",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.5}},"There was an error sending your message. Please try again.")))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-4bdb8c37eceac0c880c1.js.map