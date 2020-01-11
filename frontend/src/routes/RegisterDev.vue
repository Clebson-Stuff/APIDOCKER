<template>
  <body>
    <div id="app">
      <div>
        <Navbar/>
      </div>
      <div id="cadastro">
        <form class="form-group" @submit.prevent="cadDeveloper">
            <!-- BTN Entre -->
            <a class="btn btn-sm btn-primary pl-4 pr-4 pt-2 pb-2 mt-n3 mb-3" id="btn-entra1">Cadastre-se</a>
            <!-- Informe campos -->
            <h5 class="mb-5">(Todos os campos devem ser preenchidos)</h5>

            <div class="row">
                <div class="col pr-4">
                    <!-- Input nome -->
                    <input type="name" id="inputname" v-model="developer.firstName" class="form-control mb-5" placeholder="Nome" required="" autofocus="">
                </div>
                <div class="col pl-4">
                    <!-- Input sobre nome -->
                    <input type="lastname" id="inputlastname" v-model="developer.lastName"  class="form-control mb-5" placeholder="Sobrenome" required="" autofocus="">
                </div>
            </div>

            <!-- Input email -->
            <input type="email" id="inputEmail" v-model="developer.email" class="form-control mb-5" placeholder="E-mail" required="" autofocus="">

            <!-- Input senha -->
            <input type="password" id="inputPassword" v-model="developer.password" class="form-control mb-5" placeholder="Senha" required="" autofocus="">

            <!-- Input senha -->
            <input type="password" id="inputCPassword" class="form-control mb-4" placeholder="Confirme a senha" required="" autofocus="">

            <!-- BTN cadastrar -->
            <button class="btn btn-sm btn-primary pl-4 pr-4 " type="submit" id="btn-entra2">Cadastrar</button>

            <p class="text-muted">
                <!-- Ancora retorno de menu -->
                <a c href="#">Volte ao menu</a>
            </p>
        </form>
    </div>

      <div>  
        <PFooter/>
      </div>
    </div>
  </body>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import PFooter from '../components/PFooter.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    PFooter
    }
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
