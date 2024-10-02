<script>
import axios from "axios"; // Import libreria axios;
import { store } from "../store/store";

export default {
  name: "Projects",
  data() {
    return {
      store,
      projects: [], // Creo un array vuoto dove salverò i progetti;
      tags: [], // Creo un array vuoto dove salverò tutti i TAG;
    };
  },
  mounted() {
    this.projectsCall();
    // this.tagsCall();
  },
  methods: {
    projectsCall() {
      axios
        .get(store.apiURL + "projects") // Chiamata API dei Progetti;
        .then((response) => {
          this.projects = response.data.data;
        })
        .catch((error) => {
          // Gestione degli errori
          console.error("Errore durante il recupero dei dati", error); //Messaggio di errore in caso di non riuscita;x\
        });
    },
    // tagsCall() {
    //   axios
    //   .get(store.apiURL + 'tags') // Chiamata API dei TAGS;
    //   .then(response => {
    //     this.tags = response.data;
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Errore durante il recupero dei dati', error); //Messaggio di errore in caso di non riuscita;x\
    //   });
    // }
  },
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
          <th scope="col">CATEGORY</th>
          <th scope="col">TAGS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <th>{{ project.id }}</th>
          <td>{{ project.title }}</td>
          <td>{{ project.slug }}</td>
          <td>{{ project.description }}</td>
          <td class="category">{{ project.category.name }}</td>
          <td>
            <div class="tags" v-for="tag in project.tags" :key="tag.id">{{ tag.name }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

/* General */
#view {
  min-height: 100%;
}

/* TAGS | CATEGORY */
.tags{
  border: 2px solid black;
  background: lightblue;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  margin: 5px;
}
</style>
