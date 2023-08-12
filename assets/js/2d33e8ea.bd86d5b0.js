"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:24},s="Set State with this.setState",o={unversionedId:"react/set-state-with-this-setstate",id:"react/set-state-with-this-setstate",title:"Set State with this.setState",description:"---",source:"@site/docs/react/24-set-state-with-this-setstate.md",sourceDirName:"react",slug:"/react/set-state-with-this-setstate",permalink:"/docs/react/set-state-with-this-setstate",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"Render State in the User Interface Another Way",permalink:"/docs/react/render-state-in-the-user-interface-another-way"},next:{title:"Bind 'this' to a Class Method",permalink:"/docs/react/bind-this-to-a-class-method"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-state-with-thissetstate"},"Set State with this.setState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      name: 'Initial State',\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick() {\n    this.setState({\n      name: 'React Rocks!',\n    })\n  }\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>Click Me</button>\n        <h1>{this.state.name}</h1>\n      </div>\n    )\n  }\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The previous challenges covered component ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," and how to initialize state in the ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor"),". There is also a way to change the component's ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),". React provides a method for updating component ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"setState"),". You call the ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," method within your component class like so: ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setState()"),", passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," in state and wanted to update it, it would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"this.setState({\n  username: 'Lewis',\n})\n")),(0,r.kt)("p",null,"React expects you to never modify ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," directly, instead always use ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setState()")," when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," method can be asynchronous. There is an alternative syntax for the ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," method which provides a way around this problem. This is rarely needed but it's good to keep it in mind!"))}u.isMDXComponent=!0}}]);