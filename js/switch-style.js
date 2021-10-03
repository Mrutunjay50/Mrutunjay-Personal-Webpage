/*-----------------toggle style switcher--------------------*/
const styleToggler = document.querySelector(".style-toggler");

styleToggler.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})


/*---------------Hide style switcher on scroll----------------*/
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.toggle("open");
    }
})


const alternateStyles = document.querySelectorAll(".alternate-style");
console.log(alternateStyles)

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