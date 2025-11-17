<template>
	<div class="container mt-4">
		<h1>Insertar Apuesta</h1>
		<form @submit.prevent="insertarApuesta">
			<div class="form-group">
				<label>ID Apuesta</label>
				<input
					type="number"
					class="form-control"
					v-model.number="idApuesta"
				/>
			</div>
			<div class="form-group">
				<label>Usuario</label>
				<input type="text" class="form-control" v-model="usuario" />
			</div>
			<div class="form-group">
				<label>Resultado</label>
				<input type="text" class="form-control" v-model="resultado" />
			</div>
			<div class="form-group">
				<label>Fecha</label>
				<input type="text" class="form-control" v-model="fecha" />
			</div>
			<button class="btn btn-success" type="submit">
				Insertar Apuesta
			</button>
		</form>
	</div>
</template>

<script>
import ServiceApuestas from '@/services/ServiceApuestas';
const service = new ServiceApuestas();

export default {
	name: 'InsertarApuestaComponent',
	data() {
		return {
			idApuesta: null,
			usuario: '',
			resultado: '',
			fecha: '',
		};
	},
	methods: {
		insertarApuesta() {
			console.log('Insertar Apuesta');

			let nuevaApuesta = {
				idApuesta: parseInt(this.idApuesta),
				usuario: this.usuario,
				resultado: this.resultado,
				fecha: this.fecha,
			};

			service.insertApuesta(nuevaApuesta).then(() => {
				console.log('Apuesta insertada');
				this.$router.push('/apuestas');
			});
		},
	},
};
</script>

<style scoped></style>
