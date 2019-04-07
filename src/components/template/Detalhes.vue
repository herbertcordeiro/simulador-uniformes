<template>
  <div class="itens-disponiveis">
    <div class="container-menor textWithBlurredBg">
      <img class="image-itens" :src="backgroundEscudo">
      <h1>ESCUDOS</h1>
      <h3>BORDADO | APLICADO | TRADICIONAL</h3>
    </div>
    <div class="container-menor textWithBlurredBg">
      <img class="image-itens" :src="backgroundTecido">
      <h1>TERCIDOS</h1>
      <h3>DIVERSIDADE | QUALIDADE</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detalhes",
  data() {
    return {
      backgroundEscudo: require("@/assets/home/escudo.png"),
      backgroundTecido: require("@/assets/home/tecido.png")
    };
  }
};
</script>

<style>
.itens-disponiveis {
    display: grid;
    grid-area: detalhes;
    grid-template-columns: 1fr 1fr;
    font-family: var(--fonte-primaria);
    letter-spacing: 0.1em;
}

.image-itens {
    width: 100%;
    height: 100%;
    object-fit: cover;
    align-items: center;
    filter: brightness(60%);
}

.textWithBlurredBg {
    height: 40vh;
    display: inline-block;
    position: relative;
    transition: 0.3s;
}

.textWithBlurredBg img {
    width: 100%;
    height: 100%;
    transition: 0.3s;
}

.textWithBlurredBg:hover img {
  filter: blur(0.1px) brightness(40%);
}

.textWithBlurredBg :not(img) {
    position: absolute;
    z-index: 1;
    top: 45%;
    width: 100%;
    text-align: center;
    color: #fff;
}

.textWithBlurredBg h3 {
    top: 55%;
    font-weight: lighter;
}

.textWithBlurredBg:hover :not(img) {
    opacity: 10;
}

</style>
