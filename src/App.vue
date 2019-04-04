<template>
  <div id="app">
    <Navbar />
    <Menu />
  </div>
</template>

<script>
import Navbar from '@/components/template/Navbar'
import Menu from '@/components/template/Menu'

export default {
  name: 'App',
  components: { Navbar, Menu }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: Bahnschrift;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: grid;
    grid-template-rows: 30px 80px 1fr 380px 70px;
    grid-template-areas: "navbar" "menu"
  }

</style>
