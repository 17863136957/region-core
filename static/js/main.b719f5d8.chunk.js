(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{175:function(e,t,n){e.exports=n(313)},312:function(e,t,n){},313:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n(0),l=n.n(r),o=n(12),c=n(35),u=n(129),i=n(172),m=n(319),s=function(e){var t=e.children,n=Object(i.a)(e,["children"]);return l.a.createElement(m.a,Object.assign({style:{margin:30}},n),t)},d=function(){return l.a.createElement("div",{style:{height:10}})},f=function(e){var t=e.lines;return l.a.createElement(r.Fragment,null,t&&t.map((function(e,t){return l.a.createElement("p",{key:t||0},e)})))},g=n(168),E=n(158),v=n(317),b=n(316),p=n(320),h=n(321),y=n(318),k=n(326),j=n(322),C=n(325),w=n(165),O=Object(w.a)(),R=n(327),S=n(323),L=Object(R.a)({scriptUrl:"//at.alicdn.com/t/font_942570_3ol64gksd4x.js"}),B=function(){return l.a.createElement("div",{style:{padding:32}},l.a.createElement("h1",null,"How to run this"),l.a.createElement("pre",null,"git clone https://github.com/regionjs/region-core.git\ncd example\nnpm i\nnpm start\n"),l.a.createElement("h1",null,"Related"),l.a.createElement("div",{style:{fontSize:18}},l.a.createElement("a",{href:"https://github.com/regionjs/region-core"},l.a.createElement(S.a,null)," Github"),l.a.createElement("span",{style:{margin:"0 15px"}}),l.a.createElement("a",{href:"https://www.npmjs.com/package/region-core"},l.a.createElement(L,{type:"npm"})," npm"),l.a.createElement("span",{style:{margin:"0 15px"}}),l.a.createElement("a",{href:"https://github.com/regionjs/region-core/blob/master/docs/Document.md"},l.a.createElement(L,{type:"docs"})," Docs")))},V=Object(c.createRegion)("initialValue"),x=function(e){return V.set(e.target.value)},T=function(){var e=V.useValue();return l.a.createElement(s,null,e,l.a.createElement(d,null),l.a.createElement(h.a,{style:{width:300},value:e,onChange:x}))},A=0,P=function(){return new Promise((function(e){return setTimeout((function(){e("user from api: ".concat(A)),A++}),1e3)}))},I=Object(c.createRegion)(),N=function(){return I.load(P)};N();var _=function(){var e=I.useLoading(),t=I.useValue();return l.a.createElement(s,{loading:e},t,l.a.createElement(d,null),l.a.createElement(g.a,{onClick:N},"loadUser"))},U=n(324),F=0,H=function(){return new Promise((function(e,t){return setTimeout((function(){if(F>3){var n=new Error("error: ".concat(F));t(n)}else e("user from api: ".concat(F));F++}),1e3)}))},G=Object(c.createRegion)(),W=function(){return G.load(H)};W();var D=function(){var e=G.useLoading(),t=G.useValue(),n=G.useError(),a=G.useFetchTime()||0;return l.a.createElement(s,{loading:e},l.a.createElement(U.b,{title:"User Info",bordered:!0},l.a.createElement(U.b.Item,{label:"Value"},t),l.a.createElement(U.b.Item,{label:"Error"},n?n.message:""),l.a.createElement(U.b.Item,{label:"FetchTime"},new Date(a).toString())),l.a.createElement(d,null),l.a.createElement(g.a,{onClick:W},"loadUser"))},K=0,z=function(){return new Promise((function(e,t){return setTimeout((function(){if(K>3){var n=new Error("error: ".concat(K));t(n)}else e("user from api: ".concat(K));K++}),1e3)}))},M=Object(c.createRegion)(),J=function(){return M.load(z)};J();var q=function(){var e=M.useProps(),t=e.loading,n=e.error,a=e.fetchTime,r=e.value;return l.a.createElement(s,{loading:t},l.a.createElement(U.b,{title:"User Info",bordered:!0},l.a.createElement(U.b.Item,{label:"Value"},r),l.a.createElement(U.b.Item,{label:"Error"},n?n.message:""),l.a.createElement(U.b.Item,{label:"FetchTime"},new Date(a).toString())),l.a.createElement(d,null),l.a.createElement(g.a,{onClick:J},"loadUser"))},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){return new Promise((function(n){setTimeout((function(){n(e)}),t)}))}},Q=Y("the user from api",500),X=Y("some followers from api"),Z=Y([]),$=Object(c.createRegion)([]),ee=Object(c.createRegion)([]),te=$.loadBy(Q),ne=function(){return ee.load(X,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.push(t),e.slice()}))},ae=function(){return ee.load(Z)},re=$.useValue,le=ee.useValue,oe=function(){var e=$.useLoading(),t=ee.useLoading();return e||t},ce=l.a.createElement(g.a,{type:"link",onClick:ne},"More"),ue=function(){var e=oe(),t=re(),n=le();return l.a.createElement(s,{loading:e,title:t,extra:ce,style:{width:300,margin:30}},l.a.createElement(f,{lines:n}))},ie=n(328),me=function(){var e=oe(),t=re(),n=le();return l.a.createElement(s,{title:t,style:{width:300,margin:30}},l.a.createElement(f,{lines:n}),l.a.createElement(ie.b,null,l.a.createElement(g.a,{loading:e,onClick:ne},"More"),l.a.createElement(g.a,{loading:e,onClick:ae},"Clear")))};te(),ne();var se,de=function(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(ue,null),l.a.createElement(me,null))},fe=n(1),ge=n(2),Ee=n(4),ve=n(3),be=n(5),pe=Object(c.createRegion)("initialValue"),he=function(e){return pe.set(e.target.value)},ye=function(e){function t(){return Object(fe.a)(this,t),Object(Ee.a)(this,Object(ve.a)(t).apply(this,arguments))}return Object(be.a)(t,e),Object(ge.a)(t,[{key:"render",value:function(){var e=this.props.value;return l.a.createElement(s,null,e,l.a.createElement(d,null),l.a.createElement(h.a,{value:e,onChange:he}))}}]),t}(r.Component),ke=(se=ye,function(e){var t=pe.useValue();return l.a.createElement(se,Object.assign({value:t},e))}),je=Object(c.createRegion)(),Ce=Object(c.createRegion)(),we=function(){return new Promise((function(e){return setTimeout((function(){return e(null)}),1e3)}))},Oe=function(){return je.load(we)},Re=function(){return Ce.load(we)},Se=function(){var e=je.useLoading();return l.a.createElement(g.a,{loading:e,onClick:Oe},"Load Left Part")},Le=function(){var e=Ce.useLoading();return l.a.createElement(g.a,{loading:e,onClick:Re},"Load Right Part")},Be=function(){var e=je.useLoading(),t=Ce.useLoading();return l.a.createElement(g.a,{loading:e||t,disabled:!0},"Something is loading")},Ve=function(){var e=je.useLoading(),t=Ce.useLoading();return Object(r.useEffect)((function(){Oe(),Re()}),[]),l.a.createElement(s,null,l.a.createElement(E.a,{spinning:e&&t},l.a.createElement(Se,null),l.a.createElement(d,null),l.a.createElement(Le,null),l.a.createElement(d,null),l.a.createElement(Be,null)))},xe={0:{id:0,value:0},1:{id:1,value:1}},Te=2,Ae=function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(e(t))}),500)}))}},Pe=Ae((function(){return xe})),Ie=Ae((function(){var e={id:Te,value:Te};return xe[Te]=e,Te+=1,e})),Ne=Ae((function(e){return xe[e.id]=e,xe[e.id]})),_e=Ae((function(e){return xe[e.id]=Object.assign(xe[e.id],e),xe[e.id]})),Ue=Ae((function(e){return delete xe[e],null})),Fe=Object(c.createRegion)();Fe.load(Pe);var He=Fe.loadBy(Pe),Ge=Fe.loadBy(Ie,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return e[t.id]=t,e})),We=Fe.loadBy(Ne,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return e[t.id]=t,e})),De=Fe.loadBy(_e,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return e[t.id]=t,e})),Ke=Fe.loadBy(Ue,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>2?arguments[2]:void 0;return delete e[t],e})),ze=function(e){return function(){return new Promise((function(t){setTimeout((function(){t(e())}),500)}))}},Me=0,Je=ze((function(){return"A".concat(Me+=1)})),qe=0,Ye=ze((function(){return"B".concat(qe+=1)})),Qe=Object(c.createMappedRegion)(),Xe=Qe.loadBy("A",Je),Ze=Qe.loadBy("B",Ye),$e=n(173),et=Object(c.createRegion)({a:!1,b:"",c:"",d:[]}),tt=function(e,t){et.set((function(n){return Object($e.a)({},n,{[e]:t})}))},nt=function(e){return tt("a",e)},at=function(e){return tt("b",e.target.value)},rt=function(e){return tt("c",e.target.value)},lt=function(e){return tt("d",e)},ot=function(){var e=et.useValue(),t=e.a,n=e.b,a=e.c,r=e.d;return l.a.createElement(s,null,l.a.createElement(k.a,{checked:t,onChange:nt}),l.a.createElement(d,null),l.a.createElement(h.a,{value:n,onChange:at}),l.a.createElement(d,null),l.a.createElement(j.a.Group,{value:a,onChange:rt,options:["Hangzhou","Shanghai","Beijing","Chengdu"]}),l.a.createElement(d,null),l.a.createElement(C.a.Group,{options:["Apple","Pear","Orange"],value:r,onChange:lt}))},ct=function(){var e=et.useValue(),t=e.a,n=e.b,a=e.c,r=e.d;return l.a.createElement(s,null,l.a.createElement(U.b,{title:"User Info",bordered:!0},l.a.createElement(U.b.Item,{label:"A"},String(t)),l.a.createElement(U.b.Item,{label:"B"},n),l.a.createElement(U.b.Item,{label:"C"},a),l.a.createElement(U.b.Item,{label:"D"},r.join(", "))))},ut=function(){return l.a.createElement(r.Fragment,null,l.a.createElement(ot,null),l.a.createElement(ct,null))},it=function(e){return new Promise((function(t,n){setTimeout((function(){String(Number(e))===e?t(e):n(new Error("message from api: type some number"))}),1e3)}))},mt=Object(c.createRegion)(""),st=function(e){return t=e.target.value,mt.set(t),void mt.loadBy(it)(t);var t},dt=function(){var e=mt.useProps(),t=e.loading,n=e.error,a=e.value,r=function(e){var t=e.loading,n=e.error;if(""!==e.value)return t?"validating":n?"error":"success"}({loading:t,error:n,value:a}),o=n&&n.message;return l.a.createElement(s,null,l.a.createElement(p.a.Item,{hasFeedback:!0,validateStatus:r,help:"validating"===r?"validating...":o},l.a.createElement(h.a,{placeholder:"type some number",value:a,onChange:st})))},ft=Object(c.createLocalStorageRegion)("localStorage-key","some value stored in localStorage"),gt=function(e){return ft.set(e.target.value)},Et=[{key:"GetStarted",label:"Get Started",groupName:"GetStarted",Component:B},{key:"UseValue",label:"useValue",groupName:"Basic",Component:T},{key:"UseLoading",label:"useLoading",groupName:"Basic",Component:_},{key:"UseError",label:"useError",groupName:"Basic",Component:D},{key:"UseProps",label:"useProps",groupName:"Basic",Component:q},{key:"LocalStorageRegion",label:"localStorage",groupName:"Basic",Component:function(){var e=ft.useValue();return l.a.createElement(s,null,l.a.createElement(h.a,{value:e,onChange:gt}))}},{key:"SharedValue",label:"Shared Value",groupName:"Advanced",Component:de},{key:"AdvancedLoading",label:"Advanced Loading",groupName:"Advanced",Component:Ve},{key:"ClassComponent",label:"Class Component",groupName:"Advanced",Component:ke},{key:"RESTful",label:"RESTful",groupName:"Advanced",Component:function(){var e=Fe.useLoading(),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];return Object.keys(e).forEach((function(n){var a=e[n];t.push(a)})),t}(Fe.useValue());return l.a.createElement(s,null,l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"_blank",rel:"noopener noreferrer"},"What is RESTful?"),l.a.createElement(y.b,{loading:e,dataSource:t,header:l.a.createElement(g.a,{onClick:He},"GET"),footer:l.a.createElement(g.a,{onClick:Ge},"POST"),renderItem:function(e){var t={id:e.id,value:e.value+1};return l.a.createElement(y.b.Item,null,l.a.createElement("span",{style:{flex:1}},e.value),l.a.createElement(ie.b,null,l.a.createElement(g.a,{onClick:function(){return We(t)}},"PUT"),l.a.createElement(g.a,{onClick:function(){return De(t)}},"PATCH"),l.a.createElement(g.a,{onClick:function(){return Ke(e.id)}},"DELETE")))}}))}},{key:"SWR",label:"SWR",groupName:"Advanced",Component:function(){var e=Object(r.useState)("A"),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Qe.useValue(n),u=Object(r.useCallback)((function(){a("A"),Xe()}),[]),i=Object(r.useCallback)((function(){a("B"),Ze()}),[]);return l.a.createElement(s,null,l.a.createElement("p",null,"stale-while-revalidate is a cache invalidation strategy popularized by ",l.a.createElement("a",{href:"https://tools.ietf.org/html/rfc5861",target:"_blank",rel:"noopener noreferrer"},"HTTP RFC 5861")),l.a.createElement(ie.b,null,l.a.createElement(g.a,{onClick:u},"loadA"),l.a.createElement(g.a,{onClick:i},"loadB")),l.a.createElement(d,null),c)}},{key:"AsyncValidate",label:"Async Validate",groupName:"Advanced",Component:dt},{key:"Form",label:"Form",groupName:"Advanced",Component:ut}],vt=n(169),bt=(n(314),Object(c.createRegion)("")),pt=function(){if("undefined"===typeof window)throw new Error("window undefined");return{innerWidth:window.innerWidth,innerHeight:window.innerHeight,outerWidth:window.outerWidth,outerHeight:window.outerHeight}},ht=function(e){var t=e.selectedKey,n=function(){var e=Object(r.useState)(pt),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=function(){return a(pt())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().innerWidth,a=bt.useLoading(),c=bt.useValue();return Object(r.useEffect)((function(){!function(e){var t="https://raw.githubusercontent.com/regionjs/region-core/master/example/src/".concat(e,"/index.tsx"),n=new Request(t);bt.load((function(){return fetch(n).then((function(e){return e.text()}))}))}(t)}),[t]),a?null:l.a.createElement(vt.a,{width:n-260,height:500,language:"javascript",theme:"vs-dark",value:c})},yt=n(98),kt=n.n(yt),jt=function(e){var t=e.selectedKey,n=bt.useLoading(),a=kt.a.code;return n||(a="".concat(kt.a.code," ").concat(kt.a.dark)),l.a.createElement("div",{className:kt.a.container},l.a.createElement("div",{className:a},l.a.createElement("a",{href:"https://github.com/regionjs/region-core/blob/master/example/src/".concat(t,"/index.tsx"),rel:"noreferrer noopener",target:"_blank"},l.a.createElement(S.a,null))),l.a.createElement(ht,{selectedKey:t}))},Ct=Object(c.createRegion)(function(){var e=O.location.hash,t=""!==e?e.slice(1):null,n=Object(u.get)(Et,["0","key"]);return t&&void 0!==Et.find((function(e){return e.key===t}))?t:n}()),wt=Object(u.get)(Et,["0","key"]),Ot=function(e){var t=e.key;O.replace("#".concat(t)),Ct.set(t)},Rt=function(e){var t=e.key,n=e.label;return l.a.createElement(v.a.Item,{key:t},n)},St=function(){var e=Object(u.groupBy)(Et,"groupName");return Object.entries(e).map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1],r=a.map(Rt);return 1===a.length?r:l.a.createElement(v.a.SubMenu,{key:n,title:n},r)}))}(),Lt=function(){var e=Ct.useValue(),t=Et.find((function(t){return t.key===e}));if(!t)return Ct.set(wt),null;var n=t.Component,a=t.groupName;return l.a.createElement(b.a,{style:{height:"100vh"}},l.a.createElement(b.a.Sider,{width:200,theme:"light",style:{overflowY:"auto"}},l.a.createElement(v.a,{mode:"inline",defaultOpenKeys:[a],selectedKeys:[e],onClick:Ot,style:{minHeight:"100%",borderRight:"1px solid #e8e8e8"}},St)),l.a.createElement(b.a.Content,null,l.a.createElement(n,null),"GetStarted"!==e&&l.a.createElement(jt,{selectedKey:e})))},Bt=l.a.createElement(Lt,null);n(311),n(312);Object(a.render)(Bt,document.getElementById("root"))},98:function(e,t,n){e.exports={container:"External_container__3t52A",code:"External_code__CR0le",dark:"External_dark__2BAR1"}}},[[175,1,2]]]);
//# sourceMappingURL=main.b719f5d8.chunk.js.map