<template>
  <div id="app">
    <Navbar />
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/template/Navbar'
import Menu from '@/components/template/Menu'

export default {
  name: 'App',
  components: { Navbar, Menu },
}
</script>

<style>

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: grid;
    grid-template-areas: "navbar" "menu";
  }

  :root {
    --azul-celeste: #00A6FB;
    --azul-indigo: #0582CA;
    --azul-cobalto: #006494;
    --azul-prusia: #003554;
    --azul-marinho: #051923;
    --fonte-primaria: 'Bahnschrift';
    --fonte-secundaria:'Rubik', sans-serif;
;
}

</style>
