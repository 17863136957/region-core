(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,n,t){e.exports=t(398)},397:function(e,n,t){},398:function(e,n,t){"use strict";t.r(n);var a=t(8),r=t(0),l=t.n(r),o=t(83),c=t(13),u=t(84),i=t(150),m=t(131),s=function(e){var n=e.children,t=Object(i.a)(e,["children"]);return l.a.createElement(m.a,Object.assign({style:{width:500,margin:30}},t),n)},d=function(){return l.a.createElement("div",{style:{height:10}})},g=function(e){var n=e.lines;return l.a.createElement(r.Fragment,null,n&&n.map(function(e,n){return l.a.createElement("p",{key:n||0},e)}))},f=t(27),v=t(148),E=Object(v.a)(),p=f.d.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_942570_3ol64gksd4x.js"}),h=function(){return l.a.createElement("div",{style:{padding:32}},l.a.createElement("h1",null,"How to run this"),l.a.createElement("pre",null,"git clone https://github.com/regionjs/region-core.git\ncd example\nnpm i\nnpm start\n"),l.a.createElement("h1",null,"Related"),l.a.createElement("div",{style:{fontSize:18}},l.a.createElement("a",{href:"https://github.com/regionjs/region-core"},l.a.createElement(f.d,{type:"github"})," Github"),l.a.createElement("span",{style:{margin:"0 15px"}}),l.a.createElement("a",{href:"https://www.npmjs.com/package/region-core"},l.a.createElement(p,{type:"npm"})," npm"),l.a.createElement("span",{style:{margin:"0 15px"}}),l.a.createElement("a",{href:"https://github.com/regionjs/region-core/blob/master/docs/Document.md"},l.a.createElement(p,{type:"docs"})," Docs")))},b=Object(c.createRegion)("initialValue"),y=function(e){return b.set(e.target.value)},k=function(){var e=b.useValue();return l.a.createElement(s,null,e,l.a.createElement(d,null),l.a.createElement(f.e,{value:e,onChange:y}))},w=0,C=Object(c.createRegion)(),j=C.loadBy(function(){return new Promise(function(e){return setTimeout(function(){e("user from api: ".concat(w)),w++},1e3)})});j();var O=function(){var e=C.useLoading(),n=C.useValue();return l.a.createElement(s,{loading:e},n,l.a.createElement(d,null),l.a.createElement(f.a,{onClick:j},"loadUser"))},S=0,B=Object(c.createRegion)(),R=B.loadBy(function(){return new Promise(function(e,n){return setTimeout(function(){if(S>3){var t=new Error("error: ".concat(S));n(t)}else e("user from api: ".concat(S));S++},1e3)})});R();var L=function(){var e=B.useLoading(),n=B.useValue(),t=B.useError(),a=B.useFetchTime()||0;return l.a.createElement(s,{loading:e},n,l.a.createElement(d,null),t&&t.message,l.a.createElement(d,null),new Date(a).toString(),l.a.createElement(d,null),l.a.createElement(f.a,{onClick:R},"loadUser"))},P=0,V=Object(c.createRegion)(),N=V.loadBy(function(){return new Promise(function(e,n){return setTimeout(function(){if(P>3){var t=new Error("error: ".concat(P));n(t)}else e("user from api: ".concat(P));P++},1e3)})});N();var T=function(){var e=V.useProps(),n=e.loading,t=e.error,a=e.fetchTime,r=e.value;return l.a.createElement(s,{loading:n},r,l.a.createElement(d,null),t&&t.message,l.a.createElement(d,null),new Date(a).toString(),l.a.createElement(d,null),l.a.createElement(f.a,{onClick:N},"loadUser"))},x=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){return new Promise(function(t){setTimeout(function(){t(e)},n)})}},A=x("the user from api",500),_=x("some followers from api"),F=x([]),G=Object(c.createRegion)(),H=Object(c.createRegion)(),U=G.loadBy(A),W=H.loadBy(_,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.push(n),e.slice()}),D=H.loadBy(F),I=G.useValue,K=H.useValue,z=function(){var e=G.useLoading(),n=H.useLoading();return e||n},M=l.a.createElement(f.a,{type:"link",onClick:W},"More"),J=function(){var e=z(),n=I(),t=K();return l.a.createElement(s,{loading:e,title:n,extra:M,style:{width:300,margin:30}},l.a.createElement(g,{lines:t}))},Y=function(){var e=z(),n=I(),t=K();return l.a.createElement(s,{title:n,style:{width:300,margin:30}},l.a.createElement(g,{lines:t}),l.a.createElement(f.a,{loading:e,onClick:W},"More"),l.a.createElement(f.a,{loading:e,onClick:D},"Clear"))};U(),W();var q,Q=function(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(J,null),l.a.createElement(Y,null))},X=t(144),Z=t(145),$=t(149),ee=t(146),ne=t(151),te=Object(c.createRegion)("initialValue"),ae=function(e){return te.set(e.target.value)},re=function(e){function n(){return Object(X.a)(this,n),Object($.a)(this,Object(ee.a)(n).apply(this,arguments))}return Object(ne.a)(n,e),Object(Z.a)(n,[{key:"render",value:function(){var e=this.props.value;return l.a.createElement(s,null,e,l.a.createElement(d,null),l.a.createElement(f.e,{value:e,onChange:ae}))}}]),n}(r.Component),le=(q=re,function(e){var n=te.useValue();return l.a.createElement(q,Object.assign({value:n},e))}),oe=Object(c.createRegion)(null),ce=Object(c.createRegion)(null),ue=function(){return new Promise(function(e){return setTimeout(function(){return e(null)},1e3)})},ie=oe.loadBy(ue),me=ce.loadBy(ue),se=function(){var e=oe.useLoading();return l.a.createElement(f.a,{loading:e,onClick:ie},"Load Left Part")},de=function(){var e=ce.useLoading();return l.a.createElement(f.a,{loading:e,onClick:me},"Load Right Part")},ge=function(){var e=oe.useLoading(),n=ce.useLoading();return l.a.createElement(f.a,{loading:e||n,disabled:!0},"Something is loading")},fe=function(){var e=oe.useLoading(),n=ce.useLoading();return l.a.createElement(s,null,l.a.createElement(f.j,{spinning:e&&n},l.a.createElement(se,null),l.a.createElement(d,null),l.a.createElement(de,null),l.a.createElement(d,null),l.a.createElement(ge,null)))},ve={0:{id:0,value:0},1:{id:1,value:1}},Ee=2,pe=function(e){return function(n){return new Promise(function(t){setTimeout(function(){t(e(n))},500)})}},he=pe(function(){return ve}),be=pe(function(){var e={id:Ee,value:Ee};return ve[Ee]=e,Ee+=1,e}),ye=pe(function(e){return ve[e.id]=e,ve[e.id]}),ke=pe(function(e){return ve[e.id]=Object.assign(ve[e.id],e),ve[e.id]}),we=pe(function(e){return delete ve[e],null}),Ce=Object(c.createRegion)();Ce.load(he);var je=Ce.loadBy(he),Oe=Ce.loadBy(be,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return e[n.id]=n,e}),Se=Ce.loadBy(ye,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return e[n.id]=n,e}),Be=Ce.loadBy(ke,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return e[n.id]=n,e}),Re=Ce.loadBy(we,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return delete e[arguments.length>2?arguments[2]:void 0],e}),Le=function(e){return function(){return new Promise(function(n){setTimeout(function(){n(e())},500)})}},Pe=0,Ve=Le(function(){return"A".concat(Pe+=1)}),Ne=0,Te=Le(function(){return"B".concat(Ne+=1)}),xe=Object(c.createRegion)(),Ae=xe.loadBy(Ve,{id:"A"}),_e=xe.loadBy(Te,{id:"B"}),Fe=Object(c.createRegion)(["cat","cat","dog","cat","dog"].map(function(e,n){return function(e,n){return{id:String(n),type:e,value:"".concat(e,"-").concat(n)}}(e,n)})),Ge=Object(c.createRegion)(),He=function(e){return Ge.set(e.target.value)},Ue=function(){var e=Fe.useValue(),n=Ge.useValue(),t=Object(r.useMemo)(function(){return function(e,n){return n&&"all"!==n?e.filter(function(e){return e.type===n}):e}(e,n)},[e,n]);return l.a.createElement(r.Fragment,null,l.a.createElement(s,null,l.a.createElement(f.i.Group,{value:n,onChange:He},l.a.createElement(f.i.Button,{value:"all"},"All"),l.a.createElement(f.i.Button,{value:"cat"},"Cat"),l.a.createElement(f.i.Button,{value:"dog"},"Dog"))),l.a.createElement(s,null,l.a.createElement(g,{lines:t.map(function(e){return e.value})})))},We=Object(c.createCombinedRegion)(),De=function(e){return We.set("a",e)},Ie=function(e){return We.set("b",e.target.value)},Ke=function(e){return We.set("c",e.target.value)},ze=function(e){return We.set("d",e)},Me=function(){var e=We.useProps(["a","b","c","d"]),n=e.a,t=e.b,a=e.c,r=e.d;return l.a.createElement(s,null,l.a.createElement(f.k,{checked:n,onChange:De}),l.a.createElement(d,null),l.a.createElement(f.e,{value:t,onChange:Ie}),l.a.createElement(d,null),l.a.createElement(f.i.Group,{value:a,onChange:Ke,options:["Hangzhou","Shanghai","Beijing","Chengdu"]}),l.a.createElement(d,null),l.a.createElement(f.b.Group,{options:["Apple","Pear","Orange"],value:r,onChange:ze}))},Je=function(){var e=We.useProps(["a","b","c","d"]),n=e.a,t=e.b,a=e.c,r=e.d;return l.a.createElement(s,null,JSON.stringify({a:n,b:t,c:a,d:r}))},Ye=function(){return l.a.createElement(r.Fragment,null,l.a.createElement(Me,null),l.a.createElement(Je,null))},qe=function(e){return new Promise(function(n,t){setTimeout(function(){String(Number(e))===e?n(e):t(new Error("message from api: type some number"))},1e3)})},Qe=Object(c.createRegion)(""),Xe=function(e){return n=e.target.value,Qe.set(n),void Qe.loadBy(qe)(n);var n},Ze=function(){var e=Qe.useProps(),n=e.loading,t=e.error,a=e.value,r=function(e){var n=e.loading,t=e.error;if(""!==e.value)return n?"validating":t?"error":"success"}({loading:n,error:t,value:a}),o=t&&t.message;return l.a.createElement(s,null,l.a.createElement(f.c.Item,{hasFeedback:!0,validateStatus:r,help:n?"validating...":o},l.a.createElement(f.e,{placeholder:"type some number",value:a,onChange:Xe})))},$e=Object(c.createLocalStorageRegion)("localStorage-key","some value stored in localStorage"),en=function(e){return $e.set(e.target.value)},nn=function(){var e=$e.useValue();return l.a.createElement(s,null,l.a.createElement(f.e,{value:e,onChange:en}))},tn=[!1,!1,!1,!0,!0,!1,!0,!0],an=-1,rn=function(){return new Promise(function(e,n){setTimeout(function(){tn[an+=1]?e("resolved 1"):n(new Error("rejected 1"))},1e3)})},ln=function(){return new Promise(function(e,n){setTimeout(function(){tn[an+=1]?e("resolved 2"):n(new Error("rejected 2"))},1e3)})},on=Object(c.createCombinedRegion)(),cn=function(){on.load("value1",rn),on.load("value2",ln)};cn();var un=function(e){var n=e.loading,t=e.error;return n?"loading":t?"close-circle":"check-circle"},mn=[{key:"GetStarted",label:"Get Started",groupName:"GetStarted",Component:h},{key:"UseValue",label:"useValue",groupName:"Basic",Component:k},{key:"UseLoading",label:"useLoading",groupName:"Basic",Component:O},{key:"UseError",label:"useError",groupName:"Basic",Component:L},{key:"UseProps",label:"useProps",groupName:"Basic",Component:T},{key:"LocalStorageRegion",label:"localStorage",groupName:"Basic",Component:nn},{key:"CombinedError",label:"Combined Error",groupName:"Basic",Component:function(){var e=on.useProps(["value1","value2"]),n=e.loading,t=e.error,a=e.value1,r=e.value2;return l.a.createElement(s,null,"Status: ",l.a.createElement(f.d,{type:un({loading:n,error:t})}),l.a.createElement(d,null),"Value will remain last resolved value",l.a.createElement("pre",null,"value1: ".concat(a,"\nvalue2: ").concat(r,"\n")),"Error will be combined",l.a.createElement("pre",null,"error message: ".concat(t&&t.message,"\n")),l.a.createElement(f.a,{loading:n,onClick:cn},"Try Again"))}},{key:"SharedValue",label:"Shared Value",groupName:"Advanced",Component:Q},{key:"AdvancedLoading",label:"Advanced Loading",groupName:"Advanced",Component:fe},{key:"ClassComponent",label:"Class Component",groupName:"Advanced",Component:le},{key:"SelectValue",label:"Select Value",groupName:"Advanced",Component:Ue},{key:"RESTful",label:"RESTful",groupName:"Advanced",Component:function(){var e=Ce.useLoading(),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=[];return Object.keys(e).forEach(function(t){var a=e[t];n.push(a)}),n}(Ce.useValue());return l.a.createElement(s,null,l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"_blank",rel:"noopener noreferrer"},"What is RESTful?"),l.a.createElement(f.g,{loading:e,dataSource:n,header:l.a.createElement(f.a,{onClick:je},"GET"),footer:l.a.createElement(f.a,{onClick:Oe},"POST"),renderItem:function(e){var n={id:e.id,value:e.value+1};return l.a.createElement(f.g.Item,null,l.a.createElement("span",{style:{flex:1}},e.value),l.a.createElement(f.a,{onClick:function(){return Se(n)}},"PUT"),l.a.createElement(f.a,{onClick:function(){return Be(n)}},"PATCH"),l.a.createElement(f.a,{onClick:function(){return Re(e.id)}},"DELETE"))}}))}},{key:"SWR",label:"SWR",groupName:"Advanced",Component:function(){var e=xe.useValue();return l.a.createElement(s,null,l.a.createElement("p",null,"stale-while-revalidate is a cache invalidation strategy popularized by ",l.a.createElement("a",{href:"https://tools.ietf.org/html/rfc5861",target:"_blank",rel:"noopener noreferrer"},"HTTP RFC 5861")),l.a.createElement(f.a,{onClick:Ae},"loadA"),l.a.createElement(f.a,{onClick:_e},"loadB"),l.a.createElement(d,null),e)}},{key:"AsyncValidate",label:"Async Validate",groupName:"Advanced",Component:Ze},{key:"Form",label:"Form",groupName:"Advanced",Component:Ye}],sn=t(147),dn=t.n(sn),gn=(t(399),Object(c.createRegion)()),fn=function(){if("undefined"===typeof window)throw new Error("window undefined");return{innerWidth:window.innerWidth,innerHeight:window.innerHeight,outerWidth:window.outerWidth,outerHeight:window.outerHeight}},vn=function(e){var n=e.selectedKey,t=function(){var e=Object(r.useState)(fn),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)(function(){var e=function(){return a(fn())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t}().innerWidth,a=gn.useLoading(),c=gn.useValue();return Object(r.useEffect)(function(){!function(e){var n="https://raw.githubusercontent.com/regionjs/region-core/master/example/src/".concat(e,"/index.jsx"),t=new Request(n);gn.load(function(){return fetch(t).then(function(e){return e.text()})})}(n)},[n]),a?null:l.a.createElement(dn.a,{width:t-260,height:500,language:"javascript",theme:"vs-dark",value:c})},En=t(65),pn=t.n(En),hn=function(e){var n=e.selectedKey,t=gn.useLoading(),a=pn.a.code;return t||(a="".concat(pn.a.code," ").concat(pn.a.dark)),l.a.createElement("div",{className:pn.a.container},l.a.createElement("div",{className:a},l.a.createElement("a",{href:"https://github.com/regionjs/region-core/blob/master/example/src/".concat(n,"/index.tsx"),rel:"noreferrer noopener",target:"_blank"},l.a.createElement(f.d,{type:"github"}))),l.a.createElement(vn,{selectedKey:n}))},bn=Object(c.createRegion)(function(){var e=E.location.hash,n=""!==e?e.slice(1):null,t=Object(u.get)(mn,["0","key"]);return n&&void 0!==mn.find(function(e){return e.key===n})?n:t}()),yn=Object(u.get)(mn,["0","key"]),kn=function(e){var n=e.key;E.replace("#".concat(n)),bn.set(n)},wn=function(e){var n=e.key,t=e.label;return l.a.createElement(f.h.Item,{key:n},t)},Cn=function(){var e=Object(u.groupBy)(mn,"groupName");return Object.entries(e).map(function(e){var n=Object(o.a)(e,2),t=n[0],a=n[1],r=a.map(wn);return 1===a.length?r:l.a.createElement(f.h.SubMenu,{key:t,title:t},r)})}(),jn=function(){var e=bn.useLoading(),n=bn.useValue();if(e)return null;var t=mn.find(function(e){return e.key===n});if(!t)return bn.set(yn),null;var a=t.Component,r=t.groupName;return l.a.createElement(f.f,{style:{height:"100vh"}},l.a.createElement(f.f.Sider,{width:200,theme:"light",style:{overflowY:"auto"}},l.a.createElement(f.h,{mode:"inline",defaultOpenKeys:[r],selectedKeys:[n],onClick:kn,style:{minHeight:"100%",borderRight:"1px solid #e8e8e8"}},Cn)),l.a.createElement(f.f.Content,null,l.a.createElement(a,null),"GetStarted"!==n&&l.a.createElement(hn,{selectedKey:n})))},On=l.a.createElement(jn,null);t(396),t(397);Object(a.render)(On,document.getElementById("root"))},65:function(e,n,t){e.exports={container:"External_container__3kfjg",code:"External_code__2CA5Y",dark:"External_dark__3N0bp"}}},[[198,1,2]]]);
//# sourceMappingURL=main.a3e8f0ee.chunk.js.map