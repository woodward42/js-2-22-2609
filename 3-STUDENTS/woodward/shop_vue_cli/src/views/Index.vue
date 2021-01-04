<template>
<div>
    <div class="page" id="page">
        <header class="header center">
            <HeaderLeft />  
            <Basket ref="basket"/>
        </header>
        <Nav />
        <Promo />
        <Products />
        <Catalog @add="_add"/>
        <Offer />
        <Subcribe />
        <Contacts />
        <Footer />
    </div>
<!-- POP-UP
<div class="popup" id="popup">
    <button class="popup__close" id="close"><i class="fa fa-close"></i></button>
    <div class="popup__wrapper">
        <button id="prev" class="popup__prev"><i class="fas fa-chevron-left"></i></button>
        <img src="" alt="#" id="main-pic" class="popup__main">
        <button id="next" class="popup__next"><i class="fas fa-chevron-right"></i></button>
    </div>  
    <div id="carousel" class="popup__carousel" name="carousel">
        
    </div>
</div>
    -->
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Catalog from '../components/Catalog.vue'
import Basket from '../components/Basket.vue'
import Item from '../components/Item'

//import UIComponents
import HeaderLeft from '../components/UIComponents/HeaderLeft.vue'
import Nav from '../components/UIComponents/Nav.vue'
import Promo from '../components/UIComponents/Promo.vue'
import Products from '../components/UIComponents/Products.vue'
import Offer from '../components/UIComponents/Offer.vue'
import Subcribe from '../components/UIComponents/Subcribe.vue'
import Contacts from '../components/UIComponents/Contacts.vue'
import Footer from '../components/UIComponents/Footer.vue'



export default {
  name: 'Home',

  components: {
    HelloWorld,
    Catalog,
    Basket,
    Item,
    HeaderLeft,
    Nav,
    Promo,
    Products,
    Offer,
    Subcribe,
    Contacts,
    Footer

  },
  methods: {
    _add(it) {
        this.$refs.basket.add(it);
    }
  },
}
</script>
