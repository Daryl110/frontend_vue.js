<template>
  <div class="registro">
    <h1>Registro</h1>
    <form>
      <input type="text" v-model="nombreCompleto" placeholder="Nombre Completo" class="input">
      <input type="text" v-model="nombreUsuario" placeholder="Nombre de usuario" class="input">
      <input type="email" v-model="correo" placeholder="Correo" class="input">
      <input type="password" v-model="password" placeholder="Contraseña" class="input">
      <button type="submit" @click.prevent="singup()" >Registrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      nombreCompleto: '',
      nombreUsuario: '',
      correo: '',
      password: '',
    }
  },
  methods: {
    singup(){
      const data = {
        nombreCompleto: this.nombreCompleto,
        nombreUsuario: this.nombreUsuario,
        correo: this.correo,
        password: this.password,
      };
      axios.post('http://localhost:3000/Usuario',data).then(
        response => {
          this.$router.push('noticias');
        }
      );
    }
  }
};
</script>

<style scoped>
.registro {
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
