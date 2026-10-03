const slots=[
 {key:"CPU",label:"PROCESSOR",sub:"The brain of the Republic"},
 {key:"GPU",label:"GRAPHICS CARD",sub:"Your frame engine"},
 {key:"Motherboard",label:"MOTHERBOARD",sub:"The foundation"},
 {key:"Memory",label:"MEMORY",sub:"Capacity & speed"},
 {key:"Storage",label:"STORAGE",sub:"Your digital vault"},
 {key:"Power",label:"POWER SUPPLY",sub:"Clean, stable power"},
 {key:"Cooling",label:"COOLING",sub:"Keep the thermals in check"},
 {key:"Case",label:"CASE",sub:"The chassis"}
];
let build=JSON.parse(localStorage.getItem("rpg_build")||"{}");
const slotBox=document.getElementById("componentSlots"), modal=document.getElementById("picker"), pickerGrid=document.getElementById("pickerGrid"), pickerTitle=document.getElementById("pickerTitle");
function save(){localStorage.setItem("rpg_build",JSON.stringify(build))}
function render(){
 slotBox.innerHTML=slots.map(s=>{
   const p=build[s.key];
   return `<div class="component-slot ${p?'filled':''}" data-slot="${s.key}">
     <div class="slot-index">${String(slots.findIndex(x=>x.key===s.key)+1).padStart(2,"0")}</div>
     <div class="slot-copy"><span>${s.label}</span><small>${p?p.name:s.sub}</small></div>
     ${p?`<div class="slot-price">$${p.price.toLocaleString()}</div><button class="change-btn">CHANGE</button>`:`<button class="add-btn">SELECT +</button>`}
   </div>`
 }).join("");
 updateStats();
}
function updateStats(){
 const arr=Object.values(build), gpu=build.GPU, cpu=build.CPU;
 const fps=Math.round(((gpu?.fp||0)+(cpu?.fp||0)*.18)*.88);
 const watts=arr.reduce((n,p)=>n+(p.watts||0),0)+70;
 const temp=Math.round(68+(watts>500?7:0)-(arr.length*1.2));
 document.getElementById("fpsValue").textContent=fps?`${fps}`:"—";
 document.getElementById("powerValue").textContent=arr.length?`${watts}W`:"—";
 document.getElementById("tempValue").textContent=arr.length?`${temp}°C`:"—";
 document.getElementById("buildScore").textContent=`SCORE ${Math.min(99,Math.round(arr.reduce((n,p)=>n+p.score,0)/(arr.length||1)))}`;
 const notice=document.getElementById("compatNotice");
 const sockets=[cpu?.compat?.socket,build.Motherboard?.compat?.socket].filter(Boolean);
 if(sockets.length===2 && sockets[0]!==sockets[1]){notice.className="compat bad";notice.textContent="⚠ SOCKET CONFLICT — CPU and motherboard platforms do not match."}
 else {notice.className="compat good";notice.textContent=arr.length===8?"● BUILD READY — All core slots selected.":"● SYSTEM READY — Select your components."}
}
function openPicker(key){
 const items=PARTS.filter(p=>p.cat===key);
 pickerTitle.textContent=`Choose your ${key}.`;
 pickerGrid.innerHTML=items.map(p=>`<button class="picker-item" data-id="${p.id}"><img src="${p.img}" alt=""><span><b>${p.name}</b><small>${p.gen} · $${p.price.toLocaleString()}</small></span></button>`).join("");
 modal.classList.add("open");modal.dataset.slot=key;
}
slotBox.addEventListener("click",e=>{const slot=e.target.closest(".component-slot");if(slot)openPicker(slot.dataset.slot)});
pickerGrid.addEventListener("click",e=>{const b=e.target.closest(".picker-item");if(!b)return;const p=PARTS.find(x=>x.id===b.dataset.id);build[modal.dataset.slot]=p;save();modal.classList.remove("open");render();showToast(`${p.name} installed.`)});
document.getElementById("closePicker").onclick=()=>modal.classList.remove("open");
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
document.getElementById("resetBuild").onclick=()=>{build={};save();render();showToast("Build reset.")};
document.getElementById("saveBuild").onclick=()=>{save();showToast("Build saved locally to this browser.")};
document.getElementById("shareBuild").onclick=async()=>{const url=location.href;if(navigator.clipboard){await navigator.clipboard.writeText(url);showToast("Builder link copied.")}else showToast("Share link ready.");};
const pending=localStorage.getItem("rpg_pending_part");if(pending){const p=PARTS.find(x=>x.id===pending);if(p){build[p.cat]=p;save();localStorage.removeItem("rpg_pending_part")}}
render();