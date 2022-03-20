// Debug
console.log('JS OK!');

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

// Config
let gameArray = [];
let userArray = [];
let wrongArray = [];

const cpuNumbers = document.getElementById('numbers');
const userNumbers = document.getElementById('right-num');
const wrongNumbers = document.getElementById('wrong-num');

// Functions
function randomNumberGenerator(min, max) {
    const range = (max - min) + 1;
    return Math.floor(Math.random() * range) + min;
}

function cpuNumberGenerator(min, max) {
    for (let i = 0; i < 5; i++) {
        let simonNum = randomNumberGenerator(1, 100);
        gameArray.push(simonNum);
        cpuNumbers.innerText = gameArray;
    }
}

cpuNumberGenerator();