import { Film } from "./film.js";

export class Service {
    constructor(name, price) 
    {
        this.name = name;
        this.price = price;
    }

    getName() { return this.name; }

    getPrice() { return this.price; }
}