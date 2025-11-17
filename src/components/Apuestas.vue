<template>
	<div class="container mt-4">
		<h1>Apuestas</h1>
		<router-link to="/insertar-apuesta" class="btn btn-success"
			>Insertar Apuesta</router-link
		>
		<table class="table table-primary">
			<thead>
				<tr>
					<th>Usuario</th>
					<th>Resultado</th>
					<th>Fecha</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(apuesta, index) in apuestas" :key="index">
					<td>{{ apuesta.usuario }}</td>
					<td>{{ apuesta.resultado }}</td>
					<td>{{ apuesta.fecha }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import ServiceApuestas from '@/services/ServiceApuestas';
const service = new ServiceApuestas();

export default {
	name: 'ApuestasComponent',
	data() {
		return {
			apuestas: [],
		};
	},
	mounted() {
		this.loadApuestas();
	},
	methods: {
		loadApuestas() {
			service.getApuestas().then((result) => {
				this.apuestas = result;
			});
		},
	},
};
</script>

<style scoped></style>
