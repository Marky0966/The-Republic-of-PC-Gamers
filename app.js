(() => {
  const toast = document.getElementById("toast");
  let audioCtx;
  function sound(freq=520,duration=.055,type="sine"){
    try{
      audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
      const o=audioCtx.createOscillator(), g=audioCtx.createGain();
      o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(.035,audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+duration);
      o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+duration);
    }catch(e){}
  }
  window.showToast=(msg,ok=true)=>{if(!toast)return;toast.textContent=msg;toast.classList.add("show",ok?"ok":"bad");clearTimeout(window.__toast);window.__toast=setTimeout(()=>toast.classList.remove("show","ok","bad"),2600)};
  document.addEventListener("click",e=>{
    const b=e.target.closest("button,a");
    if(b){ sound(b.classList.contains("primary-btn")?720:470); }
  });
  document.querySelectorAll("[data-sound]").forEach(b=>b.addEventListener("click",()=>{sound(880,.08,"triangle");showToast("Interface audio: ON");}));
  document.querySelectorAll("[data-login]").forEach(b=>b.addEventListener("click",()=>showToast(`${b.dataset.login} sign-in demo selected. Connect OAuth credentials for production.`)));
  const form=document.getElementById("loginForm");
  if(form) form.addEventListener("submit",e=>{e.preventDefault();localStorage.setItem("rpg_user",document.getElementById("email").value);showToast("Access granted — welcome to the Republic.");setTimeout(()=>location.href="home.html",450)});
  const profile=document.getElementById("profileBtn");
  if(profile) profile.addEventListener("click",()=>showToast(localStorage.getItem("rpg_user")||"Guest Player"));
})();