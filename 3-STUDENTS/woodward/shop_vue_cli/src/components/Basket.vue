<template>
<div>
    <button id="basket-toggler" @click="showBasket = !showBasket">
        <img class="header__cart" src="../../src/assets/imgs/cart.png" alt="cart">
    </button>
     <div id="basket-items">
        <div class="drop__box">
            <div class="drop" id="basket" v-show="showBasket">
                <Item v-for="item of items" :key="item.productId" :item="item" type="basket"/>
                <div class="drop__total">
                <div>TOTAL</div>
                <div id="total-sum"></div>
                </div>
            <a href="checkout.html" class="drop__link">Checkout</a>
            <a href="#" class="drop__link">Go to cart</a> 
            </div>
            
        </div>
     </div>
</div>
</template>

<script>
import Item from './Item'


export default {
    components:{
        Item
    },
    data(){
        return {
            items: [],
            showBasket: false,
            basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
        }
    },
    mounted(){
      this.get(this.basketUrl).then(basket => this.items = basket.content)

    },
    methods:{
        get(url){
           return fetch(url).then(data => data.json())
        },
        add(product) {
                let find = this.items.find(el => el.productId == product.productId);
                // console.log(find)
                    if (!find) {
                        let newItem = Object.assign({}, product, { amount: 1 });
                        this.items.push(newItem);
                    } else {
                        find.amount++;
                    }
        },        
        remove(id) {
            let find = this.items.find(el => el.productId == id);
            console.log(id, this.items)
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }
        }
    }
}
</script>

<style>

</style>