const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
let ac;function snd(t){try{ac=ac||new AudioContext();const n=ac.currentTime,o=ac.createOscillator(),g=ac.createGain(),f={click:[600,1000],ok:[500,1300],sel:[400,800]}[t||'click'];o.connect(g);g.connect(ac.destination);o.type='triangle';o.frequency.setValueAtTime(f[0],n);o.frequency.exponentialRampToValueAtTime(f[1],n+.09);g.gain.setValueAtTime(.18,n);g.gain.exponentialRampToValueAtTime(.001,n+.18);o.start(n);o.stop(n+.2)}catch(e){}}
document.addEventListener('click',e=>{if(e.target.closest('button,a,.card,.chip'))snd()});
function toast(m){let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';document.body.append(t)}t.textContent=m;t.className='s';setTimeout(()=>t.className='',2200)}
const logo=(w=44)=>`<svg width="${w}" height="${w}" viewBox="0 0 100 100"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00e5ff"/><stop offset="1" stop-color="#ff2d95"/></linearGradient></defs><path d="M50 4 90 20v32c0 22-17 38-40 44C27 90 10 74 10 52V20z" fill="#0b0b18" stroke="url(#lg)" stroke-width="5"/><path d="M50 16 78 27v24c0 15-11 27-28 32-17-5-28-17-28-32V27z" fill="none" stroke="#8a2be2" stroke-width="2"/><text x="50" y="60" text-anchor="middle" font-size="34" font-weight="900" fill="url(#lg)" font-family="Impact,sans-serif">RPG</text><path d="M30 68h40" stroke="url(#lg)" stroke-width="3"/></svg>`;
const user=()=>JSON.parse(localStorage.rpg_user||'null');
function nav(p){if(!user()){location='index.html';return}document.body.insertAdjacentHTML('afterbegin',`<nav>${logo(38)}<b>THE REPUBLIC OF PC GAMERS</b><span class="sp"></span><a href="parts.html" class="${p=='p'?'on':''}">Parts</a><a href="builder.html" class="${p=='b'?'on':''}">Let's Build</a><span>👤 ${user().name}</span><button class="btn o" onclick="localStorage.removeItem('rpg_user');location='index.html'">Logout</button></nav>`)}
const D=`CPU|Intel Core i5-8400|6C/6T 2.8GHz LGA1151|₱6,500|22|old
CPU|AMD Ryzen 5 7600X|6C/12T 5.3GHz AM5|₱14,500|62|new
CPU|AMD Ryzen 9 9950X3D|16C/32T 5.7GHz AM5 3D V-Cache|₱28,000|100|new
CPU|Intel Core Ultra 9 (Arrow Lake Refresh)|24C Next-Gen LGA1851|₱32,000|105|soon
GPU|NVIDIA GTX 1060 6GB|6GB GDDR5 120W|₱5,000|18|old
GPU|NVIDIA RTX 4070 Super|12GB GDDR6X 220W|₱37,000|62|new
GPU|NVIDIA RTX 5090|32GB GDDR7 575W|₱130,000|100|new
GPU|NVIDIA RTX 60-Series (Rumor)|Next-Gen GDDR7+|TBA|130|soon
RAM|DDR3 8GB 1600MHz|8GB DDR3|₱1,500|0|old
RAM|DDR5 32GB 6000MHz RGB|2x16GB CL30|₱6,500|0|new
RAM|DDR5 64GB 8400MHz|2x32GB Ultra OC|₱18,000|0|soon
SSD|SATA SSD 480GB|550MB/s|₱1,800|0|old
SSD|NVMe Gen4 2TB|7,400MB/s|₱7,500|0|new
SSD|NVMe Gen5 4TB|14,000MB/s|₱22,000|0|new
MOBO|ASUS Z370 ATX|DDR4 LGA1151|₱6,000|0|old
MOBO|B650E Gaming WiFi 7|DDR5 PCIe 5.0 AM5|₱12,500|0|new
MOBO|X870E Flagship|DDR5 USB4 WiFi 7|₱24,000|0|new
PSU|550W 80+ Bronze|Non-modular|₱2,200|0|old
PSU|850W 80+ Gold ATX3.1|Full modular|₱6,500|0|new
PSU|1200W 80+ Platinum|12V-2x6 ready|₱11,000|0|new
CASE|Mid-Tower Steel Classic|Mesh front|₱1,800|0|old
CASE|Dual-Chamber Glass RGB|Tempered glass|₱6,500|0|new
CASE|Panoramic Aquarium Case|Curved glass|₱9,500|0|soon
COOLER|Stock Air Cooler|Basic|₱500|0|old
COOLER|360mm AIO Liquid RGB|LCD display|₱9,000|0|new`.split('\n').map((l,i)=>{const a=l.split('|');return{id:i,c:a[0],n:a[1],s:a[2],p:a[3],sc:+a[4],t:a[5]}});
const TC={old:'#ffb020',new:'#00e5ff',soon:'#ff2d95'},TN={old:'OLD',new:'NEW',soon:'UPCOMING'};
function art(c,t){const k=TC[t];const e={CPU:`<rect x="40" y="15" width="60" height="60" rx="6" fill="#1a1a30" stroke="${k}" stroke-width="3"/><rect x="55" y="30" width="30" height="30" fill="${k}" opacity=".8"/>`+[...Array(6)].map((_,i)=>`<path d="M${46+i*9} 8v7M${46+i*9} 75v7" stroke="${k}" stroke-width="3"/>`).join(''),
GPU:`<rect x="10" y="22" width="120" height="46" rx="8" fill="#1a1a30" stroke="${k}" stroke-width="3"/><circle cx="45" cy="45" r="16" fill="none" stroke="${k}" stroke-width="3"/><circle cx="95" cy="45" r="16" fill="none" stroke="${k}" stroke-width="3"/><circle cx="45" cy="45" r="4" fill="${k}"/><circle cx="95" cy="45" r="4" fill="${k}"/>`,
RAM:`<rect x="12" y="30" width="116" height="30" rx="3" fill="#1a1a30" stroke="${k}" stroke-width="3"/>`+[...Array(5)].map((_,i)=>`<rect x="${22+i*22}" y="38" width="16" height="14" fill="${k}" opacity=".8"/>`).join(''),
SSD:`<rect x="25" y="20" width="90" height="50" rx="6" fill="#1a1a30" stroke="${k}" stroke-width="3"/><rect x="35" y="30" width="40" height="30" fill="${k}" opacity=".7"/>`,
MOBO:`<rect x="30" y="8" width="80" height="76" rx="4" fill="#1a1a30" stroke="${k}" stroke-width="3"/><rect x="45" y="22" width="22" height="22" fill="${k}"/><path d="M80 20h20M80 30h20M80 40h20M45 60h55" stroke="${k}" stroke-width="3"/>`,
PSU:`<rect x="25" y="15" width="90" height="60" rx="6" fill="#1a1a30" stroke="${k}" stroke-width="3"/><circle cx="70" cy="45" r="20" fill="none" stroke="${k}" stroke-width="3"/><path d="M70 25v40M50 45h40" stroke="${k}" stroke-width="2"/>`,
CASE:`<rect x="40" y="4" width="60" height="82" rx="6" fill="#1a1a30" stroke="${k}" stroke-width="3"/><rect x="48" y="12" width="44" height="50" fill="${k}" opacity=".25"/><circle cx="70" cy="75" r="5" fill="${k}"/>`,
COOLER:`<circle cx="70" cy="45" r="36" fill="#1a1a30" stroke="${k}" stroke-width="3"/><path d="M70 45 70 15M70 45 96 60M70 45 44 60" stroke="${k}" stroke-width="10" stroke-linecap="round"/><circle cx="70" cy="45" r="6" fill="#fff"/>`}[c];
return`<svg viewBox="0 0 140 90"><rect width="140" height="90" fill="${k}" opacity=".07" rx="8"/>${e}</svg>`}
