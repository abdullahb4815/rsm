export class Season {
    constructor(number, year, episodes, service) {
        this.number = number; // Season number
        this.year = year; // Year of release
        this.episodes = episodes; // Number of episodes
        this.service = service;
    }

    getNumber() { return this.number; }

    getYear() { return this.year; }

    getEpisodes() { return this.episodes; }

    getService() { return this.service; }
}