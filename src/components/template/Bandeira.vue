<template>
    <div class="itens-disponiveis">
        <div class="bandeiras textWithBlurredBg">
            <img class="image-itens" :src="bandeiras">
            <h2>BANDEIRAS</h2>
            <h3>PERSONALIZE A SUA BANDEIRA</h3>
        </div>
        <div class="container-menor textWithBlurredBg">
            <img class="image-itens" :src="escudo">
            <h2>ESCUDOS</h2>
            <h3>BORDADO | APLICADO | TRADICIONAL</h3>
        </div>
        <div class="container-menor textWithBlurredBg">
            <img class="image-itens" :src="tecido">
            <h2>TERCIDOS</h2>
            <h3>DIVERSIDADE | QUALIDADE</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Bandeira",
    data() {
        return {escudo: require('@/assets/home/bordado-gola.png'),
                tecido: require('@/assets/home/tecido.png'),
                bandeiras: require('@/assets/home/bandeiras.png')
                }
    }
}
</script>
<style  >
    .itens-disponiveis {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 60% 40%;
        justify-items: stretch;
        align-items: stretch;
        height: 55%;
        box-shadow: inset 0px 0px 50px rgba(0,0,0,0.9);
    }
    .bandeiras {
        grid-column: 1 / span 2;
        justify-items: stretch;
        align-items: stretch;
    }
    .image-itens {
        float:left;
        width:100%;
        height:100%;
        object-fit: cover;
        align-items: center;
        filter: brightness(60%);
    }
    .textWithBlurredBg{
    height:auto;
    display:inline-block;
    position:relative;
    transition:.3s;
    }
    
    .textWithBlurredBg img{
        width:100%;
        height:100%;
        transition:.3s;
    }
    
    .textWithBlurredBg:hover img{
        filter:blur(0.1px) brightness(40%);
    }
    
    .textWithBlurredBg :not(img){
        position:absolute;
        z-index:1;
        top:40%;
        width:100%;
        text-align:center;
        color:#fff;
    }
    
    .textWithBlurredBg h3{
        top:50%
    }
    
    .textWithBlurredBg:hover :not(img){
        opacity:10;
    }
</style>


