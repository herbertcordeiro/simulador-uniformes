<template>
    <div class="content-footer">
        <div class="item-menu">
            <a href="#" class="btn btn-detalhes">                
                <h4>SIMULADOR</h4>
            </a>
            <ul class="ul-links">
                <li id="links">
                    <a href="#">EMPRESA</a><br/>
                    <a href="#">CONTATO</a><br/>
                    <a href="#">UNIFORMES</a><br/>
                    <a href="#">CATÁLOGO</a><br/>
                </li>
            </ul>
        </div>
        <div class="item-contato">
            <div class="cont">
                <p><i class="fas fa-phone"> </i>(83) 99634-1333</p>
                <p><i class="far fa-envelope"> </i> padronniesporte@hotmail.com</p>
            </div>
        </div>
        <div class="item-end">
            <div>
                <h3 class="titulo">ONDE ESTAMOS</h3>
            </div>
            <div><p class="pf">Av. João Suassuna, 67</p>
                <p class="pf">Centro - CEP: 58345-000</p>
                <p class="pf">Mari • Paraíba • Brasil</p>
                <br/>
                <p class="funcionamento">
                    Seg à sexta das 8h às 17h30<br/>
                    Sábado das 8h às 12h00
                </p>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>

    .content-footer {
        display: grid;
        background-color: var(--azul-marinho);
        color: #ffffff;
        height: 30vh;
        grid-template-columns: repeat(12, 1fr);
        font-family: var(--fonte-primaria);
        font-weight: lighter;
    }

    .btn, .titulo { 
        margin: 0 0 30px 0;
    }

    .item-menu {
        grid-column: 3 / 5;
        align-self: center;
    }

    .item-contato {
        grid-column: 6 / 8;
        text-align: center;
        align-self: center;
    }

    .item-end {
        grid-column: 9 / 11;
        text-align: end;
        align-self: center;
    }
    
    i {
        margin: 10px 10px 0 0;
    }

</style>