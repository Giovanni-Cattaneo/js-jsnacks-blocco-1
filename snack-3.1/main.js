console.log("hello World");

let sum = 0

for (let index = 0; index < 3; index++) {
    number = prompt("scrivi un nuovo numero")
    console.log(number);

    sum = sum + Number(number);
}

console.log(sum);


let index = 0;

while ( index < 3) {
    number = prompt("scrivi un nuovo numero")
    console.log(number);

    sum = sum + Number(number); // usare sum += Number(number) sarebbe equivalente

    index++
}

console.log(sum);