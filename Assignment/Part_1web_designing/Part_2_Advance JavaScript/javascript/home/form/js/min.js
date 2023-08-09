const show = document.getElementById("show");

function showPassword(){
    if(show.type === "password"){
        show.type = "type";
    }
    else{
        show.type = "password";
    }
}