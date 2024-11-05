<template>
    <div>
        <h1>Nuevo Personaje</h1>
        <form v-on:submit.prevent="insertPersonaje()" style="width: 500px; margin: 0 auto">
        <label>Id Personaje</label>
        <input type="number" v-model="personaje.idPersonaje" class="form-control"><br />
        <label>Nombre</label>
        <input type="text" v-model="personaje.nombre" class="form-control"><br />
        <label>Imagen</label>
        <input type="text" v-model="personaje.imagen" class="form-control"><br />
        <label>Id Serie</label>
        <input type="number" v-model="personaje.idSerie" class="form-control"><br />
        
        <button class="btn btn-success">Create</button>
    </form>
    </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
const service = new ServiceSeries();

export default {
    name: "CreatePersonaje",
    data() {
        return {
            personaje: {
                idPersonaje: 0,
                nombre: "",
                imagen: "",
                idSerie: 0
            }
        }
    },
    methods: {
        insertPersonaje() {
            service.insertPersonaje(this.personaje).then(() => {
                this.$router.push("/")
            })
        }
    }
}
</script>