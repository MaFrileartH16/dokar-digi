import{f as y,u as I,a as k,c as b,j as e,B as P,g as _,K as B,b as p}from"./app-B-wmI_wZ.js";import{T as c,I as M,P as N,a as R,b as m}from"./TextInput-DuMVqA3V.js";import{A,I as F}from"./AuthenticatedLayout-DgyjBKBG.js";import{c as G,S as d}from"./BaseLayout-DmaP-xKQ.js";var f={root:"m_e9408a47","root--default":"m_84c9523a","root--filled":"m_ef274e49","root--unstyled":"m_eda993d3",legend:"m_90794832","legend--unstyled":"m_74ca27fe"};const L={variant:"default"},w=b((o,{radius:a})=>({root:{"--fieldset-radius":a===void 0?void 0:_(a)}})),l=y((o,a)=>{const t=I("Fieldset",L,o),{classNames:s,className:n,style:r,styles:x,unstyled:h,vars:j,legend:u,variant:i,children:v,...S}=t,g=k({name:"Fieldset",classes:f,props:t,className:n,style:r,classNames:s,styles:x,unstyled:h,vars:j,varsResolver:w});return e.jsxs(P,{component:"fieldset",ref:a,variant:i,...g("root",{variant:i}),...S,children:[u&&e.jsx("legend",{...g("legend",{variant:i}),children:u}),v]})});l.classes=f;l.displayName="@mantine/core/Fieldset";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var T=G("outline","mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]);const E=o=>{const{auth:a,social_accounts:t}=B().props,s=a.user;console.log(o);const n=t.some(r=>r.provider==="google");return e.jsx(A,{title:"Pengaturan",pageHeadings:{description:"Pengaturan akun pengguna"},children:e.jsxs(d,{gap:32,children:[e.jsx(l,{p:32,m:0,bg:"#f8f9fa",legend:"Data Pribadi",children:e.jsxs(d,{gap:32,children:[e.jsx(c,{leftSection:e.jsx(M,{}),label:"Nama Lengkap",value:s.full_name,disabled:!0}),e.jsx(c,{leftSection:e.jsx(T,{}),label:"Alamat Surel",value:s.email}),e.jsx(c,{leftSection:e.jsx(F,{}),label:"Nama Pengguna",value:s.username}),e.jsx(N,{leftSection:e.jsx(R,{}),label:"Kata Sandi",placeholder:"Isi jika ingin diganti"})]})}),e.jsx(l,{p:32,m:0,bg:"#f8f9fa",legend:"Media Sosial",children:e.jsx(d,{gap:32,children:n?e.jsx(p,{component:"a",leftSection:e.jsx(m,{}),color:"red",variant:"filled",href:route("oauth.unlink",{provider:"google"}),children:"Lepaskan Google"}):e.jsx(p,{component:"a",leftSection:e.jsx(m,{}),color:"gray",variant:"outline",href:route("oauth.redirect",{provider:"google",flow:"link"}),children:"Tautkan Google"})})})]})})};export{E as default};
