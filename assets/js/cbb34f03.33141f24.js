"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2557],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:40},a="Use && for a More Concise Conditional",s={unversionedId:"react/use-&&-for-a-more-concise-conditional",id:"react/use-&&-for-a-more-concise-conditional",title:"Use && for a More Concise Conditional",description:"---",source:"@site/docs/react/40-use-&&-for-a-more-concise-conditional.md",sourceDirName:"react",slug:"/react/use-&&-for-a-more-concise-conditional",permalink:"/docs/react/use-&&-for-a-more-concise-conditional",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Render with an If-Else Condition",permalink:"/docs/react/render-with-an-if-else-condition"},next:{title:"Use a Ternary Expression for Conditional Rendering",permalink:"/docs/react/use-a-ternary-expression-for-conditional-rendering"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use--for-a-more-concise-conditional"},"Use && for a More Concise Conditional"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      display: true,\n    }\n    this.toggleDisplay = this.toggleDisplay.bind(this)\n  }\n  toggleDisplay() {\n    this.setState((state) => ({\n      display: !state.display,\n    }))\n  }\n  render() {\n    return (\n      <div>\n        <button onClick={this.toggleDisplay}>Toggle Display</button>\n        {this.state.display && <h1>Displayed!</h1>}\n      </div>\n    )\n  }\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"if/else")," statements worked in the last challenge, but there's a more concise way to achieve the same result. Imagine that you are tracking several conditions in a component and you want different elements to render depending on each of these conditions. If you write a lot of ",(0,o.kt)("inlineCode",{parentName:"p"},"else if")," statements to return slightly different UIs, you may repeat code which leaves room for error. Instead, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", and if it is, return some markup. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  condition && <p>markup</p>\n}\n")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"condition")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the markup will be returned. If the condition is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", the operation will immediately return ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," after evaluating the ",(0,o.kt)("inlineCode",{parentName:"p"},"condition")," and return nothing. You can include these statements directly in your JSX and string multiple conditions together by writing ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," after each one. This allows you to handle more complex conditional logic in your ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method without repeating a lot of code."))}u.isMDXComponent=!0}}]);