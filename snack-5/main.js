console.log("hello world");



let index = true;

while ( index === true) {
    let inputNumber = parseInt(prompt("inserisci un numero"))
    
    console.log(inputNumber);

    if (isNaN(inputNumber)) { // verificare se il carattere inserito restituisca un numero valido o meno
        index = false
    } else{ // se il numero del prompt è valido restituisci il cubo
        let cube = inputNumber * inputNumber * inputNumber // cubo di input number

        console.log(cube);
    }
} // il loop si chiude quando si preme cancel perchè index passa a false
