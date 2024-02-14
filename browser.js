// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===l.call(e.specifier)?l.call(t):u.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,i,t,a,o,p,u,l,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",u=1,l=0;l<e.length;l++)if(s(t=e[l]))p+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,S(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",u+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,i,t,n;for(i=[],n=0,t=T.exec(e);t;)(r=e.slice(n,T.lastIndex-t[0].length)).length&&i.push(r),i.push($(t)),n=T.lastIndex,t=T.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function _(e){return"string"==typeof e}function O(e){var r,i;if(!_(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return j.apply(null,r)}var A,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,N=C.__lookupGetter__,W=C.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(N.call(e,r)||W.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,i.get),o&&Z&&Z.call(e,r,i.set),e};var L=A;function G(e,r,i){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&U.call(e,r)}var B="function"==typeof Symbol?Symbol:void 0,M="function"==typeof B&&"symbol"==typeof B("foo")&&X(B,"iterator")&&"symbol"==typeof B.iterator?Symbol.iterator:null,z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return z&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D="function"==typeof B?B.toStringTag:"",H=Y()?function(e){var r,i,t;if(null==e)return q.call(e);i=e[D],r=X(e,D);try{e[D]=void 0}catch(r){return q.call(e)}return t=q.call(e),r?e[D]=i:delete e[D],t}:function(e){return q.call(e)},J=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)},K=/./;function Q(e){return"boolean"==typeof e}var ee=Boolean,re=Boolean.prototype.toString,ie=Y();function te(e){return"object"==typeof e&&(e instanceof ee||(ie?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ne(e){return Q(e)||te(e)}function ae(e){return"number"==typeof e}function oe(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ce(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+oe(n):oe(n)+e,t&&(e="-"+e)),e}G(ne,"isPrimitive",Q),G(ne,"isObject",te);var se=String.prototype.toLowerCase,pe=String.prototype.toUpperCase;function ue(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ae(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ce(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ce(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===pe.call(e.specifier)?pe.call(i):se.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function le(e){return"string"==typeof e}var fe=Math.abs,ge=String.prototype.toLowerCase,de=String.prototype.toUpperCase,he=String.prototype.replace,we=/e\+(\d)$/,be=/e-(\d)$/,ve=/^(\d+)$/,ye=/^(\d+)e/,me=/\.0$/,Ee=/\.0*e/,xe=/(\..*[^0])0*e/;function ke(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ae(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":fe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=he.call(i,xe,"$1e"),i=he.call(i,Ee,"e"),i=he.call(i,me,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=he.call(i,we,"e+0$1"),i=he.call(i,be,"e-0$1"),e.alternate&&(i=he.call(i,ve,"$1."),i=he.call(i,ye,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===de.call(e.specifier)?de.call(i):ge.call(i)}function Se(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ie(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Se(t):Se(t)+e}var Ve=String.fromCharCode,je=isNaN,Te=Array.isArray;function $e(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Fe(e){var r,i,t,n,a,o,c,s,p;if(!Te(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(le(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=$e(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,je(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,je(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ue(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!je(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=je(a)?String(t.arg):Ve(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=ke(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ce(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ie(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var _e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Oe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ae(e){var r,i,t,n;for(i=[],n=0,t=_e.exec(e);t;)(r=e.slice(n,_e.lastIndex-t[0].length)).length&&i.push(r),i.push(Oe(t)),n=_e.lastIndex,t=_e.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ce(e){return"string"==typeof e}function Re(e){var r,i;if(!Ce(e))throw new TypeError(Re("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ae(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Fe.apply(null,r)}function Pe(){return new Function("return this;")()}var Ze="object"==typeof self?self:null,Ne="object"==typeof window?window:null,We="object"==typeof globalThis?globalThis:null,Le=function(e){if(arguments.length){if(!Q(e))throw new TypeError(Re("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Pe()}if(We)return We;if(Ze)return Ze;if(Ne)return Ne;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=Le.document&&Le.document.childNodes,Ue=Int8Array;function Xe(){return/^\s*function\s*([^(]*)/i}var Be=/^\s*function\s*([^(]*)/i;function Me(e){return"number"==typeof e}function ze(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ye(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ze(n):ze(n)+e,t&&(e="-"+e)),e}G(Xe,"REGEXP",Be);var qe=String.prototype.toLowerCase,De=String.prototype.toUpperCase;function He(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Me(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ye(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ye(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===De.call(e.specifier)?De.call(i):qe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Je(e){return"string"==typeof e}var Ke=Math.abs,Qe=String.prototype.toLowerCase,er=String.prototype.toUpperCase,rr=String.prototype.replace,ir=/e\+(\d)$/,tr=/e-(\d)$/,nr=/^(\d+)$/,ar=/^(\d+)e/,or=/\.0$/,cr=/\.0*e/,sr=/(\..*[^0])0*e/;function pr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Me(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Ke(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=rr.call(i,sr,"$1e"),i=rr.call(i,cr,"e"),i=rr.call(i,or,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=rr.call(i,ir,"e+0$1"),i=rr.call(i,tr,"e-0$1"),e.alternate&&(i=rr.call(i,nr,"$1."),i=rr.call(i,ar,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===er.call(e.specifier)?er.call(i):Qe.call(i)}function ur(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function lr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ur(t):ur(t)+e}var fr=String.fromCharCode,gr=isNaN,dr=Array.isArray;function hr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function wr(e){var r,i,t,n,a,o,c,s,p;if(!dr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Je(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=hr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,gr(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,gr(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=He(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!gr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=gr(a)?String(t.arg):fr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=pr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ye(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=lr(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var br=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function vr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function yr(e){var r,i,t,n;for(i=[],n=0,t=br.exec(e);t;)(r=e.slice(n,br.lastIndex-t[0].length)).length&&i.push(r),i.push(vr(t)),n=br.lastIndex,t=br.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function mr(e){return"string"==typeof e}function Er(e){var r,i;if(!mr(e))throw new TypeError(Er("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[yr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return wr.apply(null,r)}function xr(e){return null!==e&&"object"==typeof e}function kr(e){var r,i,t,n;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Be.exec(t.toString()))return r[1]}return xr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(xr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Er("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!J(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(xr));var Sr="function"==typeof K||"object"==typeof Ue||"function"==typeof Ge?function(e){return kr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?kr(e).toLowerCase():r};function Ir(e){return"function"===Sr(e)}var Vr,jr=Object,Tr=Object.getPrototypeOf;Vr=Ir(Object.getPrototypeOf)?Tr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var $r=Vr,Fr=Object.prototype;function _r(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!J(e)}(e)&&(r=function(e){return null==e?null:(e=jr(e),$r(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&Ir(r.constructor)&&"[object Function]"===H(r.constructor)&&X(r,"isPrototypeOf")&&Ir(r.isPrototypeOf)&&(r===Fr||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}function Or(e){return"number"==typeof e}var Ar=Number,Cr=Ar.prototype.toString,Rr=Y();function Pr(e){return"object"==typeof e&&(e instanceof Ar||(Rr?function(e){try{return Cr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Zr(e){return Or(e)||Pr(e)}G(Zr,"isPrimitive",Or),G(Zr,"isObject",Pr);var Nr=Number.POSITIVE_INFINITY,Wr=Ar.NEGATIVE_INFINITY,Lr=Math.floor;function Gr(e){return e<Nr&&e>Wr&&Lr(r=e)===r;var r}function Ur(e){return Or(e)&&Gr(e)}function Xr(e){return Pr(e)&&Gr(e.valueOf())}function Br(e){return Ur(e)||Xr(e)}function Mr(e){return Ur(e)&&e>=0}function zr(e){return Xr(e)&&e.valueOf()>=0}function Yr(e){return Mr(e)||zr(e)}function qr(e){return"number"==typeof e}function Dr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Hr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Dr(n):Dr(n)+e,t&&(e="-"+e)),e}G(Br,"isPrimitive",Ur),G(Br,"isObject",Xr),G(Yr,"isPrimitive",Mr),G(Yr,"isObject",zr);var Jr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase;function Qr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!qr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Hr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Hr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Kr.call(e.specifier)?Kr.call(i):Jr.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ei(e){return"string"==typeof e}var ri=Math.abs,ii=String.prototype.toLowerCase,ti=String.prototype.toUpperCase,ni=String.prototype.replace,ai=/e\+(\d)$/,oi=/e-(\d)$/,ci=/^(\d+)$/,si=/^(\d+)e/,pi=/\.0$/,ui=/\.0*e/,li=/(\..*[^0])0*e/;function fi(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!qr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ri(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ni.call(i,li,"$1e"),i=ni.call(i,ui,"e"),i=ni.call(i,pi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ni.call(i,ai,"e+0$1"),i=ni.call(i,oi,"e-0$1"),e.alternate&&(i=ni.call(i,ci,"$1."),i=ni.call(i,si,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ti.call(e.specifier)?ti.call(i):ii.call(i)}function gi(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function di(e,r,i){var t=r-e.length;return t<0?e:e=i?e+gi(t):gi(t)+e}var hi=String.fromCharCode,wi=isNaN,bi=Array.isArray;function vi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function yi(e){var r,i,t,n,a,o,c,s,p;if(!bi(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ei(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=vi(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,wi(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,wi(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Qr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!wi(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=wi(a)?String(t.arg):hi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=fi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Hr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=di(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var mi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ei(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function xi(e){var r,i,t,n;for(i=[],n=0,t=mi.exec(e);t;)(r=e.slice(n,mi.lastIndex-t[0].length)).length&&i.push(r),i.push(Ei(t)),n=mi.lastIndex,t=mi.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function ki(e){return"string"==typeof e}function Si(e){var r,i,t;if(!ki(e))throw new TypeError(Si("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=xi(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return yi.apply(null,i)}function Ii(e,r){return _r(r)?X(r,"iter")&&(e.iter=r.iter,!Mr(r.iter))?new TypeError(Si("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",r.iter)):null:new TypeError(Si("invalid argument. Options argument must be an object. Value: `%s`.",r))}var Vi=4503599627370496;return function e(r){var i,t,n,a,o,c;if(i={iter:Vi},arguments.length&&(a=Ii(i,r)))throw a;return o=0,c=0,G(t={},"next",s),G(t,"return",p),M&&G(t,M,u),t;function s(){return o+=1,n||o>i.iter?{done:!0}:{value:c+=2,done:!1}}function p(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return e(i)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterPositiveEvenIntegersSeq=r();
//# sourceMappingURL=browser.js.map
