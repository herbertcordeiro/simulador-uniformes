<template>
    <div tabindex='0' class="navbar">
        <h4 tabindex='0' class="contact">CENTRAL DE ATENDIMENTO</h4>
        <h4 tabindex='0' class="phone"><i class="fas fa-phone"></i> (83) 99634-1333</h4> 
        <div tabindex='0' class="social">
            <i tabindex='0' class="fab fa-facebook-square"></i>        
            <i tabindex='0' class="fab fa-instagram"></i>
            <i  tabindex='0' class="fab fa-twitter-square"></i>   
        </div> 
    </div>
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
        grid-template-columns: repeat(12, 1fr);
        font-size: 0.9em;
        color: var(--azul-prusia);
        font-family: var(--fonte-primaria);
        height: 40px;
    }
    
    .contact {
        grid-column: 3 / 6;
        align-self: center;
    }

    .phone {
        grid-column: 6 / 8;
        justify-self: center;
        align-self: center;
    }

    .social {
        grid-column: 10;
        font-size: 1.4em;
        justify-self: end;
        align-self: center;
    }

</style>
