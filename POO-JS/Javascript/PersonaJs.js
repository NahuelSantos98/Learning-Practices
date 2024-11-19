class PersonaJs {
    constructor(nombre, edad ) {
        this.nombre = nombre
        this.edad=edad
    }

    //Se puede hacer con estos metodos o directamente con un manejo como objeto
    setNombre(n){
        this.nombre = n
    }

    setEdad(e){
        this.edad = e
    }

    getNombre(){
        return this.nombre
    }

    getEdad(){
        return this.edad
    }

}

let personaJs = new PersonaJs("Nahuel", 19)
console.log(personaJs);

//Obtiene la edad
let edadPersona = personaJs.edad
console.log(edadPersona); //Print: 19

//Se le cambia la edad
personaJs.edad = 30
console.log(personaJs.edad); //Print: 30

