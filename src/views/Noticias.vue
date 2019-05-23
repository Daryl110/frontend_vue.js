<template>
  <div>
    <h1>Noticias</h1>
    <form>
      <input type="number" v-model="id" placeholder="id" class="input">
      <input type="email" v-model="titulo" placeholder="titulo" class="input">
      <input type="text" v-model="descripcion" placeholder="descripcion" class="input">
      <button type="submit" @click.prevent="crear()" class="btn">Ingresar</button>
    </form>
    <br>
    <br>
    <div class="container">
      <article class="card" v-for="(noticia, index) in noticias" :key="index">
        <button class="btnEliminar" v-on:click="eliminar(noticia.id)">X</button>
        <h2>{{noticia.titulo}}</h2>
        <p>{{noticia.descripcion}}</p>
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      id: '',
      titulo: '',
      descripcion: '',
      noticias: [],
    }
  },
  mounted(){
    this.listar();
  },
  methods: {
    crear(){
      const data = {
        id: this.id,
        titulo: this.titulo,
        descripcion: this.descripcion,
      };
      axios.post('http://localhost:3000/Noticia', data).then(
        (response) => {
          this.$router.go('/notiicas')
        }
      );
    },
    listar(){
      axios.get('http://localhost:3000/Noticia').then(
        (response) => {
          this.noticias = response.data;
        }
      )
    },
    eliminar(id) {
      axios.delete('http://localhost:3000/Noticia/'+id).then(
        (response) => {
          console.log('noticia: '+id+'. Eliminada Correctamente!!!');
          this.$router.go('/noticias');
        }
      );
    }
  }
}
</script>


<style scoped>
.input {
  background-color: #f2f2f2;
  border: 0;
  margin: 0 0 1em;
  padding: 1em;
  width: 100%;
}
.btn {
  background-color: #19461a;
  border: 0;
  color: #ffffff;
  text-transform: uppercase;
  padding: 1em;
  width: 100%;
}
.btn:hover {
  background-color: #e9f1e9;
  color: black;
  cursor: pointer;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 30vw);
  grid-gap: 1em;
  justify-content: space-around;
}
.card {
  border: 1px solid gray;
  border-radius: 3px;
  padding: 0.5em;
}
.card:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}
.card:hover .btnEliminar{
  background-color: black;
  color: white;
}
.btnEliminar{
  border: 0;
  background-color: white;
  float: right;
}
.btnEliminar:hover{
  background-color: rgba(255, 38, 0, 0.959) !important;
  cursor: pointer;
}
@media(max-width: 420px){
  .container{
    grid-template: auto /95vw;
  }
}
</style>
