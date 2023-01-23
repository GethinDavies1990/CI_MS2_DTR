const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const correctText = document.getElementById('correct-text');
const incorrectText = document.getElementById('incorrect-text');
const questionIndex = document.getElementById('question-index');
const progressBar = document.getElementById('progress-bar')
const scoreText = document.getElementById('score')

let score = 0;


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Function made to begin the game, will rest the question index to zero and set the next question 
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    correctText.classList.add('hide');
    incorrectText.classList.add('hide');
    questionIndex.innerText = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct) {
        correctText.innerText = 'Hey Well Done, That is Correct';
        correctText.classList.remove('hide');
        incorrectText.classList.add('hide');
        score += 10;
        scoreText.innerText = score;
    } else {
        incorrectText.innerText = 'Ahh, hard lines. That is incorrect';
        incorrectText.classList.remove('hide');
        correctText.classList.add('hide');
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('body-correct')
    } else {
        element.classList.add('body-wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('body-correct')
    element.classList.remove('body-wrong')
    correctText.classList.add('hide');
    incorrectText.classList.add('hide');
}

const questions = [
    {
        question: 'What sport is described as "the beautiful game"?',
        answers: [
            {text: 'Rugby', correct: false},
            {text: 'Football', correct: true},
            {text: 'Tennis', correct: false},
            {text: 'Golf', correct: false},
        ]
    },
    {
        question: 'Jurgen Klopp began his managerial career at which German club?',
        answers: [
        {text: 'Borussia Dortmund', correct: false},
        {text: 'VFL Wolfsburg', correct: false},
        {text: 'Bayern Munich', correct: false},
        {text: 'Mainz 05 ', correct: true}
    ]
},
    { 
        question: "Which country's rugby team call themselves the springboks?",
    answers: [
        {text: 'Wales', correct: false},
        {text: 'South Africa', correct: false},
        {text: 'Germany', correct: false},
        {text: 'Australia', correct: true}
    ]
},
    {
        question: 'The Chicago Cubs and Boston Red Sox play which sport?',
        answers: [
            {text: 'Basketball', correct: false},
            {text: 'American Football', correct: false},
            {text: 'Croquet', correct: false},
            {text: 'Baseball', correct: true}
        ]},
    { 
        question: "Who is the Premier League's all-time top scorer?",
    answers: [
        {text: 'Alan Shearer', correct: true},
        {text: 'Wayne Rooney', correct: false},
        {text: 'David Beckham', correct: false},
        {text: 'Didier Dogba', correct: false}
    ]
},
    {  
        question: 'In which sport do teams compete to win the Stanley Cup?',
    answers: [
        {text: 'Rugby', correct: false},
        {text: 'Ice Hockey (NHL)', correct: true},
        {text: 'Basketball (NBA)', correct: false},
        {text: 'Golf', correct: false}
    ]
},
    {
        question: 'How many MMA fights has UFC star Conor McGregor lost during his career?',
    answers: [
        {text: 'Six', correct: true},
        {text: 'Ten', correct: false},
        {text: 'Zero', correct: false},
        {text: 'Three', correct: false}
    ]
},
    { 
        question: 'Who has won more grand slam tennis titles: Serena Williams or Roger Federer?',
    answers: [
        {text: 'Serena Williams', correct: true},
        {text: 'Roger Federer', correct: false}
    ]
},
    { 
        question: 'The Los Angeles Lakers and New York Knicks play which sport?',
    answers: [
        {text: 'Baseball', correct: false},
        {text: 'American Football (NFL)', correct: false},
        {text: 'Ice Hockey (NHL)', correct: false},
        {text: 'Basketball (NBA)', correct: true}
    ]
},
    { 
        question: 'Who won more caps for England: Wayne Rooney or David Beckham?',
    answers: [
        {text: 'David Beckham', correct: false},
        {text: 'Wayne Rooney', correct: true}
        
    ]}
       
]