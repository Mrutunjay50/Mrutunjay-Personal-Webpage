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



// portfolio section
// portfolio-popup



function bodyScrollingToggle() {
    document.body.classList.toggle("stop-scrolling");

}

/* ---------------------------------portfolio-filter and popup--------------------------------- */

(()=>{
    const filterContainer = document.querySelector('.portfolio-filter'),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector('.portfolio-popup'),
    prevBtn = popup.querySelector('.pp-prev'),
    nextBtn = popup.querySelector('.pp-next'),
    closeBtn = popup.querySelector('.pp-close'),
    projectDetailsContainer = popup.querySelector('.pp-details'),
    projectDetailsBtn = popup.querySelector('.pp-detail-btn');

    let itemIndex, slideIndex, screenshots;
    // slideIndex= 0;

    /* filter portfolioItems*/
    filterContainer.addEventListener("click", (event)=>{
        // console.log(event.target);
        if(event.target.classList.contains("filter-item") && !event.target.classList.contains('active')){
            //deactivating existing active filter item
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");

            // activate new filter-item
            event.target.classList.add("active", "outer-shadow");
            // targets the container data of corresponding filter-items
            const target = event.target.getAttribute("data-target");
            // console.log(target);
            portfolioItems.forEach((item)=>{
                // console.log(item.getAttribute("data-category"));
                if(target === item.getAttribute("data-category") || target === "all"){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })

        }
    })
    portfolioItemsContainer.addEventListener("click", (event) => {
        // console.log(event.target.closest(".portfolio-item-inner"));
        if(event.target.closest(".portfolio-item-inner")){
            let portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            // console.log(portfolioItem)
            // get the portfolio item index
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            // console.log(itemIndex);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            // convert screenshots into array
            screenshots = screenshots.split(",");
            if(screenshots.length === 1){
                prevBtn.style.display='none';
                nextBtn.style.display='none';
            }
            else{
                prevBtn.style.display='block';
                nextBtn.style.display='block';
            }
            slideIndex = 0;
            popToggle();
            popupSlideShow();
            popupDetails();
        }
    })

    closeBtn.addEventListener("click", ()=>{
        popToggle();
        if(projectDetailsContainer.classList.contains("active")){
            popupDetailsToggle()
        }

    })

    function popToggle() {
        popup.classList.toggle("open");
        bodyScrollingToggle();
    }

    function popupSlideShow() {
        const imgSrc = screenshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");
        // activates the loader until the popup img is loaded
        popup.querySelector(".pp-loader").classList.add("active");
        popupImg.src = imgSrc;
        popupImg.onload = ()=>{
            // deactivate loader after the popup img loaded
            popup.querySelector(".pp-loader").classList.remove("active");
        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex  + 1) + " of " + screenshots.length;

    }

    //next slide
    nextBtn.addEventListener("click", ()=>{
        if(slideIndex === screenshots.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        popupSlideShow();
        // console.log("slideIndex" + slideIndex);
    })
    //prev slide
    prevBtn.addEventListener("click", ()=>{
        if(slideIndex === 0){
            slideIndex = screenshots.length-1;
        }
        else{
            slideIndex--;
        }
        popupSlideShow();
        // console.log("slideIndex" + slideIndex);
    })

    function popupDetails(){
        //if portfolio details does not exist
        if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
            projectDetailsBtn.style.display="none";
            return; //end function execution
        }
        projectDetailsBtn.style.display="block";
        //get the project details
        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        popup.querySelector(".pp-project-details").innerHTML = details;
        const title = portfolioItems[itemIndex].querySelector(".portfoltitle h2").innerHTML;
        popup.querySelector(".pp-title h2").innerHTML = title;
        const category = portfolioItems[itemIndex].getAttribute("data-category");
        popup.querySelector(".pp-category").innerHTML = category.split("-").join(" ");
    }

    projectDetailsBtn.addEventListener("click",()=>{
        popupDetailsToggle();
    })
    function popupDetailsToggle(){
        if(projectDetailsContainer.classList.contains("active")){
            projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0 + "px";
        }
        else{
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-minus");
            projectDetailsContainer.classList.add("active");
            projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
            popup.scrollTo(0, projectDetailsContainer.offsetTop);
        }
    }


})();