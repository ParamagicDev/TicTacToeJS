!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r({name:e,marker:n}={}){return{name:e,marker:n}}function o({index:e,value:n}={}){return{render:()=>{const t=document.createElement("button");return t.classList.add("square"),t.id=`square-${e}`,(e=>{e.innerText=null!=n?n.toString():""})(t),t}}}t.r(n);var a=function(){let e;const n=()=>e=Array(9).fill(null);e=n();const t=()=>e,r=()=>{const e=document.createElement("div");return e.classList.add("board-row"),e};return{getBoard:t,getValue:({index:n})=>e[n],setValue:({index:n,value:t})=>{null===e[n]&&(e[n]=t)},render:()=>{const e=document.createElement("div");e.id="board";let n=0;const a=[];t().map((e,t)=>{0===t%3&&(a.push(r()),n+=1);const l=o({index:t,value:e}).render();a[n-1].appendChild(l)});return a.forEach(n=>e.appendChild(n)),e},reset:n}}();var l=function(){let e,n,t=[],o=!0;const l=e=>{e.preventDefault();const n=document.getElementById("add-players-form"),o=new FormData(n),a=[];for(const e of o){e[0];const n=e[1];if(void 0===n||""===n)return null;const t=r({name:n});a.push(t)}if(a[0].marker="X",a[1].marker="O",2!==a.length)return null;(({player1:e,player2:n})=>(t[0]=e,t[1]=n,t))({player1:a[0],player2:a[1]}),m()},u=()=>t[0],c=()=>t[1],d=()=>o,i=t=>{if(!s(t))return;const r=(()=>{let e;return!0===d()?(o=!1,e=u()):(o=!0,e=c()),e})();a.setValue({index:t,value:r.marker}),(n=>!!(e=>{const n=[[0,1,2],[3,4,5],[6,7,8]].concat([[0,3,6],[1,4,7],[2,5,8]]).concat([[0,4,8],[2,4,6]]);let t=!1;return n.forEach(n=>{const[r,o,a]=n;if(e[r]&&e[r]===e[o]&&e[r]===e[a])return t=!0}),t})(a.getBoard())&&(e=n,!0))(r),n=a.getBoard().every(e=>null!==e),m()},s=t=>null===a.getValue({index:t})&&(!e&&!n),m=()=>{const r=document.getElementById("root");r.innerHTML="";const o=document.createDocumentFragment();Array.isArray(t)&&t.length>0?(o.append((()=>{const e=document.createElement("ul");e.id="key";const n=document.createElement("li");n.innerText=`${u().name} is ${u().marker}`;const t=document.createElement("li");return t.innerText=`${c().name} is ${c().marker}`,e.appendChild(n),e.appendChild(t),e})()),o.append((()=>{const t=document.createElement("p");let r;return t.id="status",r=!0===d()?u():c(),t.innerText=e?`${e.name} has won!`:n?"It is a tie!":`It is ${r.name}'s turn.`,t})()),o.append(a.render()),o.append((()=>{const e=document.createElement("button");return e.id="reset",e.onclick=()=>p(),e.innerText="Reset game",e})())):o.append((()=>{const e=document.createElement("form");e.id="add-players-form",e.onsubmit=e=>l(e);for(let n=0;n<2;n++){const t=document.createElement("div");t.className="field";const r=`player-${n+1}`,o=document.createElement("label");o.htmlFor=r,o.innerText=`Player ${n+1}:`;const a=document.createElement("input");a.name=r,a.id=r,t.appendChild(o),t.appendChild(a),e.appendChild(t)}const n=document.createElement("input");return n.type="submit",n.value="Add players",e.appendChild(n),e})()),(e=>{e.querySelectorAll(".square").forEach((e,n)=>{e.onclick=()=>i(n),e.onkeydown=e=>{13===e.keycode&&i(n)}})})(o),r.appendChild(o)},p=()=>{e=null,n=null,o=!0,a.reset(),m()};return{render:m}}();const u=document.createElement("div");u.id="root",document.body.appendChild(u),l.render()}]);