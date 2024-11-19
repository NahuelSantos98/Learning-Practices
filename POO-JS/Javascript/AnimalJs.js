class Animal{
    constructor(nombre, edad, especie, sonido) {
        this.nombre = nombre
        this.edad = edad
        this.especie = especie
        this.sonido = sonido
    }

    hacerSonido(){
        console.log(`${this.sonido} ${this.sonido}`);
    }
}


let perro = new Animal("Kira", 3, "Perro", "Woof")
let gato = new Animal('Pocho', 7, "Gato", "Miau")

perro.hacerSonido()
gato.hacerSonido()