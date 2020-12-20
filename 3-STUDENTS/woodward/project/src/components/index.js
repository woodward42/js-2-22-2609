import Catalog from './catalog.js'
import Basket from './basket'

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
}