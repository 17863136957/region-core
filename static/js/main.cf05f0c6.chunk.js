(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,n,t){e.exports=t(401)},400:function(e,n,t){},401:function(e,n,t){"use strict";t.r(n);var a=t(10),r=t.n(a),l=t(0),o=t.n(l),u=t(86),c=t(13),i=t(87),m=t(153),d=t(138),s=function(e){var n=e.children,t=Object(m.a)(e,["children"]);return o.a.createElement(d.a,Object.assign({style:{width:500,margin:30}},t),n)},g=function(){return o.a.createElement("div",{style:{height:10}})},f=function(e){var n=e.lines;return o.a.createElement(l.Fragment,null,n&&n.map(function(e,n){return o.a.createElement("p",{key:n||0},e)}))},E=t(27),v=t(152),p=Object(v.a)(),h=E.d.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_942570_v4nrzgehvpk.js"}),b=function(){return o.a.createElement("div",{style:{padding:32}},o.a.createElement("h1",null,"How to run this"),o.a.createElement("pre",null,"git clone https://github.com/regionjs/region-core.git\ncd example\nnpm i\nnpm start\n"),o.a.createElement("div",{style:{fontSize:18}},o.a.createElement("a",{href:"https://github.com/regionjs/region-core"},o.a.createElement(E.d,{type:"github"}))," ",o.a.createElement("a",{href:"https://www.npmjs.com/package/region-core"},o.a.createElement(h,{type:"npm"}))))},y=Object(c.createRegion)("initialValue"),k=function(e){return y.set(e.target.value)},w=function(){var e=y.useValue();return o.a.createElement(s,null,e,o.a.createElement(g,null),o.a.createElement(E.e,{value:e,onChange:k}))},C=0,j=Object(c.createRegion)(),O=j.loadBy(function(){return new Promise(function(e){return setTimeout(function(){e("user from api: ".concat(C)),C++},1e3)})});O();var S=function(){var e=j.useLoading(),n=j.useValue();return o.a.createElement(s,{loading:e},n,o.a.createElement(g,null),o.a.createElement(E.a,{onClick:O},"loadUser"))},L=0,R=Object(c.createRegion)(),P=R.loadBy(function(){return new Promise(function(e,n){return setTimeout(function(){if(L>3){var t=new Error("error: ".concat(L));n(t)}else e("user from api: ".concat(L));L++},1e3)})});P();var V=function(){var e=R.useLoading(),n=R.useValue(),t=R.useError(),a=R.useFetchTime();return o.a.createElement(s,{loading:e},n,o.a.createElement(g,null),t&&t.message,o.a.createElement(g,null),new Date(a).toString(),o.a.createElement(g,null),o.a.createElement(E.a,{onClick:P},"loadUser"))},B=0,N=Object(c.createRegion)(),x=N.loadBy(function(){return new Promise(function(e,n){return setTimeout(function(){if(B>3){var t=new Error("error: ".concat(B));n(t)}else e("user from api: ".concat(B));B++},1e3)})});x();var T=function(){var e=N.useProps(),n=e.loading,t=e.error,a=e.fetchTime,r=e.value;return o.a.createElement(s,{loading:n},r,o.a.createElement(g,null),t&&t.message,o.a.createElement(g,null),new Date(a).toString(),o.a.createElement(g,null),o.a.createElement(E.a,{onClick:x},"loadUser"))},A=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){return new Promise(function(t){setTimeout(function(){t(e)},n)})}},_=A("the user from api",500),U=A("some followers from api"),H=A([]),F=Object(c.createRegion)(),G=Object(c.createRegion)(),W=F.loadBy(_),D=G.loadBy(U,{format:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.push(e),n.slice()}}),I=G.loadBy(H),z=F.useValue,K=G.useValue,M=function(){var e=F.useLoading(),n=G.useLoading();return e||n},J=o.a.createElement(E.a,{type:"link",onClick:D},"More"),Y=function(){var e=M(),n=z(),t=K();return o.a.createElement(s,{loading:e,title:n,extra:J,style:{width:300,margin:30}},o.a.createElement(f,{lines:t}))},q=function(){var e=M(),n=z(),t=K();return o.a.createElement(s,{title:n,style:{width:300,margin:30}},o.a.createElement(f,{lines:t}),o.a.createElement(E.a,{loading:e,onClick:D},"More"),o.a.createElement(E.a,{loading:e,onClick:I},"Clear"))};W(),D();var Q=function(){return o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(Y,null),o.a.createElement(q,null))},X=Object(c.createRegion)(null),Z=Object(c.createRegion)(null),$=function(){return new Promise(function(e){return setTimeout(e,1e3)})},ee=X.loadBy($),ne=Z.loadBy($),te=function(){var e=X.useLoading();return o.a.createElement(E.a,{loading:e,onClick:ee},"Load Left Part")},ae=function(){var e=Z.useLoading();return o.a.createElement(E.a,{loading:e,onClick:ne},"Load Right Part")},re=function(){var e=X.useLoading(),n=Z.useLoading();return o.a.createElement(E.a,{loading:e||n,disabled:!0},"Something is loading")},le=function(){var e=X.useLoading(),n=Z.useLoading();return o.a.createElement(s,null,o.a.createElement(E.j,{spinning:e&&n},o.a.createElement(te,null),o.a.createElement(g,null),o.a.createElement(ae,null),o.a.createElement(g,null),o.a.createElement(re,null)))},oe={0:{id:0,value:0},1:{id:1,value:1}},ue=2,ce=function(e){return function(n){return new Promise(function(t){setTimeout(function(){t(e(n))},500)})}},ie=ce(function(){return oe}),me=ce(function(){var e={id:ue,value:ue};return oe[ue]=e,ue++,e}),de=ce(function(e){return oe[e.id]=e,oe[e.id]}),se=ce(function(e){return oe[e.id]=Object.assign(oe[e.id],e),oe[e.id]}),ge=ce(function(e){return delete oe[e],null}),fe=Object(c.createRegion)();fe.load(ie);var Ee=function(){return fe.load(ie)},ve=function(){return fe.load(me,{format:function(e,n){return n[e.id]=e,n}})},pe=Object(c.createRegion)(["cat","cat","dog","cat","dog"].map(function(e,n){return{id:String(n),type:e,value:"item with id === ".concat(n," and type === ").concat(e)}})),he=Object(c.createRegion)(),be=Object(c.createRegion)(),ye=function(e){var n=e.id,t=e.type,a=pe.useValue(),r=Object(l.useMemo)(function(){return function(e,n){return n&&"all"!==n?e.filter(function(e){return e.type===n}):e}(a,t)},[a,t]),u=Object(l.useMemo)(function(){return r.find(function(e){return e.id===n})},[r,n]);return o.a.createElement(s,null,o.a.createElement("p",null,"Active"),o.a.createElement("p",null,u?u.value:"null"),o.a.createElement(g,null),o.a.createElement(f,{lines:r.map(function(e){return e.value})}))},ke=function(e){return he.set(e.target.value)},we=function(e){return be.set(e.target.value)},Ce=function(){var e=he.useValue(),n=be.useValue();return o.a.createElement(l.Fragment,null,o.a.createElement(s,null,o.a.createElement(E.e,{value:e,onChange:ke}),o.a.createElement(g,null),o.a.createElement(E.i.Group,{value:n,onChange:we},o.a.createElement(E.i.Button,{value:"all"},"All"),o.a.createElement(E.i.Button,{value:"cat"},"Cat"),o.a.createElement(E.i.Button,{value:"dog"},"Dog"))),o.a.createElement(ye,{id:e,type:n}))},je=new c.CombinedRegion,Oe=function(e){return je.set("a",e)},Se=function(e){return je.set("b",e.target.value)},Le=function(e){return je.set("c",e.target.value)},Re=function(e){return je.set("d",e)},Pe=function(){var e=je.useProps(["a","b","c","d"]),n=e.a,t=e.b,a=e.c,r=e.d;return o.a.createElement(s,null,o.a.createElement(E.k,{checked:n,onChange:Oe}),o.a.createElement(g,null),o.a.createElement(E.e,{value:t,onChange:Se}),o.a.createElement(g,null),o.a.createElement(E.i.Group,{value:a,onChange:Le,options:["Hangzhou","Shanghai","Beijing","Chengdu"]}),o.a.createElement(g,null),o.a.createElement(E.b.Group,{options:["Apple","Pear","Orange"],value:r,onChange:Re}))},Ve=function(){var e=je.useProps(["a","b","c","d"]),n=e.a,t=e.b,a=e.c,r=e.d;return o.a.createElement(s,null,JSON.stringify({a:n,b:t,c:a,d:r}))},Be=function(){return o.a.createElement(l.Fragment,null,o.a.createElement(Pe,null),o.a.createElement(Ve,null))},Ne=function(e){return new Promise(function(n,t){setTimeout(function(){String(Number(e))===e?n(e):t(new Error("message from api: type some number"))},1e3)})},xe=Object(c.createRegion)(null),Te=function(e){return n=e.target.value,xe.set(n),void xe.loadBy(Ne)(n);var n},Ae=function(){var e=xe.useProps(),n=e.loading,t=e.error,a=e.value,r=function(e){var n=e.loading,t=e.error;return null===e.value?null:n?"validating":t?"error":"success"}({loading:n,error:t,value:a}),l=t&&t.message;return o.a.createElement(s,null,o.a.createElement(E.c.Item,{hasFeedback:!0,validateStatus:r,help:n?"validating...":l},o.a.createElement(E.e,{placeholder:"type some number",value:a,onChange:Te})))},_e=Object(c.createLocalStorageRegion)("localStorage-key","some value stored in localStorage"),Ue=function(e){return _e.set(e.target.value)},He=function(){var e=_e.useValue();return o.a.createElement(s,null,o.a.createElement(E.e,{value:e,onChange:Ue}))},Fe=[!1,!1,!1,!0,!0,!1,!0,!0],Ge=-1,We=function(){return new Promise(function(e,n){setTimeout(function(){Fe[Ge+=1]?e("resolved 1"):n(new Error("rejected 1"))},1e3)})},De=function(){return new Promise(function(e,n){setTimeout(function(){Fe[Ge+=1]?e("resolved 2"):n(new Error("rejected 2"))},1e3)})},Ie=new c.CombinedRegion,ze=function(){Ie.load("value1",We),Ie.load("value2",De)};ze();var Ke=function(e){var n=e.loading,t=e.error;return n?"loading":t?"close-circle":"check-circle"},Me=[{key:"GetStarted",label:"Get Started",groupName:"GetStarted",Component:b},{key:"UseValue",label:"useValue",groupName:"Basic",Component:w},{key:"UseLoading",label:"useLoading",groupName:"Basic",Component:S},{key:"UseError",label:"useError",groupName:"Basic",Component:V},{key:"UseProps",label:"useProps",groupName:"Basic",Component:T},{key:"LocalStorageRegion",label:"localStorage",groupName:"Basic",Component:He},{key:"CombinedError",label:"Combined Error",groupName:"Basic",Component:function(){var e=Ie.useProps(["value1","value2"]),n=e.loading,t=e.error,a=e.value1,r=e.value2;return o.a.createElement(s,null,"Status: ",o.a.createElement(E.d,{type:Ke({loading:n,error:t})}),o.a.createElement(g,null),"Value will remain last resolved value",o.a.createElement("pre",null,"value1: ".concat(a,"\nvalue2: ").concat(r,"\n")),"Error will be combined",o.a.createElement("pre",null,"error message: ".concat(t&&t.message,"\n")),o.a.createElement(E.a,{loading:n,onClick:ze},"Try Again"))}},{key:"SharedValue",label:"Shared Value",groupName:"Advanced",Component:Q},{key:"AdvancedLoading",label:"Advanced Loading",groupName:"Advanced",Component:le},{key:"SelectValue",label:"Select Value",groupName:"Advanced",Component:Ce},{key:"CURD",label:"CURD",groupName:"Advanced",Component:function(){var e=fe.useLoading(),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=[];return Object.keys(e).forEach(function(t){n.push(e[t])}),n}(fe.useValue());return o.a.createElement(s,null,o.a.createElement(E.g,{loading:e,dataSource:n,header:o.a.createElement(E.a,{onClick:Ee},"GET"),footer:o.a.createElement(E.a,{onClick:ve},"POST"),renderItem:function(e){var n={id:e.id,value:e.value+1};return o.a.createElement(E.g.Item,null,o.a.createElement("span",{style:{flex:1}},e.value),o.a.createElement(E.a,{onClick:function(){return e=n,fe.load(de,{params:e,format:function(e,n){return n[e.id]=e,n}});var e}},"PUT"),o.a.createElement(E.a,{onClick:function(){return e=n,fe.load(se,{params:e,format:function(e,n){return n[e.id]=e,n}});var e}},"PATCH"),o.a.createElement(E.a,{onClick:function(){return n=e.id,fe.load(ge,{params:n,format:function(e,t){return delete t[n],t}});var n}},"DELETE"))}}))}},{key:"Form",label:"Form",groupName:"Advanced",Component:Be},{key:"AsyncValidate",label:"Async Validate",groupName:"Advanced",Component:Ae}],Je=t(151),Ye=t.n(Je),qe=(t(402),Object(c.createRegion)()),Qe=function(){return"undefined"===typeof window?{innerWidth:null,innerHeight:null,outerWidth:null,outerHeight:null}:{innerWidth:window.innerWidth,innerHeight:window.innerHeight,outerWidth:window.outerWidth,outerHeight:window.outerHeight}},Xe=function(e){var n=e.selectedKey,t=function(){var e=Object(l.useState)(Qe),n=Object(u.a)(e,2),t=n[0],a=n[1];return Object(l.useEffect)(function(){var e=function(){return a(Qe())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t}().innerWidth,a=qe.useLoading(),r=qe.useValue();return Object(l.useEffect)(function(){!function(e){var n="https://raw.githubusercontent.com/regionjs/region-core/master/example/src/".concat(e,"/index.jsx"),t=new Request(n);qe.load(function(){return fetch(t).then(function(e){return e.text()})})}(n)},[n]),a?null:o.a.createElement(Ye.a,{width:t-260,height:500,language:"javascript",theme:"vs-dark",value:r})},Ze=t(68),$e=t.n(Ze),en=function(e){var n=e.selectedKey,t=qe.useLoading(),a=$e.a.code;return t||(a="".concat($e.a.code," ").concat($e.a.dark)),o.a.createElement("div",{className:$e.a.container},o.a.createElement("div",{className:a},o.a.createElement("a",{href:"https://github.com/regionjs/region-core/blob/master/example/src/".concat(n,"/index.jsx"),rel:"noreferrer noopener",target:"_blank"},o.a.createElement(E.d,{type:"github"}))),o.a.createElement(Xe,{selectedKey:n}))},nn=Object(c.createRegion)(function(){var e=p.location.hash,n=""!==e?e.slice(1):null,t=Object(i.get)(Me,["0","key"]);return n&&void 0!==Me.find(function(e){return e.key===n})?n:t}()),tn=Object(i.get)(Me,["0","key"]),an=function(e){var n=e.key;p.replace("#".concat(n)),nn.set(n)},rn=function(e){var n=e.key,t=e.label;return o.a.createElement(E.h.Item,{key:n},t)},ln=function(){var e=Object(i.groupBy)(Me,"groupName");return Object.entries(e).map(function(e){var n=Object(u.a)(e,2),t=n[0],a=n[1],r=a.map(rn);return 1===a.length?r:o.a.createElement(E.h.SubMenu,{key:t,title:t},r)})}(),on=function(){var e=nn.useLoading(),n=nn.useValue();if(e)return null;var t=Me.find(function(e){return e.key===n});if(!t)return nn.set(tn),null;var a=t.Component;return o.a.createElement(E.f,{style:{height:"100vh"}},o.a.createElement(E.f.Sider,{width:200,theme:"light",style:{overflowY:"auto"}},o.a.createElement(E.h,{mode:"inline",selectedKeys:[n],onClick:an,style:{minHeight:"100%",borderRight:"1px solid #e8e8e8"}},ln)),o.a.createElement(E.f.Content,null,o.a.createElement(a,null),"GetStarted"!==n&&o.a.createElement(en,{selectedKey:n})))},un=o.a.createElement(on,null);t(399),t(400);r.a.render(un,document.getElementById("root"))},68:function(e,n,t){e.exports={container:"External_container__3kfjg",code:"External_code__2CA5Y",dark:"External_dark__3N0bp"}}},[[199,1,2]]]);
//# sourceMappingURL=main.cf05f0c6.chunk.js.map