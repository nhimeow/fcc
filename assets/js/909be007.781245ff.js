"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||s;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:20},a="Review Using Props with Stateless Functional Components",i={unversionedId:"react/review-using-props-with-stateless-functional-components",id:"react/review-using-props-with-stateless-functional-components",title:"Review Using Props with Stateless Functional Components",description:"---",source:"@site/docs/react/20-review-using-props-with-stateless-functional-components.md",sourceDirName:"react",slug:"/react/review-using-props-with-stateless-functional-components",permalink:"/docs/react/review-using-props-with-stateless-functional-components",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Access Props Using this.props",permalink:"/docs/react/access-props-using-this-props"},next:{title:"Create a Stateful Component",permalink:"/docs/react/create-a-stateful-component"}},p={},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"review-using-props-with-stateless-functional-components"},"Review Using Props with Stateless Functional Components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class CampSite extends React.Component {\n  constructor(props) {\n    super(props)\n  }\n  render() {\n    return (\n      <div>\n        <Camper />\n      </div>\n    )\n  }\n}\n\nconst Camper = (props) => <p>{props.name}</p>\n\nCamper.defaultProps = {\n  name: 'CamperBot',\n}\n\nCamper.propTypes = {\n  name: PropTypes.string.isRequired,\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Except for the last challenge, you've been passing props to stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props. You may be wondering what state is, and the next challenge will cover it in more detail. Before that, here's a review of the terminology for components."),(0,o.kt)("p",null,"A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends ",(0,o.kt)("inlineCode",{parentName:"p"},"React.Component"),", but does not use internal state (covered in the next challenge). Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components."),(0,o.kt)("p",null,"A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior."))}m.isMDXComponent=!0}}]);