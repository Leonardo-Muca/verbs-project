// Constantes que manejan la muestra de elementos
const showAudio = document.getElementById("showAudio");
const showImage = document.getElementById("showImage");
const showVerb = document.getElementById("showVerb");

// Constantes que manejan los verbos a mostrar
const first = document.getElementById("first-verb");
const fourth = document.getElementById("fourth-verb");
const second = document.getElementById("second-verb");
const third = document.getElementById("third-verb");

//Constantes que manejan los estados de la app
const allRightCounter = document.getElementById("all-right-answers");
const next = document.getElementById("next");
const verbsContainer = document.getElementById("verbs-container");
const verbsCounter = document.getElementById("verbs-counter");

//Numero de verbos en la lista
const numberOfVerbs = verbs.length;

//Variables idependientes
let answerRoullete = [0, 1, 1, 1];
let everyNumberOfVerbs = [];
let rightAnswer;
let rightAnswersCounter = 0;

//Funcion encargada de escuchar y ejecutar al momneto del click en el boton next
next.addEventListener("click", function () {
    putVerb();
    next.style.display = 'none';
});

makeRandomList();

let lastPosition = everyNumberOfVerbs.length - 1;

//Funcion encargada de hacer una lista aleatoria de todos los verbos
function makeRandomList() {
    for (var i = 0; i < numberOfVerbs; i++) {
        everyNumberOfVerbs.push(i);
    }
    everyNumberOfVerbs = everyNumberOfVerbs.sort(() => Math.random() - 0.5);
}

function buttonEffect(itsRight, button) {
    if (itsRight) {
        button.classList.add('rightAnswer');
        setTimeout(function () {
            button.classList.remove('rightAnswer');
        }, 1000);
        rightAnswersCounter = rightAnswersCounter + 1;
    } else {
        button.classList.add('wrongAnswer');
        setTimeout(function () {
            button.classList.remove('wrongAnswer');
        }, 1000);
    }
    setTimeout(function () {
        putVerb();
    }, 500);
}

//Eventos encargados de escuchar el realizar una accion
first.addEventListener("click", function () {
    buttonEffect(isItRightAnswer_(first.innerHTML), this);
});

second.addEventListener("click", function () {
    buttonEffect(isItRightAnswer_(second.innerHTML), this);
});

third.addEventListener("click", function () {
    buttonEffect(isItRightAnswer_(third.innerHTML), this);
});

fourth.addEventListener("click", function () {
    buttonEffect(isItRightAnswer_(fourth.innerHTML), this);
});

//Funcion encargada de poner la respuesta en una posicion distitnta
function randomPositionAnswer(array) {
    let numberOfAnswerButtons = array.length;
    let randomIndex;
    while (numberOfAnswerButtons != 0) {
        randomIndex = Math.floor(Math.random() * numberOfAnswerButtons);
        numberOfAnswerButtons--;
        [array[numberOfAnswerButtons], array[randomIndex]] = [
            array[randomIndex], array[numberOfAnswerButtons]];
    }
    return array;
}

//Funcion encargada de decir si es correcto o no el verbo escogido
function isItRightAnswer_(answer) {
    return answer == rightAnswer ? true : false;
}

//Funcion que se encarga de montrar un verbo aleatorio
function randomVerbo(notThisOne) {
    theOne = Math.floor(Math.random() * verbos.length);
    return theOne == notThisOne ? randomVerbo(notThisOne) : theOne;
}

//Funcion que se encarga de mostrar el verbo y determinar si es correcto con las constantes de estado
function putVerb() {
    answerRoullete = randomPositionAnswer(answerRoullete);
    let randomPosition = everyNumberOfVerbs[lastPosition];
    let imgText = "<img src='assets/" + verbs[randomPosition] + ".jpg' height:'140px' width='100px' style='text-align: center ; margin-bottom: 50px;'>";

    first.classList.add("btn", "btn-outline-primary", "btn-md");
    second.classList.add("btn", "btn-outline-primary", "btn-md");
    third.classList.add("btn", "btn-outline-primary", "btn-md");
    fourth.classList.add("btn", "btn-outline-primary", "btn-md");

    if (lastPosition >= 0) {
        var just_position = lastPosition + 1;
        verbsCounter.innerHTML = "" + just_position + " / " + numberOfVerbs;
        allRightCounter.innerHTML = "Right answers: " + rightAnswersCounter;
        showVerb.innerHTML = verbs[randomPosition];
        showImage.innerHTML = imgText;

        showAudio.src = "audio/" + verbs[randomPosition] + ".mp3";
        showAudio.play();

        first.innerHTML = !answerRoullete[0] ? verbos[randomPosition] : verbos[randomVerbo(randomPosition)];
        second.innerHTML = !answerRoullete[1] ? verbos[randomPosition] : verbos[randomVerbo(randomPosition)];
        third.innerHTML = !answerRoullete[2] ? verbos[randomPosition] : verbos[randomVerbo(randomPosition)];
        fourth.innerHTML = !answerRoullete[3] ? verbos[randomPosition] : verbos[randomVerbo(randomPosition)];

        rightAnswer = verbos[randomPosition];
        lastPosition = lastPosition - 1;
    } else {
        verbsCounter.innerHTML = "0 / " + numberOfVerbs;
        allRightCounter.innerHTML = "Right answers: " + rightAnswersCounter;
        showVerb.innerHTML = "Thank you !";
        verbsContainer.innerHTML = "";
    }
}
