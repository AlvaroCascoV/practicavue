<template>
	<div class="container mt-4">
		<div>
			<div>
				<h1>Detalles del jugador {{ jugador.nombre }}</h1>
				<p>ID: {{ $route.params.idJugador }}</p>
				<img
					:src="jugador.imagen"
					alt="imagen jugador"
					style="height: 50px"
				/>
				<p>Pais: {{ jugador.pais }}</p>
				<p>Posicion: {{ jugador.posicion }}</p>
				<p>Fecha de nacimiento: {{ jugador.fechaNacimiento }}</p>
				<router-link
					class="btn btn-success"
					:to="'/jugadores/' + jugador.idEquipo"
					>Volver a jugadores</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import ServiceApuestas from '@/services/ServiceApuestas';
const service = new ServiceApuestas();

export default {
	name: 'DetallesJugadorComponent',
	data() {
		return {
			jugador: {},
		};
	},
	mounted() {
		if (this.$route.params.idJugador) {
			this.loadJugador();
		}
	},
	watch: {
		'$route.params.idJugador'(nextVal, oldVal) {
			if (nextVal && nextVal !== oldVal) {
				this.loadJugador();
			}
		},
	},
	methods: {
		loadJugador() {
			if (this.$route.params.idJugador) {
				service
					.findJugador(this.$route.params.idJugador)
					.then((result) => {
						this.jugador = result;
					});
			}
		},
	},
};
</script>

<style scoped></style>
