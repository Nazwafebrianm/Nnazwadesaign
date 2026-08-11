const menu=document.querySelector(".menu"), nav=document.querySelector(".nav nav");
menu.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="68px";nav.style.left="0";nav.style.right="0";nav.style.padding="22px 6vw";nav.style.flexDirection="column";nav.style.background="var(--cream)";});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
