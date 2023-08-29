interface Question {
    question: string;
    options: string[];
    answer: number;
}

const questions: Question[] = [
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

let currentQuestionIndex: number = 0;
let score: number = 0;

const questionText: HTMLElement = document.getElementById("question-text");
const optionsContainer: HTMLElement = document.getElementById("options-container");
const nextButton: HTMLElement = document.getElementById("next-button");

function showQuestion() {
    const currentQuestion: Question | undefined = questions[currentQuestionIndex];
    if (currentQuestion && questionText && optionsContainer) {
        questionText.textContent = currentQuestion.question;

        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const optionElement: HTMLDivElement = document.createElement("div");
            optionElement.classList.add("option");
            optionElement.textContent = option;

            optionElement.addEventListener("click", () => {
                if (index === currentQuestion.answer) {
                    score++;
                    alert("Bonne réponse !");
                } else {
                    alert("Mauvaise réponse. La réponse correcte était : " + currentQuestion.options[currentQuestion.answer]);
                }

                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
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
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        }
    });
}

showQuestion();
