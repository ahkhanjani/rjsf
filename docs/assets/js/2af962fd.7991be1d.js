"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[953],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},o="Schema definitions and references",s={unversionedId:"usage/definitions",id:"usage/definitions",title:"Schema definitions and references",description:"This library partially supports inline schema definition dereferencing, which allows you to re-use parts of your schema:",source:"@site/docs/usage/definitions.md",sourceDirName:"usage",slug:"/usage/definitions",permalink:"/react-jsonschema-form/docs/usage/definitions",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/usage/definitions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Arrays",permalink:"/react-jsonschema-form/docs/usage/arrays"},next:{title:"Dependencies",permalink:"/react-jsonschema-form/docs/usage/dependencies"}},c={},p=[],l={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schema-definitions-and-references"},"Schema definitions and references"),(0,a.kt)("p",null,"This library partially supports ",(0,a.kt)("a",{parentName:"p",href:"http://json-schema.org/draft/2019-09/json-schema-core.html#ref"},"inline schema definition dereferencing"),", which allows you to re-use parts of your schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  definitions: {\n    address: {\n      type: 'object',\n      properties: {\n        street_address: { type: 'string' },\n        city: { type: 'string' },\n        state: { type: 'string' },\n      },\n      required: ['street_address', 'city', 'state'],\n    },\n  },\n  type: 'object',\n  properties: {\n    billing_address: { $ref: '#/definitions/address' },\n    shipping_address: { $ref: '#/definitions/address' },\n  },\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("p",null,"Note that this library only supports local definition referencing. The value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ref")," keyword should be a ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6901"},"JSON Pointer")," in URI fragment identifier format."))}d.isMDXComponent=!0}}]);