<template>
    <div class="container-soccer">
        <div class="menu-simulador">
            <ul>
                <li>
                    <a href="#">CORES</a>
                </li>
                <li>
                    <a href="#">ESCUDO</a>
                </li>
                <li>
                    <a href="#">MANGA</a>
                </li>
                <li>
                    <a href="#">GOLA</a>
                </li>
                <li>
                    <a href="#">PATROCÍNIO</a>
                </li>
                <li>
                    <a href="#">NÚMERO</a>
                </li>
            </ul>
        </div>
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
                <div id="cores-simulador">
                    
                </div>
            </div>
        </div>
        <div class="mockups-simulador">
            <div class="frente"></div>
            <div class="costa"></div>
        </div>
        <div class="opcoes-simulador">
            <div class="salvar"></div>
            <div class="compartilhar"></div>
            <div class="orcamento"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Soccer',
}
</script>

<style>

.container-soccer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;
}

.descricao-menu {
    display: grid;
    grid-column: 1;
    margin: 60px;
    border-radius: 20px;
    width: 360px;
    height: 500px;
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
    padding: 20px;
    height: 16px;
    color: #ffffff;
    font-family: var(--fonte-secundaria);
    font-size: 0.9em;
}

.cores-detalhes {
    border: solid 1px black;
    height: 160px;
    width: 360px;
}

.cores-detalhes button {
    padding: 10px;
    width: 82px;
    border: none;
    background-color: var(--azul-marinho);
    color: #ffffff;
    border-radius: 10px 0;
}

.parte-uniforme {
    height: 60px;
    border: none;
    border-radius: 80px;
    background-color: var(--azul-prusia);
    font-family: var(--fonte-primaria);
    font-size: 1em;
    color: #ffffff;
}

.opcoes-simulador {
    display: grid;
    grid-column: 3;
    margin: 60px;
    border-radius: 20px;
    width: 360px;
    height: 300px;
    text-align: center;
    border: 1px solid;
}

</style>
