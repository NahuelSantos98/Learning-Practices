const { AnimalH } = require("./AnimalH");


class GatoH extends AnimalH{
    constructor(nombre) {   //Le llega por param
        super(nombre, "Miau") //Es el llamado al constructor del padre
    }

    bañarse(){
        console.log(`No interrumpas a ${this.nombre}, se está bañando`);
        
    }
}
//Este puede utilizar todos los metodos, ya sea el mover cola y el hacer sonido (Que viene del padre)

const gatoH = new GatoH("Pocho")

gatoH.hacerSonido() //Print: Pocho hace: Miau
gatoH.bañarse()