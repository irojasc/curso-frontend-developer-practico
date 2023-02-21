const nav_email = document.querySelector(".navbar-email");
const menu_container = document.querySelector(".desktop-menu")
const hamburguer_menu = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");
const carrito_icon = document.querySelector(".shopping-cart-icon");
const menu_shopping_cart = document.querySelector(".product-detail");

nav_email.addEventListener('click', toggleMenu);
hamburguer_menu.addEventListener('click', toggleMenu);
carrito_icon.addEventListener('click', toggleMenu);

function toggleMenu(event) {

    if(event.target.className == "navbar-email")
        menu_container.classList.toggle('inactive');

    else if(event.target.className == "menu"){
        mobile_menu.classList.toggle('inactive');
        if (!(menu_shopping_cart.classList.contains('inactive'))){
                menu_shopping_cart.classList.add('inactive');
                }
            }
            
    else if(event.target.className == "shopping-cart-icon"){
        menu_shopping_cart.classList.toggle('inactive');
        if (!(mobile_menu.classList.contains('inactive'))){
            mobile_menu.classList.add('inactive');
            }
        }
}