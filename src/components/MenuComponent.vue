<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
    aria-label="Third navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./../assets/logo.png" style="width:40px; height:40px"/></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link"> Nuevo Personaje </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link"> Modificar Personaje </router-link>
          </li>          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              Series
            </a>
            <ul class="dropdown-menu">
              <li v-for="serie in series" :key="serie">
                <router-link class="dropdown-item" :to="'/series/' + serie.idSerie ">{{serie.nombre}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries'
const service = new ServiceSeries();

export default {
    name: "MenuComponent",
    data() {
        return {
            series: [],
        }
    },
    mounted() {
        service.getSeries().then(result => {
            this.series = result;
        })
    }
}
</script>