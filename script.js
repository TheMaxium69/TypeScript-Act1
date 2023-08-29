var questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Londres", "Paris", "Berlin", "Madrid"],
        answer: 1 // Paris est la réponse correcte
    },
    {
        question: "Quel est le plus grand animal terrestre ?",
        options: ["Éléphant", "Girafe", "Lion", "Hippopotame"],
        answer: 0 // Éléphant est la réponse correcte
    },
    // Ajoutez d'autres questions ici
];
var currentQuestionIndex = 0;
var score = 0;
var questionText = document.getElementById("question-text");
var optionsContainer = document.getElementById("options-container");
var nextButton = document.getElementById("next-button");
function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion && questionText && optionsContainer) {
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach(function (option, index) {
            var optionElement = document.createElement("div");
            optionElement.classList.add("option");
            optionElement.textContent = option;
            optionElement.addEventListener("click", function () {
                if (index === currentQuestion.answer) {
                    score++;
                    alert("Bonne réponse !");
                }
                else {
                    alert("Mauvaise réponse. La réponse correcte était : " + currentQuestion.options[currentQuestion.answer]);
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                }
                else {
                    alert("Votre score final est : " + score + " sur " + questions.length);
                    currentQuestionIndex = 0;
                    score = 0;
                    showQuestion();
                }
            });
            if (optionsContainer) {
                optionsContainer.appendChild(optionElement);
            }
        });
    }
}
if (nextButton) {
    nextButton.addEventListener("click", function () {
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        }
    });
}
showQuestion();
