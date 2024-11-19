
class MaquinaDeCafe{    
    constructor() {
        if(new.target === MaquinaDeCafe){
            throw new Error("No se puede instanciar ")
        }
    }

    //Se va a tener que hacer un metodo con polimorfismo
    //Para eso se hace devuelta un throw error para que SI O SI se implemente:
    //Si no lo implementa, lanza un error
    seleccionarBebida(){
        throw new Error("Este metodo debe ser implementado")
    }

    preparandoBrebaje(){
        console.log(`Preparando`);
    }

    servirBebida(){
        console.log(`Sirviendo bebida`);
    }

    //Metodo publico que define el comportamiento y flujo general
    hacerCafe(){
        this.seleccionarBebida()
        this.preparandoBrebaje()
        this.servirBebida()
    }

}

class ExpressoMachine extends MaquinaDeCafe{
    seleccionarBebida(){
        console.log(`Has seleccionado un expresso`)
    }
}

class CappuccinoMachine extends MaquinaDeCafe{
    seleccionarBebida(){
        console.log(`Has seleccionado un cappuccino`)
    }

    preparandoBrebaje(){
        console.log("Realizando espuma...");
        super.preparandoBrebaje()
        //Esto es para que tambien devuelva lo que se hacer en preparandoBrebaje del padre aunque lo sobreescribamos
    }
}

let expresso = new ExpressoMachine()
let capuccino = new CappuccinoMachine()

expresso.hacerCafe()
capuccino.hacerCafe()