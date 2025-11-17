<template>
	<nav class="navbar navbar-expand-sm bg-body-tertiary">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/">
				<img :src="logo" style="width: 60px" alt="Logo" />
			</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link
							class="nav-link active"
							aria-current="page"
							to="/"
						>
							Champions
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							aria-current="page"
							to="/apuestas"
						>
							Apuestas
						</router-link>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Equipos
						</a>
						<ul class="dropdown-menu">
							<li v-for="(equipo, index) in equipos" :key="index">
								<router-link
									class="dropdown-item"
									:to="'/equipos/' + equipo.idEquipo"
								>
									{{ equipo.nombre }}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';
import logo from '../assets/logo.png';

export default {
	name: 'MenuComponent',
	data() {
		return {
			equipos: [],
			logo: logo,
		};
	},
	mounted() {
		this.loadEquipos();
	},
	methods: {
		loadEquipos() {
			let request = 'api/equipos';
			let url = Global.urlApuestas + '/' + request;
			axios.get(url).then((response) => {
				console.log('Leyendo equipos');
				this.equipos = response.data;
			});
		},
	},
};
</script>

<style scoped>
.nav-link.router-link-active {
	font-weight: bold;
}
</style>
