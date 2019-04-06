<template>
    <div class="container-coletes">
        <img class="coletes" :src="coletes">
        <div class="titulo-coletes">
            <h1>COLETES</h1>
            <h3>TEMOS COLETES PERSONALIZADOS</h3>
            <a href="#" class="btn-detalhes">
                <h4>MAIS DETALHES</h4>
            </a>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Coletes',
    data() {
        return {
            coletes: require('@/assets/coletes.png'),
        }
    }
}
</script>

<style>
    .container-coletes {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-area: coletes;
        height: 60vh;
        font-family: var(--fonte-primaria);
        background-image: 
            radial-gradient(
            circle at top,
            var(--azul-cobalto),
            var(--azul-marinho)
        );
    }

    .coletes {
        grid-column: 4 / 6;
        width: 35vh;
        align-self: center;
    }

    .titulo-coletes {
        grid-column: 7 / 10;
        align-self: center;
        color: #ffffff;
        text-align: end;
    }

    .titulo-coletes h3 {
        font-weight: lighter;
    }

</style>
