(this.webpackJsonppicross=this.webpackJsonppicross||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(4),o=t.n(r),i=(t(10),t(1)),u=(t(11),t(2)),l=(t(12),t(13),t(14),function(e){return e.numbers.map((function(n,t){return c.a.createElement("div",{key:t,className:e.alignment},n)}))}),s=function(e){return c.a.createElement("div",{className:"row_indicator_".concat(e.orientation)},e.indicators.map((function(n,t){return c.a.createElement("div",{key:t,className:"row_indicator_group_".concat(e.orientation)},c.a.createElement(l,{alignment:"horizontal"===e.orientation?"vertical":"horizontal",numbers:n}))})))},m=(t(15),function(e){return e.checked?c.a.createElement("div",{className:"box_checked",onClick:e.clicked,onContextMenu:function(){return console.log("right click!")}}):c.a.createElement("div",{className:"box_unchecked",onClick:e.clicked,onContextMenu:function(){return console.log("right click!")}})}),f=function(e){var n=e.grid,t=e.handleBoxChange;return n.map((function(e,n){return c.a.createElement("div",{key:n,className:"row"},e.map((function(e,a){return c.a.createElement(m,{key:""+n+a,checked:e,clicked:function(){return t([n,a])}})})))}))},d=function(e){var n=Object(a.useState)([[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1]]),t=Object(i.a)(n,2),r=t[0],o=t[1],l=Object(a.useState)({top:[],side:[]}),m=Object(i.a)(l,2),d=m[0],h=m[1],v=e.puzzle;return Object(a.useEffect)((function(){for(var e=v.length,n=Array(e).fill(!1),t=[],a=0;a<e;a++){var c=Object(u.a)(n);t.push(c)}o(t),function(){for(var e=[],n=[],t=function(n){var t=[],a=0;v.forEach((function(e){e[n]?a++:a&&(t.push(a),a=0)})),a&&t.push(a),e.push(t),t=[]},a=0;a<v.length;a++)t(a);for(var c=0,r=[],o=0;o<v.length;o++)v[o].forEach((function(e){e?c++:c&&(r.push(c),c=0)})),c&&(r.push(c),c=0),n.push(r),r=[];h({top:e,side:n})}()}),[v]),c.a.createElement("div",{className:"game-board"},c.a.createElement("div",{className:"topInd"},c.a.createElement(s,{indicators:d.top,orientation:"horizontal"})),c.a.createElement("div",{className:"sideInd"},c.a.createElement(s,{className:"sideInd",indicators:d.side,orientation:"vertical"})),c.a.createElement("div",{className:"board"},c.a.createElement(f,{grid:r,handleBoxChange:function(e){var n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(u.a)(r),l=c[t][a];c[t].splice(a,1,!l),o(c),function(e,n){for(var t=0;t<e.length;t++)for(var a=0;a<e[t].length;a++)if(e[t][a]!==n[t][a])return!1;return!0}(c,v)&&alert("You Win!")}})))};var h=function(){var e=Object(a.useState)([[!0,!1,!1,!1,!1],[!0,!0,!0,!0,!1],[!1,!1,!0,!0,!0],[!1,!1,!0,!0,!0],[!0,!0,!0,!0,!1]]),n=Object(i.a)(e,2),t=n[0],r=n[1],o={1:[[!0,!1,!1,!1,!1],[!0,!0,!0,!0,!1],[!1,!1,!0,!0,!0],[!1,!1,!0,!0,!0],[!0,!0,!0,!0,!1]],2:[[!1,!1,!0,!0,!0],[!1,!1,!1,!0,!0],[!1,!1,!0,!0,!0],[!0,!0,!1,!0,!1],[!0,!0,!1,!1,!1]]};function u(e){var n=e.target.value;r(o[n])}return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"P I C R O S S"),c.a.createElement("button",{value:"1",onClick:function(e){return u(e)}},"1"),c.a.createElement("button",{value:"2",onClick:function(e){return u(e)}},"2"),c.a.createElement(d,{puzzle:t}))};o.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.0757f8e3.chunk.js.map