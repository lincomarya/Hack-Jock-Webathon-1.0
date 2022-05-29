const hamburger = document.querySelector(".nav-hamburger");
const navClose = document.querySelector(".nav-close");
hamburger.addEventListener("click",()=>{
   
    hamburger.classList.add("display-none");
  
    navClose.classList.add("display-initial");
    document.querySelector("nav ul").classList.add("display-initial");
});
navClose.addEventListener("click",()=>{
     hamburger.classList.remove("display-none");
  
     navClose.classList.remove("display-initial");
    document.querySelector("nav ul").classList.remove("display-initial");
});
window.addEventListener('resize',()=>{
    if(window.matchMedia("(min-width:1000px)")){
        navClose.classList.remove("display-initial");
         hamburger.classList.remove("display-none");
         document.querySelector("nav ul").classList.remove("display-initial");
    }
});
