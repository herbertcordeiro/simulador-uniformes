<template>
    <div class="container-detalhes">
        <div class="content" :style="{ backgroundImage: 'url(\'' + backgroundEscudo + '\')' }">
            <h1>ESCUDOS</h1>
            <h3>BORDADO | APLICADO | TRADICIONAL</h3>
        </div>
        <div class="content" :style="{ backgroundImage: 'url(\'' + backgroundTecido + '\')' }">
            <h1>TECIDOS</h1>
            <h3>DIVERSIDADE | QUALIDADE</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Detalhes',
    data() {
        return { 
            backgroundEscudo: require('@/assets/home/escudo.png'),
            backgroundTecido: require('@/assets/home/tecido.png'),
        }
    }
}
</script>

<style>

.container-detalhes {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.content {
    color: #ffffff;
    font-family: var(--fonte-primaria);
    text-align: center;
    padding: 16vh;
    letter-spacing: 0.1em;
    background-size: 110%;
}

.content h3 {
    font-weight: lighter;
    padding: 6px;
}
</style>
