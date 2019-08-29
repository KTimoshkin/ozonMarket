export default function modulGetData() {
    let goodsWrapper = document.querySelector('.goods');
    return fetch('../db.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((data) => {
            return data;
        })
        .catch(err => {
            console.warn(err);
            goodsWrapper.innerHTML = '<div style="font-weight: bold;">Произошла ошибка</div>';
        });
}