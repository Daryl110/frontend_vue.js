<template>
  <div class="home">
    <img alt="logo aplicacion" src="../assets/logo.png" width="60px" height="50px">
    <HelloWorld msg="Bienvenidos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
