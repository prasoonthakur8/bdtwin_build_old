import{r as d,j as e}from"./index-ddca98b0.js";import{u as c,W as u,C as p,I as x,E as h,a as j,P as E,o as S,i as f}from"./PlatformMost.lazy-ff7c9a81.js";const I=()=>{var a,r,i;const[t,n]=d.useState(!1),{register:o,handleSubmit:l,formState:{errors:s}}=c({mode:"onBlur",resolver:S(f)}),m=g=>{n(!0)};return e.jsxs(u,{children:[e.jsxs(p,{children:[e.jsx("h2",{children:t?"RESET LINK IS SENT":"FORGOT PASSWORD"}),e.jsx("p",{children:t?"We sent reset link to your email address. Please check it.":"Enter your Email and we will sent password recovery link to it."}),!t&&e.jsxs("form",{onSubmit:l(m),children:[e.jsxs(x,{children:[((a=s==null?void 0:s.email)==null?void 0:a.message)&&e.jsx(h,{visible:(r=s==null?void 0:s.email)==null?void 0:r.message,children:(i=s==null?void 0:s.email)==null?void 0:i.message}),e.jsx(j,{...o("email"),placeholder:"Email"})]}),e.jsx("button",{type:"submit",children:"Send"})]})]}),e.jsx(E,{})]})};export{I as default};