import{r as p,L as de,q as O,u as S,x as K,a as C,c as z,j as s,O as ee,B as j,C as A,D as Ae,g as te,Q as he,R as me,S as Ie,i as Ge,U as ve,V as ge,X as ye,Y as we,Z as Le,_ as Be,$ as We,a0 as _e,a1 as Ue,a2 as He,a3 as Ve,a4 as Xe,a5 as Ye,a6 as Qe,a7 as Ze,a8 as fe,a9 as qe,aa as q,y as Je,ab as Ke,ac as xe,ad as et,ae as tt,af as ot,A as nt,ag as ue,ah as st}from"./app-BkmJD7jH.js";function J(){return typeof window<"u"?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function rt({x:e,y:o}){if(typeof window<"u"){const t={behavior:"smooth"};typeof e=="number"&&(t.left=e),typeof o=="number"&&(t.top=o),window.scrollTo(t)}}function at(){const[e,o]=p.useState({x:0,y:0});return de("scroll",()=>o(J())),de("resize",()=>o(J())),p.useEffect(()=>{o(J())},[]),[e,rt]}function be(e,o){return Array.isArray(e)?[...e].reduce((t,n)=>({...t,...be(n,o)}),{}):typeof e=="function"?e(o):e??{}}var Pe={root:"m_7f854edf"};const it={position:{bottom:0,right:0},zIndex:K("modal"),withinPortal:!0},lt=z((e,{zIndex:o,position:t})=>({root:{"--affix-z-index":o==null?void 0:o.toString(),"--affix-top":A(t==null?void 0:t.top),"--affix-left":A(t==null?void 0:t.left),"--affix-bottom":A(t==null?void 0:t.bottom),"--affix-right":A(t==null?void 0:t.right)}})),oe=O((e,o)=>{const t=S("Affix",it,e),{classNames:n,className:r,style:i,styles:l,unstyled:h,vars:c,portalProps:f,zIndex:a,withinPortal:d,position:g,...m}=t,u=C({name:"Affix",classes:Pe,props:t,className:r,style:i,classNames:n,styles:l,unstyled:h,vars:c,varsResolver:lt});return s.jsx(ee,{...f,withinPortal:d,children:s.jsx(j,{ref:o,...u("root"),...m})})});oe.classes=Pe;oe.displayName="@mantine/core/Affix";var Se={root:"m_3eebeb36",label:"m_9e365f20"};const ct={orientation:"horizontal"},dt=z((e,{color:o,variant:t,size:n})=>({root:{"--divider-color":o?te(o,e):void 0,"--divider-border-style":t,"--divider-size":Ae(n,"divider-size")}})),Te=O((e,o)=>{const t=S("Divider",ct,e),{classNames:n,className:r,style:i,styles:l,unstyled:h,vars:c,color:f,orientation:a,label:d,labelPosition:g,mod:m,...u}=t,v=C({name:"Divider",classes:Se,props:t,className:r,style:i,classNames:n,styles:l,unstyled:h,vars:c,varsResolver:dt});return s.jsx(j,{ref:o,mod:[{orientation:a,"with-label":!!d},m],...v("root"),...u,role:"separator",children:d&&s.jsx(j,{component:"span",mod:{position:g},...v("label"),children:d})})});Te.classes=Se;Te.displayName="@mantine/core/Divider";const ft={duration:100,transition:"fade"};function ut(e,o){return{...ft,...o,...e}}function pt({offset:e,position:o,defaultOpened:t}){const[n,r]=p.useState(t),i=p.useRef(null),{x:l,y:h,elements:c,refs:f,update:a,placement:d}=he({placement:o,middleware:[me({crossAxis:!0,padding:5,rootBoundary:"document"})]}),g=d.includes("right")?e:o.includes("left")?e*-1:0,m=d.includes("bottom")?e:o.includes("top")?e*-1:0,u=p.useCallback(({clientX:v,clientY:y})=>{f.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:v,y,left:v+g,top:y+m,right:v,bottom:y}}})},[c.reference]);return p.useEffect(()=>{if(f.floating.current){const v=i.current;v.addEventListener("mousemove",u);const y=Ie(f.floating.current);return y.forEach(b=>{b.addEventListener("scroll",a)}),()=>{v.removeEventListener("mousemove",u),y.forEach(b=>{b.removeEventListener("scroll",a)})}}},[c.reference,f.floating.current,a,u,n]),{handleMouseMove:u,x:l,y:h,opened:n,setOpened:r,boundaryRef:i,floating:f.setFloating}}var W={tooltip:"m_1b3c8819",arrow:"m_f898399f"};const ht={refProp:"ref",withinPortal:!0,offset:10,defaultOpened:!1,position:"right",zIndex:K("popover")},mt=z((e,{radius:o,color:t})=>({tooltip:{"--tooltip-radius":o===void 0?void 0:we(o),"--tooltip-bg":t?te(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),ne=O((e,o)=>{const t=S("TooltipFloating",ht,e),{children:n,refProp:r,withinPortal:i,style:l,className:h,classNames:c,styles:f,unstyled:a,radius:d,color:g,label:m,offset:u,position:v,multiline:y,zIndex:b,disabled:F,defaultOpened:D,variant:$,vars:k,portalProps:T,...E}=t,M=Ge(),w=C({name:"TooltipFloating",props:t,classes:W,className:h,style:l,classNames:c,styles:f,unstyled:a,rootSelector:"tooltip",vars:k,varsResolver:mt}),{handleMouseMove:_,x:G,y:L,opened:U,boundaryRef:H,floating:V,setOpened:B}=pt({offset:u,position:v,defaultOpened:D});if(!ve(n))throw new Error("[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const X=ge(H,ye(n),o),P=n.props,Y=N=>{var R;(R=P.onMouseEnter)==null||R.call(P,N),_(N),B(!0)},Q=N=>{var R;(R=P.onMouseLeave)==null||R.call(P,N),B(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(ee,{...T,withinPortal:i,children:s.jsx(j,{...E,...w("tooltip",{style:{...be(l,M),zIndex:b,display:!F&&U?"block":"none",top:(L&&Math.round(L))??"",left:(G&&Math.round(G))??""}}),variant:$,ref:V,mod:{multiline:y},children:m})}),p.cloneElement(n,{...P,[r]:X,onMouseEnter:Y,onMouseLeave:Q})]})});ne.classes=W;ne.displayName="@mantine/core/TooltipFloating";const Re=p.createContext(!1),vt=Re.Provider,gt=()=>p.useContext(Re),yt={openDelay:0,closeDelay:0};function se(e){const{openDelay:o,closeDelay:t,children:n}=S("TooltipGroup",yt,e);return s.jsx(vt,{value:!0,children:s.jsx(Le,{delay:{open:o,close:t},children:n})})}se.displayName="@mantine/core/TooltipGroup";se.extend=e=>e;function wt(e){if(e===void 0)return{shift:!0,flip:!0};const o={...e};return e.shift===void 0&&(o.shift=!0),e.flip===void 0&&(o.flip=!0),o}function xt(e){const o=wt(e.middlewares),t=[Ze(e.offset)];return o.shift&&t.push(me(typeof o.shift=="boolean"?{padding:8}:{padding:8,...o.shift})),o.flip&&t.push(typeof o.flip=="boolean"?fe():fe(o.flip)),t.push(qe({element:e.arrowRef,padding:e.arrowOffset})),o.inline?t.push(typeof o.inline=="boolean"?q():q(o.inline)):e.inline&&t.push(q()),t}function bt(e){var T,E,M;const[o,t]=p.useState(e.defaultOpened),r=typeof e.opened=="boolean"?e.opened:o,i=gt(),l=Be(),h=p.useCallback(w=>{t(w),w&&F(l)},[l]),{x:c,y:f,context:a,refs:d,update:g,placement:m,middlewareData:{arrow:{x:u,y:v}={}}}=he({strategy:e.strategy,placement:e.position,open:r,onOpenChange:h,middleware:xt(e)}),{delay:y,currentId:b,setCurrentId:F}=We(a,{id:l}),{getReferenceProps:D,getFloatingProps:$}=_e([Ue(a,{enabled:(T=e.events)==null?void 0:T.hover,delay:i?y:{open:e.openDelay,close:e.closeDelay},mouseOnly:!((E=e.events)!=null&&E.touch)}),He(a,{enabled:(M=e.events)==null?void 0:M.focus,visibleOnly:!0}),Ve(a,{role:"tooltip"}),Xe(a,{enabled:typeof e.opened>"u"})]);Ye({opened:r,position:e.position,positionDependencies:e.positionDependencies,floating:{refs:d,update:g}}),Qe(()=>{var w;(w=e.onPositionChange)==null||w.call(e,m)},[m]);const k=r&&b&&b!==l;return{x:c,y:f,arrowX:u,arrowY:v,reference:d.setReference,floating:d.setFloating,getFloatingProps:$,getReferenceProps:D,isGroupPhase:k,opened:r,placement:m}}const pe={position:"top",refProp:"ref",withinPortal:!0,inline:!1,defaultOpened:!1,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:"side",offset:5,transitionProps:{duration:100,transition:"fade"},events:{hover:!0,focus:!1,touch:!1},zIndex:K("popover"),positionDependencies:[],middlewares:{flip:!0,shift:!0,inline:!1}},Pt=z((e,{radius:o,color:t})=>({tooltip:{"--tooltip-radius":o===void 0?void 0:we(o),"--tooltip-bg":t?te(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),I=O((e,o)=>{const t=S("Tooltip",pe,e),{children:n,position:r,refProp:i,label:l,openDelay:h,closeDelay:c,onPositionChange:f,opened:a,defaultOpened:d,withinPortal:g,radius:m,color:u,classNames:v,styles:y,unstyled:b,style:F,className:D,withArrow:$,arrowSize:k,arrowOffset:T,arrowRadius:E,arrowPosition:M,offset:w,transitionProps:_,multiline:G,events:L,zIndex:U,disabled:H,positionDependencies:V,onClick:B,onMouseEnter:X,onMouseLeave:P,inline:Y,variant:Q,keepMounted:N,vars:R,portalProps:Ee,mod:Me,floatingStrategy:ae,middlewares:Ne,...Oe}=S("Tooltip",pe,t),{dir:Ce}=Je(),ie=p.useRef(null),x=bt({position:Ke(Ce,r),closeDelay:c,openDelay:h,onPositionChange:f,opened:a,defaultOpened:d,events:L,arrowRef:ie,arrowOffset:T,offset:typeof w=="number"?w+($?k/2:0):w,positionDependencies:[...V,n],inline:Y,strategy:ae,middlewares:Ne}),Z=C({name:"Tooltip",props:t,classes:W,className:D,style:F,classNames:v,styles:y,unstyled:b,rootSelector:"tooltip",vars:R,varsResolver:Pt});if(!ve(n))throw new Error("[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const ze=ge(x.reference,ye(n),o),le=ut(_,{duration:100,transition:"fade"}),ce=n.props;return s.jsxs(s.Fragment,{children:[s.jsx(ee,{...Ee,withinPortal:g,children:s.jsx(xe,{...le,keepMounted:N,mounted:!H&&!!x.opened,duration:x.isGroupPhase?10:le.duration,children:Fe=>s.jsxs(j,{...Oe,"data-fixed":ae==="fixed"||void 0,variant:Q,mod:[{multiline:G},Me],...x.getFloatingProps({ref:x.floating,className:Z("tooltip").className,style:{...Z("tooltip").style,...Fe,zIndex:U,top:x.y??0,left:x.x??0}}),children:[l,s.jsx(et,{ref:ie,arrowX:x.arrowX,arrowY:x.arrowY,visible:$,position:x.placement,arrowSize:k,arrowOffset:T,arrowRadius:E,arrowPosition:M,...Z("arrow")})]})})}),p.cloneElement(n,x.getReferenceProps({onClick:B,onMouseEnter:X,onMouseLeave:P,onMouseMove:t.onMouseMove,onPointerDown:t.onPointerDown,onPointerEnter:t.onPointerEnter,[i]:ze,className:tt(D,ce.className),...ce}))]})});I.classes=W;I.displayName="@mantine/core/Tooltip";I.Floating=ne;I.Group=se;var je={root:"m_6d731127"};const St={gap:"md",align:"stretch",justify:"flex-start"},Tt=z((e,{gap:o,align:t,justify:n})=>({root:{"--stack-gap":ot(o),"--stack-align":t,"--stack-justify":n}})),re=O((e,o)=>{const t=S("Stack",St,e),{classNames:n,className:r,style:i,styles:l,unstyled:h,vars:c,align:f,justify:a,gap:d,variant:g,...m}=t,u=C({name:"Stack",props:t,classes:je,className:r,style:i,classNames:n,styles:l,unstyled:h,vars:c,varsResolver:Tt});return s.jsx(j,{ref:o,...u("root"),variant:g,...m})});re.classes=je;re.displayName="@mantine/core/Stack";const Rt=["h1","h2","h3","h4","h5","h6"],jt=["xs","sm","md","lg","xl"];function Dt(e,o){const t=o!==void 0?o:`h${e}`;return Rt.includes(t)?{fontSize:`var(--mantine-${t}-font-size)`,fontWeight:`var(--mantine-${t}-font-weight)`,lineHeight:`var(--mantine-${t}-line-height)`}:jt.includes(t)?{fontSize:`var(--mantine-font-size-${t})`,fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}:{fontSize:A(t),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}var De={root:"m_8a5d1357"};const $t={order:1},kt=z((e,{order:o,size:t,lineClamp:n,textWrap:r})=>{const i=Dt(o,t);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":typeof n=="number"?n.toString():void 0,"--title-text-wrap":r}}}),$e=O((e,o)=>{const t=S("Title",$t,e),{classNames:n,className:r,style:i,styles:l,unstyled:h,order:c,vars:f,size:a,variant:d,lineClamp:g,textWrap:m,mod:u,...v}=t,y=C({name:"Title",props:t,classes:De,className:r,style:i,classNames:n,styles:l,unstyled:h,vars:f,varsResolver:kt});return[1,2,3,4,5,6].includes(c)?s.jsx(j,{...y("root"),component:`h${c}`,variant:d,ref:o,mod:[{order:c,"data-line-clamp":typeof g=="number"},u],size:a,...v}):null});$e.classes=De;$e.displayName="@mantine/core/Title";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Et={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(e,o,t,n)=>{const r=p.forwardRef(({color:i="currentColor",size:l=24,stroke:h=2,title:c,className:f,children:a,...d},g)=>p.createElement("svg",{ref:g,...Et[e],width:l,height:l,className:["tabler-icon",`tabler-icon-${o}`,f].join(" "),strokeWidth:h,stroke:i,...d},[c&&p.createElement("title",{key:"svg-title"},c),...n.map(([m,u])=>p.createElement(m,u)),...Array.isArray(a)?a:[a]]));return r.displayName=`${t}`,r};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ct=ke("outline","archive","IconArchive",[["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10",key:"svg-1"}],["path",{d:"M10 12l4 0",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mt=ke("outline","chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]]);const Nt=()=>{const[e,o]=at();return s.jsx(oe,{position:{bottom:16,right:16},style:{zIndex:2},children:s.jsx(xe,{transition:"fade",mounted:e.y>0,children:t=>s.jsx(I,{label:"Scroll to top",position:"top-end",offset:8,transitionProps:{transition:"fade",duration:200},children:s.jsx(nt,{shadow:"sm",onClick:()=>o({y:0}),style:t,children:s.jsx(Mt,{})})})})})},zt=e=>(p.useEffect(()=>{e.notification&&ue.show({withBorder:!0,title:e.notification.title,message:e.notification.message,color:e.notification.status==="success"?"green":"red",autoClose:2e3}),ue.cleanQueue()},[e.notification]),s.jsxs(s.Fragment,{children:[s.jsx(st,{title:e.title}),s.jsx(re,{gap:0,mih:"100vh",bg:"gray.2",children:e.children}),s.jsx(Nt,{})]}));export{zt as B,Te as D,Ct as I,re as S,$e as T,ke as c};
