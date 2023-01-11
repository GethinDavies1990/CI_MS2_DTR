const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = []
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: 'Jurgen Klopp began his managerial career at which German club?',
    choice1: 'Mainz 05',
    choice2: 'Borussia Dortmund',
    choice3: 'Bayern Munich',
    choice4: 'VFL Wolfsburg',
    answer: 1,
  },
  {
    question: 'Jurgen Klopp began his managerial career at which German club?',
    choice1: 'Mainz 05',
    choice2: 'Borussia Dortmund',
    choice3: 'Bayern Munich',
    choice4: 'VFL Wolfsburg',
    answer: 1,
  },
  {
    question: 'Jurgen Klopp began his managerial career at which German club?',
    choice1: 'Mainz 05',
    choice2: 'Borussia Dortmund',
    choice3: 'Bayern Munich',
    choice4: 'VFL Wolfsburg',
    answer: 1,
  },
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
  }

  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS ) * 100}%`

  const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex]
  question.innerText = currentQuestion.question
  choices.forEach(choice => {
    const number = choice.dataset['number'
  ]
  })
}