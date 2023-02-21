const nav_email = document.querySelector(".navbar-email");
const menu_container = document.querySelector(".desktop-menu")

nav_email.addEventListener('click', hidde_menu);

function hidde_menu(){
    menu_container.classList.toggle('inactive'); // agrega la clase inactive
}