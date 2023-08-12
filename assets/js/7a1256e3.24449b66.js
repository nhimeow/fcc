"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:22},i="Render State in the User Interface",s={unversionedId:"react/render-state-in-the-user-interface",id:"react/render-state-in-the-user-interface",title:"Render State in the User Interface",description:"---",source:"@site/docs/react/22-render-state-in-the-user-interface.md",sourceDirName:"react",slug:"/react/render-state-in-the-user-interface",permalink:"/docs/react/render-state-in-the-user-interface",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Create a Stateful Component",permalink:"/docs/react/create-a-stateful-component"},next:{title:"Render State in the User Interface Another Way",permalink:"/docs/react/render-state-in-the-user-interface-another-way"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"render-state-in-the-user-interface"},"Render State in the User Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      name: 'freeCodeCamp',\n    }\n  }\n  render() {\n    return (\n      <div>\n        <h1>{this.state.name}</h1>\n      </div>\n    )\n  }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," in its ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method. You can access the data with ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state"),"."),(0,a.kt)("p",null,"If you want to access a state value within the ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," of the render method, you have to enclose the value in curly braces."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"state")," is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like."),(0,a.kt)("p",null,"Note that if you make a component stateful, no other components are aware of its ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),". Its ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," is completely encapsulated, or local to that component, unless you pass state data to a child component as ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),". This notion of encapsulated ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code."))}d.isMDXComponent=!0}}]);