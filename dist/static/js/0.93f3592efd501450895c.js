webpackJsonp([0],{FEGV:function(e,t,r){var n=r("s/mr");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("7545f5d4",n,!0,{})},SldL:function(e,t){!function(t){"use strict";function r(e,t,r,n){var o=t&&t.prototype instanceof a?t:a,i=Object.create(o.prototype),s=new f(n||[]);return i._invoke=d(e,r,s),i}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function a(){}function o(){}function i(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(r,a,o,i){var s=n(e[r],e,a);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==typeof d&&g.call(d,"__await")?Promise.resolve(d.__await).then(function(e){t("next",e,o,i)},function(e){t("throw",e,o,i)}):Promise.resolve(d).then(function(e){c.value=e,o(c)},i)}i(s.arg)}function r(e,r){function n(){return new Promise(function(n,a){t(e,r,n,a)})}return a=a?a.then(n,n):n()}var a;this._invoke=r}function d(e,t,r){var a=B;return function(o,i){if(a===T)throw new Error("Generator is already running");if(a===_){if("throw"===o)throw i;return v()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var c=l(s,r);if(c){if(c===R)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===B)throw a=_,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=T;var d=n(e,t,r);if("normal"===d.type){if(a=r.done?_:O,d.arg===R)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(a=_,r.method="throw",r.arg=d.arg)}}}function l(e,t){var r=e.iterator[t.method];if(r===m){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=m,l(e,t),"throw"===t.method))return R;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return R}var a=n(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,R;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=m),t.delegate=null,R):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,R)}function u(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function h(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function f(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(u,this),this.reset(!0)}function A(e){if(e){var t=e[b];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(g.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=m,t.done=!0,t};return n.next=n}}return{next:v}}function v(){return{value:m,done:!0}}var m,p=Object.prototype,g=p.hasOwnProperty,C="function"==typeof Symbol?Symbol:{},b=C.iterator||"@@iterator",x=C.asyncIterator||"@@asyncIterator",y=C.toStringTag||"@@toStringTag",E="object"==typeof e,w=t.regeneratorRuntime;if(w)return void(E&&(e.exports=w));w=t.regeneratorRuntime=E?e.exports:{},w.wrap=r;var B="suspendedStart",O="suspendedYield",T="executing",_="completed",R={},N={};N[b]=function(){return this};var L=Object.getPrototypeOf,k=L&&L(L(A([])));k&&k!==p&&g.call(k,b)&&(N=k);var I=i.prototype=a.prototype=Object.create(N);o.prototype=I.constructor=i,i.constructor=o,i[y]=o.displayName="GeneratorFunction",w.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},w.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,y in e||(e[y]="GeneratorFunction")),e.prototype=Object.create(I),e},w.awrap=function(e){return{__await:e}},s(c.prototype),c.prototype[x]=function(){return this},w.AsyncIterator=c,w.async=function(e,t,n,a){var o=new c(r(e,t,n,a));return w.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},s(I),I[y]="Generator",I[b]=function(){return this},I.toString=function(){return"[object Generator]"},w.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},w.values=A,f.prototype={constructor:f,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(h),!e)for(var t in this)"t"===t.charAt(0)&&g.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=m)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return o.type="throw",o.arg=e,r.next=t,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],o=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var i=g.call(a,"catchLoc"),s=g.call(a,"finallyLoc");if(i&&s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,R):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),R},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),h(r),R}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;h(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:A(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=m),R}}}(function(){return this}()||Function("return this")())},Xxa5:function(e,t,r){e.exports=r("jyFz")},exGp:function(e,t,r){"use strict";t.__esModule=!0;var n=r("//Fk"),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){return function(){var t=e.apply(this,arguments);return new a.default(function(e,r){function n(o,i){try{var s=t[o](i),c=s.value}catch(e){return void r(e)}if(!s.done)return a.default.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});e(c)}return n("next")})}}},"i+3+":function(e,t,r){"use strict";function n(e){r("FEGV")}Object.defineProperty(t,"__esModule",{value:!0});var a=r("NYxO"),o={name:"Thread",props:{thread:Object,active:Boolean}},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"thread-list-item",class:{active:e.active},on:{click:function(t){return e.$emit("switch-thread",e.thread.id)}}},[r("h5",{staticClass:"thread-name"},[e._v(e._s(e.thread.name))]),r("div",{staticClass:"thread-time"},[e._v("\n    "+e._s(e._f("time")(e.thread.lastMessage.timestamp))+"\n  ")]),r("div",{staticClass:"thread-last-message"},[e._v("\n    "+e._s(e.thread.lastMessage.text)+"\n  ")])])},s=[],c={render:i,staticRenderFns:s},d=c,l=r("VU/8"),u=l(o,d,!1,null,null,null),h=u.exports,f={name:"ThreadSection",components:{Thread:h},computed:Object(a.c)("chat",["threads","currentThread","unreadCount"]),methods:Object(a.b)("chat",["switchThread"])},A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"thread-section"},[r("div",{staticClass:"thread-count"},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.unreadCount,expression:"unreadCount"}]},[e._v("Unread threads: "+e._s(e.unreadCount))])]),r("ul",{staticClass:"thread-list"},e._l(e.threads,function(t){return r("thread",{key:t.id,attrs:{thread:t,active:t.id===e.currentThread.id},on:{"switch-thread":e.switchThread}})}),1)])},v=[],m={render:A,staticRenderFns:v},p=m,g=r("VU/8"),C=g(f,p,!1,null,null,null),b=C.exports,x=r("Xxa5"),y=r.n(x),E=r("exGp"),w=r.n(E),B={name:"Message",props:{message:Object}},O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"message-list-item"},[r("h5",{staticClass:"message-author-name"},[e._v(e._s(e.message.authorName))]),r("div",{staticClass:"message-time"},[e._v("\n    "+e._s(e._f("time")(e.message.timestamp))+"\n  ")]),r("div",{staticClass:"message-text"},[e._v(e._s(e.message.text))])])},T=[],_={render:O,staticRenderFns:T},R=_,N=r("VU/8"),L=N(B,R,!1,null,null,null),k=L.exports,I={name:"MessageSection",components:{Message:k},data:function(){return{text:""}},asyncData:function(e){var t=this;e.store,e.route;return w()(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,t)}))()},created:function(){this.getMassage()},computed:Object(a.c)("chat",{thread:"currentThread",messages:"sortedMessages"}),watch:{"thread.lastMessage":function(){var e=this;this.$nextTick(function(){var t=e.$refs.list;t.scrollTop=t.scrollHeight})}},methods:Object(a.b)({sendMessage:function(e){var t=this.text,r=this.thread;t.trim()&&(e("chat/sendMessage",{text:t,thread:r}),this.text="")},getMassage:function(e){e("chat/getAllMessages")}})},S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-section"},[r("h3",{staticClass:"message-thread-heading"},[e._v(e._s(e.thread.name))]),r("ul",{ref:"list",staticClass:"message-list"},e._l(e.messages,function(e){return r("message",{key:e.id,attrs:{message:e}})}),1),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"message-composer",domProps:{value:e.text},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)},input:function(t){t.target.composing||(e.text=t.target.value)}}})])},F=[],D={render:S,staticRenderFns:F},j=D,M=r("VU/8"),W=M(I,j,!1,null,null,null),Y=W.exports,G={name:"Chat",components:{ThreadSection:b,MessageSection:Y},title:function(){return"Koa Vue SSR| Chat"}},z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chatapp"},[r("thread-section"),r("message-section")],1)},H=[],P={render:z,staticRenderFns:H},U=P,V=r("VU/8"),Z=n,$=V(G,U,!1,Z,"data-v-7e7ed8bf",null);t.default=$.exports},jyFz:function(e,t,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r("SldL"),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},"s/mr":function(e,t,r){t=e.exports=r("FZ+f")(!0),t.push([e.i,".chatapp[data-v-7e7ed8bf]{font-family:Muli,Helvetica Neue,helvetica,arial;max-width:760px;margin:20px auto;overflow:hidden;background-color:#aad}.message-list[data-v-7e7ed8bf],.thread-list[data-v-7e7ed8bf]{border:1px solid #ccf;font-size:16px;height:400px;margin:0;overflow-y:hidden;padding:0}.message-list[data-v-7e7ed8bf]{width:100%;background-color:#deb887}.message-section[data-v-7e7ed8bf]{float:right;width:100%;background-color:#8a2be2}.thread-section[data-v-7e7ed8bf]{float:left;width:32.5%}.message-thread-heading[data-v-7e7ed8bf],.thread-count[data-v-7e7ed8bf]{height:40px;margin:0}.message-list-item[data-v-7e7ed8bf],.thread-list-item[data-v-7e7ed8bf]{list-style:none;padding:12px 14px 14px}.thread-list-item[data-v-7e7ed8bf]{border-bottom:1px solid #ccc;cursor:pointer}.thread-list:hover .thread-list-item[data-v-7e7ed8bf]:hover{background-color:#f8f8ff}.thread-list:hover .thread-list-item[data-v-7e7ed8bf]{background-color:#fff}.thread-list-item.active[data-v-7e7ed8bf],.thread-list:hover .thread-list-item.active[data-v-7e7ed8bf],.thread-list:hover .thread-list-item.active[data-v-7e7ed8bf]:hover{background-color:#efefff;cursor:default}.message-author-name[data-v-7e7ed8bf],.thread-name[data-v-7e7ed8bf]{color:#66c;float:left;font-size:13px;margin:0}.message-time[data-v-7e7ed8bf],.thread-time[data-v-7e7ed8bf]{color:#aad;float:right;font-size:12px}.message-text[data-v-7e7ed8bf],.thread-last-message[data-v-7e7ed8bf]{clear:both;font-size:14px;padding-top:10px}.message-composer[data-v-7e7ed8bf]{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit;font-size:14px;height:5em;width:100%;margin:20px 0 0;padding:10px}","",{version:3,sources:["D:/code-store/nodejs/vue-ssr-koa-eteplus/src/views/ChatView.vue"],names:[],mappings:"AAWA,0BACE,gDAAwD,AACxD,gBAAiB,AACjB,iBAAkB,AAClB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,6DAEE,sBAAuB,AACvB,eAAgB,AAChB,aAAc,AACd,SAAU,AACV,kBAAmB,AACnB,SAAW,CACZ,AACD,+BACE,WAAW,AACX,wBAA4B,CAC7B,AACD,kCACE,YAAa,AACb,WAAY,AACZ,wBAA6B,CAC9B,AACD,iCACE,WAAY,AACZ,WAAa,CACd,AACD,wEAEE,YAAa,AACb,QAAU,CACX,AACD,uEAEE,gBAAiB,AACjB,sBAAwB,CACzB,AACD,mCACE,6BAA8B,AAC9B,cAAgB,CACjB,AACD,4DACE,wBAA0B,CAC3B,AACD,sDACE,qBAAuB,CACxB,AACD,0KAGE,yBAA0B,AAC1B,cAAgB,CACjB,AACD,oEAEE,WAAY,AACZ,WAAY,AACZ,eAAgB,AAChB,QAAU,CACX,AACD,6DAEE,WAAY,AACZ,YAAa,AACb,cAAgB,CACjB,AACD,qEAEE,WAAY,AACZ,eAAgB,AAChB,gBAAkB,CACnB,AACD,mCACE,8BAA+B,AACvB,sBAAuB,AAC/B,oBAAqB,AACrB,eAAgB,AAChB,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,YAAc,CACf",file:"ChatView.vue",sourcesContent:['/**\n * This file is provided by Facebook for testing and evaluation purposes\n * only. Facebook reserves all rights not expressly granted.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n */\n.chatapp[data-v-7e7ed8bf] {\n  font-family: "Muli", "Helvetica Neue", helvetica, arial;\n  max-width: 760px;\n  margin: 20px auto;\n  overflow: hidden;\n  background-color: #aad;\n}\n.message-list[data-v-7e7ed8bf],\n.thread-list[data-v-7e7ed8bf] {\n  border: 1px solid #ccf;\n  font-size: 16px;\n  height: 400px;\n  margin: 0;\n  overflow-y: hidden;\n  padding: 0;\n}\n.message-list[data-v-7e7ed8bf]{\n  width:100%;\n  background-color: burlywood;\n}\n.message-section[data-v-7e7ed8bf] {\n  float: right;\n  width: 100%;\n  background-color: blueviolet;\n}\n.thread-section[data-v-7e7ed8bf] {\n  float: left;\n  width: 32.5%;\n}\n.message-thread-heading[data-v-7e7ed8bf],\n.thread-count[data-v-7e7ed8bf] {\n  height: 40px;\n  margin: 0;\n}\n.message-list-item[data-v-7e7ed8bf],\n.thread-list-item[data-v-7e7ed8bf] {\n  list-style: none;\n  padding: 12px 14px 14px;\n}\n.thread-list-item[data-v-7e7ed8bf] {\n  border-bottom: 1px solid #ccc;\n  cursor: pointer;\n}\n.thread-list:hover .thread-list-item[data-v-7e7ed8bf]:hover {\n  background-color: #f8f8ff;\n}\n.thread-list:hover .thread-list-item[data-v-7e7ed8bf] {\n  background-color: #fff;\n}\n.thread-list-item.active[data-v-7e7ed8bf],\n.thread-list:hover .thread-list-item.active[data-v-7e7ed8bf],\n.thread-list:hover .thread-list-item.active[data-v-7e7ed8bf]:hover {\n  background-color: #efefff;\n  cursor: default;\n}\n.message-author-name[data-v-7e7ed8bf],\n.thread-name[data-v-7e7ed8bf] {\n  color: #66c;\n  float: left;\n  font-size: 13px;\n  margin: 0;\n}\n.message-time[data-v-7e7ed8bf],\n.thread-time[data-v-7e7ed8bf] {\n  color: #aad;\n  float: right;\n  font-size: 12px;\n}\n.message-text[data-v-7e7ed8bf],\n.thread-last-message[data-v-7e7ed8bf] {\n  clear: both;\n  font-size: 14px;\n  padding-top: 10px;\n}\n.message-composer[data-v-7e7ed8bf] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: inherit;\n  font-size: 14px;\n  height: 5em;\n  width: 100%;\n  margin: 20px 0 0;\n  padding: 10px;\n}\n'],sourceRoot:""}])}});
//# sourceMappingURL=0.93f3592efd501450895c.js.map