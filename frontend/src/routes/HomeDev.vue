<template>
  <body>
    <div id="app">
      <div>
        <Navbar/>
      </div>
      <div id="teste">
          <h1 id="title">#Deixe a sua <br> Pegada</h1>
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
