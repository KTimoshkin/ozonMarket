export default function modulAddCart() {
    //count case cart
    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countCard = document.querySelector('.counter');

    cards.forEach(function(card){
        const btnCard = card.querySelector('button');
        btnCard.addEventListener('click', function () {
            let cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();


            const btnRemove = cardClone.querySelector('.btn');
            btnRemove.textContent = 'Удалить из корзины';

            btnRemove.addEventListener('click', function () {
                cardClone.remove();
                showData();
            });
        });
    });

    //show data cart items
    function showData() {
        const cardsCard = cartWrapper.querySelectorAll('.card'),
            cartPrice = cartWrapper.querySelectorAll('.card-price'),
            cartTotal = document.querySelector('.cart-total span');

        let sum = 0;
        countCard.textContent = cardsCard.length;

        cartPrice.forEach(function (e) {
            let price = parseFloat(e.textContent);
            sum += price;
        });

        cartTotal.textContent = sum;

        if (cardsCard.length != 0){
            cartEmpty.remove();
        } else{
            cartWrapper.appendChild(cartEmpty);
        }
    }
}