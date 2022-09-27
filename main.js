const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burger = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const productdetailcloseicon = document.querySelector('.product-detail-close');
const shoppingcartcontainer = document.querySelector('#shoppingcartcontainer');
const productdetailcontainer = document.querySelector('#productdetail');
const cardscontainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burger.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', toggleCarrito);
productdetailcloseicon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isshoppingcartcontainerclosed = shoppingcartcontainer.classList.contains('inactive');
    if (!isshoppingcartcontainerclosed) {
        shoppingcartcontainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingcartcontainerclosed = shoppingcartcontainer.classList.contains('inactive');
    if(!isshoppingcartcontainerclosed) {
        shoppingcartcontainer.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
}

function toggleCarrito() {
    const ismobilemenuopen = mobilemenu.classList.contains('inactive');
    
    if(!ismobilemenuopen) {
        mobilemenu.classList.add('inactive');
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }

    shoppingcartcontainer.classList.toggle('inactive');
}

function openProductDetailAsideMenu() {
    productdetailcontainer.classList.remove('inactive');
}

function closeProductDetail () {
    productdetailcontainer.classList.add('inactive');
}

const productlist = [];
productlist.push({
    name: 'Super Carrito',
    price: 100.000,
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productlist.push({
    name: 'Super Bike',
    price: 100.000,
    image: 'https://suzuki.com.co/sites/default/files/2021-11/LUCES%20FRONTALES%20LED.png',
});
productlist.push({
    name: 'Super Carrito',
    price: 200.000,
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productlist.push({
    name: 'Super Car',
    price: 500.000,
    image: 'https://images.pexels.com/photos/5763092/pexels-photo-5763092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productlist.push({
    name: 'Super Bike',
    price: 600.000,
    image: 'https://3j1z6j2up0jr3r2zz2111ri2-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/moto_ktm_rc_200_black_2020_foto4.png',
});


function renderProductList(product) {
    for (product of productlist) {
        const productcard = document.createElement('div');
        productcard.classList.add('product-card');
    
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAsideMenu);
    
    
        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info'); 
    
    
        const productinfodiv = document.createElement('div');
        const productprice = document.createElement('p');
        productprice.innerText = '$' + product.price;
        const productname = document.createElement('p');
        productname.innerText = product.name;
    
        productinfodiv.appendChild(productprice);
        productinfodiv.appendChild(productname);
    
        const productinfofigure = document.createElement('figure');
        const productimgcart = document.createElement('img');
        productimgcart.setAttribute('src',  './icons/bt_add_to_cart.svg');
    
        productinfofigure.appendChild(productimgcart);
    
        productinfo.appendChild(productinfodiv);
        productinfo.appendChild(productinfofigure);
    
        productcard.appendChild(img);
        productcard.appendChild(productinfo);
    
        cardscontainer.appendChild(productcard);
    }
}
renderProductList(productlist);
