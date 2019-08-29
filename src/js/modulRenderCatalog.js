export default function modulRenderCatalog() {
    const cards = document.querySelectorAll('.goods .card'),
        btnCatalog = document.querySelector('.catalog-button'),
        catalogWraper = document.querySelector('.catalog'),
        catalogUl = document.querySelector('.catalog-list'),
        catalog = new Set();

    cards.forEach((e) => {
        catalog.add(e.dataset.category);
    });

    catalog.forEach((item) => {
        let catalogUlLi = document.createElement('li');
        catalogUlLi.textContent = item;
        catalogUl.appendChild(catalogUlLi);
    });

    btnCatalog.addEventListener('click', function (event) {
        if (catalogWraper.style.display){
            catalogWraper.style.display = '';
        } else{
            catalogWraper.style.display = 'block';
        }

        if (event.target.tagName === 'LI'){
            cards.forEach((e) => {
                if (e.dataset.category == event.target.textContent){
                    e.parentNode.style.display = '';
                } else{
                    e.parentNode.style.display = 'none';
                }
            });
        }
    });
}