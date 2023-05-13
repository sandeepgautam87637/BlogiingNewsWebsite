
console.log("This is sandeep gautam")

let headdate = document.getElementById("headdate");
let headdates = document.getElementById("headdates");
// let date = new Date();
//  headdate.innerHTML = date;
//  headdates.innerHTML = date;
 let namein = document.getElementById("namein");
 let emailin = document.getElementById("emailin");
 let subin = document.getElementById("subin");
 let textcon = document.getElementById("textcon");
 let sendmsgist = document.getElementById("sendmsgist");


 sendmsgist.addEventListener("click",()=>{
   let str = "Your name is " + namein.value + ", email is " + emailin.value + ", subject is " + subin.value + " and message is " + textcon.value;
   let str2;
 localStorage.setItem(str2,str);
 localStorage.getItem('str2')


 })