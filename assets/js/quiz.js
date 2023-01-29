const startBtn = document.querySelector('.start-btn button');
const infoBox = document.querySelector('.info-box');
const exitBtn = document.querySelector('.buttons .quit');
const continueBtn = document.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quiz-box');

// Start Quiz function
startBtn.onclick = () => {
    infoBox.classList.add("activeInfo"); // Displays the info box
}

// Exit Quiz function
exitBtn.onclick = () => {
    infoBox.classList.remove("activeInfo"); // Removes the info box
}

// Continue Quiz function
continueBtn.onclick = () => {
    infoBox.classList.remove("activeInfo"); // Removes the info box
    quizBox.classList.add("activeQuiz"); // Displays the quiz box
}