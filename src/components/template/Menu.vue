<template>
    <div class="menu">
        <img class="image" :src="viaJs">
        <nav class="option">
            <ul>
                <li>
                    <a><router-link :to="{name:'Home'}">INÍCIO</router-link></a>
                </li>
                <li>
                    <a href="#">EMPRESA</a>
                </li>
                <li>
                    <a href="#">CONTATO</a>
                </li>
                <li>
                    <a><router-link :to="{name:'Catalogo'}">CATÁLOGO</router-link></a>
                </li>
                <li>
                    <a><router-link :to="{name:'Portfolio'}">PORTFÓLIO</router-link></a>
                </li>
                <li>
                    <a><router-link :to="{name:'MockupChoice'}">SIMULADOR</router-link></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return { viaJs: require('@/assets/logo.png') }
    }
}
</script>

<style>
    .menu {
        display: grid;
        grid-area: menu;
        height: 80px;
        background-color: var(--azul-prusia);
        grid-template-columns: repeat(12, 1fr);
        font-family: var(--fonte-primaria);
    }

    .image {
        grid-column: 3 / 6;
        align-self: center;
        height: 50px;
    }
    
    .option {
        grid-column: 6 / 11;
        align-self: center;
        justify-self: end;
        font-size: 0.9em;
    }

    .menu.ul {
        padding: 0px;
        margin: 0px;
        list-style: none;
    }

    .menu.li { 
        display: inline; 
    }

    .menu.a {
        padding:  2px 5px;  
        display:  inline-block;
        color:  #ffffff;
        text-decoration:  none;
    }

    li:hover {
        border-bottom:  2.5px solid #ffffff;
        padding-bottom:  31px;
    }
</style>
