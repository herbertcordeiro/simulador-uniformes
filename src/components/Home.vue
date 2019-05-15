<template>
    <div class="home">
        <Simulador />
        <Merchandise />
        <UniformeExclusivo />
        <Bandeiras />
        <Coletes />
        <Detalhes />
        <Newsletter />
        <Footer />
        <Rodape />
    </div>
</template>

<script>
import MockupChoice from '@/components/simulator/MockupChoice'
import BaseSimulator from '@/components/simulator/BaseSimulator'
import Simulador from '@/components/template/Simulador'
import Merchandise from '@/components/template/Merchandise'
import UniformeExclusivo from '@/components/template/UniformeExclusivo'
import Bandeiras from '@/components/template/Bandeiras'
import Coletes from '@/components/template/Coletes'
import Detalhes from '@/components/template/Detalhes'
import Newsletter from '@/components/template/Newsletter'
import Footer from '@/components/template/Footer'
import Rodape from '@/components/template/Rodape'
import Portfolio from '@/components/template/Portfolio'
import Catalogo from '@/components/template/Catalogo'

export default {
    name: "Home",
    components: {
        MockupChoice,
        BaseSimulator,
        Portfolio,
        Catalogo,
        Merchandise, 
        UniformeExclusivo, 
        Simulador, 
        Bandeiras, 
        Coletes, 
        Detalhes,
        Newsletter, 
        Footer,
        Rodape 
    }
}
</script>

<style>
    .home { 
        display: grid;
        height: 100vh;
        grid-template-areas: 
            "background" 
            "merchandise" 
            "container-uniformes" 
            "bandeiras" 
            "coletes" 
            "detalhes" 
            "newsletter" 
            "footer" 
            "rodape";
    }
</style>
