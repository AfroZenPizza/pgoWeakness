(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={icon:"icons_icon__f2HC0",damageRelation:"icons_damageRelation__dgrj0",error:"icons_error__12V_V",bug:"icons_bug__jJAtw",dark:"icons_dark__3swOX",dragon:"icons_dragon__jsI8Q",electric:"icons_electric__N8Mb7",fire:"icons_fire__tKTIF",fairy:"icons_fairy__2GyW1",fighting:"icons_fighting__vSAa5",flying:"icons_flying__3xO1w",ghost:"icons_ghost__3xTSl",grass:"icons_grass__3vD5j",ground:"icons_ground__24rCr",ice:"icons_ice__12Ggr",normal:"icons_normal__3zUt8",poison:"icons_poison__2jlNU",psychic:"icons_psychic__23LmY",rock:"icons_rock__2FB9-",steel:"icons_steel__XF8sv",water:"icons_water__234U8"}},,,,,,,,,,,,,,,,,function(e,t,a){var n={"./bug.svg":62,"./dark.svg":63,"./dragon.svg":64,"./electric.svg":65,"./fairy.svg":66,"./fighting.svg":67,"./fire.svg":68,"./flying.svg":69,"./ghost.svg":70,"./grass.svg":71,"./ground.svg":72,"./ice.svg":73,"./normal.svg":74,"./poison.svg":75,"./psychic.svg":76,"./rock.svg":77,"./steel.svg":78,"./water.svg":79};function c(e){var t=o(e);return a(t)}function o(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=26},,,,,,function(e,t,a){e.exports=a(83)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/bug.14540979.svg"},function(e,t,a){e.exports=a.p+"static/media/dark.b7d4f578.svg"},function(e,t,a){e.exports=a.p+"static/media/dragon.18a1dbc9.svg"},function(e,t,a){e.exports=a.p+"static/media/electric.68b142da.svg"},function(e,t,a){e.exports=a.p+"static/media/fairy.603e08d1.svg"},function(e,t,a){e.exports=a.p+"static/media/fighting.8ce4fa81.svg"},function(e,t,a){e.exports=a.p+"static/media/fire.33d14b30.svg"},function(e,t,a){e.exports=a.p+"static/media/flying.8c1e094f.svg"},function(e,t,a){e.exports=a.p+"static/media/ghost.ff397345.svg"},function(e,t,a){e.exports=a.p+"static/media/grass.d589dd00.svg"},function(e,t,a){e.exports=a.p+"static/media/ground.289c4927.svg"},function(e,t,a){e.exports=a.p+"static/media/ice.f82b7e5d.svg"},function(e,t,a){e.exports=a.p+"static/media/normal.8f2a7aaa.svg"},function(e,t,a){e.exports=a.p+"static/media/poison.183135e9.svg"},function(e,t,a){e.exports=a.p+"static/media/psychic.60982f05.svg"},function(e,t,a){e.exports=a.p+"static/media/rock.499a0fa1.svg"},function(e,t,a){e.exports=a.p+"static/media/steel.95342da3.svg"},function(e,t,a){e.exports=a.p+"static/media/water.e29fb8e3.svg"},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(28),r=a.n(o),i=a(7),s=a(6),l=a(86),u=a(14),m=a.n(u),f=(a(16),a(9)),g=a.n(f);function p(e){var t=e.title,a=e.icons;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:g.a.damageRelation},t),c.a.createElement("div",{style:{height:"32px"}},a))}function d(e){var t=e.PokeType,o=Object(n.useState)([]),r=Object(s.a)(o,2),l=r[0],u=r[1],f=Object(n.useState)([]),d=Object(s.a)(f,2),v=d[0],_=d[1],b=Object(n.useState)([]),E=Object(s.a)(b,2),O=E[0],j=E[1],h=Object(n.useState)([]),k=Object(s.a)(h,2),x=k[0],y=k[1],w=Object(n.useState)([]),S=Object(s.a)(w,2),C=(S[0],S[1]),T=Object(n.useState)([]),F=Object(s.a)(T,2),N=(F[0],F[1]);function D(e){return e.map(function(e){return e.name})}function L(e){return e.map(function(e){return c.a.createElement("div",{className:"".concat(g.a[e]," ").concat(g.a.icon)},c.a.createElement("img",{src:a(26)("./"+e+".svg"),title:e,alt:""}))})}return Object(n.useEffect)(function(){""!==t&&t.forEach(function(e){m.a.Type.fetch(e).then(function(e){var t=e.damage_relations,a=Object(i.a)(new Set([].concat(Object(i.a)(D(t.double_damage_from)),Object(i.a)(v)))),n=Object(i.a)(new Set([].concat(Object(i.a)(D(t.double_damage_to)),Object(i.a)(l)))),c=Object(i.a)(new Set([].concat(Object(i.a)(D(t.half_damage_to)),Object(i.a)(O)))),o=Object(i.a)(new Set([].concat(Object(i.a)(D(t.half_damage_from)),Object(i.a)(x)))),r=D(t.no_damage_from),s=D(t.no_damage_to);_(a.filter(function(e){return!o.includes(e)})),u(n.filter(function(e){return!c.includes(e)})),y(o.filter(function(e){return!a.includes(e)})),j(c.filter(function(e){return!n.includes(e)})),N(r),C(s)})})},[t]),c.a.createElement("div",null,c.a.createElement(p,{title:"2x Damage From",icons:L(v)}),c.a.createElement(p,{title:"1/2 Damage From",icons:L(x)}),c.a.createElement(p,{title:"2X Damage To",icons:L(l)}),c.a.createElement(p,{title:"1/2 Damage to",icons:L(O)}))}var v=a(87),_=a(29);function b(e){var t=e.typeList;return c.a.createElement("div",{style:{position:"absolute",top:"160px",left:"10px"}},t.map(function(e){return c.a.createElement("div",{className:"".concat(g.a[e]," ").concat(g.a.icon)},c.a.createElement("img",{src:a(26)("./"+e+".svg"),title:e,alt:""}))}))}function E(e){var t=e.pokemon,a=e.removePokemon,o=Object(n.useRef)(),r=Object(n.useState)("..."),i=Object(s.a)(r,2),l=i[0],u=i[1],f=Object(n.useState)([]),p=Object(s.a)(f,2),E=p[0],O=p[1],j=Object(n.useState)(""),h=Object(s.a)(j,2),k=h[0],x=h[1];return Object(n.useEffect)(function(){m.a.Pokemon.resolve(t.name).then(function(e){var t=e.types.map(function(e){return e.type.name});x("https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/".concat(e.id,".svg")),u(e.name),O(t)},function(e){console.log(e),x("https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/201-question.svg"),u("missing ".concat(t.name))})},[]),c.a.createElement(v.a,{className:g.a[E[0]]},c.a.createElement(_.a,{style:{position:"absolute",top:"6px",right:"6px"},onClick:function(e){a(t.id)}}),c.a.createElement(v.a.Img,{style:{backgroundColor:"rgba(255, 255, 255, 0.66)",height:"200px"},variant:"top",src:k}),c.a.createElement(b,{typeList:E}),c.a.createElement(v.a.Body,null,c.a.createElement(v.a.Title,{ref:o},l[0].toUpperCase()+l.slice(1)),c.a.createElement(d,{PokeType:E})))}var O=a(31),j=a(17),h=a(11),k=a(18),x=a(30),y=a(85);function w(){return c.a.createElement(h.a,{md:4},c.a.createElement(v.a,null,c.a.createElement(v.a.Title,null,"Gym Info"),c.a.createElement(v.a.Text,null,"Weaknesses"),c.a.createElement(v.a.Text,null,"Strengths")))}var S=function(){var e=Object(n.useRef)(),t=Object(n.useState)([{name:"rhyperior",id:Object(l.a)()}]),a=Object(s.a)(t,2),o=a[0],r=a[1];function u(e){var t=o.filter(function(t){return t.id!=e});r(t)}function m(t){var a=e.current.value.toLowerCase();if(""!==a)if(e.current.value=null,a.includes(",")){var n=a.split(","),c=[];for(var o in n){var s=n[o].trim();c.push({id:Object(l.a)(),name:s})}r(function(e){return[].concat(Object(i.a)(e),c)})}else r(function(e){return[].concat(Object(i.a)(e),[{id:Object(l.a)(),name:a}])})}return Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("pgodex.local"));e&&r(e)},[]),Object(n.useEffect)(function(){var e=JSON.stringify(o);localStorage.setItem("pgodex.local",e)},[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{fluid:!0},c.a.createElement(k.a,null,c.a.createElement(h.a,{md:4},c.a.createElement(x.a,{direction:"horizontal",gap:3},c.a.createElement(y.a.Control,{ref:e,onKeyDown:function(t){13===t.keyCode&&t.ctrlKey?function(){var t=e.current.value;""!==t?(r(function(e){return e.filter(function(e){return e.name.toLowerCase()!=t.toLowerCase()})}),e.current.value=null):r([])}():13===t.keyCode&&m()},className:"me-auto",placeholder:"Pikachu..."}),c.a.createElement(O.a,{onClick:m},"Add"))),c.a.createElement(w,null),c.a.createElement(h.a,{md:4},c.a.createElement(v.a,null,c.a.createElement(v.a.Title,null,"New Features"),c.a.createElement(v.a.Text,null,c.a.createElement("strong",null,c.a.createElement("kbd",null,"Ctrl"),"+",c.a.createElement("kbd",null,"Enter"))," will remove all pokemon with a given name",c.a.createElement("br",null),"Comma seperating pokemon ",c.a.createElement("em",null,"Pikachu, Mew")," will add each pokemon in the list."))))),c.a.createElement(j.a,{fluid:!0},c.a.createElement(k.a,null,o.map(function(e){return c.a.createElement(h.a,{xxs:12,md:6,lg:3,xl:2},c.a.createElement(E,{pokemon:e,key:e.id,removePokemon:u}))}))))},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(S,null)),C()}],[[32,1,2]]]);
//# sourceMappingURL=main.3dff352a.chunk.js.map