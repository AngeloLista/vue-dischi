(function(t){function e(e){for(var r,c,s=e[0],i=e[1],u=e[2],f=0,p=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0330":function(t,e,n){},"19fd":function(t,e,n){"use strict";n("798f")},"2c5e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main")],1)},a=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("img",{attrs:{src:n("5c10"),alt:""}})])}],i={name:"Header"},u=i,l=(n("5c3b"),n("2877")),f=Object(l["a"])(u,c,s,!1,null,"25dcb9e9",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("section",{staticClass:"container",attrs:{id:"songs"}},t._l(t.songs,(function(t,e){return n("div",{key:e,staticClass:"song-card-container"},[n("SongCard",{attrs:{title:t.title,poster:t.poster,author:t.author,year:t.year}})],1)})),0)])},h=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-card"},[n("img",{staticClass:"img-fluid",attrs:{src:t.poster,alt:t.title}}),n("h5",[t._v(t._s(t.title))]),n("div",{staticClass:"description"},[n("span",{staticClass:"author"},[t._v(t._s(t.author))]),n("span",{staticClass:"year"},[t._v(t._s(t.year))])])])},b=[],v={name:"SongCard",props:["poster","title","author","year"]},m=v,y=(n("cdd0"),Object(l["a"])(m,g,b,!1,null,"6e6f7744",null)),_=y.exports,O=n("bc3a"),j=n.n(O),x={name:"Main",components:{SongCard:_},data:function(){return{songs:[]}},methods:{getSong:function(){var t=this;j.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.songs=e.data.response}))}},created:function(){this.getSong()}},w=x,C=(n("19fd"),Object(l["a"])(w,d,h,!1,null,"3ee89e90",null)),S=C.exports,M={name:"App",components:{Header:p,Main:S}},P=M,$=(n("5c0b"),Object(l["a"])(P,o,a,!1,null,null,null)),E=$.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5c10":function(t,e,n){t.exports=n.p+"img/spotify-logo.0488eb64.png"},"5c3b":function(t,e,n){"use strict";n("0330")},"798f":function(t,e,n){},"9c0c":function(t,e,n){},cdd0:function(t,e,n){"use strict";n("2c5e")}});
//# sourceMappingURL=app.fb57aa4c.js.map