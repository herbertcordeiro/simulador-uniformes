<template>
    <div class="menu">
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
    name: "Menu"
}
</script>

<style>
    .menu {
        grid-area: menu;
        background-color: #003554;
    }

</style>
