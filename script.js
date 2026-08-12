const works=[
{name:"Dreamy Visuals",cat:"poster",image:"poster-01.svg"},
{name:"Good Mood",cat:"canva",image:"poster-02.svg"},
{name:"Hello Creative",cat:"poster",image:"poster-03.svg"},
{name:"Create Your Vibe",cat:"social",image:"poster-04.svg"},
{name:"Less Noise",cat:"canva",image:"poster-05.svg"},
{name:"Be Bold",cat:"poster",image:"poster-06.svg"}];
const grid=document.getElementById("grid");
function render(list=works){grid.innerHTML=list.length?list.map(w=>`<article class="work"><div class="work-img"><img src="${w.image}" alt="${w.name}" loading="lazy"><div class="overlay"><small>${w.cat.toUpperCase()}</small><b>${w.name}</b></div></div><div class="work-info"><small>ORIGINAL WEBSITE ASSET</small><h3>${w.name}</h3></div></article>`).join(""):"<p>Tidak ada karya ditemukan.</p>"}
document.getElementById("filters").onclick=e=>{if(e.target.tagName!=="BUTTON")return;document.querySelectorAll("#filters button").forEach(x=>x.classList.remove("active"));e.target.classList.add("active");let f=e.target.dataset.filter;render(f==="all"?works:works.filter(w=>w.cat===f))}
document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));
document.getElementById("searchOpen").onclick=()=>{document.getElementById("searchbar").style.display="block";document.getElementById("search").focus()};
document.getElementById("searchClose").onclick=()=>document.getElementById("searchbar").style.display="none";
document.getElementById("search").oninput=e=>{let q=e.target.value.toLowerCase();render(works.filter(w=>(w.name+" "+w.cat).toLowerCase().includes(q)))};
render();