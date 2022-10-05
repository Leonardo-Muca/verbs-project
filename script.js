const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const first = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third = document.getElementById('thrid-verb');
const fourth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRightCounter = document.getElementById('all-right-counter');
const verbsContainer = document.getElementById('verbs-container');

// const numberOfVerbs = verbs.length;

let answerRoullete = [0, 1, 1, 1];
let averyNumberOfVerbs = [];
let allRightAnswer;

next.addEventListener('click', function () {
    ponerVerbo();
    next.style.display = 'none';
});

function ponerVerbo() {
    showVerb.innerHTML = '<p> Deposita 200 bitcoins para jugar <p>';
}

function isItRight_() {
    return answer == rightAnswer ? true : false
}

function randomVerbo(notThisOne) {
    theOne = Math.floor(Math.random() * verbsContainer.length);
    return theOne == notThisOne ? randomVerbo(notThisOne) : theOne;
}

function ponerVerbo() {
    answerRoullete = shuffleAnswers(answerRoullete);
    let randomPosition = everyNumberOfVerbs[lastPosition];
    let imgText = "<img src='img/" + verbs[randomPosition] + ".jpg' height:'140px' width='100px'>"

    first.classList.add('btn', 'btn-outline-primary', 'btn-md');
    second.classList.add('btn', 'btn-outline-primary', 'btn-md');
    third.classList.add('btn', 'btn-outline-primary', 'btn-md');
    fourth.classList.add('btn', 'btn-outline-primary', 'btn-md');

    if (lastPosition >= 0) {
        var just_position = lastPosition + 1;
        verbsContainer.innerHTML = '' + just_position + ' / ' + numberOfVerbs;
        allRightCounter.innerHTML = 'Right Answers:' + rightAnswerCounter;
        showVerb.innerHTML = verbs[randomPosition];
        showImage.innerHTML = imgText;
        showAudio.src = "audio/" + verbs[randomPosition] + "mp3";
        showAudio.play();

        first.innerHTML = !answerRoullete[0] ? verbos[randomPosition] : verbos[randomVerbo[randomPosition]];
        second.innerHTML = !answerRoullete[0] ? verbos[randomPosition] : verbos[randomVerbo[randomPosition]];
        third.innerHTML = !answerRoullete[0] ? verbos[randomPosition] : verbos[randomVerbo[randomPosition]];
        fourth.innerHTML = !answerRoullete[0] ? verbos[randomPosition] : verbos[randomVerbo[randomPosition]];

        rightAnswer = verbos[randomPosition];
        lastPosition = lastPosition - 1;
    }else{
        verbsContainer.innerHTML = "0 / "+numberOfVerbs;
        allRightCounter.innerHTML = "Right answers:" + rightAnswerCounter;
        showVerb.innerHTML = "Thank you!"
        verbsContainer.innerHTML = "";
    }

};

//En la 44 es rightAsweresCounter = rightAnswersCounter