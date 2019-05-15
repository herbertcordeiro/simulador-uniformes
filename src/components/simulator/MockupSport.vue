<template>
    <div class="content-mockup-sport">
        <div class="voltar">
        </div>
        <div class="mockups-frente">
            <img class="manequim" :src="frente">
            <img class="camisa" :src="camisaFrente1">
            <img class="calcao" :src="calcaoFrente1">
            <img class="meia" :src="meiaFrente1">
        </div>
        <div class="mockups-costa">
            <img class="manequim" :src="costas">
            <img class="camisa" :src="camisaCosta1">
            <img class="calcao" :src="calcaoCosta1">
            <img class="meia-costas" :src="meiaCosta1">
        </div>
        <div class="avancar">   
        </div>
    </div>
</template>

<script>
export default {
    name: 'MockupSport',
    data() {
        return {
            frente: require('@/assets/simulator/soccer/manequim.png'),
            costas: require('@/assets/simulator/soccer/manequim_costas.png'),
            camisaFrente1: require('@/assets/simulator/soccer/camisa-frente-01.svg'),
            calcaoFrente1: require('@/assets/simulator/soccer/calcao-frente-01.svg'),
            meiaFrente1: require('@/assets/simulator/soccer/meia-frente-01.svg'),
            camisaCosta1: require('@/assets/simulator/soccer/camisa-costa-01.svg'),
            calcaoCosta1: require('@/assets/simulator/soccer/calcao-costa-01.svg'),
            meiaCosta1: require('@/assets/simulator/soccer/meia-costa-01.svg'),
        }
    }
}
</script>

<style>

.content-mockup-sport {
    display: grid;
    grid-template-columns: 0.25fr 1fr 1fr 0.25fr;
    grid-area: mockup;
    margin-top: 60px;
}

.manequim {
    position: absolute;
}

/* gambiarra */

.camisa {
    margin: 10px 0 0 4px;
}

.calcao {
    margin: -28px 0 0 32px;
    height: 186px;
    width: 180px;
}

.meia {
    margin: 14px 0 0 20px;
}

.meia-costas {
    margin: 16px 0 0 15px;
}
</style>
