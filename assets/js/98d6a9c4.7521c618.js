"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:23},i="Render State in the User Interface Another Way",c={unversionedId:"react/render-state-in-the-user-interface-another-way",id:"react/render-state-in-the-user-interface-another-way",title:"Render State in the User Interface Another Way",description:"---",source:"@site/docs/react/23-render-state-in-the-user-interface-another-way.md",sourceDirName:"react",slug:"/react/render-state-in-the-user-interface-another-way",permalink:"/docs/react/render-state-in-the-user-interface-another-way",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"Render State in the User Interface",permalink:"/docs/react/render-state-in-the-user-interface"},next:{title:"Set State with this.setState",permalink:"/docs/react/set-state-with-this-setstate"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"render-state-in-the-user-interface-another-way"},"Render State in the User Interface Another Way"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      name: 'freeCodeCamp',\n    }\n  }\n  render() {\n    const name = this.state.name\n\n    return (\n      <div>\n        <h1>{name}</h1>\n      </div>\n    )\n  }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"There is another way to access ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," in a component. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method, before the ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement, you can write JavaScript directly. For example, you could declare functions, access data from ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),", perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement."))}d.isMDXComponent=!0}}]);