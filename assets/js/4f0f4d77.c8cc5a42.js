"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3476],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:41},i="Use a Ternary Expression for Conditional Rendering",s={unversionedId:"react/use-a-ternary-expression-for-conditional-rendering",id:"react/use-a-ternary-expression-for-conditional-rendering",title:"Use a Ternary Expression for Conditional Rendering",description:"---",source:"@site/docs/react/41-use-a-ternary-expression-for-conditional-rendering.md",sourceDirName:"react",slug:"/react/use-a-ternary-expression-for-conditional-rendering",permalink:"/docs/react/use-a-ternary-expression-for-conditional-rendering",draft:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41},sidebar:"tutorialSidebar",previous:{title:"Use && for a More Concise Conditional",permalink:"/docs/react/use-&&-for-a-more-concise-conditional"},next:{title:"Render Conditionally from Props",permalink:"/docs/react/render-conditionally-from-props"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-a-ternary-expression-for-conditional-rendering"},"Use a Ternary Expression for Conditional Rendering"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const inputStyle = {\n  width: 235,\n  margin: 5,\n}\n\nclass CheckUserAge extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      userAge: '',\n      input: '',\n    }\n    this.submit = this.submit.bind(this)\n    this.handleChange = this.handleChange.bind(this)\n  }\n  handleChange(e) {\n    this.setState({\n      input: e.target.value,\n      userAge: '',\n    })\n  }\n  submit() {\n    this.setState((state) => ({\n      userAge: state.input,\n    }))\n  }\n  render() {\n    const buttonOne = <button onClick={this.submit}>Submit</button>\n    const buttonTwo = <button>You May Enter</button>\n    const buttonThree = <button>You Shall Not Pass</button>\n    return (\n      <div>\n        <h3>Enter Your Age to Continue</h3>\n        <input\n          style={inputStyle}\n          type='number'\n          value={this.state.input}\n          onChange={this.handleChange}\n        />\n        <br />\n        {this.state.userAge === ''\n          ? buttonOne\n          : this.state.userAge >= 18\n          ? buttonTwo\n          : buttonThree}\n      </div>\n    )\n  }\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Before moving on to dynamic rendering techniques, there's one last way to use built-in JavaScript conditionals to render what you want: the ternary operator. The ternary operator is often utilized as a shortcut for ",(0,o.kt)("inlineCode",{parentName:"p"},"if/else")," statements in JavaScript. They're not quite as robust as traditional ",(0,o.kt)("inlineCode",{parentName:"p"},"if/else")," statements, but they are very popular among React developers. One reason for this is because of how JSX is compiled, ",(0,o.kt)("inlineCode",{parentName:"p"},"if/else")," statements can't be inserted directly into JSX code. You might have noticed this a couple challenges ago \u2014 when an ",(0,o.kt)("inlineCode",{parentName:"p"},"if/else")," statement was required, it was always outside the ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," statement. Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. Recall that a ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"condition ? expressionIfTrue : expressionIfFalse\n")))}d.isMDXComponent=!0}}]);