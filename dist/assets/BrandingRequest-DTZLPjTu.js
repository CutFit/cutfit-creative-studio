import{c as H,r as l,k as $,j as o,L as Q}from"./index-DX24lZQh.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=H("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var g=function(e,t){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])},g(e,t)};function p(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");g(e,t);function a(){this.constructor=e}e.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}var d=function(){return d=Object.assign||function(t){for(var a,n=1,i=arguments.length;n<i;n++){a=arguments[n];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t},d.apply(this,arguments)};function X(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",a==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Z=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
  font-size: 16px;
  line-height: 1.2em;
}

.calendly-inline-widget {
  min-width: 320px;
  height: 630px;
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
  display: inline;
  width: 100%;
  height: 100%;
}

.calendly-popup-content {
  position: relative;
}

.calendly-popup-content.calendly-mobile {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

.calendly-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  background-color: #a5a5a5;
  background-color: rgba(31, 31, 31, 0.4);
}

.calendly-overlay .calendly-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.calendly-overlay .calendly-popup {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  min-width: 900px;
  max-width: 1000px;
  height: 90%;
  max-height: 680px;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: none;
    transform: none;
    width: 100%;
    height: auto;
    min-width: 0;
    max-height: none;
  }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
  height: 100%;
}

.calendly-overlay .calendly-popup-close {
  position: absolute;
  top: 25px;
  right: 25px;
  color: #fff;
  width: 19px;
  height: 19px;
  cursor: pointer;
  background: url(https://assets.calendly.com/assets/external/close-icon.svg)
    no-repeat;
  background-size: contain;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup-close {
    top: 15px;
    right: 15px;
  }
}

.calendly-badge-widget {
  position: fixed;
  right: 20px;
  bottom: 15px;
  z-index: 9998;
}

.calendly-badge-widget .calendly-badge-content {
  display: table-cell;
  width: auto;
  height: 45px;
  padding: 0 30px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;
  font-family: sans-serif;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
  color: #666a73;
}

.calendly-badge-widget .calendly-badge-content span {
  display: block;
  font-size: 12px;
}

.calendly-spinner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  z-index: -1;
}

