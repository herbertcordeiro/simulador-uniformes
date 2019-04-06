<template>
  <div id="app">
    <Navbar />
    <Menu />
    <Simulador />
    <Bandeira />
    <Merchandise />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/template/Navbar'
import Menu from '@/components/template/Menu'
import Bandeira from '@/components/template/Bandeira'
import MockupChoice from '@/components/simulator/MockupChoice'
import Simulador from '@/components/template/Simulador'
import Merchandise from '@/components/template/Merchandise'

export default {
  name: 'App',
  components: { Navbar, Menu, MockupChoice, Merchandise, Bandeira, Simulador },
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
    grid-template-rows: 30px 80px 1fr 1fr 1fr;
    grid-template-areas: "navbar" "menu" "simulador" "merchandise" "itens-disponiveis"
  }

</style>
