// --- Quiz (Definicja Danych - WBUDOWANE) ---
const quizData = [
    { question: "Symboliczny początek romantyzmu w Polsce to rok 1822 i wydanie:", options: ["'Dziadów cz. III'", "'Pana Tadeusza'", "'Ballad i romansów'", "'Kordiana'"], answer: "'Ballad i romansów'", source: "[2, 13]" },
    { question: "Który bohater wypowiada słowa 'Jam jest Milijon – bo za miliony kocham i cierpię katusze'?", options: ["Kordian", "Konrad Wallenrod", "Gustaw-Konrad", "Hrabia Henryk"], answer: "Gustaw-Konrad", source: "[8, 27]" },
    { question: "Ideę Polski jako 'Winkelrieda narodów' głosił:", options: ["Adam Mickiewicz w 'Dziadach'", "Juliusz Słowacki w 'Kordianie'", "Zygmunt Krasiński w 'Nie-Boskiej komedii'", "Cyprian Norwid w 'Promethidionie'"], answer: "Juliusz Słowacki w 'Kordianie'", source: "[4, 6, 36]" },
];

// --- Quiz (Funkcje) ---
const quizQuestionText = document.getElementById('quiz-question-text');
// ... reszta funkcji z quiz.js bez zmian ...
// (upewnij się, że odwołania do quizData są poprawne,
// teraz jest to zmienna lokalna w tym pliku)

// Przykład początku reszty kodu dla quiz.js:
const quizOptionsButtons = document.getElementById('quiz-options-buttons');
const quizFeedbackText = document.getElementById('quiz-feedback-text');
const quizNextButton = document.getElementById('quiz-next-button');
const quizResultsText = document.getElementById('quiz-results-text');
const quizContent = document.getElementById('quiz-content');
const quizProgress = document.getElementById('quiz-progress');
let currentQuizQuestionIndex = 0;
let quizScore = 0;

function initQuiz() {
    if (!quizContent) { console.error("Kontener quizu nie istnieje!"); return; }
    // quizData jest teraz zdefiniowane w tym pliku
    if (typeof shuffleArray === 'function') {
        shuffleArray(quizData);
    } else {
        console.warn("Funkcja shuffleArray nie jest dostępna. Pytania quizu nie będą tasowane.");
    }

    currentQuizQuestionIndex = 0;
    quizScore = 0;
    quizContent.style.display = 'block';
    if (quizResultsText) quizResultsText.style.display = 'none';
    if (quizFeedbackText) { quizFeedbackText.textContent = ''; quizFeedbackText.className = 'quiz-feedback'; }
    if (quizNextButton) quizNextButton.style.display = 'none';
    displayQuizQuestion();
}

function displayQuizQuestion() {
    // quizData jest teraz zdefiniowane w tym pliku
    if (currentQuizQuestionIndex < quizData.length) {
        if (quizProgress) quizProgress.textContent = `Pytanie ${currentQuizQuestionIndex + 1} z ${quizData.length}`;
        const currentQuestion = quizData[currentQuizQuestionIndex];
        if (quizQuestionText) quizQuestionText.innerHTML = `${currentQuizQuestionIndex + 1}. ${currentQuestion.question} ${currentQuestion.source ? "<span class='source-citation'>" + currentQuestion.source + "</span>" : ''}`;
        if (quizOptionsButtons) {
            quizOptionsButtons.innerHTML = '';
            if (currentQuestion.options && Array.isArray(currentQuestion.options)) {
                if (typeof shuffleArray === 'function') {
                    shuffleArray(currentQuestion.options);
                }
                currentQuestion.options.forEach(option => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.onclick = () => checkQuizAnswer(option, currentQuestion.answer, button);
                    quizOptionsButtons.appendChild(button);
                });
            } else {
                console.error("Brak opcji odpowiedzi dla pytania:", currentQuestion);
                quizOptionsButtons.innerHTML = '<p>Błąd: Brak opcji odpowiedzi.</p>';
            }
        }
        if (quizFeedbackText) { quizFeedbackText.textContent = ''; quizFeedbackText.className = 'quiz-feedback';}
        if (quizNextButton) quizNextButton.style.display = 'none';
    } else {
        showQuizResults();
    }
}

function checkQuizAnswer(selectedOption, correctAnswer, button) {
    if (quizOptionsButtons) Array.from(quizOptionsButtons.children).forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        if (quizFeedbackText) { quizFeedbackText.textContent = "Poprawna odpowiedź!"; quizFeedbackText.className = 'quiz-feedback correct'; }
        quizScore++;
        if (button) { button.style.backgroundColor = '#c3e6cb';  button.style.borderColor = '#155724'; }
    } else {
        if (quizFeedbackText) { quizFeedbackText.textContent = `Błędna odpowiedź. Prawidłowa to: ${correctAnswer}`; quizFeedbackText.className = 'quiz-feedback incorrect'; }
        if (button) { button.style.backgroundColor = '#f5c6cb'; button.style.borderColor = '#721c24';}
        if (quizOptionsButtons) Array.from(quizOptionsButtons.children).forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.style.backgroundColor = '#c3e6cb'; btn.style.borderColor = '#155724';
            }
        });
    }
    if (quizNextButton) quizNextButton.style.display = 'block';
}

function nextQuizQuestion() {
    currentQuizQuestionIndex++;
    displayQuizQuestion();
}

function showQuizResults() {
    if (quizContent) quizContent.style.display = 'none';
    if (quizResultsText) {
        let percentage = 0;
        // quizData jest teraz zdefiniowane w tym pliku
        if (quizData.length > 0) {
            percentage = ((quizScore/quizData.length)*100).toFixed(0);
        }
        quizResultsText.innerHTML = `<h3>Wyniki Quizu</h3><p>Zdobyłeś ${quizScore} na ${quizData.length} punktów (${percentage}%).</p><button onclick="initQuiz()">Spróbuj jeszcze raz</button>`;
        quizResultsText.style.display = 'block';
    }
}

if (quizNextButton) {
    quizNextButton.addEventListener('click', nextQuizQuestion);
}