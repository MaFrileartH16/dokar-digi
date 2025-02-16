import{r as y,p as q,u as m,a as G,d as me,e as ve,f as ge,j as e,I as fe,B as I,g as je,h as ke,i as f,k as Y,l as we,n as be,o as Se,M as De,q as Ie,N as Me,s as Ce,t as Ne,v as Pe,w as A,x as Be,y as Fe,z as Ae,C as ze,D as _e,E as $e,G as F,A as C,S as b,c as J,K as Q,W as ee,F as B,H as Oe}from"./app-B18kRq4R.js";import{T as se,c as p,I as te,a as U,D as W,S as ae,B as Re}from"./BaseLayout-CufUq5s2.js";function Te(s=!1,a){const{onOpen:t,onClose:r}={},[l,o]=y.useState(s),c=y.useCallback(()=>{o(n=>n||(t==null||t(),!0))},[t]),i=y.useCallback(()=>{o(n=>n&&(r==null||r(),!1))},[r]),d=y.useCallback(()=>{l?i():c()},[i,c,l]);return[l,{open:c,close:i,toggle:d}]}const Ee={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var re={root:"m_8bffd616"};const Le={},z=q((s,a)=>{const t=m("Flex",Le,s),{classNames:r,className:l,style:o,styles:c,unstyled:i,vars:d,gap:n,rowGap:x,columnGap:k,align:u,justify:h,wrap:S,direction:g,...w}=t,M=G({name:"Flex",classes:re,props:t,className:l,style:o,classNames:r,styles:c,unstyled:i,vars:d}),H=me(),P=ve(),D=ge({styleProps:{gap:n,rowGap:x,columnGap:k,align:u,justify:h,wrap:S,direction:g},theme:H,data:Ee});return e.jsxs(e.Fragment,{children:[D.hasResponsiveStyles&&e.jsx(fe,{selector:`.${P}`,styles:D.styles,media:D.media}),e.jsx(I,{ref:a,...M("root",{className:P,style:je(D.inlineStyles)}),...w})]})});z.classes=re;z.displayName="@mantine/core/Flex";var oe={root:"m_849cf0da"};const He={underline:"hover"},Z=q((s,a)=>{const{underline:t,className:r,unstyled:l,mod:o,...c}=m("Anchor",He,s);return e.jsx(se,{component:"a",ref:a,className:ke({[oe.root]:!l},r),...c,mod:[{underline:t},o],__staticSelector:"Anchor",unstyled:l})});Z.classes=oe;Z.displayName="@mantine/core/Anchor";var le={root:"m_8b3717df",breadcrumb:"m_f678d540",separator:"m_3b8f2208"};const Ge={separator:"/"},Ue=Y((s,{separatorMargin:a})=>({root:{"--bc-separator-margin":be(a)}})),X=f((s,a)=>{const t=m("Breadcrumbs",Ge,s),{classNames:r,className:l,style:o,styles:c,unstyled:i,vars:d,children:n,separator:x,separatorMargin:k,...u}=t,h=G({name:"Breadcrumbs",classes:le,props:t,className:l,style:o,classNames:r,styles:c,unstyled:i,vars:d,varsResolver:Ue}),S=y.Children.toArray(n).reduce((g,w,M,H)=>{var D;const P=we(w)?y.cloneElement(w,{...h("breadcrumb",{className:(D=w.props)==null?void 0:D.className}),key:M}):y.createElement("div",{...h("breadcrumb"),key:M},w);return g.push(P),M!==H.length-1&&g.push(y.createElement(I,{...h("separator"),key:`separator-${M}`},x)),g},[]);return e.jsx(I,{ref:a,...h("root"),...u,children:S})});X.classes=le;X.displayName="@mantine/core/Breadcrumbs";const[We,N]=Se("Drawer component was not found in tree");var j={root:"m_f11b401e",header:"m_5a7c2c9",content:"m_b8a05bbd",inner:"m_31cd769a"};const Ze={},_=f((s,a)=>{const t=m("DrawerBody",Ze,s),{classNames:r,className:l,style:o,styles:c,vars:i,...d}=t,n=N();return e.jsx(De,{ref:a,...n.getStyles("body",{classNames:r,style:o,styles:c,className:l}),...d})});_.classes=j;_.displayName="@mantine/core/DrawerBody";const Xe={},$=f((s,a)=>{const t=m("DrawerCloseButton",Xe,s),{classNames:r,className:l,style:o,styles:c,vars:i,...d}=t,n=N();return e.jsx(Ie,{ref:a,...n.getStyles("close",{classNames:r,style:o,styles:c,className:l}),...d})});$.classes=j;$.displayName="@mantine/core/DrawerCloseButton";const Ke={},O=f((s,a)=>{const t=m("DrawerContent",Ke,s),{classNames:r,className:l,style:o,styles:c,vars:i,children:d,radius:n,__hidden:x,...k}=t,u=N(),h=u.scrollAreaComponent||Me;return e.jsx(Ce,{...u.getStyles("content",{className:l,style:o,styles:c,classNames:r}),innerProps:u.getStyles("inner",{className:l,style:o,styles:c,classNames:r}),ref:a,...k,radius:n||u.radius||0,"data-hidden":x||void 0,children:e.jsx(h,{style:{height:"calc(100vh - var(--drawer-offset) * 2)"},children:d})})});O.classes=j;O.displayName="@mantine/core/DrawerContent";const Ve={},R=f((s,a)=>{const t=m("DrawerHeader",Ve,s),{classNames:r,className:l,style:o,styles:c,vars:i,...d}=t,n=N();return e.jsx(Ne,{ref:a,...n.getStyles("header",{classNames:r,style:o,styles:c,className:l}),...d})});R.classes=j;R.displayName="@mantine/core/DrawerHeader";const qe={},T=f((s,a)=>{const t=m("DrawerOverlay",qe,s),{classNames:r,className:l,style:o,styles:c,vars:i,...d}=t,n=N();return e.jsx(Pe,{ref:a,...n.getStyles("overlay",{classNames:r,style:o,styles:c,className:l}),...d})});T.classes=j;T.displayName="@mantine/core/DrawerOverlay";function Ye(s){switch(s){case"top":return"flex-start";case"bottom":return"flex-end";default:return}}function Je(s){if(s==="top"||s==="bottom")return"0 0 calc(100% - var(--drawer-offset, 0rem) * 2)"}const Qe={top:"slide-down",bottom:"slide-up",left:"slide-right",right:"slide-left"},es={top:"slide-down",bottom:"slide-up",right:"slide-right",left:"slide-left"},ss={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:A("modal"),position:"left"},ts=Y((s,{position:a,size:t,offset:r})=>({root:{"--drawer-size":ze(t,"drawer-size"),"--drawer-flex":Je(a),"--drawer-height":a==="left"||a==="right"?void 0:"var(--drawer-size)","--drawer-align":Ye(a),"--drawer-justify":a==="right"?"flex-end":void 0,"--drawer-offset":Ae(r)}})),E=f((s,a)=>{const t=m("DrawerRoot",ss,s),{classNames:r,className:l,style:o,styles:c,unstyled:i,vars:d,scrollAreaComponent:n,position:x,transitionProps:k,radius:u,...h}=t,{dir:S}=Be(),g=G({name:"Drawer",classes:j,props:t,className:l,style:o,classNames:r,styles:c,unstyled:i,vars:d,varsResolver:ts}),w=(S==="rtl"?es:Qe)[x];return e.jsx(We,{value:{scrollAreaComponent:n,getStyles:g,radius:u},children:e.jsx(Fe,{ref:a,...g("root"),transitionProps:{transition:w,...k},unstyled:i,...h})})});E.classes=j;E.displayName="@mantine/core/DrawerRoot";const[as,rs]=_e();function ne({children:s}){const[a,t]=y.useState([]),[r,l]=y.useState(A("modal"));return e.jsx(as,{value:{stack:a,addModal:(o,c)=>{t(i=>[...new Set([...i,o])]),l(i=>typeof c=="number"&&typeof i=="number"?Math.max(i,c):i)},removeModal:o=>t(c=>c.filter(i=>i!==o)),getZIndex:o=>`calc(${r} + ${a.indexOf(o)} + 1)`,currentId:a[a.length-1],maxZIndex:r},children:s})}ne.displayName="@mantine/core/DrawerStack";const os={},L=f((s,a)=>{const t=m("DrawerTitle",os,s),{classNames:r,className:l,style:o,styles:c,vars:i,...d}=t,n=N();return e.jsx($e,{ref:a,...n.getStyles("title",{classNames:r,style:o,styles:c,className:l}),...d})});L.classes=j;L.displayName="@mantine/core/DrawerTitle";const ls={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:A("modal"),withOverlay:!0,withCloseButton:!0},v=f((s,a)=>{const{title:t,withOverlay:r,overlayProps:l,withCloseButton:o,closeButtonProps:c,children:i,opened:d,stackId:n,zIndex:x,...k}=m("Drawer",ls,s),u=rs(),h=!!t||o,S=u&&n?{closeOnEscape:u.currentId===n,trapFocus:u.currentId===n,zIndex:u.getZIndex(n)}:{},g=r===!1?!1:n&&u?u.currentId===n:d;return y.useEffect(()=>{u&&n&&(d?u.addModal(n,x||A("modal")):u.removeModal(n))},[d,n,x]),e.jsxs(E,{ref:a,opened:d,zIndex:u&&n?u.getZIndex(n):x,...k,...S,children:[r&&e.jsx(T,{visible:g,transitionProps:u&&n?{duration:0}:void 0,...l}),e.jsxs(O,{__hidden:u&&n&&d?n!==u.currentId:!1,children:[h&&e.jsxs(R,{children:[t&&e.jsx(L,{children:t}),o&&e.jsx($,{...c})]}),e.jsx(_,{children:i})]})]})});v.classes=j;v.displayName="@mantine/core/Drawer";v.Root=E;v.Overlay=T;v.Content=O;v.Body=_;v.Header=R;v.Title=L;v.CloseButton=$;v.Stack=ne;/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ns=p("outline","chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ce=p("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ie=p("outline","dashboard","IconDashboard",[["path",{d:"M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M13.45 11.55l2.05 -2.05",key:"svg-1"}],["path",{d:"M6.4 20a9 9 0 1 1 11.2 0z",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var de=p("outline","file","IconFile",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var cs=p("outline","logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M9 12h12l-3 -3",key:"svg-1"}],["path",{d:"M18 15l3 -3",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var is=p("outline","menu-4","IconMenu4",[["path",{d:"M7 6h10",key:"svg-0"}],["path",{d:"M4 12h16",key:"svg-1"}],["path",{d:"M7 12h13",key:"svg-2"}],["path",{d:"M7 18h10",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ds=p("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ue=p("outline","shield-lock","IconShieldLock",[["path",{d:"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",key:"svg-0"}],["path",{d:"M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 12l0 2.5",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var K=p("outline","user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var us=p("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var pe=p("filled","dashboard-filled","IconDashboardFilled",[["path",{d:"M12 2.954a10 10 0 0 1 6.222 17.829a1 1 0 0 1 -.622 .217h-11.2a1 1 0 0 1 -.622 -.217a10 10 0 0 1 6.222 -17.829m4.207 5.839a1 1 0 0 0 -1.414 0l-2.276 2.274a2.003 2.003 0 0 0 -2.514 1.815l-.003 .118a2 2 0 1 0 3.933 -.517l2.274 -2.276a1 1 0 0 0 0 -1.414",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var he=p("filled","file-filled","IconFileFilled",[["path",{d:"M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h5z",key:"svg-0"}],["path",{d:"M19 7h-4l-.001 -4.001z",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ye=p("filled","shield-lock-filled","IconShieldLockFilled",[["path",{d:"M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm.002 7a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 0 0 .995 1.581v1.769l.007 .117a1 1 0 0 0 1.993 -.117l.001 -1.768a2 2 0 0 0 -1.001 -3.732z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var xe=p("filled","user-filled","IconUserFilled",[["path",{d:"M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z",key:"svg-0"}],["path",{d:"M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z",key:"svg-1"}]]);const ps=[{label:"Dasbor",leftSection:s=>s?e.jsx(pe,{}):e.jsx(ie,{}),route:"dashboard",onClick:()=>b.get(route("dashboard"))},{label:"Pengguna",leftSection:s=>s?e.jsx(xe,{}):e.jsx(K,{}),route:"users",onClick:()=>b.get(route("users.index"))},{label:"Peran",leftSection:s=>s?e.jsx(ye,{}):e.jsx(ue,{}),route:"roles",onClick:()=>b.get(route("roles.index"))},{label:"Dokumen",leftSection:s=>s?e.jsx(he,{}):e.jsx(de,{}),route:"documents",onClick:()=>b.get(route("documents.index"))}],hs=()=>{const[s,{open:a,close:t}]=Te(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(v,{size:"xs",opened:s,onClose:t,withCloseButton:!1,styles:{body:{padding:0,height:"100%"}},children:[e.jsxs(F,{gap:0,justify:"space-between",p:16,children:[e.jsxs(F,{gap:0,children:[e.jsx(C,{variant:"transparent",children:e.jsx(te,{size:32})}),e.jsx(U,{order:3,children:"Dokar Digi"})]}),e.jsx(C,{variant:"subtle",onClick:t,color:"gray",children:e.jsx(us,{})})]}),e.jsx(W,{}),e.jsx(I,{flex:1,p:16,children:ps.map(({label:r,route:l,leftSection:o,onClick:c})=>{const i=window.location.pathname.includes(l);return e.jsx(J,{color:i?"blue":"gray",display:"flex",fullWidth:!0,variant:"subtle",leftSection:o(i),onClick:c,children:r},r)})})]}),e.jsx(C,{onClick:a,display:{base:"block",sm:"none"},color:"gray",variant:"subtle",children:e.jsx(is,{})})]})},ys=()=>(Q(),e.jsxs(z,{w:"100%",p:16,justify:{base:"space-between",sm:"end"},bg:"gray.0",children:[e.jsx(hs,{}),e.jsx(vs,{})]})),V=[{label:"Dasbor",leftSection:s=>s?e.jsx(pe,{}):e.jsx(ie,{}),route:"dashboard",onClick:()=>b.get(route("dashboard"))},{label:"Pengguna",leftSection:s=>s?e.jsx(xe,{}):e.jsx(K,{}),route:"users",onClick:()=>b.get(route("users.index"))},{label:"Peran",leftSection:s=>s?e.jsx(ye,{}):e.jsx(ue,{}),route:"roles",onClick:()=>b.get(route("roles.index"))},{label:"Dokumen",leftSection:s=>s?e.jsx(he,{}):e.jsx(de,{}),route:"documents",onClick:()=>b.get(route("documents.index"))}],xs=()=>{const[s,a]=y.useState(!1),{url:t}=Q(),r=()=>{a(l=>!l)};return e.jsxs(ae,{gap:0,w:s?80:400,bg:"gray.0",display:{base:"none",sm:"flex"},children:[e.jsxs(F,{gap:0,justify:"space-between",p:16,children:[!s&&e.jsxs(F,{gap:0,children:[e.jsx(C,{variant:"transparent",children:e.jsx(te,{size:32})}),e.jsx(U,{order:3,children:"Dokar Digi"})]}),e.jsx(C,{onClick:r,variant:"subtle",color:"gray",children:s?e.jsx(ce,{}):e.jsx(ns,{})})]}),e.jsx(W,{}),e.jsx(I,{flex:1,p:16,children:s?e.jsx(I,{children:V.map(({leftSection:l,label:o,route:c,...i})=>{const d=t.includes(c);return e.jsx(C,{fullWidth:!0,variant:"subtle",color:d?"blue":"gray",...i,children:l(d)},o)})}):V.map(({label:l,route:o,leftSection:c,...i})=>{const d=t.includes(o);return e.jsx(J,{color:d?"blue":"gray",display:"flex",fullWidth:!0,variant:"subtle",leftSection:c(d),...i,children:l},l)})})]})},ms=({title:s,breadcrumbs:a=[],description:t})=>e.jsxs(e.Fragment,{children:[a.length>0&&e.jsx(X,{styles:{separator:{margin:"0 4px"}},separator:e.jsx(ce,{}),children:a.map((r,l)=>{const o=l===a.length-1;return e.jsx(Z,{underline:o?"never":"hover",onClick:()=>!o&&ee.get(route(r.route)),c:o?"gray":"blue",children:r.title},l)})}),e.jsx(U,{fw:600,order:2,children:s}),t&&e.jsx(se,{c:"gray",children:t})]}),vs=()=>{const s=[{label:"Profil",leftSection:e.jsx(K,{})},{label:"Pengaturan",leftSection:e.jsx(ds,{})},{label:"Keluar",leftSection:e.jsx(cs,{}),color:"red",onClick:()=>ee.post(route("logout"))}];return e.jsxs(B,{width:200,position:"bottom-end",offset:8,children:[e.jsx(B.Target,{style:{cursor:"pointer"},children:e.jsx(Oe,{alt:"User"})}),e.jsx(B.Dropdown,{children:s.map(({label:a,...t},r)=>e.jsx(B.Item,{...t,children:a},r))})]})},js=s=>{const{pageHeadings:a={}}=s,{breadcrumbs:t=[],description:r}=a;return e.jsx(Re,{title:s.title,notification:s.notification,children:e.jsxs(z,{flex:1,children:[e.jsx(xs,{}),e.jsxs(ae,{gap:0,w:"100%",children:[e.jsx(ys,{}),e.jsx(W,{}),e.jsxs(I,{flex:1,py:32,px:{base:16,md:32},children:[e.jsx(ms,{title:s.title,breadcrumbs:t,description:r}),s.children]})]})]})})};export{js as A};
