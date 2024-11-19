class Calculadora {
    static sumar(a, b) {
        return a + b
    }
    static restar(a, b) {
        return a - b
    }
    static multiplicar(a, b) {
        return a * b
    }
    static dividir(a, b) {
        if (b == 0) {
            throw new Error("No se puede dividir por cero")
        }
        return a / b
    }
}

//No se instancia calculadora, sino que se accede directamente
console.log(Calculadora.sumar(2,3))
console.log(Calculadora.restar(6,3))
console.log(Calculadora.multiplicar(2,3))
console.log(Calculadora.dividir(10,5))