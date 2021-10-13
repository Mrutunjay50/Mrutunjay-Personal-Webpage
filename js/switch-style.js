/*-----------------toggle style switcher--------------------*/
const styleToggler = document.querySelector(".style-toggler");

styleToggler.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
styleToggler.addEventListener("click", ()=>{
    document.querySelector(".color-section").classList.toggle("open");
})


/*---------------Hide style switcher on scroll----------------*/
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.toggle("open");
        // document.querySelector(".color-section").classList.remove("open");
    }
})


const alternateStyles = document.querySelectorAll(".alternate-style");
// console.log(alternateStyles);

function setActiveStyle(color) {
    localStorage.setItem("color", color);
    // console.log(localStorage.getItem("color"));
    // console.log(color)
    changeColor();
}
function changeColor() {
    alternateStyles.forEach((style)=>{
        // console.log(style);
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.getAttribute("disabled", "true");
        }
    })
}
// setActiveStyle()
// checking if color key exists
if(localStorage.getItem("color") !== null){
    // console.log("exists");
    changeColor();
}
// else{
//     console.log("doesn't exist");
// }











/*------------------------light and dark theme------------------------*/
const lightDark = document.querySelector(".black-white");

lightDark.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
    updateIcon();
})

function themeMd(){
    //checking if theme key exists
    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            document.body.classList.remove("dark");
        }
        else{
            document.body.classList.add("dark");
        }
    }
    updateIcon();
}
themeMd();

function updateIcon(){
    if(document.body.classList.contains("dark")){
        lightDark.querySelector("i").classList.add("fa-sun");
        lightDark.querySelector("i").classList.remove("fa-moon");
    }
    else{
        lightDark.querySelector("i").classList.add("fa-moon");
        lightDark.querySelector("i").classList.remove("fa-sun");
    }
}


$(".last-btn").click(function () {
            
    alert("Do you really want to remove the neumorphism effect? Once clicked the btn will not function!")
    $("div").removeClass("outer-shadow");
    $("div").removeClass("hover-in-shadow");
    $("div").find(".contact-item-inner").addClass("background");
    $(".btn-1").removeClass("outer-shadow");
    $(".btn-1").addClass("background");
    $(".social-links").find("a").removeClass("outer-shadow").addClass("background");
    $(".about-info").find("a").removeClass("outer-shadow").addClass("background");
    $("div").find(".input-group").addClass("background");
    $("div").find(".test-item").addClass("background");
    $("div").find(".portfolio-item-inner").addClass("background");
    $("div").find(".service-icon").addClass("background");
    $("div").find(".timeline-icon").addClass("background");
    $("img").removeClass("outer-shadow");
    $(".last-btn").hide();

});
