<template>
    <div class="main">
        <h2 class="title">SIMULADOR DE UNIFORMES PADRONNI</h2>
        <h3 class="title">SELECIONE UM ESPORTE PARA INICIAR</h3>
        <div class="select-mockup">
            
            <div tabindex='0' v-on:click="selectMockup(item.name)" class="container-mockup zoom-img" v-for="item in mockups" :key="item.id">
                <h2 class="title">{{item.name}}</h2>
                <img class="mockup-img" :src="item.image">
            </div>
        </div>
    </div>
</template>

<style scoped>

    .main {
        text-align: center;
        padding: 60px;
    }

    .select-mockup {
        display: grid;
        width: 80%;
        padding-top: 2%;
        margin: 0 auto;
        grid-template-columns: 1fr 1fr 1fr;
        text-transform: uppercase;
        grid-column-gap: 2%;
    }

    .container-mockup {
        width: 70%;
        margin: 0 auto;
        border: 2px solid var(--azul-prusia);
        border-radius: 10px;
        padding-top: 20px;
    }

    .mockup-img {
        height: 100%;
        width: 100%;
        padding-top: 30%;
        position: relative;
        filter: brightness(90%);
        margin: 0 auto;
    }

    .title {
        color: var(--azul-prusia);
        font-family: var(--fonte-primaria);
        padding: 4px;
    }

    .zoom-img {
        display: inline-block;
        position: relative;
        transition: 0.3s;
    }

    .zoom-img img {
        transition: 0.5s;
    }

    .zoom-img:hover img {
        filter: brightness(99%);
        transform: scale(1.1);
    }

    .zoom-img :not(img) {
        position: absolute;
        z-index: 1;
        width: 100%;
        text-align: center;
        color: rgb(84, 83, 83);
    }

    .zoom-img:hover :not(img) {
        opacity: 10;
    }

</style>

<script>
import axios from 'axios'
import Router from 'vue-router'

export default {
    name: "MockupChoice",
    data: function() {
        return {
            mockups: [],
            selected: ""
        }
    },
    created: function() {
        axios
            .get("https://simulador-back.herokuapp.com/mockups")
            .then(response => {
                this.mockups = response.data;
                this.mockups.forEach(item => {
                    item.image = require("@/assets/simulator/"+item.name+"/"+item.image);
                });
            })
            .catch(e => {
                console.log(e);
            });
    },
    methods: {
    selectMockup: function (selected) {
      if (event) {
        this.selected = selected
      }
      this.$router.push('/simulador/futebol');
    }
  }

}
</script>