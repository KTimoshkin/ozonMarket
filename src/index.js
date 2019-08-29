import './css/main.css';
import './sass/main.sass';

import modulGetData from './js/modulGetData';
import renderCards from './js/renderCards';
import modulCheckbox from './js/modulCheckbox';
import modulDisplayCart from './js/modulDisplayCart';
import modulAddCart from './js/modulAddCart';
import modulActionFillter from './js/modulActionFillter';
import modulRenderCatalog from './js/modulRenderCatalog';

(async function () {
    //get data
    const db = await modulGetData();

    //render cards
    renderCards(db);

    //custom checkbox
    modulCheckbox();

    //display cart
    modulDisplayCart();

    //add cart
    modulAddCart();

    //action filter
    modulActionFillter();

    //render catalog
    modulRenderCatalog();
})();