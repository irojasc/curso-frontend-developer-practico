const nav_email = document.querySelector(".navbar-email");
const menu_container = document.querySelector(".desktop-menu")
const hamburguer_menu = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");
const carrito_icon = document.querySelector(".shopping-cart-icon");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

nav_email.addEventListener('click', toggleMenu);
hamburguer_menu.addEventListener('click', toggleMenu);
carrito_icon.addEventListener('click', toggleMenu);

function toggleMenu(event) {

    if(event.target.className == "navbar-email")
        menu_container.classList.toggle('inactive');

    else if(event.target.className == "menu"){
        mobile_menu.classList.toggle('inactive');
        if (!(shoppingCartContainer.classList.contains('inactive'))){
                shoppingCartContainer.classList.add('inactive');
                }
            }
            
    else if(event.target.className == "shopping-cart-icon"){
        shoppingCartContainer.classList.toggle('inactive');
        if (!(mobile_menu.classList.contains('inactive'))){
            mobile_menu.classList.add('inactive');
            }
        }
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'bike1',
    price: 115,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'bike2',
    price: 90,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


productList.push({
    name: 'bike3',
    price: 189,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'bike4',
    price: 219,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'bike5',
    price: 19,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg =  document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const empty_div = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');
        const productIconCart = document.createElement('img');
        productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productIconCart);

        empty_div.append(productPrice, productName);

        productInfo.append(empty_div, productInfoFigure);
        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);