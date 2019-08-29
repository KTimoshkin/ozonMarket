export default function modulActionFillter(){
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        goods = document.querySelector('.goods'),
        minFillterVal = document.getElementById('min'),
        maxFillterVal = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        btnSearch = document.querySelector('.search-btn');

    //action button
    discountCheckbox.addEventListener('change', function () {
        cards.forEach(function (e) {
            if (discountCheckbox.checked){
                if (!e.querySelector('.card-sale')){
                    e.parentNode.remove();
                }
            } else{
                goods.appendChild(e.parentNode);
            }
        });
    });

    //fillter
    minFillterVal.addEventListener('change', fillterPrice);
    maxFillterVal.addEventListener('change', fillterPrice);

    function fillterPrice() {
        cards.forEach(function (e) {
            let price = parseFloat(e.querySelector('.card-price').textContent);
            if ((minFillterVal.value && price < minFillterVal.value) || (maxFillterVal.value && price > maxFillterVal.value)){
                e.parentNode.style.display = 'none';
            } else{
                e.parentNode.style.display = '';
            }
        });
    }

    //search
    btnSearch.addEventListener('click', function () {
        let searchText = new RegExp(search.value.trim(), 'i');

        cards.forEach(function (e) {
            let cardTitle = e.querySelector('.card-title');

            if (!searchText.test(cardTitle.textContent)){
                e.parentNode.style.display = 'none';
            } else {
                e.parentNode.style.display = '';
            }
        });
    });
}