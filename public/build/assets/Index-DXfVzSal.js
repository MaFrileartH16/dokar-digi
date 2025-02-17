import{p as le,u as _,a as H,c as A,j as e,B as T,e as C,g as ie,h as k,i as de,f as D,k as ce,r as X,l as E,n as he,K as pe,o as G,P as ue,b as be,G as K,A as V,q as ge,W as q}from"./app-DrFrAyDV.js";import{a as y,D as M}from"./BaseLayout-D8_00oXb.js";import{A as me,F as R,a as xe,b as fe}from"./AuthenticatedLayout-z7YWsXL6.js";var J={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const je={},ve=A((a,{radius:s,color:t,gradient:r,variant:n,size:l,autoContrast:i})=>{const c=a.variantColorResolver({color:t||a.primaryColor,theme:a,gradient:r,variant:n||"filled",autoContrast:i});return{root:{"--badge-height":k(l,"badge-height"),"--badge-padding-x":k(l,"badge-padding-x"),"--badge-fz":k(l,"badge-fz"),"--badge-radius":s===void 0?void 0:ie(s),"--badge-bg":t||n?c.background:void 0,"--badge-color":t||n?c.color:void 0,"--badge-bd":t||n?c.border:void 0,"--badge-dot-color":n==="dot"?C(t,a):void 0}}}),$=le((a,s)=>{const t=_("Badge",je,a),{classNames:r,className:n,style:l,styles:i,unstyled:c,vars:p,radius:b,color:m,gradient:h,leftSection:u,rightSection:g,children:x,variant:j,fullWidth:d,autoContrast:S,circle:B,mod:W,...F}=t,v=H({name:"Badge",props:t,classes:J,className:n,style:l,classNames:r,styles:i,unstyled:c,vars:p,varsResolver:ve});return e.jsxs(T,{variant:j,mod:[{block:d,circle:B,"with-right-section":!!g,"with-left-section":!!u},W],...v("root",{variant:j}),ref:s,...F,children:[u&&e.jsx("span",{...v("section"),"data-position":"left",children:u}),e.jsx("span",{...v("label"),children:x}),g&&e.jsx("span",{...v("section"),"data-position":"right",children:g})]})});$.classes=J;$.displayName="@mantine/core/Badge";const[ye,Te]=de("Table component was not found in the tree");var w={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function we(a,s){if(!s)return;const t={};return s.columnBorder&&a.withColumnBorders&&(t["data-with-column-border"]=!0),s.rowBorder&&a.withRowBorders&&(t["data-with-row-border"]=!0),s.striped&&a.striped&&(t["data-striped"]=a.striped),s.highlightOnHover&&a.highlightOnHover&&(t["data-hover"]=!0),s.captionSide&&a.captionSide&&(t["data-side"]=a.captionSide),s.stickyHeader&&a.stickyHeader&&(t["data-sticky"]=!0),t}function f(a,s){const t=`Table${a.charAt(0).toUpperCase()}${a.slice(1)}`,r=D((n,l)=>{const i=_(t,{},n),{classNames:c,className:p,style:b,styles:m,...h}=i,u=Te();return e.jsx(T,{component:a,ref:l,...we(u,s),...u.getStyles(a,{className:p,classNames:c,style:b,styles:m,props:i}),...h})});return r.displayName=`@mantine/core/${t}`,r.classes=w,r}const N=f("th",{columnBorder:!0}),Q=f("td",{columnBorder:!0}),P=f("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),Y=f("thead",{stickyHeader:!0}),Z=f("tbody"),ee=f("tfoot"),ae=f("caption",{captionSide:!0});function I({data:a}){return e.jsxs(e.Fragment,{children:[a.caption&&e.jsx(ae,{children:a.caption}),a.head&&e.jsx(Y,{children:e.jsx(P,{children:a.head.map((s,t)=>e.jsx(N,{children:s},t))})}),a.body&&e.jsx(Z,{children:a.body.map((s,t)=>e.jsx(P,{children:s.map((r,n)=>e.jsx(Q,{children:r},n))},t))}),a.foot&&e.jsx(ee,{children:e.jsx(P,{children:a.foot.map((s,t)=>e.jsx(N,{children:s},t))})})]})}I.displayName="@mantine/core/TableDataRenderer";const Se={type:"scrollarea"},Ce=A((a,{minWidth:s,type:t})=>({scrollContainer:{"--table-min-width":X(s),"--table-overflow":t==="native"?"auto":void 0}})),O=D((a,s)=>{const t=_("TableScrollContainer",Se,a),{classNames:r,className:n,style:l,styles:i,unstyled:c,vars:p,children:b,minWidth:m,type:h,...u}=t,g=H({name:"TableScrollContainer",classes:w,props:t,className:n,style:l,classNames:r,styles:i,unstyled:c,vars:p,varsResolver:Ce,rootSelector:"scrollContainer"});return e.jsx(T,{component:h==="scrollarea"?ce:"div",...h==="scrollarea"?{offsetScrollbars:"x"}:{},ref:s,...g("scrollContainer"),...u,children:e.jsx("div",{...g("scrollContainerInner"),children:b})})});O.classes=w;O.displayName="@mantine/core/TableScrollContainer";const Pe={withRowBorders:!0,verticalSpacing:7},_e=A((a,{layout:s,captionSide:t,horizontalSpacing:r,verticalSpacing:n,borderColor:l,stripedColor:i,highlightOnHoverColor:c,striped:p,highlightOnHover:b,stickyHeaderOffset:m,stickyHeader:h})=>({table:{"--table-layout":s,"--table-caption-side":t,"--table-horizontal-spacing":E(r),"--table-vertical-spacing":E(n),"--table-border-color":l?C(l,a):void 0,"--table-striped-color":p&&i?C(i,a):void 0,"--table-highlight-on-hover-color":b&&c?C(c,a):void 0,"--table-sticky-header-offset":h?X(m):void 0}})),o=D((a,s)=>{const t=_("Table",Pe,a),{classNames:r,className:n,style:l,styles:i,unstyled:c,vars:p,horizontalSpacing:b,verticalSpacing:m,captionSide:h,stripedColor:u,highlightOnHoverColor:g,striped:x,highlightOnHover:j,withColumnBorders:d,withRowBorders:S,withTableBorder:B,borderColor:W,layout:F,variant:v,data:L,children:te,stickyHeader:se,stickyHeaderOffset:Be,mod:re,tabularNums:oe,...ne}=t,z=H({name:"Table",props:t,className:n,style:l,classes:w,classNames:r,styles:i,unstyled:c,rootSelector:"table",vars:p,varsResolver:_e});return e.jsx(ye,{value:{getStyles:z,stickyHeader:se,striped:x===!0?"odd":x||void 0,highlightOnHover:j,withColumnBorders:d,withRowBorders:S,captionSide:h||"bottom"},children:e.jsx(T,{component:"table",variant:v,ref:s,mod:[{"data-with-table-border":B,"data-tabular-nums":oe},re],...z("table"),...ne,children:te||!!L&&e.jsx(I,{data:L})})})});o.classes=w;o.displayName="@mantine/core/Table";o.Td=Q;o.Th=N;o.Tr=P;o.Thead=Y;o.Tbody=Z;o.Tfoot=ee;o.Caption=ae;o.ScrollContainer=O;o.DataRenderer=I;const U=({label:a,description:s,error:t,...r})=>e.jsxs(T,{children:[a&&e.jsx(y,{fw:500,mb:s?0:8,children:a}),s&&e.jsx(y,{c:"gray",mb:8,children:s}),e.jsx(he,{...r,styles:{input:{padding:r.leftSection||r.rightSection&&"0 16px 0px 56px",borderColor:t?"red":void 0},section:(r.leftSection||r.rightSection)&&{width:24,margin:"0 16px"}}}),t&&e.jsx(y,{c:"red",mt:8,children:t})]}),He=()=>{const{users:a,filters:s}=pe().props,{data:t,total:r,from:n,to:l,last_page:i,current_page:c,path:p}=a,[b,m]=G.useState(s.per_page||5),[h,u]=G.useState(c||1),g=d=>{m(d),u(1),q.get(p,{page:1,per_page:d})},x=d=>{d>=1&&d<=i&&(u(d),q.get(p,{page:d,per_page:b}))},j=t.map((d,S)=>e.jsxs(o.Tr,{h:48,style:{whiteSpace:"nowrap"},children:[e.jsx(o.Td,{children:n+S}),e.jsx(o.Td,{children:d.full_name}),e.jsx(o.Td,{children:d.email}),e.jsx(o.Td,{children:e.jsx($,{variant:"light",color:(()=>{switch(d.roles[0]){case"Kepala Perpustakaan":return"grape";case"Gugus Mutu":return"cyan";case"Pustakawan":return"teal";default:return"gray"}})(),styles:{label:{whiteSpace:"nowrap",overflow:"visible",textOverflow:"clip",minWidth:"auto"}},children:d.roles[0]||"-"})})]},d.id));return e.jsx(me,{title:"Daftar Pengguna",pageHeadings:{description:"Kelola pengguna: tambah, perbarui, dan hapus akun dengan efisien."},children:e.jsxs(ue,{shadow:"none",children:[e.jsx(R,{p:16,justify:"space-between",children:e.jsx(be,{children:"Tambah Pengguna"})}),e.jsx(M,{}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs(o,{style:{minWidth:"100px",whiteSpace:"nowrap"},children:[e.jsx(o.Thead,{h:48,children:e.jsxs(o.Tr,{children:[e.jsx(o.Th,{children:"#"}),e.jsx(o.Th,{children:"Nama Lengkap"}),e.jsx(o.Th,{children:"ALamat Surel"}),e.jsx(o.Th,{children:"Peran"})]})}),e.jsx(o.Tbody,{children:j})]})}),e.jsx(M,{}),e.jsxs(K,{justify:"space-between",align:"start",p:16,display:{base:"flex",md:"none"},children:[e.jsx(V,{variant:"default",onClick:()=>x(h-1),disabled:h===1,children:e.jsx(xe,{})}),e.jsxs(R,{gap:4,align:"center",direction:{base:"column",xs:"row"},children:[e.jsx(U,{w:80,value:b,onChange:g,allowDeselect:!1,data:["5","10","20","50"],defaultValue:"10"}),e.jsxs(y,{align:"center",children:[n,"-",l," dari ",r]})]}),e.jsx(V,{variant:"default",onClick:()=>x(h+1),disabled:h===i,children:e.jsx(fe,{})})]}),e.jsxs(R,{p:16,justify:"space-between",align:"center",display:{base:"none",md:"flex"},children:[e.jsxs(K,{children:[e.jsx(U,{w:80,value:b,onChange:g,allowDeselect:!1,data:["5","10","20","50"],defaultValue:"10"}),e.jsxs(y,{children:[n,"-",l," dari ",r]})]}),e.jsx(ge,{total:i,value:h,onChange:x,display:{base:"none",sm:"flex"}})]})]})})};export{He as default};
