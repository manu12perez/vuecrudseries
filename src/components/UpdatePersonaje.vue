<template>
  <div>
    <h1>Modificar Personaje</h1>

    <form v-on:submit.prevent="updatePersonaje()" style="width: 500px; margin: 0 auto">
      <label>Personaje</label>
      <select type="text" v-model="idPersonaje" class="form-control" @change="mostrarPersonaje">
        <option v-for="personaje in personajes" :key="personaje" :value="personaje.idPersonaje">
          {{ personaje.nombre }}
        </option>
      </select>
      <label>Serie</label>
      <select type="text" v-model="idSerie" class="form-control" @change="mostrarSerie">
        <option v-for="serie in series" :key="serie" :value="serie.idSerie">
          {{ serie.nombre }}
        </option>
      </select>
      <br />

      <button class="btn btn-info">Modificar</button>
    </form>
    <br /><br />

    <div v-if="personaje">
      <h1>{{ personaje.nombre }}</h1>
      <img :src="personaje.imagen" alt="" style="height: 150px; width: 150px" />
    </div>

    <div v-if="serie">
      <h1>{{ serie.nombre }}</h1>
      <img :src="serie.imagen" alt="" style="height: 150px; width: 150px" />
    </div>

  </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "UpdatePersonaje",
  data() {
    return {
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
      series: [],
      personajes: [],
    };
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
    });

    service.getPersonajes().then((result) => {
      this.personajes = result;
    });
  },
  methods: {
    updatePersonaje() {
      service.updatePersonaje(this.idPersonaje, this.idSerie).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },

    mostrarPersonaje() {
      service.findPersonaje(this.idPersonaje).then((result) => {
        this.personaje = result;
      });
    },

    mostrarSerie() {
      service.findSerie(this.idSerie).then((result) => {
        this.serie = result;
      });
    },
  },
};
</script>