const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');








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
        question: 'Did Cristiano Ronaldo score more goals or play more games for Real Madrid in all competitions?',
        answers: [
            {text: 'Scored more goals', correct: true },
            {text: 'Played more games', correct: false }

        ]
    },
    {
        question: 'Who is England’s most capped football player?',
        answers: [
            {text: 'Wayne Rooney', correct: false  },
            {text: 'David Beckham', correct: false },
            {text: 'Peter Shilton', correct: true },
            {text: 'Frank Lampard', correct: false }

        ]
    },
    {
        question: 'How many world titles has Phil ‘the Power’ Taylor won in darts?',
        answers: [
            {text: '24', correct: false  },
            {text: '5', correct: false },
            {text: '2', correct: false },
            {text: '16', correct: true }

        ]
    },
    {
        question: 'Which England footballer was famously never given a yellow card?',
        answers: [
            {text: 'David Beckham', correct: false  },
            {text: 'David Seamen', correct: false },
            {text: 'Gary Lineker', correct: true },
            {text: 'Ryan Giggs', correct: false }

        ]
    },
    {
        question: 'Who is Wales’s most capped rugby player?',
        answers: [
            {text: 'Alun Wyn Jones', correct: true  },
            {text: 'Gethin Jenkins', correct: false },
            {text: 'Shane Williams', correct: false },
            {text: 'Mike Phillips', correct: false }

        ]
    },
    {
        question: 'Who is the Premier League’s all-time top scorer?',
        answers: [
            {text: 'David Beckham', correct: false  },
            {text: 'Alan Shearer', correct: true },
            {text: 'MIchael Carrick', correct: false },
            {text: 'Paul Scholes', correct: false }

        ]
    },
    {
        question: 'Who is Britain’s most decorated Olympian?',
        answers: [
            {text: 'Paula Radcliffe', correct: false  },
            {text: 'Jason Kenny', correct: false },
            {text: 'Chris Hoy', correct: true },
            {text: 'Bradley Wiggins', correct: true }

        ]
    },

]