<template>
    <nav class="navbar">
        <h4 class="contact">CENTRAL DE ATENDIMENTO</h4>
        <h4 class="fone">(83) 99634-1333</h4> 
        <div class="social">
            <i class="fab fa-facebook-square"></i>        
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter-square"></i>   
        </div> 
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>
    .navbar {
        display: grid;
        grid-area: navbar;
        background-color: #ffffff;
        grid-template-columns: 1fr 1fr 1fr;
        font-size: 0.9em;
        color: #003554;
    }
    .contact {
        justify-self: end;
        align-self: center;
    }

    .fone {
        justify-self: center;
        align-self: center;
    }

    .social {
        font-size: 1.4em;
        align-self: center;
    }

</style>
