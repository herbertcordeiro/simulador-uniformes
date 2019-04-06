<template>
    <div id="conteudo">
        <div class="item">
            <div>
                <button class="bt">SIMULADOR</button><br/><br/>
            </div>
             
            <ul class="ul-links">
                <li id="links">
                    <a href="#">EMPRSA</a><br/>
                    <a href="#">CONTATO</a><br/>
                    <a href="#">UNIFORMES</a><br/>
                    <a href="#">CATÁLOGO</a><br/>
                </li>
            </ul>
        </div>
        <div class="item">
            <div class="cont">
                <p>(83) 99634-1333</p>
                <p>pranniesporte@hotmail.com</p>
            </div>
        </div>
        <div class="item">
            <div>
                <h4 class="hf">ONDE ESTAMOS</h4>
            </div>
            <div><p class="pf">Av.João Suassuma, 67</p>
                <p class="pf">Centro - CEP: 58345-000</p>
                <p class="pf"> Mari-Paraíba-Brasil</p>
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

.ul-links{
    position: relative;
    top: -5px;
    left: 100px;
}

.cont{
    position: relative;
    top: 60px;
    
}

.cont p{
    font-size: 15px;
    color: white;
    text-align: center;
    padding-block-end: 10px;
}

.funcionamento{
    font-size: 10px;
    color: white;
    text-align: right;
    position: relative;
    top: -5px;
    left: -100px;  
}

.pf{
    color:white;
    padding-block-end: 10px;
    font-size: 13px;
    text-align: right;
    position: relative;
    left: -100px;
}

.hf{
    color: white;
    padding-block-end: 15px;
    position: relative;
    left: -80px;
    font-size: 14px;
}

.bt{
    align-self: flex-start;
    padding: 5px;
    font-style: initial;
    position: relative;
    top: -5px;
    left: 100px;
    font-weight: bold;
}

.item a{
    color:rgb(36, 37, 66);
    padding: 5px;
    font-size: 14px;
}

#links li{
    align-items: center;
}

#links a{
    color: rgb(255, 255, 255);
    padding: 2px;
}

#conteudo {
    grid-area: footer;
    background:#04111b;
    height: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    top: -370px;
    }

.item {
    height: 200px;
    margin: 50px;
    background: #04111b;
    position: relative;
    top: 2px;       
    }

</style>