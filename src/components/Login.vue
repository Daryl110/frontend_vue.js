<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <input type="email" v-model="correo" placeholder="Correo" class="input">
      <input type="password" v-model="password" placeholder="Contraseña" class="input">
      <button type="submit" @click.prevent="login()">Ingresar</button>
      <br>
      <router-link to="/registro" class="link">Registrarse</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      correo: '',
      password: '',
      token: ''
    }
  },
  methods: {
    login() {

    }
  }
};
</script>

<style scoped>
.login {
  background-color: #4caf50;
  padding: 2em;
  margin: auto;
  width: 360px;
}
.input {
  background-color: #f2f2f2;
  border: 0;
  margin: 0 0 1em;
  padding: 1em;
  width: 100%;
}
button {
  background-color: #19461a;
  border: 0;
  color: #ffffff;
  text-transform: uppercase;
  padding: 1em;
  width: 100%;
}
button:hover {
  background-color: #e9f1e9;
  color: black;
  cursor: pointer;
}
.link {
    color: white;
}
.link:hover {
    color: #19461a;
}
</style>
