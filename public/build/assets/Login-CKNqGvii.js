import{p as k,u as j,a as M,j as a,B as w,P as f,T as I,m as b,b as S,A as P,c}from"./app-L6Usoex6.js";import{c as l,T as i,B as C,I as A,a as B,S as E,D as L}from"./BaseLayout-FKEOasmL.js";var u={root:"m_4451eb3a"};const T={},d=k((n,e)=>{const s=j("Center",T,n),{classNames:r,className:t,style:o,styles:h,unstyled:g,vars:p,inline:v,mod:m,...y}=s,x=M({name:"Center",props:s,classes:u,className:t,style:o,classNames:r,styles:h,unstyled:g,vars:p});return a.jsx(w,{ref:e,mod:[{inline:v},m],...x("root"),...y})});d.classes=u;d.displayName="@mantine/core/Center";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var z=l("outline","brand-google","IconBrandGoogle",[["path",{d:"M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var D=l("outline","lock-open-2","IconLockOpen2",[["path",{d:"M3 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M9 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M13 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var N=l("outline","lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var F=l("outline","mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var G=l("outline","password","IconPassword",[["path",{d:"M12 10v4",key:"svg-0"}],["path",{d:"M10 13l4 -2",key:"svg-1"}],["path",{d:"M10 11l4 2",key:"svg-2"}],["path",{d:"M5 10v4",key:"svg-3"}],["path",{d:"M3 13l4 -2",key:"svg-4"}],["path",{d:"M3 11l4 2",key:"svg-5"}],["path",{d:"M19 10v4",key:"svg-6"}],["path",{d:"M17 13l4 -2",key:"svg-7"}],["path",{d:"M17 11l4 2",key:"svg-8"}]]);const K=({label:n,description:e,error:s,...r})=>a.jsxs(a.Fragment,{children:[n&&a.jsx(i,{mb:e?0:8,fw:500,children:n}),e&&a.jsx(i,{c:"gray",mb:8,children:e}),a.jsx(f,{...r,styles:{input:{borderColor:s?"red":void 0}}}),s&&a.jsx(i,{c:"red",mt:8,children:s})]}),O=({label:n,description:e,error:s,...r})=>a.jsxs(a.Fragment,{children:[n&&a.jsx(i,{mb:e?0:8,fw:500,children:n}),e&&a.jsx(i,{c:"gray",mb:8,children:e}),a.jsx(I,{...r,styles:{input:{borderColor:s?"red":void 0,padding:r.leftSection||r.rightSection?"0 16px 0px 56px":"0 16px"},section:(r.leftSection||r.rightSection)&&{width:24,margin:"0 16px"}}}),s&&a.jsx(i,{c:"red",mt:8,children:s})]}),$=n=>{console.log(n);const e=b({identity:"",password:""}),s=t=>{const o=t.trim();switch(!0){case!o:e.setError("identity","Alamat surel atau nama pengguna harus diisi");break;case(!/\S+@\S+\.\S+/.test(o)&&o.length<3):e.setError("identity","Nama pengguna atau alamat surel tidak sah");break;default:e.setError("identity","")}},r=t=>{const o=t.trim();switch(!0){case!o:e.setError("password","Kata sandi harus diisi");break;default:e.setError("password","")}};return a.jsx("form",{onSubmit:t=>{t.preventDefault(),e.post(route("login"))},children:a.jsx(C,{title:"Masuk Akun",children:a.jsx(d,{flex:1,p:16,children:a.jsxs(S,{bg:"gray.0",shadow:"none",withBorder:!0,p:32,w:480,children:[a.jsx(d,{children:a.jsx(P,{variant:"transparent",children:a.jsx(A,{size:48})})}),a.jsx(B,{align:"center",order:2,children:"Masuk Akun"}),a.jsxs(E,{gap:16,my:16,children:[a.jsx(O,{autoFocus:!0,value:e.data.identity,label:"Alamat Surel / Nama Pengguna",placeholder:"Masukkan alamat surel atau nama pengguna",leftSection:a.jsx(F,{}),onChange:t=>{e.setData("identity",t.target.value),s(t.target.value)},error:e.errors.identity}),a.jsx(K,{value:e.data.password,leftSection:a.jsx(G,{}),label:"Kata Sandi",placeholder:"Masukkan kata sandi",onChange:t=>{e.setData("password",t.target.value),r(t.target.value)},error:e.errors.password})]}),a.jsx(c,{type:"submit",leftSection:!e.data.password.trim()||!e.data.identity.trim()?a.jsx(N,{}):a.jsx(D,{}),loading:e.processing,disabled:!e.data.password.trim()||!e.data.identity.trim(),fullWidth:!0,children:"Masuk"}),a.jsx(L,{my:16,label:"Atau",labelPosition:"center"}),a.jsx(c,{component:"a",fullWidth:!0,leftSection:a.jsx(z,{}),color:"gray",variant:"outline",href:route("social-account.redirect",{provider:"google"}),children:"Masuk Google"})]})})})})};export{$ as default};
