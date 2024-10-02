<script>
import axios from "axios";
import { store } from "../store/store";

export default {
  name: "PostInfo",
  data() {
    return {
      project: [], // Costante del progetto;
      store,
    //   project: "",
    };
  },
  methods: {
    getApiSlug() {
      const slug = this.$route.params.slug;
      axios
        .get(store.apiURL + "project-by-slug/" + slug)
        .then((response) => {
          this.project = response.data.project;
          console.log(slug);
          console.log(this.project);
        })
        .catch((error) => {
          // Gestione degli errori
          console.error("Errore durante il recupero dei dati", error); //Messaggio di errore in caso di non riuscita;x\
        });
    },
  },
  mounted() {
    const slug = this.$route.params.slug;
    // console.log(slug);

    this.getApiSlug();
  },
};
</script>

<template>
  <div class="container my-5">
    <h1>{{ project.title }} | <span style="color: red">{{ project.id }}</span></h1>

    <p>SLUG:  {{ project.slug }}</p>
    <p>DESCRIPTION: {{ project.description}}</p>
    <p v-if="project.tags">TAGS: {{ project.tags.name }}</p>
    <p v-else> NO TAGS</p>
    <p v-if="project.category">CATEGORY: {{ project.category.name}}</p>
    <p v-else>NO CATEGORY</p>
  </div>
</template>

<style scoped></style>
