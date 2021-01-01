<template>
  <div>
      <h1>Hello. {{ extData }}</h1>
      <p>{{ number }}</p>
      <button 
        @click="number++"
        class="some class"
      >+</button>
  </div>
</template>

<script>
export default {
  data(){
      return {
          number: 42
      }
  },
  //props: ['extData']  
  //пропс - объект свойств, где укажем дефолтное знаечние, если проп не передан
  props:{
      extData:{
          type: String,
          default: 'Default value'
      }
  }
}
</script>

<style>
    body{
        padding: 30px;
    }
</style>