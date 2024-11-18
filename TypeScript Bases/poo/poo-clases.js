"use strict";
class Pelicula {
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    proyectarEnCine() {
        return console.log(`${this.nombre} esta siendo proyectada`);
    }
}
let pelicula1 = new Pelicula("Batman", ["Bruce Wayne", "Batman"], ["Pattinson", "Zoe Kravitz"]);
let pelicula2 = new Pelicula("The Flash", ["Barry Allen", "Flash"], ["Ezra Miller", "Michael Keaton"]);
pelicula1.proyectarEnCine();
console.log(pelicula1);
console.log(pelicula2);
