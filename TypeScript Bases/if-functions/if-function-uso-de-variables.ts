let estudiantejs : boolean = true

if(estudiantejs){
    console.log("Podes seguir viendo");
}else{
    console.log("Cagaste")
}

let barca : number = 11
let madrid: number = 11
let lamine: number = 1
let juegaLamine :boolean = true
let tipadoVariado: number | string | null = null

function jugar(eq1:number, eq2: number, juegaLamine: boolean){
    let motivo:string = '';
    if(juegaLamine) {eq1 += lamine, motivo = "porque juega Lamine"}
    if(eq1 >eq2) return console.log( `Equipo 1 es el ganador ${motivo}`);
    if(eq1 == eq2) return console.log(`Hay empate entre los dos`);
    if(eq1 < eq2)return  console.log(`Equipo 2 es el ganador`);
}

jugar(barca, madrid, juegaLamine);
