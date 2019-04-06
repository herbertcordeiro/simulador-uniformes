<template>
    <div class="home">
        <Simulador />
        <Merchandise />
        <Bandeira />
    </div>
</template>

<script>
import Bandeira from '@/components/template/Bandeira'
import MockupChoice from '@/components/simulator/MockupChoice'
import Simulador from '@/components/template/Simulador'
import Merchandise from '@/components/template/Merchandise'
export default {
    name: "Home",
    components: { MockupChoice, Merchandise, Bandeira, Simulador }
}
</script>

<style>
    .home { 
        display: grid;
        height: 40%;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: "simulador" "merchandise" "itens-disponiveis"
    }
</style>
