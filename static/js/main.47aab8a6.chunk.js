(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(19)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),i=(t(15),t(2)),s=t(3),l=t(5),u=t(4),h=t(6),m=t(1),p=(t(16),function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this))).callus=t.callus.bind(Object(m.a)(t)),t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"callus",value:function(){this.props.callme(this.props.index.i,this.props.index.j)}},{key:"render",value:function(){var e={};return e=this.props.ons?{backgroundColor:"#f96db6"}:{backgroundColor:"#7d848e"},r.a.createElement("div",{className:"box",style:e,onClick:this.callus})}}]),n}(a.Component));p.defaultProps={ons:!1};var f=p,b=(t(17),function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={current:t.allotCurrent(),gameWon:!1},t.changeOn=t.changeOn.bind(Object(m.a)(t)),t.changeNeighbours=t.changeNeighbours.bind(Object(m.a)(t)),t.restartGame=t.restartGame.bind(Object(m.a)(t)),t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"restartGame",value:function(){this.setState({current:this.allotCurrent(),gameWon:!1})}},{key:"allotCurrent",value:function(){for(var e=[],n=0;n<this.props.nrows;n++){for(var t=[],a=0;a<this.props.ncols;a++)Math.random()<this.props.chanceLit?t.push(!0):t.push(!1);e.push(t)}return e}},{key:"changeOn",value:function(e,n){var t=this;this.setState(function(a){var r=a.current;e>=0&&n>=0&&e<t.props.nrows&&n<t.props.ncols&&(r[e][n]=!a.current[e][n]);var o=r.every(function(e){return e.every(function(e){return!e})});return{current:r,gameWon:o}})}},{key:"changeNeighbours",value:function(e,n){this.changeOn(e,n);for(var t=e-1;t<=e+1;t++)this.changeOn(t,n);for(var a=n-1;a<=n+1;a++)this.changeOn(e,a)}},{key:"render",value:function(){var e=this,n="abcdefghijklmnopqrstuvwxyz".split("");return this.state.gameWon?r.a.createElement("div",null,r.a.createElement("h1",{className:"font-effect-neon"},r.a.createElement("span",{style:{color:"purple",animation:"blink 4s infinite"}},"You")," ",r.a.createElement("span",{style:{color:"red",animation:"blink 7s infinite"}},"Won!")),r.a.createElement("button",{onClick:this.restartGame},"Play again?")):r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,this.state.current.map(function(t,a){return r.a.createElement("td",{className:"master",key:n[a]},t.map(function(n,t){return r.a.createElement(f,{ons:n,callme:e.changeNeighbours,index:{i:a,j:t},key:"".concat(a,"-").concat(t)})}))}))))}}]),n}(a.Component));b.defaultProps={nrows:4,ncols:4,chanceLit:.2};var d=b,v=(t(18),function(e){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"font-effect-neon"},r.a.createElement("span",{style:{color:"orange",animation:"blink 4s infinite"}},"Lights")," ",r.a.createElement("span",{style:{color:"blue",animation:"blink 6s infinite"}},"Out")),r.a.createElement(d,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.47aab8a6.chunk.js.map