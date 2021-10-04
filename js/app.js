// making a mobile toggle menu 
const menu = document.querySelector("#mobile-menu1");
const navMenu = document.querySelector(".navbar_menu1");

menu.addEventListener("click", mobileMenu);

function mobileMenu() {
    menu.classList.toggle("is-active");
    navMenu.classList.toggle("active");
}



// functionality of about tabs
(() => {
    const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener('click', (event) => {
        // console.log(event.target);
        if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
            // targets the data "data-target"
            const target = event.target.getAttribute("data-target");
            // console.log(target);

            // deactivates the existing active tab style of tab-item
            tabsContainer.querySelector('.active').classList.remove("outer-shadow", "active");

            // activate the deactivated tab items
            event.target.classList.add("active", "outer-shadow");
            

            // deactivate the exixting active tab-content
            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            aboutSection.querySelector(target).classList.add("active");
            // console.log(happy);
        }
    });
})();



// ---------------------testimonial slider---------------------------
(()=> {
    const sliderContainer = document.querySelector(".test-slider-container"),
    slider = sliderContainer.querySelectorAll(".test-item"),
    sliderWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".test-slider-nav .prev"),
    nextBtn = document.querySelector(".test-slider-nav .next"),
    activeSlide = document.querySelector(".test-item.active");
    // console.log(slides);
    // console.log(sliderWidth);
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
    // console.log(slideIndex);

    //set width of all divs "slider"
    slider.forEach((slide)=>{
        // console.log(slide);
        slide.style.width = sliderWidth + "px";
    })

    //set the width of sliderContainer
    sliderContainer.style.width = sliderWidth *slider.length + "px";

    nextBtn.addEventListener("click", ()=>{
        if(slideIndex === slider.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        // console.log(slideIndex);
        /* sliderContainer.style.marginLeft = - (sliderWidth *slider.length) + "px"; => this one is wrong 
        because in this with single click it will slide to he last and show a blank container*/
        sliders();
    })


    prevBtn.addEventListener("click", ()=>{
        if(slideIndex === 0){
            slideIndex = slider.length-1;
        }
        else{
            slideIndex--;
        }
        sliders();
    })

    function sliders() {
        //deactivates the existing activated slides
        sliderContainer.querySelector(".test-item.active").classList.remove("active");
        //activete new slide
        slider[slideIndex].classList.add("active");
        sliderContainer.style.marginLeft = - (sliderWidth *slideIndex) + "px";
    }
    sliders();


}) ();


// ------------------------contact section-------------------


/*smooth scrolling effect*/



// preloader
window.addEventListener("load", ()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 600);
})