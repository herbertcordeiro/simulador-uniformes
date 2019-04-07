<template>
    <div class="home">
        <Simulador />
        <Merchandise />
        <UniformeExclusivo />
        <Bandeiras />
        <Coletes />
        <Detalhes />
        <Footer />
    </div>
</template>

<script>
import MockupChoice from '@/components/simulator/MockupChoice'
import Simulador from '@/components/template/Simulador'
import Merchandise from '@/components/template/Merchandise'
import UniformeExclusivo from '@/components/template/UniformeExclusivo'
import Bandeiras from '@/components/template/Bandeiras'
import Coletes from '@/components/template/Coletes'
import Detalhes from '@/components/template/Detalhes'
import Footer from '@/components/template/Footer'

export default {
    name: "Home",
    components: { MockupChoice, Merchandise, UniformeExclusivo, Simulador, Bandeiras, Coletes, Detalhes, Footer}
}
</script>

<style>
    .home { 
        display: grid;
        height: 100vh;
        grid-template-areas: 
            "background" "merchandise" "container-uniformes" "bandeiras" "coletes" "detalhes" "footer";
    }
</style>
