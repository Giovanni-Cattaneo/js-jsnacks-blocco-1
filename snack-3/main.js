console.log("hello world");

let inviteList = ["Mario", "giorgio", "paolo", "fabrizio", "martino", "francesco", "alessia", "francesca"]

console.log(inviteList);

let guest = prompt("Inserisci il tuo nome")

console.log(guest);

let invited = false;

for (let i = 0; i < inviteList.length; i++) {
    const element = inviteList[i];

    if (guest === element) {
        invited = true
        break;
    }
}

console.log(invited);


