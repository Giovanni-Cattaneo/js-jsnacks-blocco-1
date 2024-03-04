console.log("Hello world");

// const palla = {
//     tipo : "calcio",
//     diametro: "30 cm",
//     colore: ["bianco", "nero"]
// }

// console.log(palla);

// palla.diametro = "45 cm"

// console.log(palla.diametro);

// palla["diametro"] = 2

// palla.prezzo = 3000

// console.log(palla.prezzo);

// palla["prezzo"] = 2000

// console.log(palla["prezzo"]);

// for (let key in palla) {
//     console.log(palla[key]);
// }



// const classes = [
// {
//     nome : "Classe 1",
//     numeroStudenti : 25,
// },
// {
//     nome : "Classe 2",
//     numeroStudenti : 5,
// },
// {
//     nome : "Classe 3",
//     numeroStudenti : 2,
// },
// {
//     nome : "Classe 4",
//     numeroStudenti : 13,
// },
// {
//     nome : "Classe 5",
//     numeroStudenti : 17,
// }
// ]

// console.log(classes);

// const newClass = {
//     nome : "classe 6",
//     numeroStudenti : 30
// }

// classes.push(newClass)

// console.log(classes);

// for (let index = 0; index < classes.length; index++) {
//     const element = classes[index];



//     console.log(element.nome);
//     console.log(element.numeroStudenti);

// }

const student = {
    name: "Giovanni",
    lastName: "Cattaneo",
    age: 25
}

for (const key in student) {
    const element = student[key];

    //console.log(element);
}

const allStudents = [
    {
        name: "Marco",
        lastName: "Columbro",
        age: 65
    },
    {
        name: "Marisa",
        lastName: "Laurito",
        age: 55
    },
    {
        name: "Milena",
        lastName: "Gabanelli",
        age: 35
    },
    {
        name: "Maurizio",
        lastName: "Merluzzo",
        age: 15
    },
    {
        name: "Laura",
        lastName: "Adamoli",
        age: 45
    },
]

for (const key in allStudents) {
    const element = allStudents[key];

    console.log(element.name, element.lastName, element.age);
}

let btn = document.getElementById("btn")

let studentName = document.getElementById("name")

let studentLastName = document.getElementById("lastname")

let studentAge = document.getElementById("age")

let newStudent;

btn.addEventListener("click", function () {
    console.log(studentName.value, studentLastName.value, parseInt(studentAge.value));

    newStudent = {
        name: studentName.value,
        lastName: studentLastName.value,
        age: parseInt(studentAge.value)
    }

    allStudents.push(newStudent)

    console.log(allStudents);

    let row = document.querySelector(".row")

    for (let index = 0; index < allStudents.length; index++) {
        const student = allStudents[index];

        const markup = `<div class="col"><div class="card mt-4">${student.name} ${student.lastName} ${student.age}</div></div>`

        row.insertAdjacentHTML("beforeend", markup)

    }



})





