<template>
  <div id="app">
  
    <app-header></app-header>

    <transition enter-active-class="animated fadeIn">
          <router-view></router-view>
    </transition>

    <app-footer></app-footer>
   
  </div>
</template>

<script>
import appHeader from "./pages/shared/Header.vue";
import appFooter from "./pages/shared/Footer.vue";
export default {
  components:{
    appHeader:appHeader,
    appFooter:appFooter
  }
}
</script>

<style>
</style>
