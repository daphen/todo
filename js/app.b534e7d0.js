(function(t){function o(o){for(var n,s,c=o[0],a=o[1],d=o[2],l=0,p=[];l<c.length;l++)s=c[l],r[s]&&p.push(r[s][0]),r[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(o);while(p.length)p.shift()();return i.push.apply(i,d||[]),e()}function e(){for(var t,o=0;o<i.length;o++){for(var e=i[o],n=!0,c=1;c<e.length;c++){var a=e[c];0!==r[a]&&(n=!1)}n&&(i.splice(o--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},i=[];function s(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,o,e){s.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,o){if(1&o&&(t=s(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)s.d(e,n,function(o){return t[o]}.bind(null,n));return e},s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,"a",o),o},s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},s.p="/todo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=o,c=c.slice();for(var d=0;d<c.length;d++)o(c[d]);var u=a;i.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"190c":function(t,o,e){"use strict";var n=e("6b80"),r=e.n(n);r.a},"354e":function(t,o,e){"use strict";var n=e("95d3"),r=e.n(n);r.a},"56d7":function(t,o,e){"use strict";e.r(o);var n=e("2b0e"),r=e("8aa5"),i=e.n(r),s=e("70a9"),c=e.n(s),a=(e("55dd"),e("2f62")),d=e("3317");n["a"].use(a["a"]);var u=new a["a"].Store({state:{todos:[]},getters:{sortByPrio:function(t){var o=t.todos.slice();return o.sort(function(t,o){return t.priority>o.priority?-1:1})}},mutations:d["b"],actions:{initDb:Object(d["a"])(function(t){var o=t.bindFirebaseRef;o("todos",i.a.firestore().collection("todos"))}),addTodo:function(t,o){i.a.firestore().collection("todos").add(o)},checkTodo:function(t,o){i.a.firestore().collection("todos").doc(o.id).update({done:!o.done})},removeTodo:function(t,o){i.a.firestore().collection("todos").doc(o).delete()}}}),l=u,p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("ToDo")],1)},f=[],v=e("cebc"),h=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"to-do-list"},[e("ul",[e("transition",{attrs:{appear:"",name:"fade"}},[e("h1",{staticClass:"to-do-header"},[t._v("Activities")])]),e("transition-group",{style:{"--total":t.todos.length},attrs:{name:"stagger"}},t._l(t.todos,function(t,o){return e("ToDoItem",{key:"todo-"+o,style:{"--i":o},attrs:{todo:t}})}),1)],1),e("div",{staticClass:"add-todo"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.text,expression:"newTodo.text"}],domProps:{value:t.newTodo.text},on:{keydown:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addItem(t.newTodo)},input:function(o){o.target.composing||t.$set(t.newTodo,"text",o.target.value)}}}),e("button",{staticClass:"set-prio",on:{click:t.togglePrioList}},[0===t.newTodo.priority?e("h4",[t._v("Priority")]):e("h2",[t._v(t._s(t.newTodo.priority))]),e("transition",{attrs:{name:"prio"}},[t.prioIsShowing?e("ul",{staticClass:"prio-list"},t._l(t.prioList,function(o,n){return e("li",{key:n,style:{"--i":n},on:{click:function(e){return t.setPrio(o)}}},[t._v("\n            "+t._s(o)+"\n          ")])}),0):t._e()])],1),e("div",{staticClass:"add-todo-button",on:{click:function(o){return t.addItem(t.newTodo)}}},[e("h4",[t._v("+")])])])])},b=[],g=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("li",{staticClass:"to-do-item",class:{done:t.todo.done}},[e("div",{staticClass:"checkmark",on:{click:function(o){return t.checkTodo(t.todo)}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"}})])]),e("h4",[t._v(t._s(t.todo.text))]),e("p",[t._v("Priority: "+t._s(t.todo.priority))]),e("div",{staticClass:"trashcan",on:{click:function(o){return t.removeTodo(t.todo.id)}}},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[e("path",{attrs:{d:"M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"}})])])])},m=[],w={props:{todo:Object},methods:Object(v["a"])({},Object(a["b"])(["removeTodo","checkTodo"]))},y=w,_=(e("354e"),e("2877")),T=Object(_["a"])(y,g,m,!1,null,null,null),k=T.exports,O={name:"ToDo",data:function(){return{newTodo:{text:"",priority:0,done:!1},prioIsShowing:!1,prioList:[1,2,3,4,5]}},components:{ToDoItem:k},computed:Object(v["a"])({},Object(a["c"])({todos:"sortByPrio"})),methods:Object(v["a"])({},Object(a["b"])(["addTodo"]),{togglePrioList:function(){this.prioIsShowing=!this.prioIsShowing},setPrio:function(t){this.newTodo.priority=t},addItem:function(t){this.addTodo(t),this.newTodo.text="",this.newTodo.priority=0,this.newTodo.done=!1}})},j=O,x=(e("190c"),Object(_["a"])(j,h,b,!1,null,null,null)),P=x.exports,S={name:"app",components:{ToDo:P},methods:Object(v["a"])({},Object(a["b"])(["initDb"])),created:function(){this.initDb()}},I=S,C=(e("5c0b"),Object(_["a"])(I,p,f,!1,null,null,null)),E=C.exports,D=e("9483");Object(D["a"])("".concat("/todo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1;var A=i.a.initializeApp(c.a);A.firestore();new n["a"]({store:l,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,o,e){"use strict";var n=e("5e27"),r=e.n(n);r.a},"5e27":function(t,o,e){},"6b80":function(t,o,e){},"70a9":function(t,o){t.exports={apiKey:"".concat(Object({NODE_ENV:"production",BASE_URL:"/todo/"}).FIREBASE_API_KEY),authDomain:"todo-3bbdc.firebaseapp.com",databaseURL:"https://todo-3bbdc.firebaseio.com",projectId:"todo-3bbdc",storageBucket:"todo-3bbdc.appspot.com",messagingSenderId:"1007913951395"}},"95d3":function(t,o,e){}});
//# sourceMappingURL=app.b534e7d0.js.map