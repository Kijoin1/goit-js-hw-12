import{a as L,S as w,i as m}from"./assets/vendor-D1eTGYtO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const x="https://pixabay.com/api/";async function g(o){try{return(await L.get(x,o)).data}catch(t){throw t}}function p(o){const t=document.querySelector(".gallery"),s=new w(".gallery a",{captionsData:"alt",captionDelay:250});let n=o.hits.map(e=>`
<div class='gallery-div'>
<a href= "${e.largeImageURL}">
<img class= "gallery-img" src = "${e.webformatURL}" alt= "${e.tags}"></img>
</a>
<div class="text-div">
<div class="text-item"><h5 class="text-title">Likes</h5><p class="text">${e.likes}</p></div>
<div class="text-item"><h5 class="text-title">Views</h5><p class="text">${e.views}</p></div>
<div class="text-item"><h5 class="text-title">Comments</h5><p class="text">${e.comments}</p></div>
<div class="text-item"><h5 class="text-title">Downloads</h5><p class="text">${e.downloads}</p></div>
</div>
</div>`).join("");t.insertAdjacentHTML("beforeend",n),s.refresh()}function q(){const o=document.querySelector(".gallery");o.innerHTML=""}function f(){const o=document.querySelector(".loading-div");o.innerHTML='<span class="loader"></span>'}function y(){const o=document.querySelector(".loading-div");o.innerHTML=""}class S{constructor(t,s){this.button=t,this.hiddenClass=s}hide(){this.button.classList.add(this.hiddenClass)}show(){this.button.classList.remove(this.hiddenClass)}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}}const H=document.querySelector(".result-receiver"),b=document.querySelector("#search"),h=document.querySelector("[data-start]"),v=document.querySelector(".load-button");let d="",l=0,a=1;const i=new S(v,"is-hidden");i.hide();u();document.addEventListener("input",u);document.addEventListener("submit",M);v.addEventListener("click",E);function u(){b.value.trim().length===0?h.setAttribute("disabled",""):h.removeAttribute("disabled")}function M(o){o.preventDefault(),q(),f(),a=1,d=b.value,g({params:{key:"45153082-ab6ff3a7cbec10f23fcc6c616",q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15,maxPage:0}}).then(s=>{if(l=s.totalHits,s.hits.length===0)throw i.hide(),i.disable(),new Error("No images found");i.show(),i.enable(),p(s)}).catch(()=>{m.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",image:"./img/cat_error.jpg",imageWidth:60,position:"topRight"})}).finally(()=>{a*15>=l&&(i.disable(),i.hide()),y(),H.reset(),u()})}function E(){f(),g({params:{key:"45153082-ab6ff3a7cbec10f23fcc6c616",q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15}}).then(t=>{console.log(t),l=t.totalHits,y();try{p(t);const s=document.querySelectorAll(".gallery-div a");if(s.length>0){const e=s[s.length-1].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}if(a*15>=l)throw new Error("No images found");a+=1,i.show(),i.enable()}catch{i.disable(),i.hide(),m.error({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",image:"./img/cat_error2.jpg",imageWidth:55,icon:""})}})}
//# sourceMappingURL=commonHelpers.js.map
