(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30e8c609"],{"1da6":function(t,e,n){"use strict";var r=n("7a23"),c={key:0,class:"breadcrumbs"},u=Object(r["i"])("Zurück zu Produkten"),a={class:"card-title"};function i(t,e,n,i,o,s){var l=Object(r["E"])("router-link");return Object(r["w"])(),Object(r["g"])(r["a"],null,[n.back?(Object(r["w"])(),Object(r["g"])("div",c,[Object(r["j"])(l,{to:"/",class:"text-white"},{default:Object(r["Q"])((function(){return[u]})),_:1})])):Object(r["f"])("",!0),Object(r["h"])("div",{class:Object(r["q"])(["card",{center:n.center}])},[Object(r["h"])("h1",a,[e[0]||(Object(r["G"])(-1),e[0]=Object(r["h"])("span",null,[Object(r["i"])(Object(r["I"])(n.title),1)]),Object(r["G"])(1),e[0]),Object(r["D"])(t.$slots,"header")]),Object(r["D"])(t.$slots,"default")],2)],64)}var o={props:{title:{type:String,required:!0},back:{type:Boolean,default:!1},center:{type:Boolean,default:!1}},setup:function(t){t.title&&(document.title="".concat(t.title," | Vue Лавка"))}},s=n("6b0d"),l=n.n(s);const b=l()(o,[["render",i]]);e["a"]=b},"3f9b":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=new Intl.NumberFormat("de-DE",{currency:"EUR",style:"currency"});function c(t){return r.format(t)}},"4c53":function(t,e,n){"use strict";var r=n("23e7"),c=n("857a"),u=n("af03");r({target:"String",proto:!0,forced:u("sub")},{sub:function(){return c(this,"sub","","")}})},"857a":function(t,e,n){var r=n("1d80"),c=n("577e"),u=/"/g;t.exports=function(t,e,n,a){var i=c(r(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+c(a).replace(u,"&quot;")+'"'),o+">"+i+"</"+e+">"}},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b789:function(t,e,n){"use strict";n.r(e);n("4c53");var r=n("7a23"),c={key:0,class:"text-center"},u={class:"table"},a=Object(r["h"])("thead",null,[Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Produktname"),Object(r["h"])("th",null,"Anzahl"),Object(r["h"])("th",null,"Preis (stück)")])],-1),i=["onClick"],o=["onClick","disabled"],s=Object(r["h"])("hr",null,null,-1),l={class:"text-right"},b={key:0,class:"text-right"};function d(t,e,n,d,j,O){var p=Object(r["E"])("UserAuthForm"),f=Object(r["E"])("app-page");return Object(r["w"])(),Object(r["e"])(f,{title:"Warenkorb"},{default:Object(r["Q"])((function(){return[t.isEmpty?(Object(r["w"])(),Object(r["g"])("h3",c,"Warenkorb ist Leer")):(Object(r["w"])(),Object(r["g"])(r["a"],{key:1},[Object(r["h"])("table",u,[a,Object(r["h"])("tbody",null,[(Object(r["w"])(!0),Object(r["g"])(r["a"],null,Object(r["C"])(t.cart,(function(e,n){return Object(r["w"])(),Object(r["g"])("tr",{key:n},[Object(r["h"])("td",null,Object(r["I"])(t.title(n)),1),Object(r["h"])("td",null,[Object(r["h"])("button",{class:"btn danger",onClick:function(t){return d.sub(n)}},"-",8,i),Object(r["i"])(" "+Object(r["I"])(e)+" stück. ",1),Object(r["h"])("button",{class:"btn primary",onClick:Object(r["S"])((function(t){return d.add(n)}),["stop"]),disabled:e>=t.count(n)},"+",8,o)]),Object(r["h"])("td",null,Object(r["I"])(t.price(n)),1)])})),128))])]),s,Object(r["h"])("p",l,[Object(r["h"])("strong",null,"Gesamt: "+Object(r["I"])(d.currency(t.total)),1)]),d.isAuth&&!t.isEmpty?(Object(r["w"])(),Object(r["g"])("p",b,[Object(r["h"])("button",{class:"btn",onClick:e[0]||(e[0]=function(){return d.onPay&&d.onPay.apply(d,arguments)})},"Bezahlen")])):(Object(r["w"])(),Object(r["e"])(p,{key:1}))],64))]})),_:1})}var j=n("5530"),O=n("1da1"),p=(n("96cf"),n("5502")),f=Object(r["h"])("h4",null,[Object(r["i"])("Um ihren Einkauf abzuschließen"),Object(r["h"])("br"),Object(r["i"])("Bitte melden Sie sich an oder erstellen Sie zunächst ein neues Konto.")],-1),h=Object(r["h"])("h4",{style:{color:"red"}},"Diese Funktion ist deaktiviert",-1),v={class:"form-control"},m=Object(r["h"])("label",{for:"email"},"Email",-1),g={class:"form-control"},w=Object(r["h"])("label",{for:"password"},"Password",-1),y=Object(r["h"])("button",{class:"btn primary",type:"submit",disabled:!0},"Login",-1);function k(t,e,n,c,u,a){return Object(r["w"])(),Object(r["g"])("form",{onSubmit:e[3]||(e[3]=Object(r["S"])((function(){return c.login&&c.login.apply(c,arguments)}),["prevent"]))},[f,h,Object(r["h"])("div",v,[m,Object(r["R"])(Object(r["h"])("input",{disabled:!0,type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.email=t})},null,512),[[r["N"],c.email]])]),Object(r["h"])("div",g,[w,Object(r["R"])(Object(r["h"])("input",{disabled:!0,type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.password=t})},null,512),[[r["N"],c.password]])]),y,Object(r["h"])("button",{class:"btn",type:"button",onClick:e[2]||(e[2]=function(){return c.signUp&&c.signUp.apply(c,arguments)}),disabled:!0},"Registrieren")],32)}var x={setup:function(){var t=Object(p["b"])(),e=Object(r["B"])(""),n=Object(r["B"])(""),c=function(){var r=Object(O["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.dispatch("auth/login",{email:e.value,password:n.value});case 2:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),u=function(){var r=Object(O["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.dispatch("auth/signUp",{email:e.value,password:n.value});case 2:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{email:e,password:n,login:c,signUp:u}}},R=n("6b0d"),E=n.n(R);const U=E()(x,[["render",k]]);var I=U,P=n("1da6"),C=n("c444"),S=(n("7db0"),n("13d5"),n("b64b"),n("3f9b"));function A(){var t=Object(p["b"])(),e=Object(r["c"])((function(){return t.getters["product/products"]})),n=function(t){var n;return null===(n=e.value.find((function(e){return e.id===t})))||void 0===n?void 0:n.title},c=function(t){var n;return Object(S["a"])(null===(n=e.value.find((function(e){return e.id===t})))||void 0===n?void 0:n.price)},u=function(t){var n;return null===(n=e.value.find((function(e){return e.id===t})))||void 0===n?void 0:n.count},a=t.getters["cart/cart"],i=Object(r["c"])((function(){return Object.keys(a).reduce((function(t,n){var r;return t+(null===(r=e.value.find((function(t){return t.id===n})))||void 0===r?void 0:r.price)*a[n]}),0)})),o=Object(r["c"])((function(){return 0===Object.keys(a).length}));return{isEmpty:o,title:n,price:c,count:u,total:i,cart:a}}n("a4d3"),n("e01a"),n("d3b7");function B(t){var e=t.amount,n=t.description,r=t.accountId,c=t.data,u=void 0===c?{}:c,a=new cp.CloudPayments;return new Promise((function(t,c){a.pay("charge",{publicId:"test_api_00000000000000000000001",currency:"EUR",skin:"mini",description:n,amount:e,accountId:r,data:u},{onSuccess:function(e){t(e)},onFail:function(t,e){c(t)}})}))}var z=n("6c02"),F={setup:function(){var t=Object(r["B"])(!0),e=Object(p["b"])(),n=Object(z["e"])(),c=Object(C["a"])(),u=c.add,a=c.sub,i=A(),o=i.total;Object(r["u"])(Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.dispatch("product/load");case 2:t.value=!1;case 3:case"end":return n.stop()}}),n)}))));var s=Object(r["c"])((function(){return e.getters["auth/user"]})),l=Object(r["c"])((function(){return e.getters["auth/isAuthenticated"]})),b=function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B({description:"Покупка товаров в онлайн магазине",amount:o.value,accountId:s.value.email,data:{test:1}});case 3:return t.next=5,e.dispatch("order/create");case 5:n.push({name:"Thanks"}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("Reject pay: ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(j["a"])(Object(j["a"])({},A()),{},{add:u,sub:a,isAuth:l,loading:t,onPay:b,currency:S["a"]})},components:{AppPage:P["a"],UserAuthForm:I}};const D=E()(F,[["render",d]]);e["default"]=D},c444:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("7a23"),c=n("5502");function u(t){var e=Object(c["b"])(),n=Object(r["c"])((function(){var n;return null!==(n=e.getters["cart/cart"][t])&&void 0!==n?n:0})),u=function(t){return e.commit("cart/add",t)},a=function(t){return e.commit("cart/remove",t)};return{count:n,add:u,sub:a}}}}]);
//# sourceMappingURL=chunk-30e8c609.702263ae.js.map