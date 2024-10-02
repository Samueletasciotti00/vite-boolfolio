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
      page: 1, // Valore di partenza
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
    nextPage() {
      // Verifica del numero di pagine disponibili
      if (this.page < 11) {
        // Incremento l'indice di pagina
        this.page++;

        //Dichiaro le variavile di cambio pagina
        const pageURI = "?page=";

        // Svuoto l'array prima di fare una nuova richiesta API;
        this.projects = [];

        console.log(this.projects);
        axios
          .get(store.apiURL + "projects" + pageURI + this.page) // Chiamata API dei Progetti;
          .then((response) => {
            this.projects = response.data.data;
            console.log(response.data.data);
          })
          .catch((error) => {
            // Gestione degli errori
            console.error("Errore durante il recupero dei dati", error); //Messaggio di errore in caso di non riuscita;x\
          });
      }
    },
    prevPage() {
      // Verifica del numero di pagine disponibili
      if (this.page > 1) {
        // Diminuisco l'indice di pagina
        this.page--;

        //Dichiaro le variavile di cambio pagina
        const pageURI = "?page=";

        // Svuoto l'array prima di fare una nuova richiesta API;
        this.projects = [];

        console.log(this.projects);
        axios
          .get(store.apiURL + "projects" + pageURI + this.page) // Chiamata API dei Progetti;
          .then((response) => {
            this.projects = response.data.data;
            console.log(response.data.data);
          })
          .catch((error) => {
            // Gestione degli errori
            console.error("Errore durante il recupero dei dati", error); //Messaggio di errore in caso di non riuscita;x\
          });
      }
    },
  },
};
</script>

<template>
  <div id="view" class="container my-5">
    <h1>Progetti</h1>

    <!-- Gestione delle pagine -->
    <div class="container my-5 d-flex justify-content-around">
      <div>
        <button class="page" @click="prevPage"><i class="fa-solid fa-arrow-left "></i></button>
      </div>
      <div>
        <button class="page" @click="nextPage"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>

    <!-- Tabella risultati -->
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
          <td>
            <router-link :to="{name: 'PostInfo', params:{slug: project.slug}}">{{ project.title }}</router-link>
          </td>
          <td>{{ project.slug }}</td>
          <td>{{ project.description }}</td>
          <td class="category">{{ project.category.name }}</td>
          <td>
            <div class="tags" v-for="tag in project.tags" :key="tag.id">
              {{ tag.name }}
            </div>
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
.tags {
  border: 2px solid black;
  background: lightblue;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  margin: 5px;
}

.category {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  background: yellow;
  font-weight: 900;
}
</style>
