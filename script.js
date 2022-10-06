const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const first = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third = document.getElementById('third-verb');
const fourth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRightCounter = document.getElementById('all-right-counter');
const verbsContainer = document.getElementById('verbs-container');

const numberOfVerbs = verbs.length;

let answerRoullete = [0, 1, 1, 1];
let everyNumberOfVerbs = [];
let rightAnswerCounter = 0;
let rightAnswer;

next.addEventListener('click', function () {
    //ponerVerbo();
    next.style.display = 'none';
});

makeRandomList();

let lastPosition = everyNumberOfVerbs = length - 1;

function makeRandomList() {
    for (var i = 0; i < numberOfVerbs; i++) {
        everyNumberOfVerbs.push(i);
    }
    everyNumberOfVerbs = everyNumberOfVerbs.sort(() => Math.random() - 0.5);
};

function buttonEffect(itsRight, button) {
    if (itsRight) {
        button.classList.add('rightAnswer');
        setTimeout(function () {
            button.classList.remove('rightAnswer');
        }, 1000)
        rightAnswerCounter = rightAnswerCounter + 1;
    } else {
        button.classList.add('wrongAnswer');
        setTimeout(function () {
            button.classList.remove('wrongAnswer');
        }, 1000)
        rightAnswerCounter = rightAnswerCounter + 1;
    }
    //tougle, le quita las clase
    setTimeout(function () {
        ponerVerbo();
    }, 1000);
};

first.addEventListener('click', function(){
    buttonEffect(isItRight_(first.innerHTML), this);
});

second.addEventListener('click', function(){
    buttonEffect(isItRight_(second.innerHTML), this);
});

third.addEventListener('click', function(){
    buttonEffect(isItRight_(third.innerHTML), this);
});

fourth.addEventListener('click', function(){
    buttonEffect(isItRight_(fourth.innerHTML), this);
});

function shuffleAswers(array){
    let numberOfAnswerButtons = array.length;
    let randomIndex;

    while(numberOfAnswerButtons !=0){
        randomIndex = Math.floor(Math.random()*numberOfAnswerButtons);
        [array[numberOfAnswerButtons],array[randomIndex]] = [array[randomIndex], array[numberOfAnswerButtons]];
    }
}

