
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Lisbon"],
        correct: 1
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correct: 2
    },
    {
        question: "What is the color of the sky?",
        options: ["Blue", "Green", "Red", "Yellow"],
        correct: 0
    }
];
function displayQuiz() {
    const quizContainer = document.getElementById('quiz');
    let output = '';
    
    quizQuestions.forEach((currentQuestion, questionIndex) => {
        output += `<div class="question">${currentQuestion.question}</div>`;
        currentQuestion.options.forEach((option, optionIndex) => {
            output += `
                <div class="options">
                    <input type="radio" name="question${questionIndex}" value="${optionIndex}">
                    ${option}
                </div>`;
        });
    });

    quizContainer.innerHTML = output;
}

function submitQuiz() {
    let score = 0;
    
    quizQuestions.forEach((currentQuestion, questionIndex) => {
        const selectedOption = document.querySelector(`input[name="question${questionIndex}"]:checked`);
        
        if (selectedOption && parseInt(selectedOption.value) === currentQuestion.correct) {
            score++;
        }
    });
    
    document.getElementById('score').innerText = `Your Score: ${score} / ${quizQuestions.length}`;
}


displayQuiz();