.calendly-spinner > div {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #e1e1e1;
  border-radius: 50%;
  vertical-align: middle;
  -webkit-animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.calendly-spinner .calendly-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.calendly-spinner .calendly-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`;X(Z);function f(e){return e.charAt(0)==="#"?e.slice(1):e}function J(e){return e!=null&&e.primaryColor&&(e.primaryColor=f(e.primaryColor)),e!=null&&e.textColor&&(e.textColor=f(e.textColor)),e!=null&&e.backgroundColor&&(e.backgroundColor=f(e.backgroundColor)),e}var D;(function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled",e.PAGE_HEIGHT="calendly.page_height"})(D||(D={}));var U=function(e){var t=e.url,a=e.prefill,n=a===void 0?{}:a,i=e.pageSettings,c=i===void 0?{}:i,y=e.utm,r=y===void 0?{}:y,x=e.embedType,s=J(c),v=s.backgroundColor,B=s.hideEventTypeDetails,F=s.hideLandingPageDetails,b=s.primaryColor,C=s.textColor,W=s.hideGdprBanner,w=n.customAnswers,u=n.date,E=n.email,_=n.firstName,k=n.guests,N=n.lastName,S=n.location,j=n.name,L=r.utmCampaign,I=r.utmContent,P=r.utmMedium,T=r.utmSource,O=r.utmTerm,A=r.salesforce_uuid,m=t.indexOf("?"),R=m>-1,Y=t.slice(m+1),G=R?t.slice(0,m):t,V=[R?Y:null,v?"background_color=".concat(v):null,B?"hide_event_type_details=1":null,F?"hide_landing_page_details=1":null,b?"primary_color=".concat(b):null,C?"text_color=".concat(C):null,W?"hide_gdpr_banner=1":null,j?"name=".concat(encodeURIComponent(j)):null,S?"location=".concat(encodeURIComponent(S)):null,_?"first_name=".concat(encodeURIComponent(_)):null,N?"last_name=".concat(encodeURIComponent(N)):null,k?"guests=".concat(k.map(encodeURIComponent).join(",")):null,E?"email=".concat(encodeURIComponent(E)):null,u&&u instanceof Date?"date=".concat(K(u)):null,L?"utm_campaign=".concat(encodeURIComponent(L)):null,I?"utm_content=".concat(encodeURIComponent(I)):null,P?"utm_medium=".concat(encodeURIComponent(P)):null,T?"utm_source=".concat(encodeURIComponent(T)):null,O?"utm_term=".concat(encodeURIComponent(O)):null,A?"salesforce_uuid=".concat(encodeURIComponent(A)):null,x?"embed_type=".concat(x):null,"embed_domain=1"].concat(w?ne(w):[]).filter(function(q){return q!==null}).join("&");return"".concat(G,"?").concat(V)},K=function(e){var t=e.getMonth()+1,a=e.getDate(),n=e.getFullYear();return[n,t<10?"0".concat(t):t,a<10?"0".concat(a):a].join("-")},ee=/^a\d{1,2}$/,ne=function(e){var t=Object.keys(e).filter(function(a){return a.match(ee)});return t.length?t.map(function(a){return"".concat(a,"=").concat(encodeURIComponent(e[a]))}):[]},z=function(e){p(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.render=function(){return l.createElement("div",{className:"calendly-spinner"},l.createElement("div",{className:"calendly-bounce1"}),l.createElement("div",{className:"calendly-bounce2"}),l.createElement("div",{className:"calendly-bounce3"}))},t}(l.Component),te="calendly-inline-widget",ae=function(e){p(t,e);function t(a){var n=e.call(this,a)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var a=U({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||z;return l.createElement("div",{className:this.props.className||te,style:this.props.styles||{}},this.state.isLoading&&l.createElement(n,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:a}))},t}(l.Component),oe=function(e){p(t,e);function t(a){var n=e.call(this,a)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var a=U({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||z;return l.createElement(l.Fragment,null,this.state.isLoading&&l.createElement(n,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:a}))},t}(l.Component),M=function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return $.createPortal(l.createElement("div",{className:"calendly-overlay"},l.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),l.createElement("div",{className:"calendly-popup"},l.createElement("div",{className:"calendly-popup-content"},l.createElement(oe,d({},e)))),l.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)};(function(e){p(t,e);function t(a){var n=e.call(this,a)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(a){a.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(a){a.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return l.createElement(l.Fragment,null,l.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),l.createElement(M,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(l.Component);(function(e){p(t,e);function t(a){var n=e.call(this,a)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(a){a.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return l.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},l.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&l.createElement("span",null,"powered by Calendly")),l.createElement(M,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(l.Component);const ie=()=>o.jsx(o.Fragment,{children:o.jsx("div",{className:"w-full bg-black flex justify-center items-center py-16 px-4",children:o.jsxs("div",{className:"w-full md:w-[85%] lg:w-[80%] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10",children:[o.jsxs("div",{className:"p-8 md:p-12 bg-[#0f0f0f] rounded-2xl flex flex-col gap-8 shadow-lg border border-white/10",children:[o.jsx(Q,{to:"/",className:"flex items-center gap-2",children:o.jsx("img",{src:"/assets/retenatextB.png",alt:"brand",className:"w-[160px] md:w-[180px] object-contain"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white mb-3",children:"PRO Package Consultation"}),o.jsx("p",{className:"text-white/70 text-base md:text-lg",children:"Let’s explore how our high-end AI creative solutions can elevate your fashion brand to a premium, scalable level."})]}),o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsxs("div",{className:"flex gap-3",children:[o.jsx(h,{className:"text-[#FCA311] mt-1"}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-white font-semibold text-lg",children:"Step 1 — Discovery & Strategy Call"}),o.jsx("p",{className:"text-white/70 text-[15px] leading-relaxed",children:"Share your goals and current visual challenges. We’ll help you outline the creative direction, brand tone, and technical needs for your AI-powered campaign or visual production."})]})]}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx(h,{className:"text-[#FCA311] mt-1"}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-white font-semibold text-lg",children:"Step 2 — Tailored Proposal & Investment Plan"}),o.jsx("p",{className:"text-white/70 text-[15px] leading-relaxed",children:"After the consultation, you’ll receive a customized proposal detailing deliverables, timelines, investment, and a brand-aligned creative roadmap."})]})]}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx(h,{className:"text-[#FCA311] mt-1"}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-white font-semibold text-lg",children:"Step 3 — Collaboration & Execution"}),o.jsx("p",{className:"text-white/70 text-[15px] leading-relaxed",children:"Once approved, you gain access to your dedicated collaboration hub. Share references, track progress, and receive AI-driven visual outputs optimized for campaigns, catalogs, and ads."})]})]})]})]}),o.jsxs("div",{className:"rounded-2xl bg-[#0f0f0f] border border-white/10 p-6 md:p-10 shadow-lg",children:[o.jsxs("div",{className:"mb-6",children:[o.jsx("p",{className:"text-white text-2xl font-bold",children:"Book a Consultation"}),o.jsx("p",{className:"text-white/70 text-sm",children:"Select a time below to schedule your strategy session."})]}),o.jsx("div",{className:"rounded-xl overflow-hidden",children:o.jsx(ae,{url:"https://calendly.com/retenaaistacksineden/30min"})})]})]})})});export{ie as default};
