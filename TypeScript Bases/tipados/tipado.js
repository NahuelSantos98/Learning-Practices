"use strict";
let numero = 12;
let string = "Nahuel";
let boolean = true;
//Any:
//Este tipado hace referencia a que puede ser cualquier tipo de dato
//Se trata de evitar
let any;
//Arrays de un solo tipo:
//Acordarse de tiparlo y agregar el []
let nombres = ["Nahuel", "Morena", "Sabrina"];
//Array con diferentes types:
//No hace falta que esten en orden, con tal de que estén, los valores que puede tener son los declarados en ese parseo.
let arrayDif = [true, "texto", 99, "otro texto", false, 123];
//Objetos:
let object = {
    nombre: 'Nahuel',
    age: 19,
    tech: ['React', 'Node', 'JS', 'JAVA']
};
//Si se sobreescribe este tiene que cumplir con los types del primer object.
object = {
    nombre: 'Morena',
    tech: [],
    age: 12
};
//Function con diferente tipado en param:
//Hay que declarar el type que retorna LUEGO de los params
function func1(nombre, edad) {
    return `Hola mi nombre es ${nombre} y tengo ${edad} años. `;
}
//Function con mismo tipado en param:
//No necestia aclarar que tipo de dato va a salir a no ser que no sea del mismo type que el param
function func2(n1, n2) {
    return n1 + n2;
}
//Function con param default:
function func3(name, edad = 19) {
    return `Hola, mi nombre es ${name} y tengo ${edad} años`;
}
//Arrow Function:
//Igual a las functions previas
let func4 = (a, b) => a / b;
