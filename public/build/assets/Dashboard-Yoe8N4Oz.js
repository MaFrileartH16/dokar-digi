import{r as w,p as X,u as m,a as H,i as Y,k as Q,l as ee,j as e,I as se,B as A,n as te,o as f,c as Z,q as U,g as ae,s as re,M as oe,t as ne,N as le,v as ce,w as ie,x as de,y as C,z as ue,C as pe,D as ye,E as he,F as me,A as I,K as ve,G,h as xe,H as S,J as fe,m as ge}from"./app-B5elAGWi.js";import{c as D,S as T,I as we,T as je,B as De}from"./BaseLayout-Dbd_aVUH.js";function be(s=!1,t){const{onOpen:a,onClose:o}={},[c,n]=w.useState(s),l=w.useCallback(()=>{n(r=>r||(a==null||a(),!0))},[a]),i=w.useCallback(()=>{n(r=>r&&(o==null||o(),!1))},[o]),d=w.useCallback(()=>{c?i():l()},[i,l,c]);return[c,{open:l,close:i,toggle:d}]}const ke={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var W={root:"m_8bffd616"};const Se={},M=X((s,t)=>{const a=m("Flex",Se,s),{classNames:o,className:c,style:n,styles:l,unstyled:i,vars:d,gap:r,rowGap:p,columnGap:y,align:u,justify:v,wrap:j,direction:x,...$}=a,q=H({name:"Flex",classes:W,props:a,className:c,style:n,classNames:o,styles:l,unstyled:i,vars:d}),J=Y(),E=Q(),k=ee({styleProps:{gap:r,rowGap:p,columnGap:y,align:u,justify:v,wrap:j,direction:x},theme:J,data:ke});return e.jsxs(e.Fragment,{children:[k.hasResponsiveStyles&&e.jsx(se,{selector:`.${E}`,styles:k.styles,media:k.media}),e.jsx(A,{ref:t,...q("root",{className:E,style:te(k.inlineStyles)}),...$})]})});M.classes=W;M.displayName="@mantine/core/Flex";var K={root:"m_3eebeb36",label:"m_9e365f20"};const Ie={orientation:"horizontal"},Ce=Z((s,{color:t,variant:a,size:o})=>({root:{"--divider-color":t?ae(t,s):void 0,"--divider-border-style":a,"--divider-size":U(o,"divider-size")}})),N=f((s,t)=>{const a=m("Divider",Ie,s),{classNames:o,className:c,style:n,styles:l,unstyled:i,vars:d,color:r,orientation:p,label:y,labelPosition:u,mod:v,...j}=a,x=H({name:"Divider",classes:K,props:a,className:c,style:n,classNames:o,styles:l,unstyled:i,vars:d,varsResolver:Ce});return e.jsx(A,{ref:t,mod:[{orientation:p,"with-label":!!y},v],...x("root"),...j,role:"separator",children:y&&e.jsx(A,{component:"span",mod:{position:u},...x("label"),children:y})})});N.classes=K;N.displayName="@mantine/core/Divider";const[Me,b]=re("Drawer component was not found in tree");var g={root:"m_f11b401e",header:"m_5a7c2c9",content:"m_b8a05bbd",inner:"m_31cd769a"};const Ne={},P=f((s,t)=>{const a=m("DrawerBody",Ne,s),{classNames:o,className:c,style:n,styles:l,vars:i,...d}=a,r=b();return e.jsx(oe,{ref:t,...r.getStyles("body",{classNames:o,style:n,styles:l,className:c}),...d})});P.classes=g;P.displayName="@mantine/core/DrawerBody";const Pe={},B=f((s,t)=>{const a=m("DrawerCloseButton",Pe,s),{classNames:o,className:c,style:n,styles:l,vars:i,...d}=a,r=b();return e.jsx(ne,{ref:t,...r.getStyles("close",{classNames:o,style:n,styles:l,className:c}),...d})});B.classes=g;B.displayName="@mantine/core/DrawerCloseButton";const Be={},z=f((s,t)=>{const a=m("DrawerContent",Be,s),{classNames:o,className:c,style:n,styles:l,vars:i,children:d,radius:r,__hidden:p,...y}=a,u=b(),v=u.scrollAreaComponent||le;return e.jsx(ce,{...u.getStyles("content",{className:c,style:n,styles:l,classNames:o}),innerProps:u.getStyles("inner",{className:c,style:n,styles:l,classNames:o}),ref:t,...y,radius:r||u.radius||0,"data-hidden":p||void 0,children:e.jsx(v,{style:{height:"calc(100vh - var(--drawer-offset) * 2)"},children:d})})});z.classes=g;z.displayName="@mantine/core/DrawerContent";const ze={},F=f((s,t)=>{const a=m("DrawerHeader",ze,s),{classNames:o,className:c,style:n,styles:l,vars:i,...d}=a,r=b();return e.jsx(ie,{ref:t,...r.getStyles("header",{classNames:o,style:n,styles:l,className:c}),...d})});F.classes=g;F.displayName="@mantine/core/DrawerHeader";const Fe={},O=f((s,t)=>{const a=m("DrawerOverlay",Fe,s),{classNames:o,className:c,style:n,styles:l,vars:i,...d}=a,r=b();return e.jsx(de,{ref:t,...r.getStyles("overlay",{classNames:o,style:n,styles:l,className:c}),...d})});O.classes=g;O.displayName="@mantine/core/DrawerOverlay";function Oe(s){switch(s){case"top":return"flex-start";case"bottom":return"flex-end";default:return}}function Re(s){if(s==="top"||s==="bottom")return"0 0 calc(100% - var(--drawer-offset, 0rem) * 2)"}const _e={top:"slide-down",bottom:"slide-up",left:"slide-right",right:"slide-left"},$e={top:"slide-down",bottom:"slide-up",right:"slide-right",left:"slide-left"},Ae={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:C("modal"),position:"left"},Te=Z((s,{position:t,size:a,offset:o})=>({root:{"--drawer-size":U(a,"drawer-size"),"--drawer-flex":Re(t),"--drawer-height":t==="left"||t==="right"?void 0:"var(--drawer-size)","--drawer-align":Oe(t),"--drawer-justify":t==="right"?"flex-end":void 0,"--drawer-offset":ye(o)}})),R=f((s,t)=>{const a=m("DrawerRoot",Ae,s),{classNames:o,className:c,style:n,styles:l,unstyled:i,vars:d,scrollAreaComponent:r,position:p,transitionProps:y,radius:u,...v}=a,{dir:j}=ue(),x=H({name:"Drawer",classes:g,props:a,className:c,style:n,classNames:o,styles:l,unstyled:i,vars:d,varsResolver:Te}),$=(j==="rtl"?$e:_e)[p];return e.jsx(Me,{value:{scrollAreaComponent:r,getStyles:x,radius:u},children:e.jsx(pe,{ref:t,...x("root"),transitionProps:{transition:$,...y},unstyled:i,...v})})});R.classes=g;R.displayName="@mantine/core/DrawerRoot";const[He,Ee]=he();function V({children:s}){const[t,a]=w.useState([]),[o,c]=w.useState(C("modal"));return e.jsx(He,{value:{stack:t,addModal:(n,l)=>{a(i=>[...new Set([...i,n])]),c(i=>typeof l=="number"&&typeof i=="number"?Math.max(i,l):i)},removeModal:n=>a(l=>l.filter(i=>i!==n)),getZIndex:n=>`calc(${o} + ${t.indexOf(n)} + 1)`,currentId:t[t.length-1],maxZIndex:o},children:s})}V.displayName="@mantine/core/DrawerStack";const Ge={},_=f((s,t)=>{const a=m("DrawerTitle",Ge,s),{classNames:o,className:c,style:n,styles:l,vars:i,...d}=a,r=b();return e.jsx(me,{ref:t,...r.getStyles("title",{classNames:o,style:n,styles:l,className:c}),...d})});_.classes=g;_.displayName="@mantine/core/DrawerTitle";const Le={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:C("modal"),withOverlay:!0,withCloseButton:!0},h=f((s,t)=>{const{title:a,withOverlay:o,overlayProps:c,withCloseButton:n,closeButtonProps:l,children:i,opened:d,stackId:r,zIndex:p,...y}=m("Drawer",Le,s),u=Ee(),v=!!a||n,j=u&&r?{closeOnEscape:u.currentId===r,trapFocus:u.currentId===r,zIndex:u.getZIndex(r)}:{},x=o===!1?!1:r&&u?u.currentId===r:d;return w.useEffect(()=>{u&&r&&(d?u.addModal(r,p||C("modal")):u.removeModal(r))},[d,r,p]),e.jsxs(R,{ref:t,opened:d,zIndex:u&&r?u.getZIndex(r):p,...y,...j,children:[o&&e.jsx(O,{visible:x,transitionProps:u&&r?{duration:0}:void 0,...c}),e.jsxs(z,{__hidden:u&&r&&d?r!==u.currentId:!1,children:[v&&e.jsxs(F,{children:[a&&e.jsx(_,{children:a}),n&&e.jsx(B,{...l})]}),e.jsx(P,{children:i})]})]})});h.classes=g;h.displayName="@mantine/core/Drawer";h.Root=R;h.Overlay=O;h.Content=z;h.Body=P;h.Header=F;h.Title=_;h.CloseButton=B;h.Stack=V;/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ze=D("outline","chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ue=D("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var L=D("outline","home-2","IconHome2",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M10 12h4v4h-4z",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var We=D("outline","logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M9 12h12l-3 -3",key:"svg-1"}],["path",{d:"M18 15l3 -3",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ke=D("outline","menu-4","IconMenu4",[["path",{d:"M7 6h10",key:"svg-0"}],["path",{d:"M4 12h16",key:"svg-1"}],["path",{d:"M7 12h13",key:"svg-2"}],["path",{d:"M7 18h10",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ve=D("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var qe=D("outline","user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]);const Je=()=>{const[s,{open:t,close:a}]=be(!1);return e.jsxs(e.Fragment,{children:[e.jsx(h,{opened:s,onClose:a,title:"Authentication"}),e.jsx(I,{onClick:t,display:{base:"block",md:"none"},color:"gray",variant:"subtle",children:e.jsx(Ke,{})})]})},Xe=()=>{const s=ve();return console.log(s),e.jsxs(M,{w:"100%",p:16,justify:{base:"space-between",md:"end"},bg:"gray.0",children:[e.jsx(Je,{}),e.jsx(Qe,{})]})},Ye=()=>{const[s,t]=w.useState(!1),a=()=>{t(o=>!o)};return e.jsxs(T,{gap:0,w:s?80:400,bg:"gray.0",display:{base:"none",md:"flex"},children:[e.jsxs(G,{gap:0,justify:"space-between",p:16,children:[!s&&e.jsxs(G,{children:[e.jsx(I,{variant:"transparent",children:e.jsx(we,{size:48})}),e.jsx(je,{order:3,children:"Dokar Digi"})]}),e.jsx(I,{onClick:a,variant:"subtle",color:"gray",children:s?e.jsx(Ue,{}):e.jsx(Ze,{})})]}),e.jsx(N,{}),e.jsx(T,{spacing:0,flex:1,p:16,children:s?e.jsx(I,{fullWidth:!0,variant:"subtle",color:"gray",children:e.jsx(L,{})}):e.jsx(xe,{color:"gray",leftSection:e.jsx(L,{}),display:"flex",fullWidth:!0,variant:"subtle",children:"Dasbor"})})]})},Qe=()=>{const s=[{label:"Profil",icon:e.jsx(qe,{})},{label:"Pengaturan",icon:e.jsx(Ve,{})},{label:"Keluar",icon:e.jsx(We,{}),color:"red"}];return e.jsxs(S,{width:200,position:"bottom-end",offset:8,children:[e.jsx(S.Target,{children:e.jsx(fe,{alt:"User"})}),e.jsx(S.Dropdown,{children:s.map((t,a)=>e.jsx(S.Item,{leftSection:t.icon,color:t.color,children:t.label},a))})]})},es=s=>e.jsx(De,{title:s.title,notification:s.notification,children:e.jsxs(M,{flex:1,children:[e.jsx(Ye,{}),e.jsxs(T,{gap:0,w:"100%",children:[e.jsx(Xe,{}),e.jsx(N,{}),s.children]})]})});function as(s){console.log(s);const{post:t}=ge();return e.jsx(es,{title:"Dashboard",notification:s.notification,children:"sadsdaasd"})}export{as as default};
