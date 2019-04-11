<template>
    <div class="container-catalogo">
        <h1 class="titulo">CATÁLOGO</h1>
        <div class="content-primeiro-modelo">
            <img class="primeiro-modelo" :src="primeiroModelo">
            <a href="#" class="btn-detalhes-modelo">
                <h4>MODELO 01-2019</h4>
            </a>
        </div>
        <div class="content-segundo-modelo">
            <img class="primeiro-modelo" :src="primeiroModelo">
            <a href="#" class="btn-detalhes-modelo">
                <h4>MODELO 01-2019</h4>
            </a>
        </div>
        <div class="content-terceiro-modelo">
            <img class="primeiro-modelo" :src="primeiroModelo">
            <a href="#" class="btn-detalhes-modelo">
                <h4>MODELO 01-2019</h4>
            </a>
        </div>
        <div class="content-quarto-modelo">
            <img class="primeiro-modelo" :src="primeiroModelo">
            <a href="#" class="btn-detalhes-modelo">
                <h4>MODELO 01-2019</h4>
            </a>
        </div>
        <div class="content-quinto-modelo">
            <img class="primeiro-time" :src="primeiroModelo">
            <a href="#" class="btn-detalhes-modelo">
                <h4>MODELO 01-2019</h4>
            </a>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Catalogo',
    data() {
        return {
            primeiroModelo: require('@/assets/catalogo/primeiroModelo.png'),
        }
    }
}
</script>

<style>
    .container-catalogo {
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

    .primeiro-modelo {
        display: grid;
        align-self: center;
        justify-self: center;
        width: 160px;
        transition: transform .2s;
    }

    .primeiro-modelo:hover {
        transform: scale(1.05);
    }

    .btn-detalhes-modelo {
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

    .btn-detalhes-modelo:hover {
        background-color: #ffffff;
        color: var(--azul-prusia);;
        box-shadow: inset 0 0 0 3px var(--azul-prusia);
    }

    .content-primeiro-modelo {
        display: grid;
        grid-column: 4;
        grid-row: 2;
    }

    .content-segundo-modelo {
        display: grid;
        grid-column: 6;
        grid-row: 2;
    }

    .content-terceiro-modelo {
        display: grid;
        grid-column: 8;
        grid-row: 2;
    }

    .content-quarto-modelo {
        grid-column: 10;
        display: grid;
        grid-row: 2;
    }

    .content-quinto-modelo {
        grid-column: 12;
        display: grid;
        grid-row: 2;
    }

</style>
