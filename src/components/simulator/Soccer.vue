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
                <button v-on:click="option(1)" class="cor1">COR 1</button>
                <button v-on:click="option(2)" class="cor2">COR 2</button>
                <button v-on:click="option(3)" class="cor3">COR 3</button>
                <button v-on:click="option(4)" class="cor4">COR 4</button>
                <div id="cores-simulador">
                    <div id="choices"></div>
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
    import axios from 'axios'
    const colors = ["#FFFFFF", "#000000	", "#000080", "#006400", "#D2691E", "#FF0000", "#FF1493", "#FF00FF"];
    let item;
    let choices = document.getElementById('choices');
    console.log(choices)
    let details1 = document.getElementById('details-01');
    let details2 = document.getElementById('details-02');
    let details3 = document.getElementById('details-03');
    let details4 = document.getElementById('details-04');
    let details5 = document.getElementById('details-05');
    colors.forEach( (color) =>{
        let button = document.createElement('button');
        button.value = color;
        button.type = 'button';
        button.style.backgroundColor = color;
        button.addEventListener('click', handler(button));
        // choices.appendChild(button);
    });
    function handler(el, value) {
        return () => {
            if(item == 1) { 
                details1.style.fill = el.value;
            } else if(item == 2) {
                details2.style.fill = el.value;
            } else if(item == 3) {
                details3.style.fill = el.value;
            } else if(item == 4) {
                details4.style.fill = el.value;
            } else if(item == 5) {
                details5.style.fill = el.value;
            }
        }
    }
export default {
    name: 'Soccer',
    data: function() {
        return {
            shirts: [],
            shorts: [],
            socks: []
        }
    },
    methods: {
        option: function(value) {
        this.item = value;
        }
    },
    created: function() {
        axios
            .get("https://simulador-back.herokuapp.com/shirts")
            .then(response => {
                response.data.forEach(item => {
                    this.shirts.push(item.svg)
                });
            })
            .catch(e => {
                console.log(e);
            });
        axios
            .get("https://simulador-back.herokuapp.com/shorts")
            .then(response => {
                response.data.forEach(item => {
                    this.shorts.push(item.svg)
                });
            })
            .catch(e => {
                console.log(e);
            });
        axios
            .get("https://simulador-back.herokuapp.com/socks")
            .then(response => {
                response.data.forEach(item => {
                    this.socks.push(item.svg)
                });
            })
            .catch(e => {
                console.log(e);
            });
    },
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
