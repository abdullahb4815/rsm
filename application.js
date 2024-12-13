import { Service } from "./service.js";
import { Film } from "./film.js";
import { Show } from "./show.js";

export class Application
{
    constructor() {
        this.services = [];
        this.films = [];
        this.shows = [];
    }

    // Service functions

    addService(name, price) {
        // if service does not already exist with same name, add to list.
        if (this.checkServiceExists(name)) { return null; }
        return this.services.push(new Service(name, price)); 
    }

    getService(name) {
        if (this.checkServiceExists(name)) { return this.services.find((service) => service.name == name)}
        return null;
    }

    getServices() { return this.services }

    checkServiceExists(name) {
        return this.services.some((service) => service.name == name);
    }

    // Film functions

    addFilm(name, year, runtime, genre, rating, service) {
        if (!(this.checkServiceExists(service))) { return null; }
        if (this.checkFilmExists(name, year)) { return null; } // Film already exists

        return this.films.push(new Film(name, year, runtime, genre, rating, service));
    }

    getFilm(name, year) {
        if (this.checkFilmExists(name, year)) {
            return this.films.find((film) => film.name == name && film.year == year);
        }
        return null;
    }

    getFilms() { return this.films; }

    getFilmsByService(name) {
        return this.films.filter((film) => film.service == name)
    }

    checkFilmExists(name, year) {
        return this.films.some((film) => film.name == name && film.year == year);
    }

    removeFilm(name, year) {
        for (let i = 0; i < this.films.length; i++)
        {
            if (name == this.films[i].getName() && year == this.films[i].getYear())
            {
                this.films.splice(i, 1);
            }
        }
    }

    // Show functions

    addShow(name, genre, rating, seasons, service) {
        seasons = seasons.split(',');
        if (this.checkShowExists(name)) {
            const show = this.getShow(name);
            //return show.addSeasons(     )
        }
        return this.shows.push(new Show(name, genre, rating, seasons, service))
    }

    getShow(name) {
        if (this.checkShowExists(name)) {
            return this.shows.find((show) => show.name == name);
        }
    }

    getShows() { return this.shows; }

    checkShowExists(name) {
        return this.shows.some((show) => show.name == name);
    }

    removeShow(name) {
        for (let i = 0; i < this.shows.length; i++) {
            if (name == this.show[i].getName()) { this.shows.splice(i, 1); }
        }
    }     
}