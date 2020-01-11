<template>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light  bg-light">
        <!-- Logo -->
        <a class="navbar-brand ml-4" href="#"><img src="../assets/img/logo/logo_pegadas.png" id="logo"></a>

        <!-- Btn de collapse navabr -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Atributos da navbar -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="nav justify-content-end mr-3">
                <li class="nav-item mr-5">
                    <a class="nav-link active" href="#">Inicio</a>
                </li>
                <li class="nav-item mr-5">
                    <a class="nav-link" href="#">Equipe</a>
                </li>
                <li class="nav-item mr-5">
                    <a class="nav-link" href="#">Sobre</a>
                </li>
                <li class="nav-item btn-sm">
                    <a class="nav-link pr-5 pl-5 pt-0 pb-0" href="#" tabindex="-1" aria-disabled="true" id="btn-cadastreJogo">Cadastre<br>seu jogo!</a>
                </li>
            </ul>
        </div>
        <!-- Fim da navbar -->
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>
.navbar {
    background-color: #FFFFFF;

}

.navbar #logo {
    width: 100%;
    height: 100%;
    max-width: 55%;
    max-height: 70%;
}

.navbar ul li a {
    font-size: 110%;
    color: #8D8181;
}

#btn-cadastreJogo {
    background-color: #28F250;
    color: #FFFFFF;
    border-radius: 30px;
    font-size: 90%;
}

.navbar-toggler {
    border: none;
    border: 1px solid #28F250;
    color: #28F250;
    border-radius: 7px;
}

.navbar-toggler .navbar-toggler-icon {
    font-size: 130%;
}

.nav-link:hover {
    color: #8D8181;
    border-width: 0 0 4px;
    border-style: solid;
    border-color: #28F250;
}

</style>


