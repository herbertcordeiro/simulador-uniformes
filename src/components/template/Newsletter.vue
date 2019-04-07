<template>
    <div class="container-newsletter">
        <div class="content-newsletter">
            <img :src="newsletter">
        </div>
        <div class="enviar-email">
            <input type="email"> <a href="#">Enviar</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Newsletter',
    data() {
        return {
            newsletter: require('@/assets/newsletter.png'),
        }
    }
}
</script>

<style>
    
    .container-newsletter {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        font-family: var(--fonte-primaria);
        color: var(--azul-marinho);
    }

    .content-newsletter {
        grid-column: 4 / 6;
    }
    
    .content-newsletter img {
        height: 40px;
        padding: 20px 0 20px 0;
    }


</style>
