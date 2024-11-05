import Global from "./../Global";
import axios from "axios";

export default class ServiceSeries {

    getSeries() {
        return new Promise(function(resolve) {
            let series = [];

            let request = "api/series";
            let url = Global.urlApiSeries + request;

            axios.get(url).then(response => {
                series = response.data;
                resolve(series)
            })
        })
    }

    findSerie(idSerie) {
        return new Promise(function(resolve) {
            let serie = {};

            let request = "api/series/" + idSerie;
            let url = Global.urlApiSeries + request;

            axios.get(url).then(response => {
                serie = response.data;
                resolve(serie);
            })

        })
    }

    getPersonajesSerie(idSerie) {
        return new Promise(function(resolve) {

            let request = "/api/Series/PersonajesSerie/" + idSerie;
        })
    }
}