export class Show {
    constructor(name, genre, rating = 0, seasons, service) {
        this.name = name;
        this.genre = genre;
        this.rating = rating; 
        this.seasons = seasons;
    }

    getName() { return this.name; }

    getGenre() { return this.genre; }

    setRating(rating) {
        if (1 <= rating && rating <= 5) this.rating = rating
    }

    getRating() { return this.rating; }

    getSeasons() { return this.seasons; }

    addSeasons(seasons) { this.seasons.push(...seasons); }
}