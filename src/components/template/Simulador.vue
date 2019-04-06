<template>
    <div class="background">
        <div class="titulo-simulador">
            <h1>SIMULADOR</h1>
            <h3>PERSONALIZE SEU UNIFORME</h3>
            <a href="#" class="btn-detalhes">
                <h4>MAIS DETALHES</h4>
            </a>
        </div>
        <div class="opcoes">        
            <div class="det-simulador detalhes">
                <h3>SIMULADOR</h3>
            </div>
            <div class="det-catalogo detalhes">
                <h3>CATÁLOGO</h3>
            </div>
            <div class="det-portfolio detalhes">
                <h3>PORTFÓLIO</h3>
            </div>
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
        height: 70vh;
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
        border: none;
    }

    .btn-detalhes h4 {
        font-family: var(--fonte-secundaria);
        font-weight: bold;
        text-align: center;
        color: var(--azul-marinho);
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

    }

    .det-simulador {
        background-color: var(--azul-prusia);
    }

    .det-catalogo {
        background-color: var(--azul-cobalto);
    }

    .det-portfolio {
        background-color: var(--azul-celeste);
    }
</style>
