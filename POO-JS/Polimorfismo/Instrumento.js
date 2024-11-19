
class Instrumento {
    constructor(nombre) {
        this.nombre=nombre
    }

    tocar(){
        console.log(`${this.nombre} esta emitiendo sonido...`);
    }
}

class Guitarra extends Instrumento{
constructor() {
    super("Guitarra")//No recibe el nombre de la instancia, sino que directo del padre.
}

//Se puede sobreescribir los metodos heredados:
tocar(){
    console.log(`La ${this.nombre}, esta haciendo un solo.`);
}
}

class Bateria extends Instrumento{
    constructor() {
        super("Bateria")//No recibe el nombre de la instancia, sino que directo del padre.
    }
    
    //Se puede sobreescribir los metodos heredados:
    tocar(){
        console.log(`La ${this.nombre}, está tocando los tambores en ritmo.`);
    }
}


class Piano extends Instrumento{
    constructor() {
        super("Piano")//No recibe el nombre de la instancia, sino que directo del padre.
    }
    
    //Se puede sobreescribir los metodos heredados:
    tocar(){
        console.log(`El ${this.nombre}, toca blues.`);
    }
}

function banda(i){
    i.tocar()
}

let guitarra = new Guitarra()
let bateria = new Bateria()
let piano = new Piano()


banda(guitarra)//La Guitarra, esta haciendo un solo.
banda(bateria)//La Bateria, está tocando los tambores en ritmo.
banda(piano)//El Piano, toca blues.
