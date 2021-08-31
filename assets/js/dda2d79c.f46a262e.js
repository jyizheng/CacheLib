"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5964],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,h=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8827:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return b}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],c={id:"About_CacheLib",title:"About CacheLib"},s="About CacheLib",u={unversionedId:"Cache_Library_User_Guides/About_CacheLib",id:"Cache_Library_User_Guides/About_CacheLib",isDocsHomePage:!1,title:"About CacheLib",description:"CacheLib is a C++ library for accessing and managing cache data. It is a thread-safe API that enables developers to build and customize scalable, concurrent caches. It is targeted at applications that dedicate gigabytes of memory to cache information.",source:"@site/docs/Cache_Library_User_Guides/About_CacheLib.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/About_CacheLib",permalink:"/docs/Cache_Library_User_Guides/About_CacheLib",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/About_CacheLib.md",tags:[],version:"current",frontMatter:{id:"About_CacheLib",title:"About CacheLib"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation/installation"},next:{title:"Terms",permalink:"/docs/Cache_Library_User_Guides/terms"}},l=[],p={toc:l};function b(e){var t=e.components,c=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-cachelib"},"About CacheLib"),(0,i.kt)("p",null,"CacheLib is a C++ library for accessing and managing cache data. It is a thread-safe API that enables developers to build and customize scalable, concurrent caches. It is targeted at applications that dedicate gigabytes of memory to cache information."),(0,i.kt)("p",null,"To enable this, CacheLib provides a  simple find, insert, and remove APIs for applications to manage Items (key-value pairs) in the cache. CacheLib comes with several caching heuristics to manage evictions when the cache is full.  CacheLib is optimized for both DRAM and NVM caches through Hybrid cache, and empowers applications to achieve large cache capacities for the same or relatively lower cost. When enabled, Items evicted from DRAM will be inserted into NVM  and Items on NVM will be inserted back to DRAM cache upon lookup, and all of these transitions are transparent to users."),(0,i.kt)("p",null,"CacheLib supports persisting cache data across application process restarts, and enables application developers to restart or update their binary without losing the cache data."),(0,i.kt)("p",null,"CacheLib is, by default, highly optimized to maximize the system performance, and also provides variety of advanced configuration options for further tuning."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3292).Z})))}b.isMDXComponent=!0},3292:function(e,t,r){t.Z=r.p+"assets/images/cachelib_overview-8aef87842dc23f3bacd74ec6cd5cdc26.png"}}]);