<template>
    <div class="catalog__main" id="catalog">
        <!-- отрисовываем каталог компонентами Item, передавая в компонент продукт/item через props -->
        <Item v-for="item of items" :key="item.productId" :item="item" @addSome="func"/>
    </div>
</template>

<script>
import Item from './Item'
import Basket from './Basket'

export default {
    components:{
        Item,
        Basket
    },
    data(){
        return {
            items:[],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
        }
    },
    mounted(){
        this.get(this.url).then(items => this.items = items);
        
    },
    methods:{
        get(url){
           return fetch(url).then(data => data.json())
        },
        func(payload){
            console.log(payload)
            this.$emit('add', payload)
        }
    }
   
}
</script>

<style>

</style>