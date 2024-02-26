console.log("hello world");

let inputNumber = parseInt(prompt("Scrivi un numero di quattro cifre"))

let sum = 0;

while (inputNumber) {
   sum += inputNumber % 10;
   inputNumber = Math.floor(inputNumber / 10);

   console.log(sum);
}    

