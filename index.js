import { Film, Genres } from './film.js'
import { Service } from './service.js';
import { Application } from './application.js';

document.addEventListener("DOMContentLoaded", (event) => {

    // HTML variables
    const serviceName = document.getElementById("service-name-text");
    const servicePrice = document.getElementById("service-price-text");
    const addService = document.getElementById("add-service-form");
    const serviceError = document.getElementById("service-error");

    const servicesList = document.getElementById("services");
    const filmsTable = document.getElementById("films-body");
    const filmError = document.getElementById("film-error");

    const filmName = document.getElementById("film-name-text");
    const filmYear = document.getElementById("film-year-text");
    const filmGenre = document.getElementById("film-genre-dropdown");
    const filmRuntime = document.getElementById("film-runtime-text");
    const filmRating = document.getElementById("film-rating-dropdown");
    const filmService = document.getElementById("film-service-dropdown");
    const addFilm = document.getElementById("add-film-form");

    const showTable = document.getElementById("shows-body");
    const showError = document.getElementById("show-error");
    const showName = document.getElementById("show-name-text");
    const showGenre = document.getElementById("show-genre-dropdown");
    const showRating = document.getElementById("show-rating-dropdown");
    const showService = document.getElementById("show-service-dropdown");
    const addShow = document.getElementById("add-show-form");

    const seasonTable = document.getElementById("seasons-table");
    const seasonNumber = document.getElementById("season-number");
    const seasonYear = document.getElementById("season-year");
    const seasonEpisodes = document.getElementById("season-episodes");
    const addSeason = document.getElementById("add-season-form");

    // Initialise a new application
    const application = new Application();

    // Display functions

    const displayServices = () => {
        servicesList.innerHTML = "";
        
        application.getServices().forEach((service) => {
            const li = document.createElement("li");
            li.textContent = service.getName() + " £" + service.getPrice();
            servicesList.appendChild(li);
        });

        filmService.innerHTML = "";
        showService.innerHTML = "";
        filmService.appendChild(getServicesOptions());
        showService.appendChild(getServicesOptions());
    }

    const displayFilms = () => {
        filmsTable.innerHTML = "";
        application.getFilms().forEach((film) => {
            const row = filmsTable.insertRow();
            const name = row.insertCell(0);
            name.innerHTML = film.getName();

            const year = row.insertCell(1);
            year.innerHTML = film.getYear();

            const genre = row.insertCell(2);
            genre.innerHTML = film.getGenre();

            const runtime = row.insertCell(3);
            runtime.innerHTML = film.getRuntime();

            const rating = document.createElement("select");
            for (let i = 0; i < 5; i++) {
                const option = document.createElement("option");
                option.value = i + 1;
                option.innerText = i + 1;
                rating.appendChild(option);
            }
            rating.selectedIndex = film.getRating() - 1;
            row.appendChild(rating);

            const service = row.insertCell(4);
            service.innerHTML = film.getService();

            const deleteButton = document.createElement("input");
            deleteButton.type = "button";
            deleteButton.value = "Delete";
            deleteButton.addEventListener("click", (event) => {
                application.removeFilm(film.name, film.year);
                displayFilms();
            })
            row.appendChild(deleteButton);
        });
    }
 
    const getServicesOptions = () => {
        const options = document.createDocumentFragment();
        application.getServices().forEach((service) => {
            const option = document.createElement("option");
            option.value = service.getName();
            option.innerText = service.getName();
            options.appendChild(option);
        });
        return options;
    }

    const displayShows = () => {
        showTable.innerHTML = "";
        application.getShows().forEach((show) => {
            const row = showTable.insertRow();
            const name = row.insertCell(0);
            name.innerHTML = show.getName();

            const genre = row.insertCell(1);
            genre.innerHTML = show.getGenre();

            const rating = document.createElement("select");
            for (let i = 0; i < 5; i++) {
                const option = document.createElement("option");
                option.value = i + 1;
                option.innerText = i + 1;
                rating.appendChild(option);
            }

            rating.selectedIndex = show.getRating() - 1;
            row.appendChild(rating);

            const seasons = row.insertCell(2);
            seasons.innerHTML = show.getSeasons();

            const deleteButton = document.createElement("input");
            deleteButton.type = "button";
            deleteButton.value = "Delete";
            deleteButton.addEventListener("click", (event) => {
                application.removesShow(film.name, film.year);
                displayShows();
            })
            row.appendChild(deleteButton);

            show.getSeasons().forEach((season) => {
                const seasonsTable = document.createElement("table");

                const number = document.createElement("td")
                number.innerHTML = season.getNumber();
                year.innerHTML = season.getYear();
                episodes.innerHTML = season.getEpisodes();
                
                seasonTable.appendChild()

                showTable.appendChild(seasonTable);
            });
        });
    }
    
    addService.addEventListener("submit", (event) => {  
        event.preventDefault();
        serviceError.innerText = "";
        if (application.addService(serviceName.value, servicePrice.value) == null) {
            serviceError.innerText = "Service already exists with that name.";
        } 
        displayServices();
        addService.reset();
    });

    addFilm.addEventListener("submit", (event) => {
        event.preventDefault();
        filmError.innerText = "";
        if (application.addFilm(filmName.value, filmYear.value, filmRuntime.value, filmGenre.value, filmRating.value, filmService.value) == null) {
            filmError.innerText = "A film with that same name and year already exists.";
        }
        displayFilms();
        addFilm.reset();
    });

    addShow.addEventListener("submit", (event) => {
        event.preventDefault();
        if (application.addShow(showName.value, showGenre.value, showRating.value, showService.value)) {
            showError.innerText = "A show with that same season already exists.";
        }
        displayShows();
        addShow.reset();
    });

    addSeason.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("feww")
    });

    // Services have a name and monthly price.

    application.addService("Amazon", 10.99);
    application.addService("Netflix", 17.99);
    displayServices();

    // Films have the format: name, year of release, runtime (in mins), genre, rating, and streaming service 
    
    application.addFilm("Iron Man", 2008, 98, Genres.ACTION, 5, "Netflix");
    application.addFilm("Finding Nemo", 2008, 98, Genres.ACTION, 5, "Amazon");
    displayFilms();

    // TV shows have the format: name, genre, rating, list of seasons, and streaming service
    // Seasons have the format: season number, year, num. of episodes

    application.addShow("Friends", Genres.COMEDY, 1, "1, 2, 4", "Netflix");
    application.addShow("Friends", Genres.COMEDY, 1, "3", "Amazon");
    displayShows();

});
  