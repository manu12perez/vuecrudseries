import Global from "./../Global";
import axios from "axios";

export default class ServiceSeries {

    getSeries() {
        return new Promise(function (resolve) {
            let series = [];

            let request = "api/series";
            let url = Global.urlApiSeries + request;

            axios.get(url).then(response => {
                series = response.data;
                resolve(series)
            })
        })
    }

    getPersonajesSerie(idSerie) {
        return new Promise(function (resolve) {
            let serie = {};

            let request = "/api/Series/PersonajesSerie/" + idSerie;
            let url = Global.urlApiSeries + request;

            axios.get(url).then(response => {
                serie = response.data;
                resolve(serie);
            })
        })
    }

    getPersonajes() {
        return new Promise(function (resolve) {
            let personajes = [];

            let request = 'api/personajes';
            let url = Global.urlApiSeries + request;
            
            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
            })
        })
    }

    findSerie(idSerie) {
        return new Promise(function (resolve) {
            let serie = {};

            let request = "api/series/" + idSerie;
            let url = Global.urlApiSeries + request;

            axios.get(url).then(response => {
                serie = response.data;
                resolve(serie);
            })

        })
    }

    findPersonaje(idPersonaje) {
        return new Promise(function (resolve) {
            let personaje = {};

            let request = "api/personajes/" + idPersonaje;
            let url = Global.urlApiSeries + request;

            axios.get(url).then(response => {
                personaje = response.data;
                resolve(personaje);
            })

        })
    }

    insertPersonaje(personaje) {
        return new Promise(function (resolve) {
            let request = "api/personajes";
            let url = Global.urlApiSeries + request;

            axios.post(url, personaje).then(response => {
                resolve(response);
            })
        })
    }

    updatePersonaje(idPersonaje, idSerie) {
        return new Promise(function (resolve) {
            let request = '/api/Personajes/' + idPersonaje + '/' + idSerie;
            let url = Global.urlApiSeries + request;
            axios.put(url).then(response => {
                resolve(response);
            })
        })
    }

    deletePersonaje(idPersonaje) {
        return new Promise(function (resolve) {
            let request = "api/personajes/" + idPersonaje;
            let url = Global.urlApiSeries + request;

            axios.delete(url).then(response => {
                resolve(response);
            })
        })
    }
}