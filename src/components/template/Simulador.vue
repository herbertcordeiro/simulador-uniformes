<template>
    <div class="background">
        <div class="titulo-simulador">
            <h1>SIMULADOR</h1>
            <h3>PERSONALIZE SEU UNIFORME</h3>
            <a><router-link class="btn-detalhes" :to="{name:'MockupChoice'}"><h4>MAIS DETALHES</h4></router-link></a>
        </div>
        <div class="opcoes">
            <a class="det-simulador detalhes" href="#">
                <router-link class="btn-detalhes" :to="{name:'MockupChoice'}"><h3>SIMULADOR</h3></router-link>
            </a>
            <a class="det-catalogo detalhes" href="#">
                <h3>CATÁLOGO</h3>
            </a>
            <a class="det-portfolio detalhes" href="#">
                <h3>PORTFÓLIO</h3>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Simulador"
}
</script>

<style>
    .background { 
        display: grid;
        height: 78vh;
        grid-area: background;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: repeat(12, 1fr);
        background-color: var(--azul-marinho);
    }

    .titulo-simulador {
        grid-column: 3 / 11;
        align-self: end;
        color: #ffffff;
        font-family: var(--fonte-primaria);
    }

    .titulo-simulador h3 {
        font-weight: lighter;
    }

    .btn-detalhes {
        background-color: #ffffff;
        width: 130px;
        padding: 8px;
        margin: 6px 0 6px 0;
        font-family: var(--fonte-secundaria);
        font-weight: bold;
        text-align: center;
        color: var(--azul-marinho);
    }

    .btn-detalhes:hover {
        background-color: rgba(5, 25, 35, 0);
        color: #ffffff;
        box-shadow: inset 0 0 0 3px #ffffff;
    }

    .opcoes {
        display: grid;
        grid-column: 3 / 11;
        grid-row:  2 / 3;
        grid-template-columns: 1fr 1fr 1fr;
        font-family: var(--fonte-secundaria);
    }

    .detalhes {
        text-align: center;
        color: #ffffff;
        padding: 20px;
        align-self: end;
        letter-spacing: 0.1em;
    }

    .det-simulador {
        background-color: var(--azul-prusia);
    }

    .det-catalogo {
        background-color: var(--azul-indigo);
    }

    .det-portfolio {
        background-color: var(--azul-celeste);
    }

    .detalhes:hover {
        height: 6vh;
        background-color: #ffffff;
    }

    .det-simulador:hover,
    .det-catalogo:hover,
    .det-portfolio:hover {
        color: var(--azul-prusia);
    }

</style>
