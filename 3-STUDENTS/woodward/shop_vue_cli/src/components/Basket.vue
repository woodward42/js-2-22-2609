<template>

<div class="header__right">
    <div class="header__bucket">
        <div class="header__count" id="basket-count"></div>
        <button id="basket-toggler" @click="showBasket = !showBasket">
        <img class="header__cart" src="../../src/assets/imgs/cart.png" alt="cart">
        </button>
            <div class="drop" id="basket" v-show="showBasket">
                <div id="basket-items">
                    <Item v-for="item of items" :key="item.productId" :item="item" type="basket"/>
                </div>    
                <div class="drop__total">
                    <div>TOTAL</div>
                    <div id="total-sum"></div>
                </div>
            <a href="checkout.html" class="drop__link">Checkout</a>
            <a href="#" class="drop__link">Go to cart</a>
            </div>
    </div>
    <a class="header__link" href="#">My Account</a>
</div>

</template>

<script>
import Item from './Item'
import $axXios from '../utils/axios/index.js'

export default {
    components:{
        Item
    },
    data(){
        return {
            items: [],
            showBasket: false,
            //basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
            //basketUrl: '/api/basket' //for Dev
            basketUrl: '/basket' //for Build
        }
    },
    mounted(){
      $axXios.get(this.basketUrl).then(items => this.items = items.content)

    },
    methods:{
        add(item) {
                let find = this.items.find(el => el.productId == item.productId);
                // console.log(find)
                    if (!find) {
                        let newItem = Object.assign({}, item, { amount: 1 });
                        $axXios.post(`${this.basketUrl}`, newItem)
                                .then(status => {
                                    if (status){
                                        this.items.push(newItem);
                                    }
                                })
                                .catch(e => {console.log(e)});
                    } else {
                         $axXios.put(`${this.basketUrl}/${find.productId}`, 1)
                                .then(status => {
                                    if (status){
                                            find.amount++;
                                    }
                                })
                                .catch(e => {console.log(e)});
                    }
        },        
        remove(id) {
            let find = this.items.find(el => el.productId == id);
                //console.log(id, this.items)
            if (find.amount > 1) {
                $axXios.put(`${this.basketUrl}/${find.productId}`, -1)
                       .then(status => {
                           if (status){
                                find.amount--;
                           }
                       })
                       .catch(e => {console.log(e)});
                
            } else {
                $axXios.delete(`${this.basketUrl}/${find.productId}`)
                       .then(status => {
                           if (status){
                               this.items.splice(this.items.indexOf(find), 1);
                           }
                       })
                       .catch(e => {console.log(e)});
                
            }
        }
    }
}
</script>

<style>

</style>