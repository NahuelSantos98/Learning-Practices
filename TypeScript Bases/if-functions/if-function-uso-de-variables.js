"use strict";
let estudiantejs = true;
if (estudiantejs) {
    console.log("Podes seguir viendo");
}
else {
    console.log("Cagaste");
}
let barca = 11;
let madrid = 11;
let lamine = 1;
let juegaLamine = true;
let tipadoVariado = null;
function jugar(eq1, eq2, juegaLamine) {
    let motivo = '';
    if (juegaLamine) {
        eq1 += lamine, motivo = "porque juega Lamine";
    }
    if (eq1 > eq2)
        return console.log(`Equipo 1 es el ganador ${motivo}`);
    if (eq1 == eq2)
        return console.log(`Hay empate entre los dos`);
    if (eq1 < eq2)
        return console.log(`Equipo 2 es el ganador`);
}
jugar(barca, madrid, juegaLamine);
