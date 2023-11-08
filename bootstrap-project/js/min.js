// navbar 

const hambugger = document.querySelector(".hambugger-menu");
const menu = document.querySelector("#navbar");

hambugger.addEventListener("click" , () => {
    hambugger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll("#navbar").forEach(n => n.
    addEventListener('click' , () => {
        hambugger.classList.remove("active");
        menu.classList.remove("active");
    })
)

document.addEventListener("scroll" , () => {
    if(window.scrollY > 18){
        menu.classList.add("remove");
    }
    else{
        menu.classList.remove("remove");
    }
} )

// header 

const header = document.querySelector("header");

document.addEventListener("scroll" , () => {
    if(window.scrollY > 150){
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky")
    }
})


// loder 

$(window).on('load' , function () {
    $(".preloder").fadeOut(4000);
    $("main").fadeIn(8000);
});