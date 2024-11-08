import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import SeriesComponent from './components/SeriesComponent.vue'
import PersonajesSerie from './components/PersonajesSerie.vue'
import CreatePersonaje from './components/CreatePersonaje.vue'
import UpdatePersonaje from './components/UpdatePersonaje.vue'
import DeletePersonaje from './components/DeletePersonaje.vue'

//CREAMOS UNA CONSTANTE ARRAY PARA LA RUTA
const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/series/:id", component: SeriesComponent },
    { path: "/personajesSerie/:id", component: PersonajesSerie },
    { path: "/create", component: CreatePersonaje },
    { path: "/update", component: UpdatePersonaje },
    { path: "/delete/:id", component: DeletePersonaje },
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EN EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENRO DE Main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//POR ULTIMO EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;