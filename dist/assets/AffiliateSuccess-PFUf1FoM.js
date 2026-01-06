import{c as r,r as o,X as m,j as e}from"./index-DX24lZQh.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=r("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),h=()=>{const[l,a]=o.useState(!1),[n]=m(),t=n.get("code"),c=typeof window<"u"?localStorage.getItem("affiliatePromoCode"):null,s=t||c||"RETE-0000";o.useEffect(()=>{t&&localStorage.setItem("affiliatePromoCode",t)},[t]);const d=async()=>{await navigator.clipboard.writeText(s),a(!0),setTimeout(()=>a(!1),1200)};return e.jsxs("section",{className:"min-h-screen bg-black text-white px-6 md:px-16 py-16",children:[e.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fadeIn",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"h-20 w-20 rounded-full bg-[#FCA311]/20 flex items-center justify-center animate-pop",children:e.jsx(i,{className:"text-[#FCA311]",size:40})})}),e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold mb-3",children:"Welcome to the Affiliate Network!"}),e.jsx("p",{className:"text-white/70 max-w-2xl mx-auto mb-10",children:"Your affiliate profile has been created successfully. Below is your unique promo code. Start sharing and earn instantly."}),e.jsxs("div",{className:"bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-xl mb-10 animate-slideUp",children:[e.jsx("p",{className:"text-lg mb-2",children:"Your Refferal Code"}),e.jsxs("div",{className:"flex items-center justify-center gap-3",children:[e.jsx("span",{className:"text-3xl font-extrabold tracking-widest text-[#FCA311]",children:s}),e.jsx("button",{onClick:d,className:"p-2 rounded-lg bg-white/10 hover:bg-white/20 transition",children:l?e.jsx(i,{className:"text-green-400"}):e.jsx(x,{className:"text-white"})})]}),e.jsx("p",{className:"text-sm text-white/60 mt-4",children:"Share this code with anyone buying a RetenaAI package. Every valid purchase gives you commission."})]}),e.jsxs("div",{className:"bg-white/5 border border-white/10 p-8 rounded-xl text-left max-w-3xl mx-auto animate-slideUp",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"What To Do Next"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-white/80",children:[e.jsx("li",{children:"Post your code or referral link on WhatsApp, Facebook, TikTok, and Instagram."}),e.jsx("li",{children:"Tell people to use your promo code at checkout to get a discount."}),e.jsx("li",{children:"You earn instantly for every successful purchase they make."}),e.jsx("li",{children:"Save this page or screenshot your code so you never lose it."}),e.jsx("li",{children:"Contact support if you need marketing materials."})]})]}),e.jsx("button",{onClick:()=>window.location.href="/",className:"mt-10 bg-[#FCA311] text-black font-bold px-10 py-4 rounded-xl hover:opacity-90 transition animate-pop",children:"Start Sharing Now 🚀"})]}),e.jsx("style",{children:`
        .animate-fadeIn { animation: fadeIn 0.9s ease forwards; }
        .animate-slideUp { animation: slideUp 0.9s ease forwards; }
        .animate-pop { animation: pop 0.4s ease forwards; }

        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) }
          to { opacity: 1; transform: translateY(0) }
        }
        @keyframes pop {
          0% { transform: scale(0.8); opacity: 0 }
          100% { transform: scale(1); opacity: 1 }
        }
      `})]})};export{h as default};
