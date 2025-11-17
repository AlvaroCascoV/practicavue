import axios from 'axios';
import Global from '@/Global';

export default class ServiceApuestas {
	findEquipo(id) {
		return new Promise(function (resolve) {
			let request = 'api/Equipos/' + id;
			let url = Global.urlApuestas + request;
			let equipo = [];
			axios.get(url).then((response) => {
				equipo = response.data;
				resolve(equipo);
			});
		});
	}
	findJugadores(id) {
		return new Promise(function (resolve) {
			let request = 'api/Jugadores/JugadoresEquipos/' + id;
			let url = Global.urlApuestas + request;
			let jugadores = [];
			axios.get(url).then((response) => {
				jugadores = response.data;
				resolve(jugadores);
			});
		});
	}
	findJugador(id) {
		return new Promise(function (resolve) {
			let request = 'api/Jugadores/' + id;
			let url = Global.urlApuestas + request;
			let jugador = [];
			axios.get(url).then((response) => {
				jugador = response.data;
				resolve(jugador);
			});
		});
	}
}
