const allQuestions = [
    {
        question: "def add(a, b): return a + b result = add(3, 4) print(result) What is the output?",
        options: ["a) 34", "b) 7", "c) 12"],
        answer: 1
    },
    {
        question: "let x = 5; let y = '5'; console.log(x == y); What is the output?",
        options: ["a) true", "b) false", "c) undefined"],
        answer: 0
    },
    {
        question: "public class Main { public static void main(String[] args) { int[] numbers = {1, 2, 3, 4, 5}; System.out.println(numbers[2]); } } What is the output?",
        options: ["a) 1", "b) 2", "c) 3"],
        answer: 2
    },
    {
        question: "#include <iostream> using namespace std; int main() { int a = 10; int b = 20; cout << a + b << endl; return 0; } What is the output?",
        options: ["a) 10", "b) 20", "c) 30"],
        answer: 2
    },
    {
        question: "class Program { static void Main() { int x = 10; int y = 5; Console.WriteLine(x - y); } } What is the output?",
        options: ["a) 15", "b) 5", "c) 50"],
        answer: 1
    },
    {
        question: "let a = 'Hello'; let b = 'World'; console.log(a + ' ' + b); What is the output?",
        options: ["a) HelloWorld", "b) Hello World", "c) HelloWorld"],
        answer: 1
    },
    {
        question: "for i in range(3): print(i) What is the output?",
        options: ["a) 0 1 2", "b) 1 2 3", "c) 0 1 2 3"],
        answer: 0
    },
    {
        question: "public class Main { public static void main(String[] args) { int x = 15; if (x > 10) { System.out.println('Greater than 10'); } } } What is the output?",
        options: ["a) Greater than 10", "b) Less than 10", "c) No output"],
        answer: 0
    },
    {
        question: "#include <iostream> using namespace std; int main() { int x = 4; int y = 2; cout << x / y << endl; return 0; } What is the output?",
        options: ["a) 8", "b) 2", "c) 1"],
        answer: 1
    },
    {
        question: "def multiply(a, b): return a * b result = multiply(6, 7) print(result) What is the output?",
        options: ["a) 13", "b) 42", "c) 67"],
        answer: 1
    },
    {
        question: "let x = 10; let y = 20; let z = x + y; console.log(z); What is the output?",
        options: ["a) 1020", "b) 30", "c) 200"],
        answer: 1
    },
    {
        question: "public class Main { public static void main(String[] args) { int x = 5; int y = 3; System.out.println(x * y); } } What is the output?",
        options: ["a) 8", "b) 15", "c) 53"],
        answer: 1
    },
    {
        question: "#include <iostream> using namespace std; int main() { int a = 5; int b = 6; cout << a + b << endl; return 0; } What is the output?",
        options: ["a) 30", "b) 11", "c) 56"],
        answer: 1
    },
    {
        question: "class Program { static void Main() { string name = 'John'; Console.WriteLine('Hello, ' + name); } } What is the output?",
        options: ["a) Hello John", "b) Hello, John", "c) Hello+ John"],
        answer: 1
    },
    {
        question: "def subtract(a, b): return a - b result = subtract(10, 4) print(result) What is the output?",
        options: ["a) 6", "b) 14", "c) -6"],
        answer: 0
    },
    {
        question: "let list = [1, 2, 3, 4]; console.log(list.length); What is the output?",
        options: ["a) 3", "b) 4", "c) 5"],
        answer: 1
    },
    {
        question: "public class Main { public static void main(String[] args) { String greeting = 'Hi'; System.out.println(greeting); } } What is the output?",
        options: ["a) Hi", "b) Hello", "c) Greeting"],
        answer: 0
    },
    {
        question: "#include <iostream> using namespace std; int main() { int a = 10; int b = 3; cout << a % b << endl; return 0; } What is the output?",
        options: ["a) 1", "b) 2", "c) 3"],
        answer: 0
    },
    {
        question: "name = 'Alice' print(name.upper()) What is the output?",
        options: ["a) ALICE", "b) alice", "c) Alice"],
        answer: 0
    },
    {
        question: "let a = true; let b = false; console.log(a && b); What is the output?",
        options: ["a) true", "b) false", "c) undefined"],
        answer: 1
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
