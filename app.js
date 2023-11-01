const hometext = document.querySelector(".hi");
const container = document.querySelector(".cube");
const cube2 = document.querySelector(".cube:nth-child(2)");
const cube3 = document.querySelector(".cube:nth-child(3)");
const hometext2 = document.querySelector(".home-text2");
const hometext3 = document.querySelector(".home-text3");
const abimg = document.querySelector(".ab-img");
const aboutimg = document.querySelector(".about-img");
const aboutcon = document.querySelector(".about-text");
const skillhead = document.querySelector(".skill-head");
const skillouter = document.querySelector(".skills");
const project = document.querySelector(".pro-heading");
const projectcon = document.querySelector(".pro-box");
const projectcon2 = document.querySelector(".pro-box:nth-child(2)");
const projectcon3 = document.querySelector(".pro-box:nth-child(3)");
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    let offsetY = window.scrollY;

    hometext.style.transform= `translateY(${offsetY* 0.3}px)`;
    container.style.transform= `translateY(${-offsetY* 0.4}px)`;
    cube2.style.transform= `translatex(${-offsetY* 0.4}px)`;
    cube3.style.transform= `translateX(${offsetY* 0.4}px)`;
    hometext2.style.transform= `translatex(calc(-100vh + ${offsetY}px))`;
    hometext3.style.transform= `translatex(calc(110vh - ${offsetY}px))`;
    aboutimg.style.transform= `translate(calc(-120vh + ${offsetY*0.4}px),calc(-120vh + ${offsetY*0.4}px))`;
    project.style.transform= `translatey(calc(-150vh + ${offsetY*0.6}px))`;
});
/**aboutimg.style.transform= `translate(calc(100vh - ${offsetY}px),calc(110vh - ${offsetY}px))`;
    aboutcon.style.transform= `translatex(calc(-110vh + ${offsetY}px))`;
    skillhead.style.transform= `translate(calc(-120vh + ${offsetY*0.9}px),calc(-120vh + ${offsetY*0.9}px))`;
    skillouter.style.transform= `translate(calc(120vh - ${offsetY*0.7}px),calc(120vh - ${offsetY*0.7}px))`;
    project.style.transform= `translatex(calc(120vh - ${offsetY*0.41}px))`;
    projectcon.style.transform= `translatey(calc(-130vh + ${offsetY*0.4}px))`;
    projectcon2.style.transform= `translatey(calc(130vh - ${offsetY*0.4}px))`;
    projectcon3.style.transform= `translatey(calc(-130vh + ${offsetY*0.4}px))`; */
