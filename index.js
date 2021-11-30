const clickHandler = document.querySelector(".menu_last");
const clickMenu = document.querySelector(".mobile_menu");

function open(){
    clickMenu.style.display = "block";
}
  
clickHandler.addEventListener("click",open);
