console.log("This is sandeep")

document.body.style.backgroundColor = "whitesmoke"
let headdate = document.getElementById("headdate");
let headdates = document.getElementById("headdates");
let date = new Date();
headdate.innerHTML = date;
//  headdates.innerHTML = date;

let dropist = document.getElementById("dropist");
let catun = document.getElementById("catun");
dropist.addEventListener("mouseover", () => {
    catun.style.display = "block"

})
dropist.addEventListener("mouseleave", () => {
    setTimeout(() => {
        catun.style.display = "none";
    }, 10000);

})

let leftsectionsec = document.getElementById("leftsectionsec");
leftsectionsec.style.overflowX = "scroll";
leftsectionsec.style.overflowY = "hidden";

let leftsldbtnsec = document.getElementById("leftsldbtnsec");
let rightsldbtnsec = document.getElementById("rightsldbtnsec");
let leftsecimgist = document.getElementById("leftsecimgist");
let leftsecimgist2 = document.getElementById("leftsecimgist2");
let leftsecimgist3 = document.getElementById("leftsecimgist3");
rightsldbtnsec.addEventListener("click", () => {
    leftsecimgist.style.transform = "translateX(-42.8rem)";
    leftsecimgist2.style.transform = "translateX(-42.8rem)";
})
setInterval(() => {
    leftsecimgist.style.transform = "translateX(-42.8rem)";
    leftsecimgist2.style.transform = "translateX(-42.8rem)";
}, 4000);
leftsldbtnsec.addEventListener("click", () => {
    leftsecimgist.style.transform = "translateX(0rem)";
    leftsecimgist2.style.transform = "translateX(0rem)";
})
setInterval(() => {
    leftsecimgist.style.transform = "translateX(0rem)";
    leftsecimgist2.style.transform = "translateX(0rem)";
}, 9000);


let allblogbusiness = document.getElementById("allblogbusiness");
let allblogbusiness2 = document.getElementById("allblogbusiness2");
let allblogbusiness3 = document.getElementById("allblogbusiness3");
let allblogbusiness4 = document.getElementById("allblogbusiness4");
let str ="";
function fetchDatabus(params) {
    let url = "businessapi.json";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        data.map((val) => {
            // console.log(val.blogname)
        let str = `<div class="busboxes busboxes2">
                      <img src="${val.blogimg}" alt="" class="blog25img">
                    <h4 class="bustxthead">${val.blogname} <span class="gaut">/ ${val.date}</span></h4>
                     <p class="busdet">${val.blogdet}.</p>
               </div>`
               allblogbusiness.innerHTML += str;
        })
    })
   

}

let str2 ="";
function fetchDatatech(params) {
    let url = "technologyapi.json";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        data.map((val) => {
            // console.log(val.blogname)
        let str2 = `<div class="busboxes busboxes2">
                      <img src="${val.blogimg}" alt="" class="blog25img">
                    <h4 class="bustxthead">${val.blogname} <span class="gaut">/ ${val.date}</span></h4>
                     <p class="busdet">${val.blogdet}.</p>
               </div>`
               allblogbusiness2.innerHTML += str2;
        })
    })
   

}

let str3 ="";
function fetchDataent() {
    let url = "enterntainmentapi.json";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        data.map((val) => {
            // console.log(val.blogname)
        let str3 = `<div class="busboxes busboxes2">
                      <img src="${val.blogimg}" alt="" class="blog25img">
                    <h4 class="bustxthead">${val.blogname} <span class="gaut">/ ${val.date}</span></h4>
                     <p class="busdet">${val.blogdet}.</p>
               </div>`
               allblogbusiness3.innerHTML += str3;
        })
    })
   

}
let str4 ="";
function fetchDatasports() {
    let url = "sportsapi.json";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        data.map((val) => {
            // console.log(val.blogname)
        let str4 = `<div class="busboxes busboxes2">
                      <img src="${val.blogimg}" alt="" class="blog25img">
                    <h4 class="bustxthead">${val.blogname} <span class="gaut">/ ${val.date}</span></h4>
                     <p class="busdet">${val.blogdet}.</p>
               </div>`
               allblogbusiness4.innerHTML += str4;
        })
    })
   

}
fetchDatabus();
fetchDatatech();
fetchDataent();
fetchDatasports();
