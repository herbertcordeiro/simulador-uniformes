<template>
    <div class="merchandise">
        <img class="entrega-icon" :src="viaJs">   
            <h3 class="entrega">ENTREGAMOS PARA TODO BRASIL</h3>
        <img class="pagamento-icon" :src="viaJs2"> 
            <h3 class="juros">ATÉ 6x SEM JUROS NO CARTÃO</h3>
        <img class="seguranca-icon" :src="viaJs3">
            <h3 class="seguranca">COMPRA 100% SEGURA</h3> 
    </div>
</template>

<script>
export default {
    name: "Merchandise",
    data() {
        return { 
            viaJs: require('@/assets/entrega-icon.png'), 
            viaJs2: require('@/assets/pagamento-icon.png'),
            viaJs3: require('@/assets/seguranca-icon.png')
        }
    }
}
</script>

<style>
    .merchandise { 
        display: grid;
        grid-area: merchandise;
        height: 11vh;
        background-color: white;
        grid-template-columns: repeat(24, 1fr);
        font-size: 0.9em;
        color: #003554;
        font-family: var(--fonte-primaria);
    }

    .entrega-icon {
        grid-column: 5;
        justify-self: center;
        align-self: center;
        height: 35px;
    }

    .entrega {
        grid-column: 6 / 11;
        align-self: center;
    }

    .pagamento-icon {
        grid-column: 11;
        justify-self: center;
        align-self: center;
        height: 35px;
    }

    .juros {
        grid-column: 12 / 16;
        align-self: center;
    }
    
    .seguranca-icon {
        grid-column: 16;
        justify-self: center;
        align-self: center;
        height: 35px;
    }

    .seguranca {
        grid-column: 17 / 22;
        align-self: center;
    }

</style>
