
// prendo il button
const start = document.getElementById("start");
// prendo la griglia
const griglia = document.querySelector(".flex");

// sul click del pulsante
start.addEventListener('click', function () {

    // rendo la griglia vuota e resetto le sue classi all'interno
    griglia.innerHTML = "";
    griglia.classList.remove("w10", "w9", "w7");

    // prendo i valori del select
    const livello = document.getElementById("difficoltà").value;

    // variabile che mi servirà per dire quante celle mi servono
    let n;


    if (livello == "easy") {
        // assegno alla griglia la width per un 10x10
        griglia.classList.add("w10");
        n = 100;
        square(n);
    } else if (livello == "normal") {
        griglia.classList.add("w9");
        n = 81;
        square(n);
    } else if (livello == "hard") {
        griglia.classList.add("w7");
        n = 49;
        square(n);
    }
})



function square(n) {
    for (let i = 1; i <= n; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        griglia.appendChild(square);
        click(square)
    }

    let listBomb = [];

    while (listBomb.length < 16) {
        let x = Math.floor(Math.random() * n + 1);
        if (!listBomb.includes(x)) {
            listBomb.push(x);
            griglia.querySelector(`.square:nth-child(${x})`).classList.add("bomb");
        }
    }
}


function click(square) {
    let point = 0;
    square.addEventListener('click', function () {
        if (square.classList.contains("bomb")) {
            console.log("you lose");
            square.classList.add("red");
        } else {
            square.classList.add("checked");
            point += 1;
        }
    })
}



























// function square(n) {
//     for (let i = 1; i <= n; i++) {
//         let square = document.createElement("div");
//         square.classList.add("square");
//         griglia.appendChild(square);
//     }

// }

// function click(square) {
//     square.addEventListener('click', function () {
//         if (!square.classList.contains("bomb")) {
//             console.log("you lose")
//         }
//     })
// }


// function bomb(n, griglia) {
//     let listBomb = [];
//     while (listBomb.length < 16) {

//         let x = Math.floor(Math.random() * n + 1);
//         if (!listBomb.includes(x)) {
//             listBomb.push(x);
//             griglia.querySelector(`.square:nth-child(${x})`).classList.add("bomb");
//         }
//     }
// }