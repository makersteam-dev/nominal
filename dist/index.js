"use strict";(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let n=document.querySelector(".navbar"),i=document.querySelectorAll(".nav-link"),o=document.querySelector(".nominal-logo"),s=document.querySelector(".nav-demo-button-text"),t=document.querySelector(".menu-button"),a=document.querySelectorAll(".nav--link-line");function d(){let{scrollY:e}=window;n&&s&&(e<=300?(n.style.backgroundColor="transparent",n.style.height="9.6rem",i.forEach(l=>{l.style.color="#F9FAFC"}),a.forEach(l=>{l.style.backgroundColor="#F9FAFC"}),o&&(o.style.color="#F9FAFC"),s.style.backgroundImage='url("https://uploads-ssl.webflow.com/65201a824f1d6877e14543bf/6523f4457bde5cea96273b91_Demo.svg")',s.style.color="#27274E"):(n.style.backgroundColor="#FAFBFD",n.style.height="7.2rem",a.forEach(l=>{l.style.backgroundColor="#27274E"}),i.forEach(l=>{l.style.color="#27274E"}),o&&(o.style.color="#27274E"),s.style.backgroundImage='url("https://uploads-ssl.webflow.com/65201a824f1d6877e14543bf/6523f51d4f2795533e5ad22f_Demo-dark.svg")',s.style.color="white"))}t&&t.addEventListener("click",u);function f(){let{scrollY:e}=window;n&&t&&(e>80?(n.style.backgroundColor="#FAFBFD",o&&(o.style.color="#27274E"),t.style.color="#27274E"):(n.style.backgroundColor="transparent",o&&(o.style.color="#F9FAFC"),s&&(s.style.color="white"),t.style.color="white"))}function u(){t!=null&&t.classList.contains("w--open")?(document.body.classList.remove("disable-scroll"),t&&o&&(o.style.color=t.style.color)):(t&&o&&(o.style.color="#F9FAFC"),document.body.classList.add("disable-scroll"))}function r(){window.innerWidth<=992?f():d()}window.addEventListener("scroll",r),window.addEventListener("resize",r),r();function c(e){let l=e.offsetTop,y=l+e.offsetHeight,m=window.scrollY+window.innerHeight*.8,w=window.scrollY;(m>l&&w<y||e.classList.contains("is-visible"))&&(e.classList.add("is-visible"),e.style.opacity="1")}window.addEventListener("scroll",function(){document.querySelectorAll("[fade-in]").forEach(function(e){c(e)}),document.querySelectorAll("[fade-in|='to-top']").forEach(function(e){c(e)})}),document.querySelectorAll("[fade-in]").forEach(function(e){c(e)}),document.querySelectorAll("[fade-in|='to-top']").forEach(function(e){c(e)})});})();
