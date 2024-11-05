<template>
  <div class="container mt-4">
    <router-link to="/" class="btn btn-danger mb-3"> Volver </router-link>

    <!-- Si no se ha cargado la serie, mostramos un mensaje de carga -->
    <div v-if="loading" class="text-center">
      <img src="./../assets/images/Loading_icon.gif" alt="Cargando..." />
    </div>

    <!-- Si la serie está cargado, mostramos los detalles en una tarjeta de Bootstrap -->
    <div v-else class="card">
      <div class="card-header">
        <h4>{{ serie.nombre }}</h4>
      </div>
      <div class="card-body">
        <img
          :src="serie.imagen"
          alt="Imagen de la serie"
          class="img-fluid"
          style="width: 600px; heigth: 600px"
        /><br /><br />
        <p><strong>IMDB:</strong> {{ serie.puntuacion }}</p>
        <p><strong>Año:</strong> {{ serie.anyo }}</p>
      </div>
      <router-link :to="'/personajesSerie/' + serie.idSerie " class="btn btn-success"> Personajes </router-link>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "SeriesComponent",
  data() {
    return {
      serie: {},
      loading: true,
    };
  },
  mounted() {
    const idSerie = this.$route.params.id;

    service.findSerie(idSerie).then((result) => {
      this.serie = result;
      this.loading = false;
    });
  },
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loading = false; // Mostrar el cargando mientras se obtiene la nueva serie

        // Llamamos a findSerie con el nuevo id
        service.findSerie(nextVal).then((result) => {
          this.serie = result;
          this.loading = false;
        });
      }
    },
  },
};
</script>