(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(t,e,s){},196:function(t,e){},213:function(t,e,s){"use strict";var a=s(3),r=s(83).filter,i=s(55),n=s(30),o=i("filter"),c=n("filter");a({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},214:function(t,e,s){"use strict";var a=s(195);s.n(a).a},215:function(t,e,s){"use strict";var a=s(196),r=s.n(a);e.default=r.a},236:function(t,e,s){"use strict";s.r(e);s(213),s(139),s(140);var a={name:"Blog",data:function(){return{searchTerm:""}},computed:{searchResults:function(){var t=this;return this.searchTerm.length>2?this.$page.posts.edges.filter((function(e){return e.node.title.toLowerCase().includes(t.searchTerm.toLowerCase())})):this.$page.posts.edges}}},r=(s(214),s(20)),i=s(215),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("div",{staticClass:"blog sub-page-container"},[s("h1",{staticClass:"my-4 mb-5"},[t._v("Blog")]),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"search-field",attrs:{type:"text",placeholder:"Search through"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})]),s("div",{staticClass:"blog-content"},t._l(t.searchResults,(function(e){return s("g-link",{key:e.node.id,staticClass:"blog-post",attrs:{to:e.node.path}},[s("div",{staticClass:"media my-5"},[s("g-image",{staticClass:"mr-3",attrs:{immediate:"",src:e.node.image,alt:"image"}}),s("div",{staticClass:"media-body"},[s("h5",{staticClass:"mt-0 blog-title"},[t._v(t._s(e.node.title))]),s("p",{staticClass:"text-dark"},[t._v(t._s(e.node.excerpt))])])],1)])})),1)])])}),[],!1,null,"2f16a8b9",null);"function"==typeof i.default&&Object(i.default)(n);e.default=n.exports}}]);