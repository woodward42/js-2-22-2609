<template>
  <div>
      <strong>HI</strong>
      <TestComponent extData="static extData"/>
      <test-component :extData="fromData">tc</test-component>
      <custom-component-name>ccn</custom-component-name>
  </div>
</template>

<script>
//импортируем компоненты из папки components
import TestComponent from './components/test.vue'

export default {
    //это родительский контейнер для всех импортируемых компонентов
    /*
    Однофайловые вью компоненты, что отличается:
        1. Есть components (см ниже)
        2. data - это метод, который делает return
        3. Есть props в компоненте    
    */


    components:{
        'TestComponent': TestComponent,
        'customComponentName': TestComponent,
    },
    data(){
        return {
            fromData: 'text fromData'
        }
    }

}
</script>

<style>

</style>