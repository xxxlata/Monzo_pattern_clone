const clickHandler = document.querySelector(".menu_last");
const clickMenu = document.querySelector(".mobile_menu");
const close = document.querySelector("#mobile_i");

function open(){
    clickMenu.style.display = "block";
}

function closed(){
    clickMenu.style.display = "none";
}
  
clickHandler.addEventListener("click",open);
close.addEventListener("click",closed);