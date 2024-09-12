import{A as L,S as v,N as h,a as w,i as f,b as S}from"./assets/vendor-BUtp7lFh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".header-place-for-btn");if(window.innerWidth>=768){const e=document.createElement("button");e.setAttribute("type","button"),e.classList.add("header-order-project-btn"),e.textContent="Order the project";const n=document.createElement("a");n.setAttribute("href","#work-together"),n.style.textDecoration="none",n.style.color="inherit",e.addEventListener("click",()=>{window.location.href=n.getAttribute("href")}),e.prepend(n),t.appendChild(e)}});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".header-menu-text");let e;const n=()=>{e=document.createElement("ul"),e.classList.add("header-nav-list");const c=["About me","Benefits","Projects","FAQ"],o=["about-me","benefits","projects","faq"];c.forEach((r,i)=>{const a=document.createElement("li");a.classList.add("header-nav-list-item");const l=document.createElement("a");l.href=`#${o[i]}`,l.textContent=r,l.classList.add("header-nav-list-item-link"),a.appendChild(l),e.appendChild(a)}),t.insertAdjacentElement("afterend",e)};t.addEventListener("click",function(){e||n(),e.classList.toggle("is-visible")})});(()=>{const t=document.querySelector("#header-overlay"),e=document.querySelector(".burger-menu-btn"),n=document.querySelector(".header-mobile-menu-close-btn"),c=()=>{const i=t.querySelectorAll('a[href*="#"]'),a=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open");const l=a?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body),i.length>0&&i.forEach(d=>{a?d.removeEventListener("click",c):d.addEventListener("click",c)})};e.addEventListener("click",c),n.addEventListener("click",c);const o=i=>{i.matches&&t.classList.remove("is-open")};window.matchMedia("(min-width: 767px)").addEventListener("change",o)})();new L(".accordion-container",{duration:600,showMultiple:!0,openOnInit:[0]});const k=document.querySelectorAll(".about-accordion-item");k.forEach(function(t){const e=t.querySelector(".about-accordion-title"),n=t.querySelector(".ac-trigger");n.addEventListener("mouseenter",function(){e.classList.add("hovered")}),n.addEventListener("mouseleave",function(){e.classList.remove("hovered")})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".about-skills-item"),e=document.querySelector(".swiper-wrapper");t.forEach((o,r)=>{const i=o.cloneNode(!0);e.appendChild(i)});const n=new v(".about-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const o=this.slides[this.previousIndex],r=this.slides[this.activeIndex];o.style.background="",r.style.backgroundColor="#ed3b44"}}});document.querySelector(".about-skills-btn").addEventListener("click",()=>{n.slideNext()})});const q=document.querySelector(".projects-section"),y=document.querySelector(".projects-btn-prev"),E=document.querySelector(".projects-btn-next"),b=new v(q.querySelector(".projects-swiper"),{modules:[h,w],breakpoints:{320:{slidesPerView:1,spaceBetween:16,loop:!1},768:{slidesPerView:1,spaceBetween:16,loop:!1},1440:{slidesPerView:1,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"}});document.addEventListener("keydown",t=>{if(t.key==="ArrowRight")b.slideNext();else if(t.key==="ArrowLeft")b.slidePrev();else if(t.key==="Tab"){const e=document.activeElement;e===y?(t.preventDefault(),E.focus()):e===E&&(t.preventDefault(),y.focus())}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-item").forEach(e=>{e.querySelector(".btn-arrow").addEventListener("click",()=>{const c=e.classList.contains("active"),o=e.querySelector(".faq-text");c?(e.classList.remove("active"),o.style.maxHeight=0):(e.classList.add("active"),o.style.maxHeight=o.scrollHeight+"px")})})});const x=document.querySelector(".covers"),g=document.querySelectorAll(".marquee__line"),M={root:null,rootMargin:"0px",threshold:.5},A=new IntersectionObserver(function(t,e){t.forEach(n=>{n.isIntersecting?g.forEach(c=>{c.classList.add("animation")}):g.forEach(c=>{c.classList.remove("animation")})})},M);A.observe(x);const m=document.querySelector(".reviews-section");if(m){let o=function(i){return i.map(a=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${a.avatar_url}" alt="${a.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${a.author}</h3>
          <p class="review-text">${a.review}</p>
        </div>
      </li>
  `).join("")};const t=m.querySelector(".reviews-cards"),e=m.querySelector(".reviews-btn-prev"),n=m.querySelector(".reviews-btn-next");async function c(i){const d="https://portfolio-js.b.goit.study/api"+"/reviews";try{return(await fetch(d)).json()}catch(u){return console.log(u),f.error({position:"topRight",message:"Not Found"}),[]}}async function r(){try{const i=await c();if(i.length>0){const a=o(i);t.insertAdjacentHTML("beforeend",a);const l=new v(m.querySelector(".swiper"),{modules:[h,w],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});document.addEventListener("keydown",d=>{if(d.key==="ArrowRight")l.slideNext();else if(d.key==="ArrowLeft")l.slidePrev();else if(d.key==="Tab"){const u=document.activeElement;u===e?(d.preventDefault(),n.focus()):u===n&&(d.preventDefault(),e.focus())}})}else console.log("No reviews to display")}catch(i){console.log(i),f.error({position:"topRight",message:"Failed to load reviews"})}}r()}const s={commentsElem:document.getElementById("comments"),emailElem:document.getElementById("email"),successMessage:document.getElementById("successMessage"),errorMessage:document.getElementById("errorMessage"),formElem:document.querySelector(".footer-form"),footerElem:document.getElementById("work-together")},B=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;s.commentsElem.addEventListener("blur",function(){const e=s.commentsElem.value;e.length>35&&(s.commentsElem.value=e.substring(0,35)+"...")});s.emailElem.addEventListener("input",function(){const t=s.emailElem.value.trim();B.test(t)?(s.emailElem.classList.add("success"),s.emailElem.classList.remove("error"),s.successMessage.style.display="block",s.errorMessage.style.display="none"):(s.emailElem.classList.add("error"),s.emailElem.classList.remove("success"),s.successMessage.style.display="none",s.errorMessage.style.display="block")});s.commentsElem.addEventListener("input",function(){localStorage.setItem("comments",s.commentsElem.value)});s.emailElem.addEventListener("input",function(){localStorage.setItem("email",s.emailElem.value)});document.addEventListener("DOMContentLoaded",function(){const t=localStorage.getItem("comments"),e=localStorage.getItem("email");t&&(s.commentsElem.value=t),e&&(s.emailElem.value=e)});function I({title:t,message:e}){p();const n=`<div class="backdrop is-open"><div class="modal is-visible"><button class="modal-close-btn" type="button">&times;</button>
    <h2 class="modal-title">${t}</h2><p class="modal-description">${e}</p></div></div>`;s.footerElem.insertAdjacentHTML("afterend",n),document.body.classList.add("no-scroll"),C(),s.formElem.reset()}function C(){const t=document.querySelector(".backdrop"),e=document.querySelector(".modal-close-btn");t&&(e.addEventListener("click",p),t.addEventListener("click",function(n){n.target===t&&p()}),document.addEventListener("keydown",function(n){n.key==="Escape"&&p()}))}function p(){const t=document.querySelector(".backdrop.is-open");t&&(t.classList.add("fade-out"),t.addEventListener("animationend",function(){t.remove(),document.body.classList.remove("no-scroll")},{once:!0}))}s.formElem.addEventListener("submit",async function(t){var c,o;t.preventDefault();const e=s.emailElem.value.trim(),n=s.commentsElem.value;try{const r=await S.post("https://portfolio-js.b.goit.study/api/requests/",{email:e,comment:n},{headers:{"Content-Type":"application/json"}});s.emailElem.classList.remove("success"),s.successMessage.style.display="none",I(r.data),localStorage.removeItem("email"),localStorage.removeItem("comments")}catch(r){console.log(r),f.error({position:"topRight",theme:"dark",messageColor:"white",backgroundColor:"#ef4040",message:"Error:"+(((o=(c=r.response)==null?void 0:c.data)==null?void 0:o.message)||"Something went wrong")})}});
//# sourceMappingURL=index.js.map
