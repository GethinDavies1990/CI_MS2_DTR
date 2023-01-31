const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionCounterElement = document.getElementById('question-counter')
const currentQuestionElement = document.getElementById('current-question')
const totalQuestionsElement = document.getElementById('total-questions')
const scoreCounterElement = document.getElementById('score-counter')
const currentScoreElement = document.getElementById('current-score')
const answerFeedback = document.getElementById('answer-feedback')
const timerElement = document.getElementById('timer')

let shuffledQuestions, currentQuestionIndex
let score = 0
let timer;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  startTimer()
})

function startGame() {
  startButton.classList.add('hide')
  questionCounterElement.classList.remove('hide')
  scoreCounterElement.classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  startTimer()
  setNextQuestion()
}

function startTimer() {
  clearInterval(timer)
  let timeLeft = 15
  timerElement.innerText = `Time left: ${timeLeft} seconds`
  timer = setInterval(() => {
    timeLeft--
    timerElement.innerText = `Time left: ${timeLeft} seconds`
    if (timeLeft === 0) {
      clearInterval(timer)
      answerFeedback.innerText = 'Time is up!'
      answerFeedback.style.backgroundColor = '#EF233C'
      answerFeedback.classList.remove('hide')
      nextButton.classList.remove('hide')
    }
  }, 1000)
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  currentQuestionElement.innerText = currentQuestionIndex + 1
  totalQuestionsElement.innerText = shuffledQuestions.length
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
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  answerFeedback.innerText = ''
  answerFeedback.classList.add('hide')
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (correct) {
    score += 100
    scoreCounterElement.innerText = "Score: " + score;
    answerFeedback.innerText = 'Well Done! That is Correct!'
    answerFeedback.style.backgroundColor = '#23903c'
  } else {
    answerFeedback.innerText = 'Ahhh that is Wrong!'
    answerFeedback.style.backgroundColor = '#EF233C'

  }
  answerFeedback.classList.remove('hide')
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    alert(`Your final score is: ${score}`)
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}