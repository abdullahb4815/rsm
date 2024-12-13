export const Genres = {ACTION: "action", COMEDY: "comedy", HORROR: "horror", ROMANCE: "romance"};
export const GenresList = [];

export class Film {
    constructor(name, year, runtime, genre, rating = 0, service) {
        this.name = name;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
        this.rating = rating; 
        this.service = service;
    }

    getName() { return this.name; }

    getYear() { return this.year; }

    getRuntime() { return this.runtime; }

    getGenre() { return this.genre; }

    setRating(rating) {
        if (1 <= rating && rating <= 5) this.rating = rating
    }

    getRating() { return this.rating; }

    getService() { return this.service; }
}