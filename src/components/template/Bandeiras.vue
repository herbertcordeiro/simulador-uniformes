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
    height: 60vh;
    background-size: cover; 
    border: none;
}

</style>
