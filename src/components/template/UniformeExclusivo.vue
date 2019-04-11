<template>
    <div tabindex='0' class="container-uniformes">
        <img tabindex='0' class="titulo-uniforme" :src="tituloUniforme">
        <img tabindex='0' class="exemplos-uniformes" :src="uniformes">
    </div>
</template>

<script>
export default {
    name: 'UniformeExclusivo',
    data() {
        return {
            uniformes: require('@/assets/uniformes.png'),
            tituloUniforme: require('@/assets/exclusividade.png'),
        }
    }
}
</script>

<style>
    .container-uniformes {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-area: container-uniformes;
        height: 80vh;
        background-image: 
            radial-gradient(
            circle at bottom,
            var(--azul-prusia),
            var(--azul-marinho)
        );
    }

   .titulo-uniforme {
        width: 45vh;
        justify-self: center;
        align-self: center;
    }

    .exemplos-uniformes {
        width: 90vh;
        justify-self: center;
    }
</style>
