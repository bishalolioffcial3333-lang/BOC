
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500);
});

// Typing Effect
const words = [
    "Computer Engineering Student",
    "Frontend Developer",
    "Python Programmer",
    "Flutter Developer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        speed = 1500;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Dark / Light Mode
const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }else{
        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';
    }

};

// Scroll Reveal
const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>observer.observe(el));

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        if(backToTop){
            backToTop.style.display = "flex";
        }

    }else{

        if(backToTop){
            backToTop.style.display = "none";
        }

    }

});

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


const navbar =
document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

navbar.style.backdropFilter="blur(20px)";
navbar.style.background="rgba(10,10,20,.70)";
navbar.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";

}else{

navbar.style.background="rgba(255,255,255,.05)";
navbar.style.boxShadow="none";

}

});

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 120;

const sectionHeight =
section.clientHeight;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

const cursor =
document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

}

});


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target =
document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

console.log("✅ BOC Portfolio Loaded Successfully");

