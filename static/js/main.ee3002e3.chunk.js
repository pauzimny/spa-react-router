(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(71),l=a.n(r),o=a(20),m=a(21),u=a(25),i=a(22),s=a(26),p=a(189),E=a(27),d=a.n(E),f=a(72),h=a.n(f),g=a(73),b=a.n(g),v=(a(86),a(190)),k=a(80),y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,null,c.a.createElement(k.a,{path:"/",exact:!0,render:function(){return c.a.createElement("img",{src:d.a,alt:"kosmetyki"})}}),c.a.createElement(k.a,{path:"/products",render:function(){return c.a.createElement("img",{src:h.a,alt:"kosmetyki"})}}),c.a.createElement(k.a,{path:"/contact",render:function(){return c.a.createElement("img",{src:b.a,alt:"kosmetyki"})}}),c.a.createElement(k.a,{path:"/admin",render:function(){return c.a.createElement("img",{src:d.a,alt:"kosmetyki"})}}),c.a.createElement(k.a,{render:function(){return c.a.createElement("img",{src:d.a,alt:"kosmetyki"})}})))},j=(a(90),function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Stopka"),c.a.createElement(k.a,{path:"/",exact:!0,render:function(e){return c.a.createElement("p",null,"Jeste\u015b na ",c.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),c.a.createElement(k.a,{path:"/:page",exact:!0,render:function(e){return c.a.createElement("p",null,"Jeste\u015b na stronie ",c.a.createElement("span",null,e.match.params.page))}}),c.a.createElement(k.a,{path:"/:page/:idProduct",exact:!0,render:function(e){return c.a.createElement("p",null,"Jeste\u015b na stronie ",c.a.createElement("span",null,e.match.params.idProduct))}}))}),x=a(187),w=(a(91),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),N=function(){var e=w.map(function(e){return c.a.createElement("li",{key:e.name},c.a.createElement(x.a,{className:"main__listItem",to:e.path,exact:!!e.exact&&e.exact},e.name))});return c.a.createElement("nav",{className:"main"},c.a.createElement("ul",{className:"main__list"},e))},O=a(78),_=a(79),S=(a(92),function(e){return c.a.createElement("article",null,c.a.createElement("h3",null,e.fields.title),c.a.createElement("p",null,e.fields.postBody),c.a.createElement("span",null,e.fields.author))}),F=a(185),z=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){F.createClient({space:"a6x3r1vs2g9c",accessToken:"Sia1XFnJFLDicRbxg5iq_cubtezrbIHCpwNAdd-U01s"}).getEntries({content_type:"postBlog"}).then(function(e){r([].concat(Object(O.a)(a),[e]))})});var l=a.map(function(e,t){return c.a.createElement(S,Object.assign({key:e.index},e))});return c.a.createElement("div",{className:"home"},l)},C=a(40),J=(a(181),["kremy","myd\u0142a","balsamy do cia\u0142a"]),P=function(){var e=J.map(function(e){return c.a.createElement("li",{key:e},c.a.createElement(C.a,{to:"/product/".concat(e)},e))});return c.a.createElement("div",{className:"products"},c.a.createElement("h2",null,"lista produkt\xf3w"),c.a.createElement("div",null,c.a.createElement("ul",null,e)))},B=(a(182),a(191)),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:""})},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h3",null,"Napisz do nas"),c.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107"}),c.a.createElement("button",null,"Wy\u015blij")),c.a.createElement(B.a,{when:this.state.value,message:"Formularz nie zosta\u0142 wype\u0142niony, czy na pewno chcesz opu\u015bci\u0107 stron\u0119?"}))}}]),t}(c.a.Component),A=a(188),D=function(){return c.a.createElement(k.a,{render:function(){return c.a.createElement(A.a,{to:"/login"})}})},W=(a(183),function(){return c.a.createElement("div",{className:"form"},c.a.createElement("label",{className:"login",htmlFor:""},"Podaj login",c.a.createElement("input",{type:"text"})),c.a.createElement("label",{className:"login password",htmlFor:""},"Podaj has\u0142o",c.a.createElement("input",{type:"password"})),c.a.createElement("button",{className:"login--button"},"Zaloguj"))}),q=function(e){return c.a.createElement("article",{className:"product"},c.a.createElement("h1",{className:"product__item"},e.id))},H=function(e){var t=e.match;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-site"},"Strona produktu"),c.a.createElement(q,{id:t.params.id}),c.a.createElement(C.a,{className:"product-link",to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},L=function(){return c.a.createElement("div",null,"B\u0142\u0105d-ta strona nie istnieje")},R=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,null,c.a.createElement(k.a,{path:"/",exact:!0,component:z}),c.a.createElement(k.a,{path:"/products",component:P}),c.a.createElement(k.a,{path:"/product/:id",component:H}),c.a.createElement(k.a,{path:"/contact",component:I}),c.a.createElement(k.a,{path:"/admin",component:D}),c.a.createElement(k.a,{path:"/login",component:W}),c.a.createElement(k.a,{exact:!0,component:L})))},T=(a(184),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"app"},c.a.createElement("header",null,c.a.createElement(y,null)),c.a.createElement("main",null,c.a.createElement("aside",null,c.a.createElement(N,null)),c.a.createElement("section",{className:"page"},c.a.createElement(R,null))),c.a.createElement("footer",null,c.a.createElement(j,null))))}}]),t}(n.Component));l.a.render(c.a.createElement(T,null),document.getElementById("root"))},27:function(e,t,a){e.exports=a.p+"static/media/cosmetic-2357981_1920.8c44c459.jpg"},41:function(e,t){},72:function(e,t,a){e.exports=a.p+"static/media/essential-oil-3816410_1920.4271a249.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/herbs-3119132_1920.d982fd0a.jpg"},81:function(e,t,a){e.exports=a(186)},86:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.ee3002e3.chunk.js.map