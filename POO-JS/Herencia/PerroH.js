const { AnimalH } = require("./AnimalH");


class PerroH extends AnimalH{
    constructor(nombre) {   //Le llega por param
        super(nombre, "Woof") //Es el llamado al constructor del padre
    }

    moverCola(){
        console.log(`${this.nombre}, está moviendo la cola`);
        
    }
}
//Este puede utilizar todos los metodos, ya sea el mover cola y el hacer sonido (Que viene del padre)

const perroH = new PerroH("Kira")

perroH.hacerSonido() //Print: Kira hace: Woof