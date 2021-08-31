"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7255],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=r,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8062:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"terms",title:"Terms"},c=void 0,l={unversionedId:"Cache_Library_User_Guides/terms",id:"Cache_Library_User_Guides/terms",isDocsHomePage:!1,title:"Terms",description:"Item",source:"@site/docs/Cache_Library_User_Guides/terms.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/terms",permalink:"/docs/Cache_Library_User_Guides/terms",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/terms.md",tags:[],version:"current",frontMatter:{id:"terms",title:"Terms"},sidebar:"someSidebar",previous:{title:"CacheLib Overview",permalink:"/docs/Cache_Library_User_Guides/CacheLib_Overview"},next:{title:"Set up a simple cache",permalink:"/docs/Cache_Library_User_Guides/Set_up_a_simple_cache"}},m=[],p={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Item")),(0,o.kt)("p",null,"An item is an object stored in cache. In addition to storing the payload (the\nactual data), it also stores metadata: intrusive hooks, reference count, flags,\ncreation time, and expiration time. An item is assigned a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," that\ncachelib API uses to find the item. For more information, see\n",(0,o.kt)("a",{parentName:"p",href:"Item_and_ItemHandle/"},"Items and ItemHandle"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ItemHandle")),(0,o.kt)("p",null,"An ItemHandle is similar to a ",(0,o.kt)("inlineCode",{parentName:"p"},"std::shared_ptr<Item>"),". It is used to\naccess an item. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"Item_and_ItemHandle/"},"Item and\nItemHandle"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Chained item")),(0,o.kt)("p",null,"An item has fixed memory size in cache. To grow the item, add chained items to it. A chained item doesn't have a key; thus you must use its parent item to access it. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"chained_items/"},"Chained Items"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key")),(0,o.kt)("p",null,"A key is a byte-array identifier assigned to a cached item. Cachelib uses it to find the item. A key can be a string or a POD (memcpy-safe)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Allocation size")),(0,o.kt)("p",null,"This is the size (in number of bytes) of all the content associated with an item: header, key, and value."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Allocation class")),(0,o.kt)("p",null,"Each allocation class represents a specific allocation size. Items, within the same memory pool, of the same allocation size come from the same allocation class. Each allocation class can take a number of slabs and give out allocations from the slabs (like a classic slab allocator)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Slab")),(0,o.kt)("p",null,"A slab is a logical unit of a fixed chunk of memory; it is hardcoded to 4 MB currently. Cachelib separates the whole cacheable memory into a number of slabs. Memory allocations for each item are carved out of slabs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Compact cache")),(0,o.kt)("p",null,"A compact cache is used to store small key-value data, usually less than tens of bytes per entry. The size of the key must be fixed at compile time, whereas the size of the value can be fixed, variable, or empty. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"compact_cache/"},"Compact Cache"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pool")),(0,o.kt)("p",null,"A pool is a block of memory of a specific size in a cache. Pools enable you to separate different objects in the cache; that is, objects in one pool are isolated from objects in the other. In addition, they improve hit ratio. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"Partition_cache_into_pools/"},"Partitioning cache into pools"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pool rebalance")),(0,o.kt)("p",null,"When you cache objects of variable sizes, over time, the cache memory is fragmented. To fix this, enable pool reblancing. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"pool_rebalance_strategy/"},"Pool Rebalance Strategy"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Eviction policy")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LRU"),"\nThe least recently used (LRU) eviction policy ensures that the least recently used item is evicted first. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"eviction_policy/"},"Eviction Policy"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LRU 2Q"),"\nLRU 2Q uses three queues to manage hot, warm, and cold items. If an item in the cold queue is accessed, it gets promoted to the warm queue. An item evicted from the cold queue gets evicted from the cache. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"eviction_policy/"},"Eviction Policy"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TinyLFU"),"\nTinyLFU consists of a frequency estimator (FE) and LRU. FE is an approximate data structure that computes an item's access frequency before it is inserted to LRU. Only items that pass the frequency threshold get accepted to LRU and evicted. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"eviction_policy/"},"Eviction Policy"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Compact cache")),(0,o.kt)("p",null,"A compact cache is used to store small key-value data, usually less than tens of bytes per entry. The size of the key must be fixed at compile time, whereas the size of the value can be fixed, variable, or empty. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"compact_cache/"},"Compact Cache"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HybridCache")),(0,o.kt)("p",null,"HybridCache is non-volatile memory (NVM) cache (flash). When you use HybridCache, items allocated in cache can live on NVM or DRAM. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"HybridCache/"},"HybridCache"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Item lifetime")),(0,o.kt)("p",null,"Time in cache since the creation of the ",(0,o.kt)("em",{parentName:"p"},"Item")," up until eviction of the ",(0,o.kt)("em",{parentName:"p"},"Item")," from the cache."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Eviction Age")),(0,o.kt)("p",null,"Time in cache for an Item  from it's last access time up to its eviction."))}u.isMDXComponent=!0}}]);