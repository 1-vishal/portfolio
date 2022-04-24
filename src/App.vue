<template>
  <div id="app">
    <PortfolioHome/>
  </div>
</template>

<script>
import PortfolioHome from './components/PortfolioHome.vue'

export default {
  name: 'App',
  components: {
    PortfolioHome
  }
}
</script>

<style>
#app {
  background: #000;
  color: #fff;
}
</style>
