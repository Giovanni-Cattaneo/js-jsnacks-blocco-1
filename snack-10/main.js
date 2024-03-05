// console.log("hello world");

// const auto = [
//     {
//         marca: "fiat",
//         modello: "panda",
//         alimentazione: "benzina"
//     },
//     {
//         marca: "toyota",
//         modello: "yaris",
//         alimentazione: "benzina"
//     },
//     {
//         marca: "tesla",
//         modello: "y",
//         alimentazione: "elettrica"
//     },
//     {
//         marca: "fiat",
//         modello: "punto",
//         alimentazione: "metano"
//     },
//     {
//         marca: "suv",
//         modello: "bho",
//         alimentazione: "metano"
//     },
//     {
//         marca: "toyota",
//         modello: "corolla",
//         alimentazione: "benzina"
//     },
//     {
//         marca: "porsche",
//         modello: "gt3",
//         alimentazione: "diesel"
//     },
//     {
//         marca: "Mclaren",
//         modello: "p1",
//         alimentazione: "gpl"
//     },
//     {
//         marca: "ford",
//         modello: "gt",
//         alimentazione: "gpl"
//     },
//     {
//         marca: "ferrari",
//         modello: "testarossa",
//         alimentazione: "elettrica"
//     },
// ]

// console.log(auto);

// const benzina = auto.filter((auto) => auto.alimentazione === "benzina")

// console.log(benzina);

// const diesel = auto.filter((auto) => auto.alimentazione === "diesel")

// console.log(diesel);

// const restOfAuto = auto.filter((auto) => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel")

// console.log(restOfAuto);



const firstArray = ["qui", "QUO", "Qua", "Pluto"]

const formatArray = firstArray.map(word => {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1) // questo ci permette di cambiare tutti i caratteri in piccolo,tranne il carattere alla posizione array 0 che viene messo in maiuscolo, poi aggiungiamo di seguito gli altri caratteri tranne il carattere 1 che viene tagliato altrimenti sarebbe ripetutto

})

console.log(formatArray);

