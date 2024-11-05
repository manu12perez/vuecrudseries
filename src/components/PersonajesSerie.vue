<template>
  <div class="container mt-4">
    <!-- personajes[0]?.idSerie"  idSerie del primer personaje de la lista personajes. Si no hay personajes, 
    la expresión no producirá un error gracias al operador de encadenamiento opcional (?.). -->
    <router-link
      :to="'/series/' + personajes[0]?.idSerie"
      class="btn btn-danger mb-3"
    >
      Volver
    </router-link>

    <!-- Si no se ha cargado la serie, mostramos un mensaje de carga -->
    <div v-if="loading" class="text-center">
      <img src="./../assets/images/Loading_icon.gif" alt="Cargando..." />
    </div>

    <!-- Si la serie está cargado, mostramos los detalles en una tarjeta de Bootstrap -->
    <div v-else>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Personaje</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="personaje in personajes" :key="personaje">
            <td>{{ personaje.nombre }}</td>
            <td>
              <img
                :src="personaje.imagen"
                alt="Imagen de la serie"
                class="img-fluid"
                style="width: 300px; heigth: 300px"
              />
            </td>
            <td>
              <router-link :to="'/delete/' + personaje.idPersonaje" class="btn btn-danger">
                Eliminar
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "PersonajesSerie",
  data() {
    return {
      personajes: [],
      loading: true,
    };
  },
  mounted() {
    const idSerie = this.$route.params.id;

    service.getPersonajesSerie(idSerie).then((result) => {
      this.personajes = result;
      this.loading = false;
    });
  },
};
</script>