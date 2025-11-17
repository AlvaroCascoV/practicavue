<template>
  <div class="container mt-4">
    <div>
      <router-link
        :to="'/equipos/' + $route.params.idEquipo"
        class="btn btn-danger"
      >
        Volver
      </router-link>

      <table class="table table-primary">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(jugador, index) in jugadores" :key="index">
            <td>{{ jugador.nombre }}</td>
            <td>
              <img
                v-if="jugador.imagen"
                :src="jugador.imagen"
                style="height: 50px"
                alt="imagen jugador"
              />
            </td>
            <td>
              <router-link
                class="btn btn-success"
                :to="'/detalles-jugador/' + jugador.idJugador"
              >
                Detalles
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServiceApuestas from '@/services/ServiceApuestas';
const service = new ServiceApuestas();

export default {
  name: 'JugadoresComponent',
  data() {
    return {
      jugadores: [],
    };
  },
  mounted() {
    if (this.$route.params.idEquipo) {
      this.loadJugadores();
    }
  },
  watch: {
    "$route.params.idEquipo"(nextVal, oldVal) {
      if (nextVal && nextVal !== oldVal) {
        this.loadJugadores();
      }
    },
  },
  methods: {
    loadJugadores() {
      if (this.$route.params.idEquipo) {
        service.findJugadores(this.$route.params.idEquipo).then((result) => {
          this.jugadores = result;
        });
      }
    },
  },
};
</script>

<style scoped>
</style>

