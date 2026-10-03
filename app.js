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
/* ---- v2: soft chime sounds ---- */
const PEN=[523.25,587.33,659.25,783.99,880,1046.5];
function snd(t){try{ac=ac||new AudioContext();const n=ac.currentTime,seq={click:[PEN[Math.floor(Math.random()*4)]],sel:[PEN[2],PEN[4]],ok:[PEN[0],PEN[2],PEN[3],PEN[5]]}[t||'click'];
seq.forEach((f,i)=>{const s=n+i*.09,m=ac.createGain(),lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=3200;[[f,.12],[f*2,.04],[f*3,.015]].forEach(([fr,v])=>{const o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=fr;o.connect(g);g.connect(m);g.gain.value=v;o.start(s);o.stop(s+.7)});m.gain.setValueAtTime(0,s);m.gain.linearRampToValueAtTime(1,s+.006);m.gain.exponentialRampToValueAtTime(.001,s+.6);m.connect(lp);lp.connect(ac.destination)})}catch(e){}}
document.addEventListener('click',e=>{if(e.target.closest('.card'))snd('sel')});
/* ---- v2: more parts ---- */
`CPU|Intel Core i7-4790K|4C/8T 4.4GHz LGA1150|₱4,000|20|old
CPU|AMD Ryzen 5 3600|6C/12T 4.2GHz AM4|₱5,500|38|old
CPU|Intel Core i5-13600K|14C/20T 5.1GHz LGA1700|₱17,000|75|new
CPU|AMD Ryzen 7 9800X3D|8C/16T 3D V-Cache|₱24,000|95|new
CPU|AMD Zen 6 (Rumor)|Next-gen Ryzen|TBA|120|soon
GPU|NVIDIA GTX 970 4GB|4GB GDDR5|₱3,000|14|old
GPU|AMD RX 580 8GB|8GB GDDR5|₱4,000|20|old
GPU|NVIDIA RTX 3060 12GB|12GB GDDR6|₱15,000|40|old
GPU|AMD RX 7800 XT|16GB GDDR6|₱28,000|58|new
GPU|NVIDIA RTX 5070 Ti|16GB GDDR7|₱55,000|78|new
GPU|AMD RX 9070 XT|16GB GDDR6 RDNA4|₱38,000|70|new
RAM|DDR4 16GB 3200MHz|2x8GB|₱3,000|0|old
RAM|DDR5 16GB 5600MHz|2x8GB|₱3,500|0|new
SSD|HDD 1TB 7200RPM|160MB/s|₱2,000|0|old
SSD|NVMe Gen3 1TB|3,500MB/s|₱3,500|0|old
SSD|NVMe Gen6 (Upcoming)|28,000MB/s|TBA|0|soon
MOBO|B450 Tomahawk AM4|DDR4 AM4|₱5,000|0|old
MOBO|Z790 DDR5 WiFi|LGA1700|₱14,000|0|new
PSU|750W 80+ Gold|Semi-modular|₱4,500|0|new
CASE|Mini-ITX Cube|Compact|₱5,000|0|new
COOLER|Dual Tower Air Cooler|6 heatpipes|₱2,500|0|new
COOLER|240mm AIO ARGB|Liquid|₱5,500|0|new
MONITOR|24" 1080p 60Hz|IPS|₱5,000|0|old
MONITOR|27" 1440p 165Hz|IPS|₱13,000|0|new
MONITOR|32" 4K 240Hz QD-OLED|OLED|₱45,000|0|new
MONITOR|500Hz+ OLED (Rumor)|Next-gen|TBA|0|soon
KEYBOARD|Membrane Office Keyboard|Basic|₱500|0|old
KEYBOARD|Mechanical TKL RGB|Hot-swap|₱3,500|0|new
KEYBOARD|Magnetic 8K Rapid Trigger|Hall effect|₱6,500|0|new
MOUSE|Basic Optical Mouse|1600DPI|₱300|0|old
MOUSE|Wireless 8K Ultralight|50g 30K DPI|₱5,500|0|new
HEADSET|Stereo Headset|Basic|₱800|0|old
HEADSET|7.1 Wireless ANC|Low-latency|₱7,500|0|new`.split('\n').forEach(l=>{const a=l.split('|');D.push({id:D.length,c:a[0],n:a[1],s:a[2],p:a[3],sc:+a[4],t:a[5]})});
/* ---- v2: realistic shaded art + optional real photo (img/<id>.jpg) ---- */
let AU=0;
function art(c,t,id){const k=TC[t],u='g'+(AU++),M=`<linearGradient id="${u}m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b7390"/><stop offset=".5" stop-color="#2a2f45"/><stop offset="1" stop-color="#12141f"/></linearGradient><radialGradient id="${u}r"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="${k}"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></radialGradient><filter id="${u}f"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000"/></filter><filter id="${u}g"><feGaussianBlur stdDeviation="2.5"/></filter>`,m=`url(#${u}m)`,r=`url(#${u}r)`,f=`filter="url(#${u}f)"`;
const fan=(x,y,R)=>`<circle cx="${x}" cy="${y}" r="${R}" fill="#0a0b12" stroke="#555a70" stroke-width="2"/>`+[0,72,144,216,288].map(a=>`<path d="M${x} ${y}q${R*.5} -${R*.9} ${R*.9} -${R*.2}z" fill="#20243a" stroke="${k}" stroke-width=".8" transform="rotate(${a} ${x} ${y})"/>`).join('')+`<circle cx="${x}" cy="${y}" r="${R*.22}" fill="${r}"/>`;
const e={CPU:`<g ${f}><rect x="38" y="12" width="64" height="64" rx="5" fill="#b9bfd0"/><rect x="44" y="18" width="52" height="52" rx="3" fill="${m}"/><rect x="50" y="24" width="40" height="40" rx="2" fill="#c9ced9"/><text x="70" y="48" font-size="7" fill="#333" text-anchor="middle" font-weight="700">${t=='soon'?'?':'CPU'}</text></g><path d="M44 8v4M54 8v4M64 8v4M74 8v4M84 8v4M94 8v4" stroke="#d4af37" stroke-width="2"/>`,
GPU:`<g ${f}><rect x="8" y="20" width="124" height="48" rx="7" fill="${m}" stroke="${k}" stroke-width="1.5"/>${fan(40,44,17)}${fan(92,44,17)}<rect x="12" y="66" width="60" height="5" fill="#d4af37"/><rect x="118" y="26" width="10" height="36" fill="${k}" opacity=".5"/></g>`,
RAM:`<g ${f}><rect x="10" y="26" width="120" height="14" rx="2" fill="${m}"/><rect x="10" y="26" width="120" height="3" fill="${k}" filter="url(#${u}g)"/><rect x="10" y="46" width="120" height="14" rx="2" fill="${m}"/><rect x="10" y="57" width="120" height="3" fill="${k}" filter="url(#${u}g)"/></g>`,
SSD:`<g ${f}><rect x="18" y="22" width="104" height="46" rx="5" fill="${m}" stroke="${k}"/><rect x="26" y="30" width="30" height="30" rx="2" fill="#0b0c14"/><rect x="62" y="30" width="52" height="8" fill="${k}" opacity=".8"/><text x="64" y="55" font-size="8" fill="#ccc">NVMe</text></g>`,
MOBO:`<g ${f}><rect x="26" y="6" width="88" height="80" rx="3" fill="#10131f" stroke="${k}" stroke-width="1.5"/><rect x="40" y="18" width="24" height="24" fill="${m}" stroke="${k}"/><path d="M76 14v28M82 14v28M88 14v28M94 14v28" stroke="${k}" stroke-width="3"/><rect x="36" y="52" width="68" height="6" fill="#222844"/><rect x="36" y="64" width="68" height="6" fill="#222844"/><rect x="100" y="48" width="8" height="30" fill="#555"/></g>`,
PSU:`<g ${f}><rect x="22" y="14" width="96" height="62" rx="5" fill="${m}"/>${fan(70,45,22)}<rect x="26" y="68" width="30" height="4" fill="${k}"/></g>`,
CASE:`<g ${f}><rect x="36" y="3" width="68" height="84" rx="5" fill="${m}"/><rect x="42" y="9" width="46" height="62" fill="#050610" stroke="${k}"/><rect x="46" y="14" width="18" height="12" fill="${k}" opacity=".7"/><rect x="46" y="44" width="38" height="8" fill="${k}" opacity=".8"/>${fan(95,40,5)}<rect x="42" y="75" width="46" height="8" fill="#0a0b12"/></g>`,
COOLER:`<g ${f}><circle cx="70" cy="45" r="38" fill="${m}" stroke="${k}" stroke-width="2"/>${fan(70,45,30)}</g>`,
MONITOR:`<g ${f}><rect x="14" y="8" width="112" height="62" rx="4" fill="#0a0b12" stroke="#666" stroke-width="3"/><rect x="18" y="12" width="104" height="54" fill="${k}" opacity=".35"/><rect x="18" y="12" width="104" height="54" fill="url(#${u}m)" opacity=".4"/><path d="M60 70h20l4 14H56z" fill="${m}"/><rect x="44" y="84" width="52" height="3" fill="#555"/></g>`,
KEYBOARD:`<g ${f}><rect x="8" y="26" width="124" height="42" rx="5" fill="${m}"/>${[0,1,2,3].map(y=>[...Array(14)].map((_,x)=>`<rect x="${12+x*8.6}" y="${30+y*9}" width="7" height="7" rx="1.5" fill="#0a0b12" stroke="${k}" stroke-width=".6"/>`).join('')).join('')}</g>`,
MOUSE:`<g ${f}><path d="M70 8c20 0 28 16 28 36 0 28-12 42-28 42S42 72 42 44c0-20 8-36 28-36z" fill="${m}" stroke="${k}" stroke-width="1.5"/><path d="M70 8v34M42 44h56" stroke="#0a0b12" stroke-width="2"/><rect x="66" y="20" width="8" height="14" rx="4" fill="${k}"/></g>`,
HEADSET:`<g ${f}><path d="M30 55V45a40 40 0 0 1 80 0v10" fill="none" stroke="#3a3f58" stroke-width="7"/><rect x="20" y="46" width="22" height="32" rx="9" fill="${m}" stroke="${k}" stroke-width="2"/><rect x="98" y="46" width="22" height="32" rx="9" fill="${m}" stroke="${k}" stroke-width="2"/></g>`}[c];
return`<div class="ph"><svg viewBox="0 0 140 90"><defs>${M}</defs><rect width="140" height="90" fill="${k}" opacity=".08" rx="8"/>${e}</svg>${id!==undefined?`<img src="img/${id}.jpg" alt="" onerror="this.remove()">`:''}</div>`}
