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
    showQuestions(1);
}

let queCount = 0;

const nextBtn = document.querySelector('.next-btn');

// Next Button Function
nextBtn.onclick = () => {
    queCount++
    showQuestions(queCount);
}

// Gets questions and options from the array

function showQuestions(index) {
    const queText = document.querySelector("que-text");
    const optionList = document.querySelector("option-list");
    let queTag = '<span>'+ questions[index].question +'</span>';
    let optionTag = '<div class="option">'+ questions[0].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[1].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[2].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[3].options[3] +'<span></span></div>'
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
}