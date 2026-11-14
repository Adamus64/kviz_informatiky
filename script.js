import { questions, quizData } from './otazky.js';

const startBtn = document.getElementById('btnStart');
const startMenu = document.getElementById('startMenu');
const gameMenu = document.getElementById('gameMenu');
const otazka = document.getElementById('otazka');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const spravneCounter = document.getElementById('spravneCounter');
const spatneCounter = document.getElementById('spatneCounter');
const mezera = document.getElementById('mezera');
let index = 0;
let spravne = 0;
let spatne = 0;
let beziKviz = false;

gameMenu.style.display = "none"

function startingGame() {
    beziKviz = true;
    startMenu.style.display = 'none';
    gameMenu.style.display = 'flex';
    index = 0;
    spravne = 0;
    spatne = 0;
    loadQuestion(index);
}

function loadQuestion () {
    otazka.innerText = (index + 1) + ". Otázka: " + questions[index];
    btn1.innerText = quizData[index].options[0];
    btn2.innerText = quizData[index].options[1];
    btn3.innerText = quizData[index].options[2];
    btn4.innerText = quizData[index].options[3];
}

function checkAnswer (selectedOption) {
    if (selectedOption === quizData[index].correct) {
        spravne++;
        spravneCounter.innerText = spravne + " ✅"
    } else {
        spatne++;
        spatneCounter.innerText = spatne + " ❌"
    }

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        beziKviz = false;
        otazka.innerText = "Konec kvízu tvé skóre: ";
        mezera.style.display = "none";
        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";
        btn4.style.display = "none";
    }
}

btn1.addEventListener('click', () => checkAnswer(0))
btn2.addEventListener('click', () => checkAnswer(1))
btn3.addEventListener('click', () => checkAnswer(2))
btn4.addEventListener('click', () => checkAnswer(3))

startBtn.addEventListener('click', startingGame);

window.addEventListener('beforeunload', (event) => {
    if (beziKviz) {
        event.preventDefault();
        event.returnValue = '';
    }
});