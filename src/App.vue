<template>
  <div id="app">
    <Navbar />
    <Menu />
    <Simulador />
    <Merchandise />
  </div>
</template>

<script>
import Navbar from '@/components/template/Navbar'
import Menu from '@/components/template/Menu'
import Simulador from '@/components/template/Simulador'
import Merchandise from '@/components/template/Merchandise'

export default {
  name: 'App',
  components: { Navbar, Menu, Simulador, Merchandise }
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
    grid-template-rows: 30px 80px 1fr 80px 70px;
    grid-template-areas: "navbar" "menu" "simulador" "merchandise"
  }

</style>
