/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/xml2js@0.6.2/lib/xml2js.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import e from "./xmlbuilder-11-0-1.js";;import t from "./sax-1-3-0.js";;var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var i={},o={};(function(){o.defaults={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:"\n"},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(r);var s={};(function(){var t,r,n,i,a,l={}.hasOwnProperty;t=e,r=o.defaults,i=function(e){return"string"==typeof e&&(e.indexOf("&")>=0||e.indexOf(">")>=0||e.indexOf("<")>=0)},a=function(e){return"<![CDATA["+n(e)+"]]>"},n=function(e){return e.replace("]]>","]]]]><![CDATA[>")},s.Builder=function(){function e(e){var t,n,i;for(t in this.options={},n=r[.2])l.call(n,t)&&(i=n[t],this.options[t]=i);for(t in e)l.call(e,t)&&(i=e[t],this.options[t]=i)}return e.prototype.buildObject=function(e){var n,o,s,u,c,f;return n=this.options.attrkey,o=this.options.charkey,1===Object.keys(e).length&&this.options.rootName===r[.2].rootName?e=e[c=Object.keys(e)[0]]:c=this.options.rootName,f=this,s=function(e,t){var r,u,c,p,h,m;if("object"!=typeof t)f.options.cdata&&i(t)?e.raw(a(t)):e.txt(t);else if(Array.isArray(t)){for(p in t)if(l.call(t,p))for(h in u=t[p])c=u[h],e=s(e.ele(h),c).up()}else for(h in t)if(l.call(t,h))if(u=t[h],h===n){if("object"==typeof u)for(r in u)m=u[r],e=e.att(r,m)}else if(h===o)e=f.options.cdata&&i(u)?e.raw(a(u)):e.txt(u);else if(Array.isArray(u))for(p in u)l.call(u,p)&&(e="string"==typeof(c=u[p])?f.options.cdata&&i(c)?e.ele(h).raw(a(c)).up():e.ele(h,c).up():s(e.ele(h),c).up());else"object"==typeof u?e=s(e.ele(h),u).up():"string"==typeof u&&f.options.cdata&&i(u)?e=e.ele(h).raw(a(u)).up():(null==u&&(u=""),e=e.ele(h,u.toString()).up());return e},u=t.create(c,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),s(u,e).end(this.options.renderOpts)},e}()}).call(r);var a={};function l(){}function u(){u.init.call(this)}function c(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function f(e,t,r,n){var i,o,s,a;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),s=o[t]):(o=e._events=new l,e._eventsCount=0),s){if("function"==typeof s?s=o[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),!s.warned&&(i=c(e))&&i>0&&s.length>i){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,a=u,"function"==typeof console.warn?console.warn(a):console.log(a)}}else s=o[t]=r,++e._eventsCount;return e}function p(e,t,r){var n=!1;function i(){e.removeListener(t,i),n||(n=!0,r.apply(e,arguments))}return i.listener=r,i}function h(e){var t=this._events;if(t){var r=t[e];if("function"==typeof r)return 1;if(r)return r.length}return 0}function m(e,t){for(var r=new Array(t);t--;)r[t]=e[t];return r}l.prototype=Object.create(null),u.EventEmitter=u,u.usingDomains=!1,u.prototype.domain=void 0,u.prototype._events=void 0,u.prototype._maxListeners=void 0,u.defaultMaxListeners=10,u.init=function(){this.domain=null,u.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new l,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return c(this)},u.prototype.emit=function(e){var t,r,n,i,o,s,a,l="error"===e;if(s=this._events)l=l&&null==s.error;else if(!l)return!1;if(a=this.domain,l){if(t=arguments[1],!a){if(t instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=a,t.domainThrown=!1,a.emit("error",t),!1}if(!(r=s[e]))return!1;var c="function"==typeof r;switch(n=arguments.length){case 1:!function(e,t,r){if(t)e.call(r);else for(var n=e.length,i=m(e,n),o=0;o<n;++o)i[o].call(r)}(r,c,this);break;case 2:!function(e,t,r,n){if(t)e.call(r,n);else for(var i=e.length,o=m(e,i),s=0;s<i;++s)o[s].call(r,n)}(r,c,this,arguments[1]);break;case 3:!function(e,t,r,n,i){if(t)e.call(r,n,i);else for(var o=e.length,s=m(e,o),a=0;a<o;++a)s[a].call(r,n,i)}(r,c,this,arguments[1],arguments[2]);break;case 4:!function(e,t,r,n,i,o){if(t)e.call(r,n,i,o);else for(var s=e.length,a=m(e,s),l=0;l<s;++l)a[l].call(r,n,i,o)}(r,c,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(n-1),o=1;o<n;o++)i[o-1]=arguments[o];!function(e,t,r,n){if(t)e.apply(r,n);else for(var i=e.length,o=m(e,i),s=0;s<i;++s)o[s].apply(r,n)}(r,c,this,i)}return!0},u.prototype.addListener=function(e,t){return f(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return f(this,e,t,!0)},u.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,p(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,p(this,e,t)),this},u.prototype.removeListener=function(e,t){var r,n,i,o,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(n=this._events))return this;if(!(r=n[e]))return this;if(r===t||r.listener&&r.listener===t)0==--this._eventsCount?this._events=new l:(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,o=r.length;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){s=r[o].listener,i=o;break}if(i<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new l,this;delete n[e]}else!function(e,t){for(var r=t,n=r+1,i=e.length;n<i;r+=1,n+=1)e[r]=e[n];e.pop()}(r,i);n.removeListener&&this.emit("removeListener",e,s||t)}return this},u.prototype.off=function(e,t){return this.removeListener(e,t)},u.prototype.removeAllListeners=function(e){var t,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new l,this._eventsCount=0):r[e]&&(0==--this._eventsCount?this._events=new l:delete r[e]),this;if(0===arguments.length){for(var n,i=Object.keys(r),o=0;o<i.length;++o)"removeListener"!==(n=i[o])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=new l,this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},u.prototype.listeners=function(e){var t,r=this._events;return r&&(t=r[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(t):[]},u.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},u.prototype.listenerCount=h,u.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var d=n(Object.freeze({__proto__:null,default:u,EventEmitter:u})),y={};(function(){y.stripBOM=function(e){return"\ufeff"===e[0]?e.substring(1):e}}).call(r);var v={};(function(){var e;e=new RegExp(/(?!xmlns)^.*:/),v.normalize=function(e){return e.toLowerCase()},v.firstCharLowerCase=function(e){return e.charAt(0).toLowerCase()+e.slice(1)},v.stripPrefix=function(t){return t.replace(e,"")},v.parseNumbers=function(e){return isNaN(e)||(e=e%1==0?parseInt(e,10):parseFloat(e)),e},v.parseBooleans=function(e){return/^(?:true|false)$/i.test(e)&&(e="true"===e.toLowerCase()),e}}).call(r);var g="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function w(){throw new Error("setTimeout has not been defined")}function x(){throw new Error("clearTimeout has not been defined")}var P=w,b=x;function _(e){if(P===setTimeout)return setTimeout(e,0);if((P===w||!P)&&setTimeout)return P=setTimeout,setTimeout(e,0);try{return P(e,0)}catch(t){try{return P.call(null,e,0)}catch(t){return P.call(this,e,0)}}}"function"==typeof g.setTimeout&&(P=setTimeout),"function"==typeof g.clearTimeout&&(b=clearTimeout);var T,k=[],C=!1,L=-1;function O(){C&&T&&(C=!1,T.length?k=T.concat(k):L=-1,k.length&&A())}function A(){if(!C){var e=_(O);C=!0;for(var t=k.length;t;){for(T=k,k=[];++L<t;)T&&T[L].run();L=-1,t=k.length}T=null,C=!1,function(e){if(b===clearTimeout)return clearTimeout(e);if((b===x||!b)&&clearTimeout)return b=clearTimeout,clearTimeout(e);try{return b(e)}catch(t){try{return b.call(null,e)}catch(t){return b.call(this,e)}}}(e)}}function E(e,t){this.fun=e,this.array=t}E.prototype.run=function(){this.fun.apply(null,this.array)};function j(){}var N=j,S=j,I=j,z=j,M=j,R=j,D=j;var $=g.performance||{},B=$.now||$.mozNow||$.msNow||$.oNow||$.webkitNow||function(){return(new Date).getTime()};var V=new Date;var F,K={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];k.push(new E(e,t)),1!==k.length||C||_(A)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:N,addListener:S,once:I,off:z,removeListener:M,removeAllListeners:R,emit:D,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*B.call($),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-V)/1e3}},U=1,W={},H=!1,X=g.document;function Y(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return W[U]=n,F(U),U++}function q(e){delete W[e]}function G(e){if(H)setTimeout(G,0,e);else{var t=W[e];if(t){H=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(void 0,r)}}(t)}finally{q(e),H=!1}}}}var J,Q,Z,ee,te=Object.getPrototypeOf&&Object.getPrototypeOf(g);te=te&&te.setTimeout?te:g,"[object process]"==={}.toString.call(g.process)?F=function(e){K.nextTick((function(){G(e)}))}:!function(){if(g.postMessage&&!g.importScripts){var e=!0,t=g.onmessage;return g.onmessage=function(){e=!1},g.postMessage("","*"),g.onmessage=t,e}}()?g.MessageChannel?((Q=new MessageChannel).port1.onmessage=function(e){G(e.data)},F=function(e){Q.port2.postMessage(e)}):X&&"onreadystatechange"in X.createElement("script")?(J=X.documentElement,F=function(e){var t=X.createElement("script");t.onreadystatechange=function(){G(e),t.onreadystatechange=null,J.removeChild(t),t=null},J.appendChild(t)}):F=function(e){setTimeout(G,0,e)}:(Z="setImmediate$"+Math.random()+"$",ee=function(e){e.source===g&&"string"==typeof e.data&&0===e.data.indexOf(Z)&&G(+e.data.slice(Z.length))},g.addEventListener?g.addEventListener("message",ee,!1):g.attachEvent("onmessage",ee),F=function(e){g.postMessage(Z+e,"*")});var re=Function.prototype.apply;function ne(e){"number"==typeof e&&"function"==typeof g.clearInterval?g.clearInterval(e):oe(e)}function ie(e){"number"==typeof e&&"function"==typeof g.clearTimeout?g.clearTimeout(e):oe(e)}function oe(e){e&&"function"==typeof e.close&&e.close()}function se(){return new le(re.call(g.setTimeout,window,arguments))}function ae(){return new le(re.call(g.setInterval,window,arguments))}function le(e){this._id=e}function ue(e,t){ie(e._idleTimeoutId),e._idleTimeout=t}function ce(e){ie(e._idleTimeoutId),e._idleTimeout=-1}le.prototype.unref=le.prototype.ref=function(){},le.prototype.close=function(){oe(this._id)};var fe=pe;function pe(e){ie(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=se((function(){e._onTimeout&&e._onTimeout()}),t))}var he,me,de,ye,ve,ge,we,xe,Pe={setImmediate:Y,clearImmediate:q,setTimeout:se,clearTimeout:ie,setInterval:ae,clearInterval:ne,active:pe,unenroll:ce,_unrefActive:fe,enroll:ue},be=n(Object.freeze({__proto__:null,setImmediate:Y,clearImmediate:q,clearInterval:ne,clearTimeout:ie,setTimeout:se,setInterval:ae,enroll:ue,unenroll:ce,_unrefActive:fe,active:pe,default:Pe}));he=a,function(){var e,r,n,i,s,a,l,u,c,f=function(e,t){return function(){return e.apply(t,arguments)}},p={}.hasOwnProperty;u=t,i=d,e=y,l=v,c=be.setImmediate,r=o.defaults,s=function(e){return"object"==typeof e&&null!=e&&0===Object.keys(e).length},a=function(e,t,r){var n,i;for(n=0,i=e.length;n<i;n++)t=(0,e[n])(t,r);return t},n=function(e,t,r){var n;return(n=Object.create(null)).value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(e,t,n)},he.Parser=function(t){function i(e){var t,n,i;if(this.parseStringPromise=f(this.parseStringPromise,this),this.parseString=f(this.parseString,this),this.reset=f(this.reset,this),this.assignOrPush=f(this.assignOrPush,this),this.processAsync=f(this.processAsync,this),!(this instanceof he.Parser))return new he.Parser(e);for(t in this.options={},n=r[.2])p.call(n,t)&&(i=n[t],this.options[t]=i);for(t in e)p.call(e,t)&&(i=e[t],this.options[t]=i);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(l.normalize)),this.reset()}return function(e,t){for(var r in t)p.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype}(i,t),i.prototype.processAsync=function(){var e,t;try{return this.remaining.length<=this.options.chunkSize?(e=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(e),this.saxParser.close()):(e=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(e),c(this.processAsync))}catch(e){if(t=e,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(t)}},i.prototype.assignOrPush=function(e,t,r){return t in e?(e[t]instanceof Array||n(e,t,[e[t]]),e[t].push(r)):this.options.explicitArray?n(e,t,[r]):n(e,t,r)},i.prototype.reset=function(){var e,t,r,i,o;return this.removeAllListeners(),this.saxParser=u.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(o=this,function(e){if(o.saxParser.resume(),!o.saxParser.errThrown)return o.saxParser.errThrown=!0,o.emit("error",e)}),this.saxParser.onend=function(e){return function(){if(!e.saxParser.ended)return e.saxParser.ended=!0,e.emit("end",e.resultObject)}}(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,i=[],e=this.options.attrkey,t=this.options.charkey,this.saxParser.onopentag=function(r){return function(o){var s,l,u,c,f;if((u={})[t]="",!r.options.ignoreAttrs)for(s in f=o.attributes)p.call(f,s)&&(e in u||r.options.mergeAttrs||(u[e]={}),l=r.options.attrValueProcessors?a(r.options.attrValueProcessors,o.attributes[s],s):o.attributes[s],c=r.options.attrNameProcessors?a(r.options.attrNameProcessors,s):s,r.options.mergeAttrs?r.assignOrPush(u,c,l):n(u[e],c,l));return u["#name"]=r.options.tagNameProcessors?a(r.options.tagNameProcessors,o.name):o.name,r.options.xmlns&&(u[r.options.xmlnskey]={uri:o.uri,local:o.local}),i.push(u)}}(this),this.saxParser.onclosetag=function(e){return function(){var r,o,l,u,c,f,h,m,d,y;if(f=i.pop(),c=f["#name"],e.options.explicitChildren&&e.options.preserveChildrenOrder||delete f["#name"],!0===f.cdata&&(r=f.cdata,delete f.cdata),d=i[i.length-1],f[t].match(/^\s*$/)&&!r?(o=f[t],delete f[t]):(e.options.trim&&(f[t]=f[t].trim()),e.options.normalize&&(f[t]=f[t].replace(/\s{2,}/g," ").trim()),f[t]=e.options.valueProcessors?a(e.options.valueProcessors,f[t],c):f[t],1===Object.keys(f).length&&t in f&&!e.EXPLICIT_CHARKEY&&(f=f[t])),s(f)&&(f="function"==typeof e.options.emptyTag?e.options.emptyTag():""!==e.options.emptyTag?e.options.emptyTag:o),null!=e.options.validator&&(y="/"+function(){var e,t,r;for(r=[],e=0,t=i.length;e<t;e++)u=i[e],r.push(u["#name"]);return r}().concat(c).join("/"),function(){var t;try{return f=e.options.validator(y,d&&d[c],f)}catch(r){return t=r,e.emit("error",t)}}()),e.options.explicitChildren&&!e.options.mergeAttrs&&"object"==typeof f)if(e.options.preserveChildrenOrder){if(d){for(l in d[e.options.childkey]=d[e.options.childkey]||[],h={},f)p.call(f,l)&&n(h,l,f[l]);d[e.options.childkey].push(h),delete f["#name"],1===Object.keys(f).length&&t in f&&!e.EXPLICIT_CHARKEY&&(f=f[t])}}else u={},e.options.attrkey in f&&(u[e.options.attrkey]=f[e.options.attrkey],delete f[e.options.attrkey]),!e.options.charsAsChildren&&e.options.charkey in f&&(u[e.options.charkey]=f[e.options.charkey],delete f[e.options.charkey]),Object.getOwnPropertyNames(f).length>0&&(u[e.options.childkey]=f),f=u;return i.length>0?e.assignOrPush(d,c,f):(e.options.explicitRoot&&(m=f,n(f={},c,m)),e.resultObject=f,e.saxParser.ended=!0,e.emit("end",e.resultObject))}}(this),r=function(e){return function(r){var n,o;if(o=i[i.length-1])return o[t]+=r,e.options.explicitChildren&&e.options.preserveChildrenOrder&&e.options.charsAsChildren&&(e.options.includeWhiteChars||""!==r.replace(/\\n/g,"").trim())&&(o[e.options.childkey]=o[e.options.childkey]||[],(n={"#name":"__text__"})[t]=r,e.options.normalize&&(n[t]=n[t].replace(/\s{2,}/g," ").trim()),o[e.options.childkey].push(n)),o}}(this),this.saxParser.ontext=r,this.saxParser.oncdata=function(e){var t;if(t=r(e))return t.cdata=!0}},i.prototype.parseString=function(t,r){var n;null!=r&&"function"==typeof r&&(this.on("end",(function(e){return this.reset(),r(null,e)})),this.on("error",(function(e){return this.reset(),r(e)})));try{return""===(t=t.toString()).trim()?(this.emit("end",null),!0):(t=e.stripBOM(t),this.options.async?(this.remaining=t,c(this.processAsync),this.saxParser):this.saxParser.write(t).close())}catch(e){if(n=e,!this.saxParser.errThrown&&!this.saxParser.ended)return this.emit("error",n),this.saxParser.errThrown=!0;if(this.saxParser.ended)throw n}},i.prototype.parseStringPromise=function(e){return new Promise((t=this,function(r,n){return t.parseString(e,(function(e,t){return e?n(e):r(t)}))}));var t},i}(i),he.parseString=function(e,t,r){var n,i;return null!=r?("function"==typeof r&&(n=r),"object"==typeof t&&(i=t)):("function"==typeof t&&(n=t),i={}),new he.Parser(i).parseString(e,n)},he.parseStringPromise=function(e,t){var r;return"object"==typeof t&&(r=t),new he.Parser(r).parseStringPromise(e)}}.call(r),function(){var e,t,r,n,l={}.hasOwnProperty;t=o,e=s,r=a,n=v,xe=i.defaults=t.defaults,we=i.processors=n,ge=i.ValidationError=function(e){function t(e){this.message=e}return function(e,t){for(var r in t)l.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype}(t,Error),t}(),ve=i.Builder=e.Builder,ye=i.Parser=r.Parser,de=i.parseString=r.parseString,me=i.parseStringPromise=r.parseStringPromise}.call(r);export{ve as Builder,ye as Parser,ge as ValidationError,i as default,xe as defaults,de as parseString,me as parseStringPromise,we as processors};
