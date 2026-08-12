const works=[
{name:"Dreamy Event",cat:"poster",word:"DREAMY",sub:"EVENT POSTER",icon:"✦"},
{name:"Blue Mood",cat:"social",word:"GOOD",sub:"MOOD TODAY",icon:"♡"},
{name:"Cute Brand",cat:"canva",word:"HELLO",sub:"CANVA KIT",icon:"☻"},
{name:"School Campaign",cat:"poster",word:"CREATE",sub:"CAMPAIGN",icon:"∞"},
{name:"Pastel Carousel",cat:"social",word:"SWIPE",sub:"& SMILE",icon:"✦"},
{name:"Mini Template",cat:"canva",word:"BE",sub:"ORIGINAL",icon:"♡"},
{name:"Summer Poster",cat:"poster",word:"HELLO",sub:"SUMMER!",icon:"☀"},
{name:"Daily Content",cat:"social",word:"TODAY",sub:"IS CUTE",icon:"☻"}];
const grid=document.getElementById("portfolioGrid");
function render(list=works){
 grid.innerHTML=list.length?list.map(w=>`<article class="work"><div class="work-img"><div class="design-card"><small>${w.sub}</small><strong>${w.word}</strong><i>${w.icon}</i></div></div><div class="work-info"><small>${w.cat.toUpperCase()}</small><h3>${w.name}</h3></div></article>`).join(""):`<p>Tidak ada karya yang ditemukan.</p>`;
}
document.getElementById("filters").onclick=e=>{
 if(e.target.tagName!=="BUTTON")return;
 document.querySelectorAll("#filters button").forEach(b=>b.classList.remove("active"));
 e.target.classList.add("active");
 const f=e.target.dataset.filter;
 render(f==="all"?works:works.filter(w=>w.cat===f));
};
document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));
document.getElementById("searchOpen").onclick=()=>{document.getElementById("searchbar").classList.add("show");document.getElementById("search").focus()};
document.getElementById("searchClose").onclick=()=>document.getElementById("searchbar").classList.remove("show");
document.getElementById("search").oninput=e=>{
 const q=e.target.value.toLowerCase();
 render(works.filter(w=>(w.name+" "+w.cat+" "+w.word+" "+w.sub).toLowerCase().includes(q)));
};
render();