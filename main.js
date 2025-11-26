// Elements
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");
const mybutton = document.getElementById("backtotopbutton");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");
const Pupils = Array.from(document.getElementsByClassName("footer-pupil"));
let pupilStartPoint = -10, pupilRangeX = 20, pupilRangeY = 15;

// ------------------------
// Preloader & popup
// ------------------------
window.addEventListener("load", () => {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

// ------------------------
// Settings toggle
// ------------------------
function settingToggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// ------------------------
// Audio control
// ------------------------
function playPause() {
    const isSoundOn = document.getElementById("switchforsound").checked;
    isSoundOn ? audio.play() : audio.pause();
}

// ------------------------
// Visual Mode (Light/Dark)
// ------------------------
function visualMode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(el => el.classList.toggle("invertapplied"));
}

// ------------------------
// Hamburger Menu
// ------------------------
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hideMenuByLi() {
    document.body.classList.remove("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// ------------------------
// Active tab on scroll
// ------------------------
window.addEventListener("scroll", () => {
    let currentSectionId = "";
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) {
            currentSectionId = section.getAttribute("id");
        }
    });

    // Mobile nav
    mobilenavLi.forEach(li => {
        li.classList.toggle("activeThismobiletab", li.classList.contains(currentSectionId));
    });

    // Desktop nav
    navLi.forEach(li => {
        li.classList.toggle("activeThistab", li.classList.contains(currentSectionId));
    });
});

// ------------------------
// Back to top button
// ------------------------
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = scrollFunction;

// ------------------------
// Prevent right click on images
// ------------------------
document.addEventListener("contextmenu", e => {
    if (e.target.nodeName === "IMG") e.preventDefault();
}, false);

// ------------------------
// Footer pupils follow mouse
// ------------------------
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let mouseYEndPoint = window.innerHeight;

function mouseMove(e) {
    const fracXValue = (e.clientX - mouseXStartPoint) / (mouseXEndPoint - mouseXStartPoint);
    const fracYValue = e.clientY / mouseYEndPoint;

    const translateX = pupilStartPoint + fracXValue * pupilRangeX;
    const translateY = pupilStartPoint + fracYValue * pupilRangeY;

    Pupils.forEach(pupil => {
        pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
}

function windowResize() {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
}

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// ------------------------
// Console message
// ------------------------
console.log("%c Designed and Developed by Vinod Jangid ", 
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");


    