(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8Smk":function(t,e,a){"use strict";a("CYAK")},CYAK:function(t,e,a){},mr2V:function(t,e,a){"use strict";a("fbCW"),a("07d7"),a("sMBO");var s=a("qtb/");e.a={data:function(){return{project:{}}},computed:{projects:function(){return s.data}},mounted:function(){var t=this;this.project=this.projects.find((function(e){return e.name==t.$route.params.name}))},methods:{thumbnailUrl:function(t){return"/projects/".concat(t,"/thumbnail.jpg")}}}},oCZ7:function(t,e,a){"use strict";var s={name:"PageHeader",props:{text:{type:String,default:""}}},n=(a("8Smk"),a("KHd+")),i=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title relative p5"},[e("h1",{staticClass:"page-title-text relative layer-1"},[this._v(this._s(this.text))]),e("div",{staticClass:"page-title-effect absolute top-0 start-0 ps5"},[this._v("\n        "+this._s(this.text)+"\n    ")])])}),[],!1,null,"4af2d54e",null);e.a=i.exports},oaU6:function(t,e,a){"use strict";a.r(e);var s=a("mr2V"),n=a("oCZ7"),i={metaInfo:{title:"Projects"},mixins:[s.a],components:{PageTitle:n.a}},r=a("KHd+"),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("section",[a("h1"),a("PageTitle",{attrs:{text:"My Work"}}),a("Row",{attrs:{size:"full"}},t._l(t.projects,(function(e,s){return a("Col",{key:s,attrs:{sm:"12",md:"6",lg:"4",xl:"3"}},[a("g-link",{staticClass:"relative",attrs:{to:"/projects/"+e.name}},[a("Row",{staticClass:"absolute w-100 h-100 hover-opacity-0-to-100 smooth",attrs:{x:"c",y:"c"}},[t._v(t._s(e.name))]),a("g-image",{staticClass:"w-100",attrs:{src:t.thumbnailUrl(e.name),alt:e.name}})],1)],1)})),1)],1)])}),[],!1,null,null,null);e.default=o.exports},"qtb/":function(t){t.exports=JSON.parse('{"data":[{"id":"1","name":"Capital Sauce","images":[]},{"id":"2","name":"Black Stone","images":[]},{"id":"3","name":"Ooredoo","images":[]},{"id":"4","name":"FreeStyle","images":[]}]}')}}]);