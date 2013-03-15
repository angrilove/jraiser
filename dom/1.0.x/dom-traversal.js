/*!
 * jRaiser 2 Javascript Library
 * dom-traversal - v1.0.0 (2013-03-15T10:29:04+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("dom/1.0.x/dom-traversal",["sizzle/1.9.x/"],function(e,t,n){"use strict";function i(e,t){return t?r.matches(t,e):e}function s(e,t,n,s){var o=r(n),u=[];return e.forEach(function(e){while(e=e[t])if(e.nodeType===1){if(o.indexOf(e)!==-1)break;u.push(e)}}),r.uniqueSort(u),t==="parentNode"&&u.reverse(),new e.constructor(i(u,s))}function o(e,t,n,r){var s=[];return e.forEach(function(e){while(e=e[t])if(e.nodeType===1){s.push(e);if(r)break}}),new e.constructor(i(s,n))}var r=e("sizzle/1.9.x/");return{shortcuts:{children:function(e){var t=[];return this.forEach(function(e){var n=e.firstChild;while(n)n.nodeType===1&&t.push(n),n=n.nextSibling}),t.length>1&&r.uniqueSort(t),new this.constructor(i(t,e))},next:function(e){return o(this,"nextSibling",e,!0)},nextAll:function(e){return o(this,"nextSibling",e)},prev:function(e){return o(this,"previousSibling",e,!0)},prevAll:function(e){return o(this,"previousSibling",e)},parent:function(e){return o(this,"parentNode",e,!0)},parents:function(e){return o(this,"parentNode",e)},siblings:function(e){var t=this,n=0;return this.parent().children(e).filter(function(e){for(var r=n;r<t.length;r++)if(t[r]===e)return n++,!1;return!0})},nextUntil:function(e,t){return s(this,"nextSibling",e,t)},prevUntil:function(e,t){return s(this,"previousSibling",e,t)},parentsUntil:function(e,t){return s(this,"parentNode",e,t)}}}})