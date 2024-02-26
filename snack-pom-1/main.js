console.log("hello world");

let casualNumber = (Math.random(Math.floor) * 100 +1).toFixed(0)

console.log(casualNumber);

let flag = true
do {
    let verify = parseInt(prompt ("Inserisci un numero da 1 a 100"))
    
    console.log(verify);

    if(verify > casualNumber){
        alert("Accidenti il tuo numero è troppo alto")
    }else if (verify < casualNumber ){
        alert("Accidenti il tuo numero è troppo basso")
    }else{
        alert("Bravo hai indovinato")
        flag = false
    }

} while (flag);


