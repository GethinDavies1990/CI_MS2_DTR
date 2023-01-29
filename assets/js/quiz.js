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
    showQuestions(0);
    queCounter(1);
}

let queCount = 0;
let queNum = 1;

const nextBtn = document.querySelector('.next-btn');

// Next Button Function
nextBtn.onclick = () => {
    if (queCount < questions.length - 1){
        queCount++;
        queNum++;
        showQuestions(queCount);
    
    } else {
    console.log('Questions Comepleted');
}
}

// Gets questions and options from the array

function showQuestions(index) {
    const queText = document.querySelector(".que-text");
    const optionList = document.querySelector(".option-list");
    let queTag = '<span>'+ questions[index].numb +'.'+ questions[index].question +'</span>';
    let optionTag =   '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>'
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const option = document.querySelector('.option');
    for (let i=0; i <option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    if(userAns === correctAns){
        answer.classList.add('correct');
        console.log('Answer is Correct');
    } else {
        answer.classList.add('incorrect');
        console.log('Answer is Incorrect');
    }
    console.log(userAns)
}

function queCounter(index) {
    const bottomQuesCounter = document.querySelector('.total-que');
    let totalQuesCountTag = '<span><p>'+ queCount +'</p>of<p>'+ questions.length+'</p></span>'
    bottomQuesCounter.innerHTML = totalQuesCountTag;
}