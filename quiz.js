const allQuestions = [
    {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "JavaScript", "C++"],
        answer: 1
    },
    {
        question: "Who is the creator of the Python programming language?",
        options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie"],
        answer: 1
    },
    {
        question: "Which of the following is a version control system?",
        options: ["Git", "Docker", "Jenkins"],
        answer: 0
    },
    {
        question: "Which language is primarily used for developing iOS applications?",
        options: ["Swift", "Kotlin", "Java"],
        answer: 0
    },
    {
        question: "Which of the following is not a programming language?",
        options: ["HTML", "Java", "Ruby"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
        answer: 0
    },
    {
        question: "What is the main purpose of SQL?",
        options: ["Web development", "Data manipulation", "Game development"],
        answer: 1
    },
    {
        question: "Which company developed the Java programming language?",
        options: ["Microsoft", "Sun Microsystems", "Apple"],
        answer: 1
    },
    {
        question: "What is the extension of Python files?",
        options: [".java", ".py", ".js"],
        answer: 1
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "React", "Laravel"],
        answer: 1
    },
    {
        question: "Which of the following is used to style web pages?",
        options: ["HTML", "SQL", "CSS"],
        answer: 2
    },
    {
        question: "In which year was the Python programming language released?",
        options: ["1991", "1995", "2000"],
        answer: 0
    },
    {
        question: "Which programming language is known for its use in artificial intelligence and machine learning?",
        options: ["PHP", "Python", "C#"],
        answer: 1
    },
    {
        question: "What does the acronym ‘API’ stand for?",
        options: ["Application Programming Interface", "Applied Program Interaction", "Advanced Programming Instruction"],
        answer: 0
    },
    {
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB"],
        answer: 2
    }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const options = document.getElementsByClassName('option');
    
    questionElement.textContent = questions[currentQuestionIndex].question;
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = questions[currentQuestionIndex].options[i];
    }
}

function checkAnswer(selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption;
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('next-btn').style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').textContent = score + "/" + questions.length;

    const answersBody = document.getElementById('answers-body');
    answersBody.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        const row = document.createElement('tr');
        const questionCell = document.createElement('td');
        questionCell.textContent = questions[i].question;
        const userAnswerCell = document.createElement('td');
        userAnswerCell.textContent = questions[i].options[userAnswers[i]];
        userAnswerCell.style.color = userAnswers[i] === questions[i].answer ? 'green' : 'red';
        const correctAnswerCell = document.createElement('td');
        correctAnswerCell.textContent = questions[i].options[questions[i].answer];
        row.appendChild(questionCell);
        row.appendChild(userAnswerCell);
        row.appendChild(correctAnswerCell);
        answersBody.appendChild(row);
    }
}

function startQuiz() {
    shuffle(allQuestions);
    questions = allQuestions.slice(0, 5);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', (event) => {
    startQuiz();
});
