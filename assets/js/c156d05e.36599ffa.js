"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2480],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8595:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"automatic_pool_resizing",title:"Automatic pool resizing"},s=void 0,u={unversionedId:"Cache_Library_User_Guides/automatic_pool_resizing",id:"Cache_Library_User_Guides/automatic_pool_resizing",isDocsHomePage:!1,title:"Automatic pool resizing",description:"This feature is incomplete and untested in prod. If you're interested, reach out to us and we can work out a plan to complete it.",source:"@site/docs/Cache_Library_User_Guides/automatic_pool_resizing.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/automatic_pool_resizing",permalink:"/docs/Cache_Library_User_Guides/automatic_pool_resizing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/automatic_pool_resizing.md",version:"current",frontMatter:{id:"automatic_pool_resizing",title:"Automatic pool resizing"},sidebar:"someSidebar",previous:{title:"Pool rebalance strategy",permalink:"/docs/Cache_Library_User_Guides/pool_rebalance_strategy"},next:{title:"HybridCache",permalink:"/docs/Cache_Library_User_Guides/HybridCache"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This feature is incomplete and untested in prod. If you're interested, reach out to us and we can work out a plan to complete it.")),(0,a.kt)("p",null,"Cachelib requires an initial size to add a new pool or a new compact cache. With pool optimization, the sizes of different pools or compact caches can be automatically adjusted according to a criteria or strategy. This can (1) potentially reduce the efforts to search for a good size for pools and (2) make the pool sizes up to date."),(0,a.kt)("p",null,"For now we optimize the sizes for regular pools and the sizes for compact caches separately; the total memory for regular pools is constant and the total memory for compact caches is constant. We currently have one supported strategy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MarginalHits"),"\nSimilar to rebalancing, this strategy ensures that the marginal hits across different pools or compact caches are the same. To use this strategy, you need to use the MM2Q eviction policy and enable tail hits tracking.")))}d.isMDXComponent=!0}}]);