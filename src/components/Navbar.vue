<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div class="container my-5">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav g-5">
            <router-link class="m-5" to="/">Home</router-link>
            <router-link class="m-5" to="/projects">Projects</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
