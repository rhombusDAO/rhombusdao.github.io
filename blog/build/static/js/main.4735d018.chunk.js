(this["webpackJsonpsimple-react-blog"]=this["webpackJsonpsimple-react-blog"]||[]).push([[0],{12:function(e,n,t){e.exports=t(58)},57:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),l=t.n(o),i=(t(10),t(11),t(1),t(9)),c=t.n(i),s=function(){return Object(a.useEffect)((function(){var e=new c.a({detectAudio:!1,canvas:document.querySelector("#myCanvas"),makeGlobel:!1}).synth;e.setResolution(1080,1080),e.setFunction({name:"rhombify",type:"coord",inputs:[{type:"float",name:"amt",default:"0.5"}],glsl:"vec2 xy = _st - vec2(0.5);\n              xy.x += amt*xy.y;\n              xy.y += amt*xy.y;\n              xy += 0.5;\n              return xy;"});return e.osc((function(){return Math.sin(e.time/10)*Math.sin(e.time/15)*3+5}),0,1).modulate(e.noise(6,2)).modulatePixelate(e.gradient(),.3,2).blend(e.src(e.o0).luma(.4).scale(.8),.2).brightness(.2).rhombify().out(),console.log("mounted"),function(){return console.log("unmounting...")}}),[]),r.a.createElement("canvas",{id:"myCanvas"})},u=function(e){var n={padding:e.padding,margin:e.margin};return r.a.createElement("div",{style:n})},m=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"poster-container"},r.a.createElement(u,{margin:"100px 0px 20px 0px",padding:""}),r.a.createElement("h3",null,"The Rhombus Presents"),r.a.createElement(u,{margin:"150px",padding:""}),r.a.createElement("h1",null,"Allie Westberg"),r.a.createElement("h1",null,"Tiwonku (DJ Set)"),r.a.createElement(u,{margin:"150px",padding:""}),r.a.createElement("h3",null,"Saturday, February 5th 2022, 6pm UTC"),r.a.createElement("h3",null,"play.decentraland.org, coordinates (34,22)")),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(57);l.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.4735d018.chunk.js.map