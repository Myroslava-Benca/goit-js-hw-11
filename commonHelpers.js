import{a as p,S as h,i}from"./assets/vendor-21f42963.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const b="43559338-49e51b38628b18648a05e4f59",L="https://pixabay.com/api/";async function g(e,o=1){const s={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40};return(await p.get(L,{params:s})).data}let u;function m(e){const o=document.querySelector(".gallery"),s=e.map(n=>M(n)).join("");o.insertAdjacentHTML("beforeend",s),u?u.refresh():u=new h(".gallery a")}function w(){const e=document.querySelector(".gallery");e.innerHTML=""}function M({webformatURL:e,largeImageURL:o,tags:s,likes:n,views:t,comments:r,downloads:a}){return`
        <div class="photo-card">
            <a href="${o}">
                <img src="${e}" alt="${s}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${n}</p>
                <p class="info-item"><b>Views</b> ${t}</p>
                <p class="info-item"><b>Comments</b> ${r}</p>
                <p class="info-item"><b>Downloads</b> ${a}</p>
            </div>
        </div>
    `}function v(){const e=document.querySelector(".load-more");e.style.display="block"}function f(){const e=document.querySelector(".load-more");e.style.display="none"}function y(){document.getElementById("loading-message").classList.add("active")}function d(){document.getElementById("loading-message").classList.remove("active")}const S=document.getElementById("search-form"),q=document.querySelector(".load-more");let l="",c=1;S.addEventListener("submit",B);q.addEventListener("click",P);async function B(e){if(e.preventDefault(),l=e.currentTarget.searchQuery.value.trim(),l===""){i.warning({title:"",message:"Please enter a search query."});return}c=1,w(),f(),y();try{const o=await g(l,c);d(),o.hits.length===0?i.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!"}):(m(o.hits),o.totalHits>40&&v())}catch(o){d(),console.error(o),i.error({title:"",message:"Something went wrong. Please try again."})}}async function P(){c+=1,y();try{const e=await g(l,c);d(),m(e.hits),c*40>=e.totalHits&&(f(),i.warning({title:"",message:"We're sorry, but you've reached the end of search results."}))}catch(e){d(),console.error(e),i.error({title:"",message:"Something went wrong. Please try again."})}}
//# sourceMappingURL=commonHelpers.js.map