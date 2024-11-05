<template>
  <div class="container mt-4">
    <h1>Eliminar Personaje</h1>
    <router-link
      :to="'/personajesSerie/' + personaje.idSerie"
      class="btn btn-danger"
    >
      Volver
    </router-link><br /><br />
    <!-- Si no se ha cargado el coche, mostramos un mensaje de carga -->
    <div v-if="loading" class="text-center">
      <img src="./../assets/images/Loading_icon.gif" alt="Cargando..." />
    </div>

    <!-- Si el coche está cargado, mostramos los detalles en una tarjeta de Bootstrap -->
    <div v-else class="card">
      <div class="card-header">
        <h4>{{ personaje.nombre }}</h4>
      </div>
      <div class="card-body">
        <img
          :src="personaje.imagen"
          alt="Imagen del personaje"
          class="img-fluid"
        />
      </div>

      <!-- Botón para eliminar personaje -->
      <button @click="confirmarBorrado" class="btn btn-danger">Borrar</button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import ServiceSeries from "./../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "DeletePersonaje",
  data() {
    return {
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
      loading: true,
    };
  },
  mounted() {
    // Obtener el id del coche desde los parámetros de la URL
    let id = this.$route.params.id;

    // Buscar el coche por su ID
    service.findPersonaje(id).then((result) => {
      this.personaje = result;
      this.loading = false;
    });
  },
  methods: {
    // Método para mostrar el popup de confirmación de borrado
    confirmarBorrado() {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, bórralo!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma, eliminamos el coche
          service
            .deletePersonaje(this.personaje.idPersonaje)
            .then(() => {
              Swal.fire({
                title: "¡Eliminado!",
                text: "El personaje ha sido eliminado.",
                icon: "success",
              }).then(() => {
                // Redirigimos a la página de coches
                this.$router.push("/");
              });
            })
            .catch((error) => {
              console.error("Error al eliminar el coche:", error);
              Swal.fire({
                title: "Error",
                text: "Hubo un error al eliminar el personaje.",
                icon: "error",
              });
            });
        }
      });
    },
  },
};
</script>