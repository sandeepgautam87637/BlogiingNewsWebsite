
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
 });


 let namein = document.getElementById("namein");
 let emailin = document.getElementById("emailin");
 let webin = document.getElementById("webin");
 let textareaist = document.getElementById("textareaist");
let leavebtn = document.getElementById("leavebtn");
let compara = document.getElementById("compara");
// localStorage.setItem()
 leavebtn.addEventListener("click",()=>{
let str = namein.value + " " + emailin.value + " " + webin.value + " " + textareaist.value ;
 console.log(str)
 compara.innerText ="Your name is " + namein.value + " and your email is " + emailin.value + " " + textareaist.value;
 namein.value ="";
 emailin.value ="";
 textareaist.value ="";
 })