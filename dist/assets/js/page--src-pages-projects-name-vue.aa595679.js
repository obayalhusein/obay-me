(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"77Rj":function(t,e,a){"use strict";a("DTUS")},DTUS:function(t,e,a){},mr2V:function(t,e,a){"use strict";a("fbCW"),a("07d7"),a("sMBO");var i=a("qtb/");e.a={data:function(){return{project:{}}},computed:{projects:function(){return i.data}},mounted:function(){var t=this;this.project=this.projects.find((function(e){return e.name==t.$route.params.name}))},methods:{thumbnailUrl:function(t){return"/projects/".concat(t,"/thumbnail.jpg")}}}},oCZ7:function(t,e,a){"use strict";var i={name:"PageTitle",props:{text:{type:String,default:""}}},n=(a("77Rj"),a("KHd+")),s=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title relative p5"},[e("h1",{staticClass:"page-title-text relative layer-1"},[this._v(this._s(this.text))]),e("div",{staticClass:"page-title-effect absolute top-0 start-0 ps5"},[this._v("\n        "+this._s(this.text)+"\n    ")])])}),[],!1,null,"a6708a04",null);e.a=s.exports},"qtb/":function(t){t.exports=JSON.parse('{"data":[{"id":"1","name":"Capital Sauce","images":[]},{"id":"2","name":"Black Stone","images":[]},{"id":"3","name":"Ooredoo","images":[]},{"id":"4","name":"FreeStyle","images":[]},{"id":"5","name":"WebTank","images":[]}]}')},tH5J:function(t,e,a){"use strict";a.r(e);var i=a("mr2V"),n=a("oCZ7"),s={metaInfo:{title:"Project"},mixins:[i.a],components:{PageTitle:n.a}},r=a("KHd+"),o=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("PageTitle",{attrs:{text:this.project.name}}),e("g-image",{staticClass:"w-100",attrs:{src:this.thumbnailUrl(this.project.name),alt:this.project.name}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);