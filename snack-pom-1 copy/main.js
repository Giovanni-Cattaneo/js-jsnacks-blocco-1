console.log("hello world");

const containerEl = document.getElementById("container")

console.log(containerEl);

const maxxCellsNumber = 64;

const markup = `<div class="box"></div>`

for (let index = 0; index < maxxCellsNumber; index++) {
    containerEl.insertAdjacentHTML("beforeend", markup)
}



const box = document.getElementsByClassName("box")

console.log(box);





const randomNumbers = []

while ( randomNumbers.length <= 64) {
    
    const randomNumber = getRndInteger(1, maxxCellsNumber);

    console.log(randomNumber);
    
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber)
    }
    
    randomNumbers.length++

for (let index = 0; index < box.length; index++) {
    const element = box[index];
    console.log(element);
    element.addEventListener("click", function(e){
        element.classList.toggle("red")
    })

}

}



console.log(randomNumbers);



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }