/*!
 * jRaiser 2 Javascript Library
 * localstorage - v1.0.0 (2013-03-13T22:26:08+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("localstorage/1.0.x/",null,function(e,t,n){"use strict";var r=window.localStorage,i=r!=null;return i||(r={init:function(){var e=this._input=document.createElement("input");e.type="hidden",e.addBehavior("#default#userData"),document.body.insertBefore(e,document.body.firstChild),this._filename=window.location.hostname,e.load(this._filename)},_save:function(e){e||(e=new Date,e.setFullYear(e.getFullYear()+1)),this._input.expires=e.toUTCString(),this._input.save(this._filename)},getItem:function(e){return this._input.getAttribute(e)},setItem:function(e,t){this._input.setAttribute(e,t),this._save()},removeItem:function(e){this._input.removeAttribute(e),this._save()},clear:function(){this._save(new Date(315532799e3)),this._input.load(this._filename)}},r.init()),{isNative:i,getItem:function(){return r.getItem.apply(r,arguments)},setItem:function(){return r.setItem.apply(r,arguments)},removeItem:function(){return r.removeItem.apply(r,arguments)},clear:function(){return r.clear.apply(r,arguments)}}})