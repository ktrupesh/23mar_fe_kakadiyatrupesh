const header = document.querySelector("header");

document.addEventListener("scroll" , () => {
    if(window.scrollY > 20){
        header.classList.add("top");
    }
    else{
        header.classList.remove("top");
    }
})


