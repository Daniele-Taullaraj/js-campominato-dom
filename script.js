
// prendo il button
const start = document.getElementById("start");
// prendo la griglia
const griglia = document.querySelector(".flex");

// variabili che mi serviranno per il punteggio, per sapere le celle di ogni livello di difficoltà almeno creo funzioni più generiche e una array vuoto per pe bombe
let punteggio = 0;
let n;
let listBomb = [];

// sul click del pulsante
start.addEventListener('click', function () {

    // rendo la griglia vuota e resetto le sue classi all'interno
    griglia.innerHTML = "";
    griglia.classList.remove("w10", "w9", "w7");

    // prendo i valori del select
    const livello = document.getElementById("difficoltà").value;



    // nel caso in cui fosse facile
    if (livello == "easy") {
        // assegno alla griglia la width per un 10x10 e ad n il valore delle celle presenti
        griglia.classList.add("w10");
        n = 100;
        // creo la lista di bombe in base a n
        listBomb = creaBombe(n);
        // per n volte
        for (let i = 1; i <= n; i++) {
            // crea un quadrato e inseriscilo nella griglia
            square = creaQuadrato();
            griglia.appendChild(square)
            // se il quadrato è incluso nella lista creata precedentemente
            if (listBomb.includes(i)) {
                // ad esso aggiungi la classe bomb
                square.classList.add("bomb")
            }
            // per ogni quadrato creato aggiungo un eventlistener con la funzione click
            square.addEventListener("click", function () {
                // click this mi serve per intendere il singolo quadrato cliccato senno' mi si riferisce sempre al 100esimo square creato
                click(this, n);
                // once true per rendere i quadrati cliccabili una sola volta
            }, { once: true });
        }


    } else if (livello == "normal") {
        griglia.classList.add("w9");
        n = 81;
        listBomb = creaBombe(n);
        for (let i = 1; i <= n; i++) {
            square = creaQuadrato();
            griglia.appendChild(square)
            if (listBomb.includes(i)) {
                square.classList.add("bomb")
            }
            square.addEventListener("click", function () {
                click(this, n);
            }, { once: true });
        }
    } else if (livello == "hard") {
        griglia.classList.add("w7");
        n = 49;
        listBomb = creaBombe(n);
        for (let i = 1; i <= n; i++) {
            square = creaQuadrato();
            griglia.appendChild(square)
            if (listBomb.includes(i)) {
                square.classList.add("bomb")
            }
            square.addEventListener("click", function () {
                click(this, n);
            }, { once: true });
        }
    }
})



// funzione crea bomba in base a n(il numero dei quadrati)
function creaBombe(n) {
    let listBomb = [];
    // finche la lista ha meno di 16 elementi crea un  numero random, se non è già incluso nella lista push al suo interno
    while (listBomb.length < 16) {
        let x = Math.floor(Math.random() * n + 1);
        if (!listBomb.includes(x)) {
            listBomb.push(x);
        }
    }
    return listBomb;
}


// funzione crea quadrato
function creaQuadrato() {
    let square = document.createElement("div");
    square.classList.add("square");
    return square;
}


// funzione che mi controlla il click
function click(square, n) {
    // il numero massimo di punti arrivabile
    let maxPoints = n - 16;
    // se l'elemento cliccato contiene la classe bomb
    if (square.classList.contains("bomb")) {
        // prendi tutti gli elementi con la classe bomb e a ciascuno di lor aggiungi la classe red
        const allBobms = document.querySelectorAll(".bomb");
        allBobms.forEach(function (bomb) {
            bomb.classList.add("red")
        })
        console.log("you lose");

    } else {
        // altrimenti aggiungi la classe checked e aggiugni +1 al punteggio,la vittoria si ottiene solo al raggiungimento del massimo punteggio
        square.classList.add("checked")
        punteggio += 1;
        if (punteggio == maxPoints) {
            console.log("you  win " + punteggio)
        } else {
            console.log(punteggio)
        }
    }
}


// da modificare ,in caso di "bomba" non rendere possibile il click di altri elementi
// const allSquares = document.querySelectorAll(".square");
// allSquares.forEach(function (square) {
//     square.removeEventListener("click", click);
// });











