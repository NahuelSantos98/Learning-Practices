class Mascota {
    #nombre
    #especie
    #energia
    #hambre

    constructor(nombre, especie) {
        this.#nombre = nombre
        this.#especie = especie
        this.#energia = 100
        this.#hambre = 0
    }

    getNombre(){return this.#nombre}

    getEspecie(){return this.#especie}

    getEnergia() {return this.#energia}

    getHambre(){return this.#hambre}

//Se pueden poner condiciones (Un if de que si n.length es menor a 3 no lo setea y devuelve error, etc.) 
    setNombre(n){this.#nombre = n}

    setEspecie(e){this.#especie = e}

    setEnergia(en) {this.#energia = en}

    setHambre(h){this.#hambre = h}

    jugar(){
        if(this.#energia>0){
            console.log(`${this.#nombre} está jugando`);
            this.#energia -= 20
            this.#hambre += 10
        }else{
            console.log(`${this.#nombre} esta demasiado cansado como para jugar. Energia: ${this.#energia}%`);
        }
    }

    comer(){
        if(this.#hambre>0){
            console.log(`${this.#nombre} está comiendo una sabrosa comida`);
            this.#hambre -= 20
            this.#energia += 10
        }else{
            console.log(`${this.#nombre} ya no tiene hambre. Hambre:${this.#hambre}%`);
        }
    }

    estado(){
        console.log(`${this.#nombre}, es especie ${this.#especie} y tiene Hambre: ${this.#hambre}%, Energía: ${this.#energia}`);
    }
}

let perroMascota = new Mascota("Archie", "Perro")

console.log('Antes de jugar');

perroMascota.estado()


perroMascota.jugar()
perroMascota.jugar()


console.log('Despues de jugar:');

perroMascota.estado()


perroMascota.comer()
perroMascota.comer()


console.log(`Despues de comer`);
perroMascota.estado()



