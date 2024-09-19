(function() {
    const myQuestions = [
        {
            question: "What does HTML stand for?",
            answers: {
                a: "Hyper Text Markup Language",
                b: "Home Tool Markup Language",
                c: "Hyperlinks and Text Markup Language"
            },
            correctAnswer: "a"
        },
        {
            question: "Which language is used for styling web pages?",
            answers: {
                a: "HTML",
                b: "JQuery",
                c: "CSS"
            },
            correctAnswer: "c"
        },
        {
            question: "Which is not a JavaScript Framework?",
            answers: {
                a: "Python Script",
                b: "JQuery",
                c: "Django"
            },
            correctAnswer: "a"
        }
    ];

    function buildQuiz() {
        const output = [];
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();
