(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e1253b0"],{"0cb2":function(t,e,r){var c=r("7b0b"),n=Math.floor,a="".replace,u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,i,s,l){var d=r+t.length,f=i.length,p=o;return void 0!==s&&(s=c(s),p=u),a.call(l,p,(function(c,a){var u;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(d);case"<":u=s[a.slice(1,-1)];break;default:var o=+a;if(0===o)return c;if(o>f){var l=n(o/10);return 0===l?c:l<=f?void 0===i[l-1]?a.charAt(1):i[l-1]+a.charAt(1):c}u=i[o-1]}return void 0===u?"":u}))}},"0ddc":function(t,e,r){"use strict";r("4c53");var c=r("7a23"),n=["disabled"];function a(t,e,r,a,u,o){return 0===t.count?(Object(c["w"])(),Object(c["g"])("button",{key:0,class:"btn",onClick:e[0]||(e[0]=Object(c["S"])((function(e){return t.add(r.product.id)}),["stop"]))},Object(c["I"])(a.currency(r.product.price)),1)):(Object(c["w"])(),Object(c["g"])("div",{key:1,class:Object(c["q"])(["product-controls",{"in-card":r.inCard}])},[Object(c["h"])("button",{class:"btn danger",onClick:e[1]||(e[1]=Object(c["S"])((function(e){return t.sub(r.product.id)}),["stop"]))},"-"),Object(c["h"])("strong",null,Object(c["I"])(t.count),1),Object(c["h"])("button",{class:"btn primary",onClick:e[2]||(e[2]=Object(c["S"])((function(e){return t.add(r.product.id)}),["stop"])),disabled:t.count>=r.product.count},"+",8,n)],2))}var u=r("5530"),o=r("c444"),i=r("3f9b"),s={props:{product:{type:Object,required:!0},inCard:{type:Boolean,default:!1}},setup:function(t){return Object(u["a"])(Object(u["a"])({},Object(o["a"])(t.product.id)),{},{currency:i["a"]})}},l=r("6b0d"),d=r.n(l);const f=d()(s,[["render",a]]);e["a"]=f},"0fa5":function(t,e,r){"use strict";r.r(e);r("4de4");var c=r("7a23"),n={key:1,class:"card"};function a(t,e,r,a,u,o){var i=Object(c["E"])("AppLoader"),s=Object(c["E"])("products-filter"),l=Object(c["E"])("products-table");return a.loading?(Object(c["w"])(),Object(c["e"])(i,{key:0})):(Object(c["w"])(),Object(c["g"])("div",n,[Object(c["j"])(s,{categories:a.categories,modelValue:a.filter,"onUpdate:modelValue":e[0]||(e[0]=function(t){return a.filter=t})},null,8,["categories","modelValue"]),Object(c["j"])(l,{products:a.products},null,8,["products"])]))}var u=r("1da1"),o=(r("96cf"),r("ac1f"),r("841c"),r("caad"),r("2532"),{class:"products-filter"}),i={class:"form-control"},s={class:"list"},l=["onClick"];function d(t,e,r,n,a,u){return Object(c["w"])(),Object(c["g"])("div",o,[Object(c["h"])("div",i,[Object(c["R"])(Object(c["h"])("input",{type:"text",placeholder:"Suche...","onUpdate:modelValue":e[0]||(e[0]=function(t){return n.search=t})},null,512),[[c["N"],n.search]]),n.search.length?(Object(c["w"])(),Object(c["g"])("span",{key:0,class:"form-control-clear",onClick:e[1]||(e[1]=function(t){return n.search=""})},"×")):Object(c["f"])("",!0)]),Object(c["h"])("ul",s,[Object(c["h"])("li",{class:Object(c["q"])(["list-item",{active:!n.category}]),onClick:e[2]||(e[2]=function(t){return n.category=null})}," Alle ",2),(Object(c["w"])(!0),Object(c["g"])(c["a"],null,Object(c["C"])(n.categories,(function(t){return Object(c["w"])(),Object(c["g"])("li",{class:Object(c["q"])(["list-item",{active:n.category===t.type}]),onClick:function(e){return n.category=t.type},key:t.id},Object(c["I"])(t.title),11,l)})),128))])])}var f=r("3835"),p=(r("5319"),r("6c02")),b={props:["modelValue","categories"],emits:["update:modelValue"],setup:function(t,e){var r,n=t.modelValue,a=t.categories,u=e.emit,o=Object(p["e"])(),i=Object(c["B"])(null!==(r=n.search)&&void 0!==r?r:""),s=Object(c["B"])(n.category);return Object(c["P"])([i,s],(function(t){var e=Object(f["a"])(t,2),r=e[0],c=e[1],n={};r&&(n["search"]=r),c&&(n["category"]=c),o.replace({query:n}),u("update:modelValue",{search:r,category:c})})),{search:i,category:s,categories:a}}},v=r("6b0d"),g=r.n(v);const O=g()(b,[["render",d]]);var j=O,h={key:0,class:"products-table"},x={key:1};function y(t,e,r,n,a,u){var o=Object(c["E"])("ProductCard");return r.products.length?(Object(c["w"])(),Object(c["g"])("div",h,[(Object(c["w"])(!0),Object(c["g"])(c["a"],null,Object(c["C"])(r.products,(function(t){return Object(c["w"])(),Object(c["e"])(o,{product:t,key:t.id},null,8,["product"])})),128))])):(Object(c["w"])(),Object(c["g"])("h3",x,"Keine Produkten"))}var m={class:"product-card"},w={class:"product-img"},I=["src","alt"],k={class:"product-title"},E={class:"text-center"},R={key:1},C=Object(c["h"])("strong",null,"Nicht lieferbar",-1),$=[C];function A(t,e,r,n,a,u){var o=Object(c["E"])("ProductCartActions");return Object(c["w"])(),Object(c["g"])("div",m,[Object(c["h"])("div",w,[Object(c["h"])("img",{src:r.product.img,alt:r.product.title},null,8,I)]),Object(c["h"])("h4",k,Object(c["I"])(r.product.title),1),Object(c["h"])("div",E,[r.product.count?(Object(c["w"])(),Object(c["e"])(o,{key:0,product:r.product},null,8,["product"])):(Object(c["w"])(),Object(c["g"])("p",R,$))])])}var P=r("0ddc"),S={props:["product"],components:{ProductCartActions:P["a"]}};const q=g()(S,[["render",A]]);var T=q,V={props:["products"],components:{ProductCard:T}};r("52b5");const _=g()(V,[["render",y],["__scopeId","data-v-5b27d39e"]]);var B=_,N=r("ddc6"),U=r("5502"),L=r("3977"),D={setup:function(){var t=Object(U["b"])(),e=Object(p["d"])(),r=Object(c["B"])({category:e.query.category,search:e.query.search}),n=Object(c["B"])(!0);Object(c["u"])(Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(L["a"])();case 2:return e.next=4,t.dispatch("product/load");case 4:n.value=!1;case 5:case"end":return e.stop()}}),e)}))));var a=Object(c["c"])((function(){return t.getters["product/products"].filter((function(t){return r.value.category?t.category===r.value.category:t})).filter((function(t){return r.value.search?t.title.toLowerCase().includes(r.value.search.toLowerCase()):t}))})),o=Object(c["c"])((function(){return t.getters["category/categories"]}));return{loading:n,products:a,filter:r,categories:o}},components:{ProductsFilter:j,ProductsTable:B,AppLoader:N["a"]}};r("e4df");const K=g()(D,[["render",a],["__scopeId","data-v-6d6f42ed"]]);e["default"]=K},"107c":function(t,e,r){var c=r("d039"),n=r("da84"),a=n.RegExp;t.exports=c((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,r){var c=r("825a"),n=r("1626"),a=r("c6b6"),u=r("9263");t.exports=function(t,e){var r=t.exec;if(n(r)){var o=r.call(t,e);return null!==o&&c(o),o}if("RegExp"===a(t))return u.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")}},2532:function(t,e,r){"use strict";var c=r("23e7"),n=r("5a34"),a=r("1d80"),u=r("577e"),o=r("ab13");c({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~u(a(this)).indexOf(u(n(t)),arguments.length>1?arguments[1]:void 0)}})},3977:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var c=r("1da1"),n=(r("96cf"),r("5502"));function a(){return u.apply(this,arguments)}function u(){return u=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=Object(n["b"])(),0!==e.getters["category/categories"].length){t.next=4;break}return t.next=4,e.dispatch("category/load");case 4:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}},"3f9b":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var c=new Intl.NumberFormat("de-DE",{currency:"EUR",style:"currency"});function n(t){return c.format(t)}},"44e7":function(t,e,r){var c=r("861d"),n=r("c6b6"),a=r("b622"),u=a("match");t.exports=function(t){var e;return c(t)&&(void 0!==(e=t[u])?!!e:"RegExp"==n(t))}},"4c53":function(t,e,r){"use strict";var c=r("23e7"),n=r("857a"),a=r("af03");c({target:"String",proto:!0,forced:a("sub")},{sub:function(){return n(this,"sub","","")}})},"52b5":function(t,e,r){"use strict";r("f0bd")},5319:function(t,e,r){"use strict";var c=r("d784"),n=r("d039"),a=r("825a"),u=r("1626"),o=r("a691"),i=r("50c4"),s=r("577e"),l=r("1d80"),d=r("8aa5"),f=r("dc4a"),p=r("0cb2"),b=r("14c3"),v=r("b622"),g=v("replace"),O=Math.max,j=Math.min,h=function(t){return void 0===t?t:String(t)},x=function(){return"$0"==="a".replace(/./,"$0")}(),y=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),m=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));c("replace",(function(t,e,r){var c=y?"$":"$0";return[function(t,r){var c=l(this),n=void 0==t?void 0:f(t,g);return n?n.call(t,c,r):e.call(s(c),t,r)},function(t,n){var l=a(this),f=s(t);if("string"===typeof n&&-1===n.indexOf(c)&&-1===n.indexOf("$<")){var v=r(e,l,f,n);if(v.done)return v.value}var g=u(n);g||(n=s(n));var x=l.global;if(x){var y=l.unicode;l.lastIndex=0}var m=[];while(1){var w=b(l,f);if(null===w)break;if(m.push(w),!x)break;var I=s(w[0]);""===I&&(l.lastIndex=d(f,i(l.lastIndex),y))}for(var k="",E=0,R=0;R<m.length;R++){w=m[R];for(var C=s(w[0]),$=O(j(o(w.index),f.length),0),A=[],P=1;P<w.length;P++)A.push(h(w[P]));var S=w.groups;if(g){var q=[C].concat(A,$,f);void 0!==S&&q.push(S);var T=s(n.apply(void 0,q))}else T=p(C,f,$,A,S,n);$>=E&&(k+=f.slice(E,$)+T,E=$+C.length)}return k+f.slice(E)}]}),!m||!x||y)},"5a34":function(t,e,r){var c=r("44e7");t.exports=function(t){if(c(t))throw TypeError("The method doesn't accept regular expressions");return t}},"644c":function(t,e,r){},"841c":function(t,e,r){"use strict";var c=r("d784"),n=r("825a"),a=r("1d80"),u=r("129f"),o=r("577e"),i=r("dc4a"),s=r("14c3");c("search",(function(t,e,r){return[function(e){var r=a(this),c=void 0==e?void 0:i(e,t);return c?c.call(e,r):new RegExp(e)[t](o(r))},function(t){var c=n(this),a=o(t),i=r(e,c,a);if(i.done)return i.value;var l=c.lastIndex;u(l,0)||(c.lastIndex=0);var d=s(c,a);return u(c.lastIndex,l)||(c.lastIndex=l),null===d?-1:d.index}]}))},"857a":function(t,e,r){var c=r("1d80"),n=r("577e"),a=/"/g;t.exports=function(t,e,r,u){var o=n(c(t)),i="<"+e;return""!==r&&(i+=" "+r+'="'+n(u).replace(a,"&quot;")+'"'),i+">"+o+"</"+e+">"}},"8aa5":function(t,e,r){"use strict";var c=r("6547").charAt;t.exports=function(t,e,r){return e+(r?c(t,e).length:1)}},9263:function(t,e,r){"use strict";var c=r("577e"),n=r("ad6d"),a=r("9f7f"),u=r("5692"),o=r("7c73"),i=r("69f3").get,s=r("fce3"),l=r("107c"),d=RegExp.prototype.exec,f=u("native-string-replace",String.prototype.replace),p=d,b=function(){var t=/a/,e=/b*/g;return d.call(t,"a"),d.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=a.UNSUPPORTED_Y||a.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],O=b||g||v||s||l;O&&(p=function(t){var e,r,a,u,s,l,O,j=this,h=i(j),x=c(t),y=h.raw;if(y)return y.lastIndex=j.lastIndex,e=p.call(y,x),j.lastIndex=y.lastIndex,e;var m=h.groups,w=v&&j.sticky,I=n.call(j),k=j.source,E=0,R=x;if(w&&(I=I.replace("y",""),-1===I.indexOf("g")&&(I+="g"),R=x.slice(j.lastIndex),j.lastIndex>0&&(!j.multiline||j.multiline&&"\n"!==x.charAt(j.lastIndex-1))&&(k="(?: "+k+")",R=" "+R,E++),r=new RegExp("^(?:"+k+")",I)),g&&(r=new RegExp("^"+k+"$(?!\\s)",I)),b&&(a=j.lastIndex),u=d.call(w?r:j,R),w?u?(u.input=u.input.slice(E),u[0]=u[0].slice(E),u.index=j.lastIndex,j.lastIndex+=u[0].length):j.lastIndex=0:b&&u&&(j.lastIndex=j.global?u.index+u[0].length:a),g&&u&&u.length>1&&f.call(u[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(u[s]=void 0)})),u&&m)for(u.groups=l=o(null),s=0;s<m.length;s++)O=m[s],l[O[0]]=u[O[1]];return u}),t.exports=p},"9f7f":function(t,e,r){var c=r("d039"),n=r("da84"),a=n.RegExp;e.UNSUPPORTED_Y=c((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=c((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ab13:function(t,e,r){var c=r("b622"),n=c("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(c){}}return!1}},ac1f:function(t,e,r){"use strict";var c=r("23e7"),n=r("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},af03:function(t,e,r){var c=r("d039");t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},c444:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var c=r("7a23"),n=r("5502");function a(t){var e=Object(n["b"])(),r=Object(c["c"])((function(){var r;return null!==(r=e.getters["cart/cart"][t])&&void 0!==r?r:0})),a=function(t){return e.commit("cart/add",t)},u=function(t){return e.commit("cart/remove",t)};return{count:r,add:a,sub:u}}},caad:function(t,e,r){"use strict";var c=r("23e7"),n=r("4d64").includes,a=r("44d2");c({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d784:function(t,e,r){"use strict";r("ac1f");var c=r("6eeb"),n=r("9263"),a=r("d039"),u=r("b622"),o=r("9112"),i=u("species"),s=RegExp.prototype;t.exports=function(t,e,r,l){var d=u(t),f=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=f&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[i]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return e=!0,null},r[d](""),!e}));if(!f||!p||r){var b=/./[d],v=e(d,""[t],(function(t,e,r,c,a){var u=e.exec;return u===n||u===s.exec?f&&!a?{done:!0,value:b.call(e,r,c)}:{done:!0,value:t.call(r,e,c)}:{done:!1}}));c(String.prototype,t,v[0]),c(s,d,v[1])}l&&o(s[d],"sham",!0)}},ddc6:function(t,e,r){"use strict";var c=r("7a23"),n={class:"loader"};function a(t,e,r,a,u,o){return Object(c["w"])(),Object(c["g"])("div",n)}var u={},o=r("6b0d"),i=r.n(o);const s=i()(u,[["render",a]]);e["a"]=s},e4df:function(t,e,r){"use strict";r("644c")},f0bd:function(t,e,r){},fce3:function(t,e,r){var c=r("d039"),n=r("da84"),a=n.RegExp;t.exports=c((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-7e1253b0.854466cd.js.map