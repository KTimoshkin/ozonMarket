export default function modulDisplayCart(){
    const btnCart = document.getElementById('cart'),
        modalCart = document.querySelector('.cart'),
        btnCartClose = document.querySelector('.cart-close');


    btnCart.addEventListener('click', function () {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalCart.style.backgroundColor = 'rgba(0,0,0,0.5)';
    });

    btnCartClose.addEventListener('click', function () {
        modalCart.style.display = 'none';
        document.body.style.overflow = '';
    });
}