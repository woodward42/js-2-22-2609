export default () => {
    let app = new Vue({
        el: '#app',
        data: {
            catalogItems: [],
            basketItems: [],
            showBasket: false,
            catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
        },
        methods: {
            get(url) {
                return fetch(url)
                    .then(data => data.json())
            },
            add(product) {
                let find = this.basketItems.find(el => el.productId == product.productId);
                // console.log(find)
                    if (!find) {
                        let newItem = Object.assign({}, product, { amount: 1 });
                        this.basketItems.push(newItem);
                    } else {
                        find.amount++;
                    }
            },        
            remove(id) {
                let find = this.basketItems.find(el => el.productId == id);
                console.log(id, this.basketItems)
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basketItems.splice(this.basketItems.indexOf(find), 1);
                }
            }
        },
        mounted() {
            this.get(this.catalogUrl).then(items => this.catalogItems = items);
            this.get(this.basketUrl).then(basket => this.basketItems = basket.content);
        }
    })
}