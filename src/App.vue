<template>
  <div id="app">
    <Navbar />
    <Menu />
    <Bandeira></Bandeira>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/template/Navbar'
import Menu from '@/components/template/Menu'
import Bandeira from '@/components/template/Bandeira'
import MockupChoice from '@/components/simulator/MockupChoice'

export default {
  name: 'App',
  components: { Navbar, Menu, MockupChoice, Bandeira },
  created: function() {
  }
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
