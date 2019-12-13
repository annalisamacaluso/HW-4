const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('title');
const answerButtonsElement = document.getElementById('answer-buttons');
//const choicesButtonsElement = document.getElementById('title');
​
let shuffledQuestions, currentQuestionsIndex;
let score = 0;
let highScore = +localStorage.getItem("high-score");
//console.log(typeof highScore);
highScore = parseInt(highScore);
​
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click',function(){
    currentQuestionsIndex ++;
    setNextQuestion();
})
​
function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random()- .5);
    console.log("shuffled questions", shuffledQuestions)
    currentQuestionsIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
}
​
function showQuestion(question) {
    console.log(question)
    questionElement.innerText = question.title;
    question.choices.forEach(function(choice) {
        const button = document.createElement('button')
        button.innerText = choice;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}
​
function resetState(){
    // clearStatusClass(currentQuestionsIndex);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
​
function selectAnswer(e){
    const selectedButton = e.target;
    console.log("selBut", selectedButton)
  
    if(selectedButton.innerText === shuffledQuestions[currentQuestionsIndex].answer){
        score++
    } else {
​
    }
​
    if(shuffledQuestions.length > currentQuestionsIndex +1){
        nextButton.classList.remove('hide');
    } else {
        //when the game is over
        startButton.innerText  = 'Restart';
        startButton.classList.remove('hide');
​
        if(score > highScore){
            localStorage.setItem("high-score", score)
        }
    }
}
