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
const wrongNumbers = document.getElementById('wrong-num');
const score = document.getElementById('points');
const playButton = document.getElementById('start');

playButton.addEventListener('click', startGame);

// Functions
function randomNumberGenerator(min, max) {
    const range = (max - min) + 1;
    return Math.floor(Math.random() * range) + min;
}

function cpuNumberGenerator(min, max) {
    for (let i = 0; i < 5; i++) {
        let simonNum = randomNumberGenerator(1, 100);
        gameArray.push(simonNum);
        cpuNumbers.innerText = gameArray.join('  ');
    }
}

function simonDisplayNone() {
    cpuNumbers.style.display = 'none';
}

function simonDisplayYes() {
    cpuNumbers.style.display = 'block';
}

function gameLogic() {
    for (let i = 0; i < gameArray.length; i++) {
        let userNumber = parseInt(prompt('Input the number in the position: ' + (i + 1)));
        while (isNaN(userNumber) || userNumber > 100) {
            userNumber = parseInt(prompt('Input the number in the position: ' + (i + 1)));
        }
        if (gameArray.includes(userNumber)) {
            userArray.push(userNumber);
            let points = userArray.length;
            score.innerText = 'Final Score: ' + points;
        } else {
            wrongArray.push(userNumber);
            wrongNumbers.innerText = 'Wrong numbers: ' + wrongArray.join('  ');
        }
    }
    simonDisplayYes();
}

function startGame(min, max) {
    cpuNumbers.innerText = '';
    cpuNumberGenerator(min, max);
    setTimeout(simonDisplayNone, 29500);
    setTimeout(gameLogic, 30000);
}

