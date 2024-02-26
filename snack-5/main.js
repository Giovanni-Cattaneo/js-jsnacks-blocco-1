console.log("hello world");



let index = true;

while ( index === true) {
    let inputNumber = parseInt(prompt("inserisci un numero"))
    
    console.log(inputNumber);

    if (isNaN(inputNumber)) {
        index = false
    } else{
        let cube = inputNumber * inputNumber * inputNumber

        console.log(cube);
    }
}
