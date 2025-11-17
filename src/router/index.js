import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Apuestas from '../components/Apuestas.vue'
import DetallesJugador from '../components/DetallesJugador.vue'
import Equipos from '../components/Equipos.vue'
import InsertarApuesta from '../components/InsertarApuesta.vue'
import Jugadores from '../components/Jugadores.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/apuestas',
    name: 'Apuestas',
    component: Apuestas
  },
  {
    path: '/detalles-jugador',
    name: 'DetallesJugador',
    component: DetallesJugador
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: Equipos
  },
  {
    path: '/insertar-apuesta',
    name: 'InsertarApuesta',
    component: InsertarApuesta
  },
  {
    path: '/jugadores',
    name: 'Jugadores',
    component: Jugadores
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

