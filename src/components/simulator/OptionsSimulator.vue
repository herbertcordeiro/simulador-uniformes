<template>
    <div class="content-options-simulator">
        <div class="descricao-menu">
            <div class="titulo-select">            
                <p>SELECIONE AS CORES DO UNIFORME</p>
            </div>
            <p class="clique-aqui">CLIQUE NAS PEÇAS ABAIXO PARA MUDAR A COR</p>
            <button class="parte-uniforme" >CAMISA</button>
            <button class="parte-uniforme" >CALÇÃO</button>
            <button class="parte-uniforme" >MEIÃO</button>
            <div class="cores-detalhes">
                <button class="cor1">COR 1</button>
                <button class="cor2">COR 2</button>
                <button class="cor3">COR 3</button>
                <button class="cor4">COR 4</button>
                <div id="cores-simulador" >

                 </div>
            </div>
        </div>
    </div>     
</template>

<script>
export default {
    name: 'OptionsSimulator'
}
</script>

<style>

.content-options-simulator {
    display: grid;
    grid-area: options-simulator;
        justify-content: center;
}

.descricao-menu {
    display: grid;
    margin-top: 60px;
    border-radius: 20px;
    width: 220px;
    height: 360px;
    text-align: center;
}

.clique-aqui {
    font-family: var(--fonte-secundaria);
    font-size: 0.7em;
    color: var(--azul-marinho);
}

.titulo-select {
    background-color: var(--azul-prusia);
    border-radius: 20px 20px 0 0;
    padding: 16px;
    height: 28px;
    color: #ffffff;
    font-family: var(--fonte-secundaria);
    font-size: 0.9em;
}

.cores-detalhes {
    border: solid 1px black;
    height: 60px;
    width: 260px;
}

.cores-detalhes button {
    padding: 8px;
    width: 60px;
    border: none;
    background-color: var(--azul-marinho);
    color: #ffffff;
    border-radius: 10px 0;
}

.parte-uniforme {
    height: 40px;
    border: none;
    border-radius: 80px;
    background-color: var(--azul-prusia);
    font-family: var(--fonte-primaria);
    font-size: 1em;
    color: #ffffff;
}
</style>
