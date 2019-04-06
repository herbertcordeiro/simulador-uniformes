<template>
    <div class="home">
        <Simulador />
        <Merchandise />
        <Bandeira />
        <Footer />
        <UniformeExclusivo />
    </div>
</template>

<script>
import Bandeira from '@/components/template/Bandeira'
import MockupChoice from '@/components/simulator/MockupChoice'
import Simulador from '@/components/template/Simulador'
import Merchandise from '@/components/template/Merchandise'
import Footer from '@/components/template/Footer'
import UniformeExclusivo from '@/components/template/UniformeExclusivo'

export default {
    name: "Home",
    components: { MockupChoice, Merchandise, UniformeExclusivo, Bandeira, Simulador, Footer}
}
</script>

<style>
    .home { 
        display: grid;
        height: 100vh;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: "background" "merchandise" "container-uniformes" "itens-disponiveis";
    }
</style>
