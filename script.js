const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('questions');
const answerButtonsElement = document.getElementById('answer-buttons');
// const choicesButtonsElement = document.getElementById('title');

let shuffledQuestions, currentQuestionsIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click',()=>{
    currentQuestionsIndex ++;
    setNextQuestion();
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random()- .5);
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
}

function showQuestion(questions) {
    questionElement.innerText = questions.questions;
    questions.choices.forEach(choices => {
        const button = document.createElement('button')
        button.innerText = choices.text;
        button.classList.add('btn');
        if (choices.correct) {
            button.dataset.correct = choices.correct;
        }
        button.addEventListener('click', selectChoices);
        choicesButtonsElement.appendChild(button);
    })
}

function resetState(){
    // clearStatusClass(currentQuestionsIndex);
    nextButton.classList.add('hide');
    while (choicesButtonsElement.firstChild) {
        choicesButtonsElement.removeChild(choicesButtonsElement.firstChild);
    }
}

function selectAnswer(){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correctl
    setStatusClass(document.body,correct);
    Array.from(choicesButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if(shuffledQuestions.length > currentQuestionsIndex +1){
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText  = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }     
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}