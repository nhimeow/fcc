"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7987],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:42},i="Render Conditionally from Props",s={unversionedId:"react/render-conditionally-from-props",id:"react/render-conditionally-from-props",title:"Render Conditionally from Props",description:"---",source:"@site/docs/react/42-render-conditionally-from-props.md",sourceDirName:"react",slug:"/react/render-conditionally-from-props",permalink:"/docs/react/render-conditionally-from-props",draft:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42},sidebar:"tutorialSidebar",previous:{title:"Use a Ternary Expression for Conditional Rendering",permalink:"/docs/react/use-a-ternary-expression-for-conditional-rendering"},next:{title:"Change Inline CSS Conditionally Based on Component State",permalink:"/docs/react/change-inline-css-conditionally-based-on-component-state"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"render-conditionally-from-props"},"Render Conditionally from Props"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class Results extends React.Component {\n  constructor(props) {\n    super(props)\n  }\n  render() {\n    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>\n  }\n}\n\nclass GameOfChance extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      counter: 1,\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick() {\n    this.setState({\n      counter: this.state.counter + 1, // change code here\n    })\n  }\n  render() {\n    const expression = Math.random() >= 0.5\n    return (\n      <div>\n        <button onClick={this.handleClick}>Play Again</button>\n\n        <Results fiftyFifty={expression} />\n\n        <p>{'Turn: ' + this.state.counter}</p>\n      </div>\n    )\n  }\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"So far, you've seen how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"if/else"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"&&,")," and the ternary operator (",(0,o.kt)("inlineCode",{parentName:"p"},"condition ? expressionIfTrue : expressionIfFalse"),") to make conditional decisions about what to render and when. However, there's one important topic left to discuss that lets you combine any or all of these concepts with another powerful React feature: props. Using props to conditionally render code is very common with React developers \u2014 that is, they use the value of a given prop to automatically make decisions about what to render."),(0,o.kt)("p",null,"In this challenge, you'll set up a child component to make rendering decisions based on props. You'll also use the ternary operator, but you can see how several of the other concepts that were covered in the last few challenges might be just as useful in this context."))}d.isMDXComponent=!0}}]);