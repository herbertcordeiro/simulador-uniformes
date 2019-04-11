<template>
    <div class="container-portfolio">
        <h1 class="titulo">PORTFÓLIO</h1>
        <div class="content-primeiro-time">
            <img class="primeiro-time" :src="primeiroTime">
            <a href="#" class="btn-detalhes-times">
                <h4>CONFIANCA F.C.</h4>
            </a>
        </div>
        <div class="content-segundo-time">
            <img class="primeiro-time" :src="primeiroTime">
            <a href="#" class="btn-detalhes-times">
                <h4>CONFIANCA F.C.</h4>
            </a>
        </div>
        <div class="content-terceiro-time">
            <img class="primeiro-time" :src="primeiroTime">
            <a href="#" class="btn-detalhes-times">
                <h4>CONFIANCA F.C.</h4>
            </a>
        </div>
        <div class="content-quarto-time">
            <img class="primeiro-time" :src="primeiroTime">
            <a href="#" class="btn-detalhes-times">
                <h4>CONFIANCA F.C.</h4>
            </a>
        </div>
        <div class="content-quinto-time">
            <img class="primeiro-time" :src="primeiroTime">
            <a href="#" class="btn-detalhes-times">
                <h4>CONFIANCA F.C.</h4>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',    
    data() {
        return {
            primeiroTime: require('@/assets/portfolio/primeiroTime.png'),
        }
    }
}
</script>

<style>
    .container-portfolio {
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        grid-template-rows: 140px 1fr 1fr;
    }

    .titulo {
        grid-column: 8;
        padding: 5vh 0 5vh 0;
        color: var(--azul-prusia);
        font-family: var(--fonte-secundaria);
    }

    .primeiro-time {
        display: grid;
        align-self: center;
        justify-self: center;
        width: 160px;
        transition: transform .2s;
    }

    .primeiro-time:hover {
        transform: scale(1.05);
    }

    .btn-detalhes-times {
        display: grid;
        background-color:var(--azul-prusia);
        font-family: var(--fonte-secundaria);
        text-align: center;
        color: #ffffff;
        border-radius: 5vh;
        margin: 1vh;
        padding: 1vh;
        font-size: 0.8em;
    }

    .btn-detalhes-times:hover {
        background-color: #ffffff;
        color: var(--azul-prusia);;
        box-shadow: inset 0 0 0 3px var(--azul-prusia);
    }

    .content-primeiro-time {
        display: grid;
        grid-column: 4;
        grid-row: 2;
    }

    .content-segundo-time {
        display: grid;
        grid-column: 6;
        grid-row: 2;
    }

    .content-terceiro-time {
        display: grid;
        grid-column: 8;
        grid-row: 2;
    }

    .content-quarto-time {
        grid-column: 10;
        display: grid;
        grid-row: 2;
    }

    .content-quinto-time {
        grid-column: 12;
        display: grid;
        grid-row: 2;
    }

</style>
