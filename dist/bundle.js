!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=new class{showSearch(){this.form=document.createElement("form"),this.form.setAttribute("class","searchbox"),this.form.innerHTML='\n      <input class="searchbox__input" type="text" placeholder="Type here to search..." required>\n      <button class="searchbox__search" type="button">SEARCH</button>\n    ',document.querySelector("body").appendChild(this.form)}showControls(){this.slider=document.createElement("div"),this.slider.setAttribute("class","slider"),this.slider.innerHTML='\n      <div class="slider__line">\n      </div>\n      ',document.querySelector("body").appendChild(this.slider);const e=document.createElement("div");e.setAttribute("class","controls"),e.innerHTML='\n      <button class="controls__btn controls__btn--prev">Prev</button>\n        <div class="controls__list">\n          <button class="controls__num"> </button>\n          <button class="controls__num">1</button>\n          <button class="controls__num">2</button>\n        </div>\n      <button class="controls__btn controls__btn--next">Next</button>\n      ',document.querySelector("body").appendChild(e)}showSlides(e){e.forEach(e=>{this.slide=document.createElement("div"),this.slide.setAttribute("class","slider__slide"),this.slide.innerHTML=`\n        <div class="slider__header" style="background: url(${e.snippet.thumbnails.medium.url})">\n          <div class="slider__wrapper">\n            <a class="slider__link" href="https://www.youtube.com/watch?v=${e.id}" target="_blank">${e.snippet.title}</a>\n          </div>\n        </div>\n        <div class="slider__text">\n          <img src="./images/user.svg" alt="user" height="15px">\n          <p>${e.snippet.channelTitle.substring(0,20)}</p>\n        </div>\n        <div class="slider__text">\n          <img src="./images/calendar.svg" alt="date" height="15px">\n          <p>${e.snippet.publishedAt.substring(0,10)}</p>\n        </div>\n        <div class="slider__text">\n          <img src="./images/eye.svg" alt="watchers" height="15px">\n          <p>${e.statistics.viewCount}</p>\n        </div>\n        <p class="slider__description">${e.snippet.description.length>150?`${e.snippet.description.substring(0,150)}...`:e.snippet.description}</p>\n      `,document.querySelector(".slider__line").appendChild(this.slide)})}clearSlides(){this.slides=document.querySelectorAll(".slider__slide"),this.slider=document.querySelector(".slider"),this.controls=document.querySelector(".controls"),this.slides.length&&(this.slider.parentNode.removeChild(this.slider),this.controls.parentNode.removeChild(this.controls))}};let i="";s.showSearch();const o=new class{async getVideo(e,t){let n;this.clientKey="AIzaSyBW5DP-_idvY_0A9HFzdxKYZJvZApbVJ5I",n=t?await fetch(`https://www.googleapis.com/youtube/v3/search?key=${this.clientKey}&type=video&part=snippet&maxResults=15&pageToken=${t}&q=${e}`):await fetch(`https://www.googleapis.com/youtube/v3/search?key=${this.clientKey}&type=video&part=snippet&maxResults=15&q=${e}`);const s=await n.json(),i=s.nextPageToken,o=[];s.items.forEach(e=>{o.push(e.id.videoId)}),o.join(",");const r=await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${o}&key=${this.clientKey}&part=snippet,statistics`);return[await r.json(),i]}},r=document.querySelector(".searchbox__input");function l(){r.value&&(s.clearSlides(),o.getVideo(r.value).then(e=>{let t;[t,i]=e,s.showControls(),s.showSlides(t.items),function(e,t,n,s){let i=0,o=0;const r=document.querySelector(".slider__line"),l=document.querySelectorAll(".controls__num");function c(){i=document.body.getBoundingClientRect().width<=740?360:document.body.getBoundingClientRect().width<=1080?720:document.body.getBoundingClientRect().width<=1450?1080:1440,o=Math.round(o/i)*i,r.style.transition="0s",r.style.left=`${o}px`,l[0].innerHTML=`${-o/i}`,l[1].innerHTML=`${-o/i+1}`,l[2].innerHTML=`${-o/i+2}`}c(),window.addEventListener("resize",c);let d=0;function u(e){e.clientX&&e.preventDefault(),r.style.transition="0s",r.style.left=`${o+((e.clientX||e.changedTouches[0].pageX)-d)}px`}function a(c){document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",a),r.style.transition="0.5s",(c.clientX||c.changedTouches[0].pageX)-d>0?(o+=i,l[0].innerHTML=0===o?" ":`${-o/i}`,l[1].innerHTML=`${-o/i+1}`,l[2].innerHTML=`${-o/i+2}`):(c.clientX||c.changedTouches[0].pageX)-d<0&&(o-=i,l[0].innerHTML=`${-o/i}`,l[1].innerHTML=`${-o/i+1}`,l[2].innerHTML=`${-o/i+2}`,document.querySelectorAll(".slider__slide").length<4*l[1].innerHTML+4&&e.getVideo(t,s).then(e=>{n.showSlides(e[0].items),s=e[1]})),o>0&&(o=0,l[0].innerHTML=0===o?" ":`${-o/i}`,l[1].innerHTML=`${-o/i+1}`,l[2].innerHTML=`${-o/i+2}`),r.style.left=`${o}px`}function p(e){e.clientX&&e.preventDefault(),d=e.clientX||e.changedTouches[0].pageX,document.addEventListener("mousemove",u),document.addEventListener("mouseup",a),document.addEventListener("touchmove",u),document.addEventListener("touchend",a)}document.querySelector(".controls__btn--next").addEventListener("click",function(){r.style.transition="0.5s",r.style.left=`${o-=i}px`,l[0].innerHTML=`${-o/i}`,l[1].innerHTML=`${-o/i+1}`,l[2].innerHTML=`${-o/i+2}`,document.querySelectorAll(".slider__slide").length<4*l[1].innerHTML+4&&e.getVideo(t,s).then(e=>{n.showSlides(e[0].items),s=e[1]})}),document.querySelector(".controls__btn--prev").addEventListener("click",function(){o<0&&(r.style.transition="0.5s",r.style.left=`${o+=i}px`),l[0].innerHTML=o>=0?" ":`${-o/i}`,l[1].innerHTML=`${-o/i+1}`,l[2].innerHTML=`${-o/i+2}`}),document.querySelector(".slider").addEventListener("mousedown",p),document.querySelector(".slider").addEventListener("touchstart",p)}(o,r.value,s,i)}))}r.addEventListener("focus",()=>r.select()),r.addEventListener("keyup",e=>{13===e.keyCode&&(l(),r.blur())}),document.querySelector(".searchbox__search").addEventListener("click",l),document.querySelector(".searchbox").onsubmit=function(e){e.preventDefault()}}]);
//# sourceMappingURL=bundle.js.map