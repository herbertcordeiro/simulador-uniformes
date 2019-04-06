<template>
    <div class="menu">
        <img class="image" :src="viaJs">
        <nav class="option">
            <ul>
                <li>
                    <a href="#">INÍCIO</a>
                </li>
                <li>
                    <a href="#">EMPRESA</a>
                </li>
                <li>
                    <a href="#">CONTATO</a>
                </li>
                <li>
                    <a href="#">CATÁLOGO</a>
                </li>
                <li>
                    <a href="#">PORTFÓLIO</a>
                </li>
                <li>
                    <a href="#">SIMULADOR</a>
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
        background-color: #003554;
        grid-template-columns: repeat(12, 1fr);
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

    ul {
        padding: 0px;
        margin: 0px;
        list-style: none;
    }

    li { 
        display: inline; 
    }

    a {
        padding: 2px 5px;
        display: inline-block;
        color: #ffffff;
        text-decoration: none;
    }
</style>
