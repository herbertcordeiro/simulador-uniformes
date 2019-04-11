<template>
    <div class="container-portfolio">
        <div class="titulo">
            <h1>PORTFÓLIO</h1>
        </div>
        <div class="content-primeiro-time">
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
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 100px 1fr;
    }

    .titulo {
        grid-column: 6 / 9;
        padding: 3vh 0 3vh 0;
        color: var(--azul-prusia);
        font-family: var(--fonte-secundaria);
    }

    .content-primeiro-time {
        display: grid;
        grid-column: 3 / 5;
        grid-row: 2;
    }

    .primeiro-time {
        display: grid;
        align-self: center;
        justify-self: center;
        width: 16vw;
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
    }

    .btn-detalhes-times:hover {
        background-color: #ffffff;
        color: var(--azul-prusia);;
        box-shadow: inset 0 0 0 3px var(--azul-prusia);
    }
</style>
