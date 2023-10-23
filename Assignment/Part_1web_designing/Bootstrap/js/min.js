const hambagerMenu = document.querySelector(".hambger-menu");
const Menu = document.querySelector("#navbar");

hambagerMenu.addEventListener("click" , () => {
    hambagerMenu.classList.toggle("active");
    Menu.classList.toggle("active");
})

        $(document).ready(function () {
            $("#open").click(function () {
                $("aside").toggleClass("close");
            })
        });