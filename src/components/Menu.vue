<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Mi Aplicación</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/apuestas">Apuestas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jugadores">Jugadores</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detalles-jugador">Detalles Jugador</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/equipos">Equipos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/insertar-apuesta">Insertar Apuesta</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuComponent'
}
</script>

<style scoped>
.nav-link.router-link-active {
  font-weight: bold;
}
</style>

