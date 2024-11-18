class Sorteo<T>{
    private ticket?: T;

    constructor(private nombre:string) {}

    setTicket(ticket:T){
        this.ticket = ticket
    }

    getTicket(){
        return this.ticket
    }

    public sortear ():string{
        return `Para ${this.nombre}, el ticket es: ${this.ticket} `
    }
}


let sorteo1 = new Sorteo<number>("Nahuel")
sorteo1.setTicket(12)
console.log(sorteo1.sortear());

let sorteo2 = new Sorteo<string>("Nahuel")
sorteo2.setTicket("1se23")
console.log(sorteo2.sortear());