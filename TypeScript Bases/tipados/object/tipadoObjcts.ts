
let tipadoObj = {
    nombre: 'Nahuel',
    age: 19,
    tech: ['React', 'Node', 'JS', 'JAVA']
}

//Sobreescribe = mismo tipado en los datos
// tipadoObj = {
//     nombre: 'Morena',
//     tech: [],
//     age: 20
// }

//Type:
type Programador = {
    name: string,
    age: number,
    tech: string[],
    job: boolean
}

let programador : Programador= {
    name: 'Nahuel',
    age: 19,
    tech: ['React', 'Node', 'JS', 'Java'],
    job: false
}


type ProgramadorOpcional = {
    name: string,
    age: number,
    tech: string[],
    job?: boolean | null
}

let programadorOpcional: ProgramadorOpcional ={
    name: 'Nahuel',
    age: 19,
    tech: ['React', 'Node', 'JS', 'Java'],
}