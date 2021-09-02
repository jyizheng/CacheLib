"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[293],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(a),s=r,u=p["".concat(c,".").concat(s)]||p[s]||h[s]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7399:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"Write_data_to_cache",title:"Write data to cache"},c=void 0,d={unversionedId:"Cache_Library_User_Guides/Write_data_to_cache",id:"Cache_Library_User_Guides/Write_data_to_cache",isDocsHomePage:!1,title:"Write data to cache",description:"After setting up your cache, you can start writing data to it.",source:"@site/docs/Cache_Library_User_Guides/Write_data_to_cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Write_data_to_cache",permalink:"/docs/Cache_Library_User_Guides/Write_data_to_cache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Write_data_to_cache.md",version:"current",frontMatter:{id:"Write_data_to_cache",title:"Write data to cache"},sidebar:"userguideSidebar",previous:{title:"Set up a simple dram cache",permalink:"/docs/Cache_Library_User_Guides/Set_up_a_simple_cache"},next:{title:"Read data from cache",permalink:"/docs/Cache_Library_User_Guides/Read_data_from_cache"}},m=[{value:"Allocate memory for data from cache",id:"allocate-memory-for-data-from-cache",children:[]},{value:"Write data to allocated memory and insert item handle into cache",id:"write-data-to-allocated-memory-and-insert-item-handle-into-cache",children:[]}],h={toc:m};function p(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After ",(0,i.kt)("a",{parentName:"p",href:"Set_up_a_simple_cache/"},"setting up your cache"),", you can start writing data to it."),(0,i.kt)("p",null,"To use cachelib to write data to your cache:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allocate memory for the data from the cache, which will return an item handle to the allocated memory. Item handle provides a reference counted wrapper to access a cache item."),(0,i.kt)("li",{parentName:"ul"},"Write the data to the allocated memory and insert the item handle into the cache.")),(0,i.kt)("h2",{id:"allocate-memory-for-data-from-cache"},"Allocate memory for data from cache"),(0,i.kt)("p",null,"The header file allocator/CacheAllocator.h declares the following methods to allocate memory from cache:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename CacheTrait>;\nclass CacheAllocator : public CacheBase {\n  public:\n    // Allocate memory of a specific size from cache.\n    ItemHandle allocate(\n      PoolId id,\n      Key key,\n      uint32_t size,\n      uint32_t ttlSecs = 0,\n      uint32_t creationTime = 0,\n    );\n\n    // Allocate memory for a chained item of a specific size from cache.\n    ItemHandle allocateChainedItem(const ItemHandle& parent, uint32_t size);\n  // ...\n};\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'auto pool_id = cache->addPool(\n  "default_pool",\n  cache->getCacheMemoryStats().cacheSize\n);\nItemHandle item_handle = cache->allocate(pool_id, "key1", 1024);\n')),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cache")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"unique_ptr")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"CacheAllocator<facebook::cachelib::LruAllocator>")," (see ",(0,i.kt)("a",{parentName:"li",href:"Set_up_a_simple_cache/"},"Set up a simple dram cache"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ItemHandle")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"CacheItem<facebook::cachelib::LruAllocator>::Handle")," (see allocator/CacheItem.h), which is ",(0,i.kt)("inlineCode",{parentName:"li"},"facebook::cachelib::detail::HandleImpl")," defined in allocator/Handle.h. If allocation failed, an empty handle will be returned.")),(0,i.kt)("p",null,"To get the writable memory from the allocated memory, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"getWritableMemory")," method via the item handle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"if (item_handle) {\n  void* pwm = item_handle->getWritableMemory();\n}\n")),(0,i.kt)("p",null,"If the data size is greater than the maximum slab size (4 MB), use ",(0,i.kt)("a",{parentName:"p",href:"chained_items/"},"chained items")," to store the data with multiple items. To allocate memory for additional chained items from cache, call this method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"ItemHandle allocateChainedItem(const ItemHandle& parent, uint32_t size);\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'size_t size = 1024 * 1024;\nauto parent_item_handle = cache->allocate(pool_id, "parent", size);\n\nif (parent_item_handle) {\n  // Call allocateChainedItem() to allocate memory for 3 chained items.\n  auto chained_item_handle_1 = cache->allocateChainedItem(parent_item_handle, 2 * size);\n  auto chained_item_handle_2 = cache->allocateChainedItem(parent_item_handle, 4 * size);\n  auto chained_item_handle_3 = cache->allocateChainedItem(parent_item_handle, 6 * size);\n}\n')),(0,i.kt)("h2",{id:"write-data-to-allocated-memory-and-insert-item-handle-into-cache"},"Write data to allocated memory and insert item handle into cache"),(0,i.kt)("p",null,"To write data to the allocated memory in the cache, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"memcpy()")," function to write data to the allocated memory got from the item handle."),(0,i.kt)("li",{parentName:"ol"},"Insert the item handle into cache.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"memcpy")," function requires the destination address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void* memcpy(void* destination, const void* source, size_t num);\n")),(0,i.kt)("p",null,"To get the destination address, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"getWritableMemory()")," method via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemHandle"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void* pwm = item_handle->getWritableMemory();\n")),(0,i.kt)("p",null,"To insert an item to the cache, call one of the following methods defined in\nallocator/CacheAllocator.h.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename CacheTrait>\nclass CacheAllocator : public CacheBase {\n  public:\n    // will fail insertion if key is already present\n    bool insert(const ItemHandle& handle);\n\n    // will insert or replace existing item for the key\n    ItemHandle insertOrReplace(const ItemHandle& handle);\n\n    // link the chained items to the parent\n    void addChainedItem(const ItemHandle& parent, ItemHandle child);\n  // ...\n};\n")),(0,i.kt)("p",null,"For example, the following code writes ",(0,i.kt)("em",{parentName:"p"},"new")," data (i.e., data associated with a new key) into the cache:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'string data("Hello world");\n\n// Allocate memory for the data.\nauto item_handle = cache->allocate(pool_id, "key1", data.size());\n\nif (item_handle) {\n  // Write the data to the allocated memory.\n  std::memcpy(item_handle->getWritableMemory(), data.data(), data.size());\n\n  // Insert the item handle into the cache.\n  cache->insertOrReplace(item_handle);\n} else {\n  // handle allocation failure\n}\n')),(0,i.kt)("p",null,"And the following code writes ",(0,i.kt)("em",{parentName:"p"},"new")," data (i.e., data associated with a new key) to the cache and ",(0,i.kt)("em",{parentName:"p"},"replace")," the data associated with an existing key in the cache with replacement data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'string data("new data");\n// Allocate memory for the data.\nauto item_handle = cache->allocate(pool_id, "key2", data.size());\n\n// Write the data to the cache.\nstd::memcpy(handle->getWritableMemory(), data.data(), data.size());\n\n// Insert the item handle into the cache.\ncache->insertOrReplace(item_handle);\n\ndata = "Repalce the data associated with key key1";\n// Allocate memory for the replacement data.\nitem_handle = cache->allocate(pool_id, "key1", data.size());\n\n// Write the replacement data to the cache.\nstd::memcpy(item_handle->getWritableMemory(), data.data(), data.size());\n\n// Insert the item handle into the cache.\ncache->insertOrReplace(item_handle);\n')),(0,i.kt)("p",null,"To write data to chainded items, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"For each chained item, write data to its memory allocated by the ",(0,i.kt)("inlineCode",{parentName:"li"},"allocateChainedItem()")," method."),(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"addChainedItem()")," method to add the chained items to the parent item.")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'std::vector<std::string> chained_items = { "item 1", "item 2", "item 3" };\n\nfor (auto itr = chained_items.begin(); itr != chained_items.end(); ++itr) {\n  // Allocate memory for the chained item.\n  auto item_handle = cache->allocateChainedItem(parent_handle, size);\n\n  if (!item_handle) {\n    // failed to allocate for the chained item.\n    throw "error";\n  }\n\n  // Write data to the chained item.\n  std::memcpy(item_handle->getWritableMemory(), itr->data(), itr->size());\n\n  // Add the chained item to the parent item.\n  cache->addChainedItem(parent_handle, std::move(item_handle));\n}\n')),(0,i.kt)("p",null,"A common thing is to try out the biggest allocate-able size for a regular item and chained item. User can find those out by calling the following methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Regular item\nauto largestSize = (Largest Alloc Granularity: 4MB by default, or user-specified) - (Item::getRequiredSize(key, 0))\n\n// Chained item\nauto largestSize = (Largest Alloc Granularity) - (ChainedItem::getRequiredSize(0))\n")))}p.isMDXComponent=!0}}]);