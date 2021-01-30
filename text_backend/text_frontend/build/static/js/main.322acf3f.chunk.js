(this["webpackJsonptext-frontend"]=this["webpackJsonptext-frontend"]||[]).push([[0],{44:function(e,t,n){e.exports=n(75)},49:function(e,t,n){},50:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},51:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=(n(49),n(23)),s=n(27),l=n(9),u=n(10),h=n(18),d=n(12),p=n(11),m=(n(50),n(51),n(52),n(16)),f=n.n(m),b={id:0,label:"book"};function v(e){return f.a.get("/api/comps/"+e)}function g(e){var t=b;return t.text1=e.box1,t.text2=e.box2,f.a.post("/api/comps/",b)}function x(){return f.a.get("/api/headers/")}function j(e){var t={text:e,label:b.label};return f.a.post("/api/textObjects/",t)}var O=n(28),E=n.n(O),y=n(39),_=(a.Component,function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("label",null,"Text",this.props.name,": "),r.a.createElement("textarea",{onChange:function(t){return e.props.handleChange(t,e.props.name)},rows:5,cols:5}))}}]),n}(a.Component)),k=n(104),C=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(k.a,{onClick:this.props.onClick,variant:"contained",color:"primary"},"compare")}}]),n}(a.Component),w=n(26),T=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"determine_color",value:function(e){return e>2/3*100?"success":e<1/3*100?"danger":"warning"}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"20%"}},r.a.createElement("h2",null," Similarity: "),r.a.createElement(w.a,{variant:this.determine_color(this.props.percent),now:this.props.percent,label:this.props.percent+"%"}))}}]),n}(a.Component),S=n(102),z=n(97),B=n(99),J=n(100),M=n(103),W=n(98),A=n(101),D=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={headers:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.get_headers().then((function(t){return e.setState({headers:t.data.Headers})})).catch((function(e){return console.log(e)}))}},{key:"generate_rows",value:function(){if("undefined"==typeof this.props.data.textObjects)return[{},{}];var e=this.props.data.textObjects.TextObject1,t=this.props.data.textObjects.TextObject2;return e.name="Text_1",t.name="Text_2",[e,t]}},{key:"format_data",value:function(){var e=this;if("undefined"!=typeof this.props.data){var t=this.generate_rows(this.props.data);return r.a.createElement(z.a,null,t.map((function(t){return r.a.createElement(W.a,{key:t.name},r.a.createElement(B.a,{component:"th",scope:"row"},t.name),e.state.headers.map((function(e){return r.a.createElement(B.a,{key:[e],align:"right"},t[e])})))})))}return r.a.createElement(z.a,null)}},{key:"format_headers",value:function(){return r.a.createElement(W.a,null,r.a.createElement(B.a,null," "," "," "),this.state.headers.map((function(e){return r.a.createElement(B.a,{align:"right",key:e},e)})))}},{key:"render",value:function(){this.format_data();return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(J.a,{component:A.a},r.a.createElement(S.a,{size:"small","aria-label":"a dense table"},r.a.createElement(M.a,null,this.format_headers()),this.format_data())))}}]),n}(a.Component);function F(e,t,n,a,r){return{name:e,calories:t,fat:n,carbs:a,protein:r}}F("Text_1",159,6,24,4),F("Text_2",237,9,37,4.3);var H=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={text:{box1:" ",box2:" "},bar_percent:0,data:{textObjects:void 0,comp:void 0}},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"retrieve_stats",value:function(){var e=this;return j(this.state.text).then((function(t){return e.setState({data:{textObjects:t.data,comp:e.state.data.comp}})})).catch((function(e){return console.log(e)}))}},{key:"submit_comparison",value:function(){var e=this;return g(this.state.text).then((function(t){return v(t.data.id).then((function(t){return e.handle_second_response(t)})).catch((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}))}},{key:"handle_second_response",value:function(e){console.log(e.data);e.data.result;var t=(100*e.data.percent).toFixed(2);this.setState({bar_percent:t})}},{key:"handleChange",value:function(e,t){var n=e.target.value;this.setState((function(e){return{text:Object(s.a)(Object(s.a)({},e.text),{},Object(i.a)({},t,n))}}));this.retrieve_stats()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null," Text-Analyzer "),r.a.createElement(_,{name:"box1",handleChange:this.handleChange}),r.a.createElement(_,{name:"box2",handleChange:this.handleChange}),r.a.createElement(D,{data:this.state.data,get_headers:x}),r.a.createElement(T,{percent:this.state.bar_percent}),r.a.createElement("h1",null," "),r.a.createElement(C,{onClick:function(){return e.submit_comparison()}}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.322acf3f.chunk.js.map