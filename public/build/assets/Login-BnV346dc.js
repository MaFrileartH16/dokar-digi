import{p as j,u as M,a as w,j as a,B as c,P as f,T as b,m as I,b as S,A as P,c as u}from"./app-BEDDHK4x.js";import{c as i,T as n,B as A,I as C,a as B,S as E,D as L}from"./BaseLayout-DCiFf6_0.js";var h={root:"m_4451eb3a"};const T={},d=j((r,e)=>{const t=M("Center",T,r),{classNames:o,className:s,style:l,styles:m,unstyled:p,vars:v,inline:g,mod:k,...x}=t,y=w({name:"Center",props:t,classes:h,className:s,style:l,classNames:o,styles:m,unstyled:p,vars:v});return a.jsx(c,{ref:e,mod:[{inline:g},k],...y("root"),...x})});d.classes=h;d.displayName="@mantine/core/Center";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var z=i("outline","brand-google","IconBrandGoogle",[["path",{d:"M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var D=i("outline","lock-open-2","IconLockOpen2",[["path",{d:"M3 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M9 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M13 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var G=i("outline","lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var N=i("outline","mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var F=i("outline","password","IconPassword",[["path",{d:"M12 10v4",key:"svg-0"}],["path",{d:"M10 13l4 -2",key:"svg-1"}],["path",{d:"M10 11l4 2",key:"svg-2"}],["path",{d:"M5 10v4",key:"svg-3"}],["path",{d:"M3 13l4 -2",key:"svg-4"}],["path",{d:"M3 11l4 2",key:"svg-5"}],["path",{d:"M19 10v4",key:"svg-6"}],["path",{d:"M17 13l4 -2",key:"svg-7"}],["path",{d:"M17 11l4 2",key:"svg-8"}]]);const K=({label:r,description:e,error:t,...o})=>a.jsxs(c,{children:[a.jsx(n,{fw:500,children:r}),e&&a.jsx(n,{c:"gray",mb:8,children:e}),a.jsx(f,{mt:e?0:8,...o,styles:{input:{borderColor:t?"red":void 0}}}),t&&a.jsx(n,{c:"red",mt:8,children:t})]}),O=({label:r,description:e,error:t,...o})=>a.jsxs(c,{children:[a.jsx(n,{fw:500,children:r}),e&&a.jsx(n,{c:"gray",mb:8,children:e}),a.jsx(b,{mt:e?0:8,...o,styles:{input:{borderColor:t?"red":void 0}}}),t&&a.jsx(n,{c:"red",mt:8,children:t})]}),$=r=>{console.log(r);const e=I({email:"",password:""}),t=s=>{const l=s.trim();switch(!0){case!l:e.setError("email","Alamat surel harus diisi");break;case!/\S+@\S+\.\S+/.test(l):e.setError("email","Alamat surel tidak sah");break;default:e.setError("email","")}},o=s=>{const l=s.trim();switch(!0){case!l:e.setError("password","Kata sandi harus diisi");break;default:e.setError("password","")}};return a.jsx("form",{onSubmit:s=>{s.preventDefault(),e.post(route("login"))},children:a.jsx(A,{title:"Masuk Akun",notification:r.notification,children:a.jsx(d,{flex:1,p:16,children:a.jsxs(S,{bg:"gray.0",shadow:"none",withBorder:!0,p:32,w:480,children:[a.jsx(d,{children:a.jsx(P,{variant:"transparent",children:a.jsx(C,{size:48})})}),a.jsx(B,{align:"center",order:2,children:"Masuk Akun"}),a.jsxs(E,{gap:16,my:16,children:[a.jsx(O,{autoFocus:!0,value:e.data.email,label:"Alamat Surel",placeholder:"Masukkan alamat surel",leftSection:a.jsx(N,{}),onChange:s=>{e.setData("email",s.target.value),t(s.target.value)},error:e.errors.email}),a.jsx(K,{value:e.data.password,leftSection:a.jsx(F,{}),label:"Kata Sandi",placeholder:"Masukkan kata sandi",onChange:s=>{e.setData("password",s.target.value),o(s.target.value)},error:e.errors.password})]}),a.jsx(u,{type:"submit",leftSection:!e.data.password.trim()||!e.data.email.trim()?a.jsx(G,{}):a.jsx(D,{}),loading:e.processing,disabled:!e.data.password.trim()||!e.data.email.trim(),fullWidth:!0,children:"Masuk"}),a.jsx(L,{my:16,label:"Atau",labelPosition:"center"}),a.jsx(u,{component:"a",fullWidth:!0,leftSection:a.jsx(z,{}),color:"gray",variant:"outline",href:route("social-account.redirect",{provider:"google"}),children:"Masuk Google"})]})})})})};export{$ as default};
