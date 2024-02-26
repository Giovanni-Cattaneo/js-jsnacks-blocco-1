console.log("hello world");

let listNumber = [];

for (let index = 0; index < 3; index++) {
    let number = parseInt(prompt("Scrivi un numero"))
    console.log(number);

    if (number % 2 === 0) {
    } else{
        listNumber.push(number)
    }
}


console.log(listNumber);

let index = 0
while (index < 3) {
    let number = parseInt(prompt("Scrivi un numero"))
    console.log(number);

    if (number % 2 === 0) {
    } else{
        listNumber.push(number)
    }

    index++
}

console.log(listNumber);