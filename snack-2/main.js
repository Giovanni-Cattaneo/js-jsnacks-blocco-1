console.log("hello world");

const firstWord = prompt("Scrivi una parola")
const secondWord = prompt("Scrivi un'altra parola")

console.log(firstWord, secondWord);

if(firstWord.length > secondWord.length){
    console.log(firstWord);
    console.log(secondWord);
}else if (firstWord.length < secondWord.length){
    console.log(secondWord);
    console.log(firstWord);
} else{
    console.log("Le parole sono lunghe uguali");
}