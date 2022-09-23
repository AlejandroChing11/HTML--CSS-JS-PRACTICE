const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burger = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const pdetails = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burger.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu() {
    const ispdetailsclosed = pdetails.classList.contains('inactive');
    if (!ispdetailsclosed) {
        pdetails.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const ispdetailsclosed = pdetails.classList.contains('inactive');
    if(!ispdetailsclosed) {
        pdetails.classList.add('inactive');
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

    pdetails.classList.toggle('inactive');
}
