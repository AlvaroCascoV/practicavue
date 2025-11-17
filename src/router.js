import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/Home.vue';
import ApuestasComponent from './components/Apuestas.vue';
import DetallesJugadorComponent from './components/DetallesJugador.vue';
import EquiposComponent from './components/Equipos.vue';
import InsertarApuestaComponent from './components/InsertarApuesta.vue';
import JugadoresComponent from './components/Jugadores.vue';

const myRoutes = [
	{ path: '/', component: HomeComponent },
	{ path: '/apuestas', component: ApuestasComponent },
	{
		path: '/detalles-jugador/:idJugador',
		component: DetallesJugadorComponent,
	},
	{ path: '/equipos/:idEquipo', component: EquiposComponent },
	{ path: '/insertar-apuesta', component: InsertarApuestaComponent },
	{ path: '/jugadores/:idEquipo', component: JugadoresComponent },
];

const router = createRouter({
	history: createWebHistory(),
	routes: myRoutes,
});

export default router;
