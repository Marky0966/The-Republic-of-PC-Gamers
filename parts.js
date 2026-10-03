const grid=document.getElementById("partsGrid"), search=document.getElementById("searchParts"), fb=document.getElementById("filterButtons");
let active=new URLSearchParams(location.search).get("cat")||"All";
function renderFilters(){fb.innerHTML=CATEGORIES.map(c=>`<button class="${c===active?'selected':''}" data-cat="${c}">${c}</button>`).join("")}
function renderParts(){
 const q=(search.value||"").toLowerCase();
 const items=PARTS.filter(p=>(active==="All"||p.cat===active)&&`${p.name} ${p.brand} ${p.gen} ${p.cat}`.toLowerCase().includes(q));
 grid.innerHTML=items.map(p=>`<article class="part-card">
   <div class="part-image"><img src="${p.img}" alt="${p.name}" loading="lazy"><span>${p.cat}</span></div>
   <div class="part-info"><div class="part-meta"><span>${p.brand}</span><span>${p.gen}</span></div><h3>${p.name}</h3>
   <div class="specs">${p.specs.map(s=>`<span>${s}</span>`).join("")}</div>
   <div class="part-bottom"><b>$${p.price.toLocaleString()}</b><button class="select-part" data-id="${p.id}">ADD TO BUILD +</button></div></div>
 </article>`).join("")||`<div class="empty">No components found. Try another search.</div>`;
}
fb.addEventListener("click",e=>{if(e.target.dataset.cat){active=e.target.dataset.cat;renderFilters();renderParts()}});
search.addEventListener("input",renderParts);
grid.addEventListener("click",e=>{const b=e.target.closest(".select-part");if(!b)return;localStorage.setItem("rpg_pending_part",b.dataset.id);showToast("Component selected — opening Build Lab.");setTimeout(()=>location.href="builder.html",350)});
renderFilters();renderParts();