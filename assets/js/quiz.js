const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
};

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.ass('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            answerButtonsElement.appendChild(button)
        }
    })
}

function selectAnswer() {

};

const questions = [
    {
        question: 'Who won the World Cup?',
        answers: [
            {text: 'Argentina', correct: true},
            {text: 'Brazil', correct: false}
        ]
    }
]