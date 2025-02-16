import{s as u,t as ce,o as N,u as R,v as K,a as F,c as z,j as s,O as ee,B as A,w as C,x as pe,y as he,z as Fe,i as ze,C as me,D as ve,E as ge,g as ye,F as we,H as Ae,J as Ie,L as Ge,N as Le,Q as We,R as Be,S as He,U as Ue,V as _e,W as Ve,X as Xe,Y as fe,Z as Ye,_ as J,$ as Qe,a0 as Ze,a1 as xe,a2 as Je,a3 as qe,a4 as Ke,A as et,a5 as ue,a6 as tt}from"./app-tyGZtWc3.js";function q(){return typeof window<"u"?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function ot({x:e,y:o}){if(typeof window<"u"){const t={behavior:"smooth"};typeof e=="number"&&(t.left=e),typeof o=="number"&&(t.top=o),window.scrollTo(t)}}function nt(){const[e,o]=u.useState({x:0,y:0});return ce("scroll",()=>o(q())),ce("resize",()=>o(q())),u.useEffect(()=>{o(q())},[]),[e,ot]}function be(e,o){return Array.isArray(e)?[...e].reduce((t,n)=>({...t,...be(n,o)}),{}):typeof e=="function"?e(o):e??{}}var Pe={root:"m_7f854edf"};const st={position:{bottom:0,right:0},zIndex:K("modal"),withinPortal:!0},rt=z((e,{zIndex:o,position:t})=>({root:{"--affix-z-index":o==null?void 0:o.toString(),"--affix-top":C(t==null?void 0:t.top),"--affix-left":C(t==null?void 0:t.left),"--affix-bottom":C(t==null?void 0:t.bottom),"--affix-right":C(t==null?void 0:t.right)}})),te=N((e,o)=>{const t=R("Affix",st,e),{classNames:n,className:r,style:i,styles:l,unstyled:h,vars:c,portalProps:f,zIndex:a,withinPortal:p,position:y,...m}=t,d=F({name:"Affix",classes:Pe,props:t,className:r,style:i,classNames:n,styles:l,unstyled:h,vars:c,varsResolver:rt});return s.jsx(ee,{...f,withinPortal:p,children:s.jsx(A,{ref:o,...d("root"),...m})})});te.classes=Pe;te.displayName="@mantine/core/Affix";const at={duration:100,transition:"fade"};function it(e,o){return{...at,...o,...e}}function lt({offset:e,position:o,defaultOpened:t}){const[n,r]=u.useState(t),i=u.useRef(null),{x:l,y:h,elements:c,refs:f,update:a,placement:p}=pe({placement:o,middleware:[he({crossAxis:!0,padding:5,rootBoundary:"document"})]}),y=p.includes("right")?e:o.includes("left")?e*-1:0,m=p.includes("bottom")?e:o.includes("top")?e*-1:0,d=u.useCallback(({clientX:v,clientY:g})=>{f.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:v,y:g,left:v+y,top:g+m,right:v,bottom:g}}})},[c.reference]);return u.useEffect(()=>{if(f.floating.current){const v=i.current;v.addEventListener("mousemove",d);const g=Fe(f.floating.current);return g.forEach(b=>{b.addEventListener("scroll",a)}),()=>{v.removeEventListener("mousemove",d),g.forEach(b=>{b.removeEventListener("scroll",a)})}}},[c.reference,f.floating.current,a,d,n]),{handleMouseMove:d,x:l,y:h,opened:n,setOpened:r,boundaryRef:i,floating:f.setFloating}}var B={tooltip:"m_1b3c8819",arrow:"m_f898399f"};const ct={refProp:"ref",withinPortal:!0,offset:10,defaultOpened:!1,position:"right",zIndex:K("popover")},ft=z((e,{radius:o,color:t})=>({tooltip:{"--tooltip-radius":o===void 0?void 0:we(o),"--tooltip-bg":t?ye(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),oe=N((e,o)=>{const t=R("TooltipFloating",ct,e),{children:n,refProp:r,withinPortal:i,style:l,className:h,classNames:c,styles:f,unstyled:a,radius:p,color:y,label:m,offset:d,position:v,multiline:g,zIndex:b,disabled:$,defaultOpened:j,variant:E,vars:k,portalProps:T,...D}=t,M=ze(),w=F({name:"TooltipFloating",props:t,classes:B,className:h,style:l,classNames:c,styles:f,unstyled:a,rootSelector:"tooltip",vars:k,varsResolver:ft}),{handleMouseMove:H,x:G,y:L,opened:U,boundaryRef:_,floating:V,setOpened:W}=lt({offset:d,position:v,defaultOpened:j});if(!me(n))throw new Error("[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const X=ve(_,ge(n),o),P=n.props,Y=O=>{var S;(S=P.onMouseEnter)==null||S.call(P,O),H(O),W(!0)},Q=O=>{var S;(S=P.onMouseLeave)==null||S.call(P,O),W(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(ee,{...T,withinPortal:i,children:s.jsx(A,{...D,...w("tooltip",{style:{...be(l,M),zIndex:b,display:!$&&U?"block":"none",top:(L&&Math.round(L))??"",left:(G&&Math.round(G))??""}}),variant:E,ref:V,mod:{multiline:g},children:m})}),u.cloneElement(n,{...P,[r]:X,onMouseEnter:Y,onMouseLeave:Q})]})});oe.classes=B;oe.displayName="@mantine/core/TooltipFloating";const Te=u.createContext(!1),ut=Te.Provider,dt=()=>u.useContext(Te),pt={openDelay:0,closeDelay:0};function ne(e){const{openDelay:o,closeDelay:t,children:n}=R("TooltipGroup",pt,e);return s.jsx(ut,{value:!0,children:s.jsx(Ae,{delay:{open:o,close:t},children:n})})}ne.displayName="@mantine/core/TooltipGroup";ne.extend=e=>e;function ht(e){if(e===void 0)return{shift:!0,flip:!0};const o={...e};return e.shift===void 0&&(o.shift=!0),e.flip===void 0&&(o.flip=!0),o}function mt(e){const o=ht(e.middlewares),t=[Xe(e.offset)];return o.shift&&t.push(he(typeof o.shift=="boolean"?{padding:8}:{padding:8,...o.shift})),o.flip&&t.push(typeof o.flip=="boolean"?fe():fe(o.flip)),t.push(Ye({element:e.arrowRef,padding:e.arrowOffset})),o.inline?t.push(typeof o.inline=="boolean"?J():J(o.inline)):e.inline&&t.push(J()),t}function vt(e){var T,D,M;const[o,t]=u.useState(e.defaultOpened),r=typeof e.opened=="boolean"?e.opened:o,i=dt(),l=Ie(),h=u.useCallback(w=>{t(w),w&&$(l)},[l]),{x:c,y:f,context:a,refs:p,update:y,placement:m,middlewareData:{arrow:{x:d,y:v}={}}}=pe({strategy:e.strategy,placement:e.position,open:r,onOpenChange:h,middleware:mt(e)}),{delay:g,currentId:b,setCurrentId:$}=Ge(a,{id:l}),{getReferenceProps:j,getFloatingProps:E}=Le([We(a,{enabled:(T=e.events)==null?void 0:T.hover,delay:i?g:{open:e.openDelay,close:e.closeDelay},mouseOnly:!((D=e.events)!=null&&D.touch)}),Be(a,{enabled:(M=e.events)==null?void 0:M.focus,visibleOnly:!0}),He(a,{role:"tooltip"}),Ue(a,{enabled:typeof e.opened>"u"})]);_e({opened:r,position:e.position,positionDependencies:e.positionDependencies,floating:{refs:p,update:y}}),Ve(()=>{var w;(w=e.onPositionChange)==null||w.call(e,m)},[m]);const k=r&&b&&b!==l;return{x:c,y:f,arrowX:d,arrowY:v,reference:p.setReference,floating:p.setFloating,getFloatingProps:E,getReferenceProps:j,isGroupPhase:k,opened:r,placement:m}}const de={position:"top",refProp:"ref",withinPortal:!0,inline:!1,defaultOpened:!1,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:"side",offset:5,transitionProps:{duration:100,transition:"fade"},events:{hover:!0,focus:!1,touch:!1},zIndex:K("popover"),positionDependencies:[],middlewares:{flip:!0,shift:!0,inline:!1}},gt=z((e,{radius:o,color:t})=>({tooltip:{"--tooltip-radius":o===void 0?void 0:we(o),"--tooltip-bg":t?ye(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),I=N((e,o)=>{const t=R("Tooltip",de,e),{children:n,position:r,refProp:i,label:l,openDelay:h,closeDelay:c,onPositionChange:f,opened:a,defaultOpened:p,withinPortal:y,radius:m,color:d,classNames:v,styles:g,unstyled:b,style:$,className:j,withArrow:E,arrowSize:k,arrowOffset:T,arrowRadius:D,arrowPosition:M,offset:w,transitionProps:H,multiline:G,events:L,zIndex:U,disabled:_,positionDependencies:V,onClick:W,onMouseEnter:X,onMouseLeave:P,inline:Y,variant:Q,keepMounted:O,vars:S,portalProps:ke,mod:De,floatingStrategy:re,middlewares:Me,...Oe}=R("Tooltip",de,t),{dir:$e}=Qe(),ae=u.useRef(null),x=vt({position:Ze($e,r),closeDelay:c,openDelay:h,onPositionChange:f,opened:a,defaultOpened:p,events:L,arrowRef:ae,arrowOffset:T,offset:typeof w=="number"?w+(E?k/2:0):w,positionDependencies:[...V,n],inline:Y,strategy:re,middlewares:Me}),Z=F({name:"Tooltip",props:t,classes:B,className:j,style:$,classNames:v,styles:g,unstyled:b,rootSelector:"tooltip",vars:S,varsResolver:gt});if(!me(n))throw new Error("[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const Ce=ve(x.reference,ge(n),o),ie=it(H,{duration:100,transition:"fade"}),le=n.props;return s.jsxs(s.Fragment,{children:[s.jsx(ee,{...ke,withinPortal:y,children:s.jsx(xe,{...ie,keepMounted:O,mounted:!_&&!!x.opened,duration:x.isGroupPhase?10:ie.duration,children:Ne=>s.jsxs(A,{...Oe,"data-fixed":re==="fixed"||void 0,variant:Q,mod:[{multiline:G},De],...x.getFloatingProps({ref:x.floating,className:Z("tooltip").className,style:{...Z("tooltip").style,...Ne,zIndex:U,top:x.y??0,left:x.x??0}}),children:[l,s.jsx(Je,{ref:ae,arrowX:x.arrowX,arrowY:x.arrowY,visible:E,position:x.placement,arrowSize:k,arrowOffset:T,arrowRadius:D,arrowPosition:M,...Z("arrow")})]})})}),u.cloneElement(n,x.getReferenceProps({onClick:W,onMouseEnter:X,onMouseLeave:P,onMouseMove:t.onMouseMove,onPointerDown:t.onPointerDown,onPointerEnter:t.onPointerEnter,[i]:Ce,className:qe(j,le.className),...le}))]})});I.classes=B;I.displayName="@mantine/core/Tooltip";I.Floating=oe;I.Group=ne;var Se={root:"m_6d731127"};const yt={gap:"md",align:"stretch",justify:"flex-start"},wt=z((e,{gap:o,align:t,justify:n})=>({root:{"--stack-gap":Ke(o),"--stack-align":t,"--stack-justify":n}})),se=N((e,o)=>{const t=R("Stack",yt,e),{classNames:n,className:r,style:i,styles:l,unstyled:h,vars:c,align:f,justify:a,gap:p,variant:y,...m}=t,d=F({name:"Stack",props:t,classes:Se,className:r,style:i,classNames:n,styles:l,unstyled:h,vars:c,varsResolver:wt});return s.jsx(A,{ref:o,...d("root"),variant:y,...m})});se.classes=Se;se.displayName="@mantine/core/Stack";const xt=["h1","h2","h3","h4","h5","h6"],bt=["xs","sm","md","lg","xl"];function Pt(e,o){const t=o!==void 0?o:`h${e}`;return xt.includes(t)?{fontSize:`var(--mantine-${t}-font-size)`,fontWeight:`var(--mantine-${t}-font-weight)`,lineHeight:`var(--mantine-${t}-line-height)`}:bt.includes(t)?{fontSize:`var(--mantine-font-size-${t})`,fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}:{fontSize:C(t),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}var Re={root:"m_8a5d1357"};const Tt={order:1},St=z((e,{order:o,size:t,lineClamp:n,textWrap:r})=>{const i=Pt(o,t);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":typeof n=="number"?n.toString():void 0,"--title-text-wrap":r}}}),je=N((e,o)=>{const t=R("Title",Tt,e),{classNames:n,className:r,style:i,styles:l,unstyled:h,order:c,vars:f,size:a,variant:p,lineClamp:y,textWrap:m,mod:d,...v}=t,g=F({name:"Title",props:t,classes:Re,className:r,style:i,classNames:n,styles:l,unstyled:h,vars:f,varsResolver:St});return[1,2,3,4,5,6].includes(c)?s.jsx(A,{...g("root"),component:`h${c}`,variant:p,ref:o,mod:[{order:c,"data-line-clamp":typeof y=="number"},d],size:a,...v}):null});je.classes=Re;je.displayName="@mantine/core/Title";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rt={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(e,o,t,n)=>{const r=u.forwardRef(({color:i="currentColor",size:l=24,stroke:h=2,title:c,className:f,children:a,...p},y)=>u.createElement("svg",{ref:y,...Rt[e],width:l,height:l,className:["tabler-icon",`tabler-icon-${o}`,f].join(" "),strokeWidth:h,stroke:i,...p},[c&&u.createElement("title",{key:"svg-title"},c),...n.map(([m,d])=>u.createElement(m,d)),...Array.isArray(a)?a:[a]]));return r.displayName=`${t}`,r};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dt=Ee("outline","archive","IconArchive",[["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10",key:"svg-1"}],["path",{d:"M10 12l4 0",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var jt=Ee("outline","chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]]);const Et=()=>{const[e,o]=nt();return s.jsx(te,{position:{bottom:16,right:16},style:{zIndex:2},children:s.jsx(xe,{transition:"fade",mounted:e.y>0,children:t=>s.jsx(I,{label:"Scroll to top",position:"top-end",offset:8,transitionProps:{transition:"fade",duration:200},children:s.jsx(et,{shadow:"sm",onClick:()=>o({y:0}),style:t,children:s.jsx(jt,{})})})})})},Mt=e=>(u.useEffect(()=>{e.notification&&ue.show({withBorder:!0,title:e.notification.title,message:e.notification.message,color:e.notification.status==="success"?"green":"red",autoClose:2e3}),ue.cleanQueue()},[e.notification]),s.jsxs(s.Fragment,{children:[s.jsx(tt,{title:e.title}),s.jsx(se,{gap:0,mih:"100vh",bg:"gray.2",children:e.children}),s.jsx(Et,{})]}));export{Mt as B,Dt as I,se as S,je as T,Ee as c};
