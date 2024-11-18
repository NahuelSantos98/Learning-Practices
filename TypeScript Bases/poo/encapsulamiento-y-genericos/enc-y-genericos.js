"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre}, el ticket es: ${this.ticket} `;
    }
}
let sorteo1 = new Sorteo("Nahuel");
sorteo1.setTicket(12);
console.log(sorteo1.sortear());
let sorteo2 = new Sorteo("Nahuel");
sorteo2.setTicket("1se23");
console.log(sorteo2.sortear());
