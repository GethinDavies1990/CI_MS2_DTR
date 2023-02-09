/* global questions */
/* global swal */

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const questionCounterElement = document.getElementById("question-counter");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");
const scoreCounterElement = document.getElementById("score-counter");
const answerFeedback = document.getElementById("answer-feedback");
const timerElement = document.getElementById("timer");
const quizRules = document.getElementById("quiz-rules-container");

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let timer;

/**
 * Initiates the start of the quiz
 * sets the first question, and starts the timer function
 */
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
  startTimer();
});

/**
 * Hides the 'start Button' and 'rules'
 * question counter starts to come into work
 * removes the hide class from the question counter/score counter function
 * shuffles a new set of questions each time the game starts so the user wont have the same questions 1st, 2nd, 3rd... etc
 * Starts the timer
 * question is set
 */
function startGame() {
  startButton.classList.add("hide");
  quizRules.classList.add("hide");
  questionCounterElement.classList.remove("hide");
  scoreCounterElement.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  startTimer();
  setNextQuestion();
}

/**
 * function to give the user 15 seconds each question to answer
 * once time is up question cannot be answered
 * Timer function made using an example as seen on slack overflow
 */
function startTimer() {
  clearInterval(timer);
  let timeLeft = 15;
  timerElement.innerText = `Time left: ${timeLeft} seconds`;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `Time left: ${timeLeft} seconds`;
    if (timeLeft === 0) {
      clearInterval(timer);
      answerFeedback.innerText = "Time is up!";
      answerFeedback.style.backgroundColor = "#EF233C";
      answerFeedback.classList.remove("hide");
      nextButton.classList.remove("hide");
    }
  }, 1000);
}

/**
 * sets the next question
 * questions are kept in an external folder
 */
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  currentQuestionElement.innerText = currentQuestionIndex + 1;
  totalQuestionsElement.innerText = shuffledQuestions.length;
}

//  Shows the question to the user
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// resets the class once 'Next' is clicked
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  answerFeedback.innerText = "";
  answerFeedback.classList.add("hide");
}

/**
 * function to determine the answer the user is selected.
 * prompts the user with some feedback wether they have answered correctly or incorrectly
 * some style is added to the answer feedback, green to notify of correct answer, red for wrong
 * increments correct scores by 100
 */
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (correct) {
    score += 100;
    scoreCounterElement.innerText = "Score: " + score;
    answerFeedback.innerText = "Well Done! That is Correct!";
    answerFeedback.style.backgroundColor = "#50C878";
  } else {
    answerFeedback.innerText = "Ahhh that is Wrong!";
    answerFeedback.style.backgroundColor = "#EF233C";
  }
  answerFeedback.classList.remove("hide");
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    quizScoreAlert();
  }
}

// sets the correct or wrong class to the users answers
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// clears all correct or wrong styling
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// Sweet alert function for the alert at the end of the quiz
function quizScoreAlert() {
  swal({
    icon: "success",
    title: "Quiz Completed, Your score",
    text: `${score}/1000`,
  });
}
