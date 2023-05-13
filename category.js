
console.log("This is sandeep")

let headdate = document.getElementById("headdate");
let headdates = document.getElementById("headdates");
let date = new Date();
 headdate.innerHTML = date;
 headdates.innerHTML = date;

 let dropist = document.getElementById("dropist");
 let catun = document.getElementById("catun");
 dropist.addEventListener("mouseenter",()=>{
    catun.style.display = "block"
 
 })
 dropist.addEventListener("mouseleave",()=>{
    setTimeout(() => {
    catun.style.display = "none"
    }, 2000);
 })

 