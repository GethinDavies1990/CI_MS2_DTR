const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
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
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
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

const questions = [
    {
        question: 'Jurgen Klopp began his managerial career at which German club?',
        answers: [
            {text: 'Mainz 05', correct: true },
            {text: 'Borussia Dortmund', correct: false },
            {text: 'Bayern Munich', correct: false },
            {text: 'Vfl Wolfsburg', correct: false }

        ]
    },
    {
        question: 'England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match?',
        answers: [
            {text: '14', correct: false  },
            {text: '33', correct: false },
            {text: '20', correct: true },
            {text: '7', correct: false }

        ]
    },
    {
        question: 'What was Muhammad Ali’s real name?',
        answers: [
            {text: 'Alex Turner', correct: false  },
            {text: 'Cassius Clay', correct: true },
            {text: 'Muhammad Alixon', correct: false },
            {text: 'Clayton Caston', correct: false }

        ]
    },
    {
        question: 'England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match?',
        answers: [
            {text: '14', correct: false  },
            {text: '33', correct: false },
            {text: '20', correct: true },
            {text: '7', correct: false }

        ]
    },
    {
        question: 'England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match?',
        answers: [
            {text: '14', correct: false  },
            {text: '33', correct: false },
            {text: '20', correct: true },
            {text: '7', correct: false }

        ]
    },
    {
        question: 'England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match?',
        answers: [
            {text: '14', correct: false  },
            {text: '33', correct: false },
            {text: '20', correct: true },
            {text: '7', correct: false }

        ]
    },
    {
        question: 'England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match?',
        answers: [
            {text: '14', correct: false  },
            {text: '33', correct: false },
            {text: '20', correct: true },
            {text: '7', correct: false }

        ]
    },
    {
        question: 'England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match?',
        answers: [
            {text: '14', correct: false  },
            {text: '33', correct: false },
            {text: '20', correct: true },
            {text: '7', correct: false }

        ]
    },
    {
        question: 'England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match?',
        answers: [
            {text: '14', correct: false  },
            {text: '33', correct: false },
            {text: '20', correct: true },
            {text: '7', correct: false }

        ]
    },
    {
        question: 'England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match?',
        answers: [
            {text: '14', correct: false  },
            {text: '33', correct: false },
            {text: '20', correct: true },
            {text: '7', correct: false }

        ]
    },

]