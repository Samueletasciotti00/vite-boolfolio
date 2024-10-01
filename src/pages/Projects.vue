<script>
import axios from 'axios'; // Import libreria axios;
import { store } from '../store/store';

export default {
  name: "Projects",
  data(){
    return{
        projects: [], // Creo un array vuoto dove salverò i progetti;
    }
  },
  mounted(){
    this.projectsCall();
  },
  methods:{
    projectsCall() {
        axios
        .get('http://127.0.0.1:8000/api/projects') // Chiamat API dei Progetti;
        .then(response => {
            this.projects = response.data.data;
            console.log(response.data.data);
        })
        .catch(error => {
          // Gestione degli errori
          console.error('Errore durante il recupero dei dati', error); //Messaggio di errore in caso di non riuscita;x\
        });
    }
  }
};
</script>

<template>
<div id="view" class="container my-5">
    <h1>Progetti</h1>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">TITLE</th>
      <th scope="col">SLUG</th>
      <th scope="col">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="project in projects" :key="project.id">
      <th>{{ project.id }}</th>
      <td>{{ project.title }}</td>
      <td>{{ project.slug }}</td>
      <td>{{ project.description }}</td>
    </tr>
   
  </tbody>
</table>
</div>
</template>

<style scoped>
#view{
  min-height: 100%;
}
</style>