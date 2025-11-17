<template>
  <div class="container mt-4">
    <h1>Detalles de equipo {{ $route.params.idEquipo }}</h1>
    <div>
      <ul class="list-group">
        <div v-if="equipo && equipo.idEquipo">
          <li class="list-group-item">ID: {{ equipo.idEquipo }}</li>
          <li class="list-group-item">Nombre: {{ equipo.nombre }}</li>
          <li class="list-group-item">
            Imagen:
            <img
              v-if="equipo.imagen"
              :src="equipo.imagen"
              alt="imagen equipo"
              style="width: 150px"
            />
          </li>
          <li class="list-group-item">Champions: {{ equipo.champions }}</li>
          <li class="list-group-item">
            Web: <a :href="equipo.web" target="_blank">{{ equipo.web }}</a>
          </li>
          <li class="list-group-item">Descripcion: {{ equipo.descripcion }}</li>
          <li class="list-group-item">Finalista: {{ equipo.finalista }} vez</li>
          <li class="list-group-item">
            <router-link
              class="btn btn-success"
              :to="'/jugadores/'+equipo.idEquipo">
              Jugadores
            </router-link>
          </li>
        </div>
      </ul>
    
	</div>
</div>
</template>

<script>
import ServiceApuestas from '@/services/ServiceApuestas';
const service = new ServiceApuestas();

export default {
  name: 'EquiposComponent',
  data() {
    return {
      equipo: {},
    };
  },
  mounted() {
    if (this.$route.params.idEquipo) {
      this.loadEquipo();
    }
  },
  watch: {
    "$route.params.idEquipo"(nextVal, oldVal) {
      if (nextVal && nextVal !== oldVal) {
        this.loadEquipo();
      }
    },
  },
  methods: {
    loadEquipo() {
      if (this.$route.params.idEquipo) {
        service.findEquipo(this.$route.params.idEquipo).then((result) => {
          this.equipo = result;
        });
      }
    },
  },
};
</script>

<style scoped>
</style>

