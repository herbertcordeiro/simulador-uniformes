<template>
    <div class="container-bandeiras" :style="{ backgroundImage: 'url(\'' + background + '\')' }">
        <div class="titulo-bandeiras">
            <h1>BANDEIRAS</h1>
            <h3>PERSONALIZE SUA BANDEIRA</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bandeiras',
    data() {
        return { 
            background: require('@/assets/home/bandeiras.png')
        }
    }
}
</script>

<style>

.container-bandeiras {
    display: grid;
    grid-area: bandeiras;
    grid-template-columns: repeat(12, 1fr);
    height: 60vh;
    background-size: cover; 
    border: none;
    filter: brightness(70%);
}

.titulo-bandeiras {
    grid-column: 4 / 6;
    align-self: center;
    color: var(--azul-marinho);
    font-family: var(--fonte-primaria);
}

.titulo-bandeiras h3 {
    font-weight: lighter;
}
</style>
