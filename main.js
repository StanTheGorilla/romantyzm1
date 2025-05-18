// --- NOTATKI (Funkcje) ---
const notesSidebar = document.getElementById('notes-topic-list');
const notesContent = document.getElementById('notes-content');
let noteTopicLinks = [];

function initNotes() {
    if (!notesSidebar || !notesContent) {
        console.error("Elementy sekcji Notatek nie zostały znalezione!");
        return;
    }
    notesSidebar.innerHTML = '';
    noteTopicLinks = [];

    // Zakładamy, że romanticismNotes jest zdefiniowane w pliku data.js
    Object.keys(romanticismNotes).forEach((topic) => {
        const listItem = document.createElement('li');
        listItem.textContent = topic;
        listItem.onclick = () => displayNoteContent(topic, listItem);
        notesSidebar.appendChild(listItem);
        noteTopicLinks.push(listItem);
    });

    if (noteTopicLinks.length > 0) {
        noteTopicLinks[0].click();
    } else {
        notesContent.innerHTML = '<p>Brak dostępnych notatek.</p>';
    }
}

function displayNoteContent(topic, listItem) {
    if (!notesContent) return;
    // Zakładamy, że romanticismNotes jest zdefiniowane w pliku data.js
    notesContent.innerHTML = romanticismNotes[topic] || '<p>Treść niedostępna.</p>';
    noteTopicLinks.forEach(link => link.classList.remove('active-note-topic'));
    if (listItem) listItem.classList.add('active-note-topic');
    notesContent.scrollTop = 0;
}

// ----- POCZĄTEK GŁÓWNEGO BLOKU SKRYPTU -----
const sections = document.querySelectorAll('.content-section');
const navButtons = document.querySelectorAll('nav button');

function shuffleArray(array) {
    if (!Array.isArray(array)) {
        console.error("shuffleArray otrzymał argument, który nie jest tablicą:", array);
        return array;
    }
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Logika Sekcji ---
function showSection(sectionId, clickedButton) {
    console.log('Funkcja showSection została wywołana dla ID:', sectionId);
    sections.forEach(section => section.classList.remove('active'));
    navButtons.forEach(btn => btn.classList.remove('active'));

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    } else {
        console.error(`Nie znaleziono sekcji o ID: ${sectionId}`);
        return;
    }

    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    if (sectionId === 'notes') {
        initNotes();
    } else if (sectionId === 'flashcards') {
        initFlashcardCategories();
    } else if (sectionId === 'quiz') {
        initQuiz();
    } else if (sectionId === 'test') {
        initTest();
    }
}

// --- Fiszki (Funkcje) ---
const flashcardElement = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flashcardCounterDisplay = document.getElementById('flashcard-counter-display');
const flashcardCategorySelect = document.getElementById('flashcard-category-select');
let currentFlashcards = [];
let currentFlashcardIndex = 0;

function initFlashcardCategories() {
    if (!flashcardCategorySelect) {
        return;
    }
    flashcardCategorySelect.innerHTML = '';
    // Zakładamy, że flashcardsByCategory jest zdefiniowane w pliku data.js
    Object.keys(flashcardsByCategory).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        flashcardCategorySelect.appendChild(option);
    });
    initFlashcards();
}

function initFlashcards() {
    if (!flashcardCategorySelect) return;
    const selectedCategory = flashcardCategorySelect.value;
    // Zakładamy, że flashcardsByCategory jest zdefiniowane w pliku data.js
    currentFlashcards = flashcardsByCategory[selectedCategory] || [];
    shuffleArray(currentFlashcards);
    currentFlashcardIndex = 0;
    displayFlashcard();
    if(flashcardElement) flashcardElement.classList.remove('flipped');
}

function displayFlashcard() {
    if (!flashcardFront || !flashcardBack || !flashcardCounterDisplay) {
        return;
    }
    if (currentFlashcards.length === 0) {
        flashcardFront.innerHTML = "Brak fiszek w tej kategorii.";
        flashcardBack.innerHTML = "";
        flashcardCounterDisplay.textContent = "0/0";
        return;
    }
    const card = currentFlashcards[currentFlashcardIndex];
    flashcardFront.innerHTML = card.q;
    flashcardBack.innerHTML = card.a;
    flashcardCounterDisplay.textContent = `${currentFlashcardIndex + 1}/${currentFlashcards.length}`;
}

function flipFlashcard() {
    if (currentFlashcards.length > 0 && flashcardElement) flashcardElement.classList.toggle('flipped');
}

function nextFlashcard(event) {
    if (event) event.stopPropagation();
    if (currentFlashcards.length === 0) return;
    currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcards.length;
    if(flashcardElement) flashcardElement.classList.remove('flipped');
    setTimeout(displayFlashcard, 50);
}

function prevFlashcard(event) {
    if (event) event.stopPropagation();
    if (currentFlashcards.length === 0) return;
    currentFlashcardIndex = (currentFlashcardIndex - 1 + currentFlashcards.length) % currentFlashcards.length;
    if(flashcardElement) flashcardElement.classList.remove('flipped');
    setTimeout(displayFlashcard, 50);
}

// --- Quiz (Funkcje) ---
const quizQuestionText = document.getElementById('quiz-question-text');
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
    // Zakładamy, że quizData jest zdefiniowane w pliku data.js
    shuffleArray(quizData);
    currentQuizQuestionIndex = 0;
    quizScore = 0;
    quizContent.style.display = 'block';
    if (quizResultsText) quizResultsText.style.display = 'none';
    if (quizFeedbackText) { quizFeedbackText.textContent = ''; quizFeedbackText.className = 'quiz-feedback'; }
    if (quizNextButton) quizNextButton.style.display = 'none';
    displayQuizQuestion();
}

function displayQuizQuestion() {
    // Zakładamy, że quizData jest zdefiniowane w pliku data.js
    if (currentQuizQuestionIndex < quizData.length) {
        if (quizProgress) quizProgress.textContent = `Pytanie ${currentQuizQuestionIndex + 1} z ${quizData.length}`;
        const currentQuestion = quizData[currentQuizQuestionIndex];
        if (quizQuestionText) quizQuestionText.innerHTML = `${currentQuizQuestionIndex + 1}. ${currentQuestion.question} ${currentQuestion.source ? "<span class='source-citation'>" + currentQuestion.source + "</span>" : ''}`;
        if (quizOptionsButtons) {
            quizOptionsButtons.innerHTML = '';
            if (currentQuestion.options && Array.isArray(currentQuestion.options)) {
                shuffleArray(currentQuestion.options);
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
         // Zakładamy, że quizData jest zdefiniowane w pliku data.js
        if (quizData.length > 0) {
            percentage = ((quizScore/quizData.length)*100).toFixed(0);
        }
        quizResultsText.innerHTML = `<h3>Wyniki Quizu</h3><p>Zdobyłeś ${quizScore} na ${quizData.length} punktów (${percentage}%).</p><button onclick="initQuiz()">Spróbuj jeszcze raz</button>`;
        quizResultsText.style.display = 'block';
    }
}

// --- Test (Funkcje) ---
const testQuestionText = document.getElementById('test-question-text');
const testOptionsButtons = document.getElementById('test-options-buttons');
const testFeedbackText = document.getElementById('test-feedback-text');
const testNextButton = document.getElementById('test-next-button');
const testResultsText = document.getElementById('test-results-text');
const testContent = document.getElementById('test-content');
const testProgress = document.getElementById('test-progress');
let currentTestQuestionIndex = 0;
let testScore = 0;

function initTest() {
    if (!testContent) { console.error("Kontener testu nie istnieje!"); return; }
    // Zakładamy, że testData jest zdefiniowane w pliku data.js
    shuffleArray(testData);
    currentTestQuestionIndex = 0;
    testScore = 0;
    testContent.style.display = 'block';
    if (testResultsText) testResultsText.style.display = 'none';
    if (testFeedbackText) { testFeedbackText.textContent = ''; testFeedbackText.className = 'test-feedback';}
    if (testNextButton) testNextButton.style.display = 'none';
    displayTestQuestion();
}

function displayTestQuestion() {
    // Zakładamy, że testData jest zdefiniowane w pliku data.js
    if (currentTestQuestionIndex < testData.length) {
        if(testProgress) testProgress.textContent = `Pytanie ${currentTestQuestionIndex + 1} z ${testData.length}`;
        const currentQuestion = testData[currentTestQuestionIndex];
        if (testQuestionText) testQuestionText.innerHTML = `${currentTestQuestionIndex + 1}. ${currentQuestion.question} ${currentQuestion.source ? "<span class='source-citation'>" + currentQuestion.source + "</span>" : ''}`;
        if (testOptionsButtons) {
            testOptionsButtons.innerHTML = '';
            if (currentQuestion.options && Array.isArray(currentQuestion.options)) {
                shuffleArray(currentQuestion.options);
                currentQuestion.options.forEach(option => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.onclick = () => checkTestAnswer(option, currentQuestion.answer, button);
                    testOptionsButtons.appendChild(button);
                });
            }  else {
                console.error("Brak opcji odpowiedzi dla pytania testowego:", currentQuestion);
                testOptionsButtons.innerHTML = '<p>Błąd: Brak opcji odpowiedzi.</p>';
            }
        }
        if (testFeedbackText) { testFeedbackText.textContent = ''; testFeedbackText.className = 'test-feedback';}
        if (testNextButton) testNextButton.style.display = 'none';
    } else {
        showTestResults();
    }
}

function checkTestAnswer(selectedOption, correctAnswer, button) {
    if (testOptionsButtons) Array.from(testOptionsButtons.children).forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        if (testFeedbackText) { testFeedbackText.textContent = "Poprawna odpowiedź!"; testFeedbackText.className = 'test-feedback correct';}
        testScore++;
        if (button) { button.style.backgroundColor = '#c3e6cb'; button.style.borderColor = '#155724'; }
    } else {
        if (testFeedbackText) { testFeedbackText.textContent = `Błędna odpowiedź. Prawidłowa to: ${correctAnswer}`; testFeedbackText.className = 'test-feedback incorrect'; }
        if (button) { button.style.backgroundColor = '#f5c6cb'; button.style.borderColor = '#721c24';}
        if (testOptionsButtons) Array.from(testOptionsButtons.children).forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.style.backgroundColor = '#c3e6cb'; btn.style.borderColor = '#155724';
            }
        });
    }
    if (testNextButton) testNextButton.style.display = 'block';
}

function nextTestQuestion() {
    currentTestQuestionIndex++;
    displayTestQuestion();
}

function showTestResults() {
    if (testContent) testContent.style.display = 'none';
    if (testResultsText) {
        let percentage = 0;
        // Zakładamy, że testData jest zdefiniowane w pliku data.js
        if (testData.length > 0) {
            percentage = ((testScore/testData.length)*100).toFixed(0);
        }
        testResultsText.innerHTML = `<h3>Wyniki Testu</h3><p>Zdobyłeś ${testScore} na ${testData.length} punktów (${percentage}%).</p><button onclick="initTest()">Spróbuj jeszcze raz</button>`;
        testResultsText.style.display = 'block';
    }
}

// --- Inicjalizacja przy załadowaniu strony ---
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = Array.from(navButtons).find(btn => btn.textContent && btn.textContent.trim() === 'Start');
    const homeSection = document.getElementById('home'); // Dodane, aby sprawdzić, czy sekcja home jest aktywna

    // Aktywacja przycisku "Start" i odpowiedniej sekcji, jeśli nie są już aktywne
    if (homeButton && homeSection && !homeSection.classList.contains('active')) {
        // Jeśli przycisk "Start" istnieje, ale sekcja "home" nie jest aktywna, aktywuj ją.
        sections.forEach(section => section.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));
        homeSection.classList.add('active');
        homeButton.classList.add('active');
    } else if (homeButton && homeSection && homeSection.classList.contains('active')) {
        // Jeśli sekcja "home" jest już aktywna (np. z HTML), upewnij się, że przycisk "Start" też jest.
        navButtons.forEach(btn => btn.classList.remove('active'));
        homeButton.classList.add('active');
    } else if (!homeButton && navButtons.length > 0) {
        // Jeśli nie ma przycisku "Start", aktywuj pierwszy przycisk z nawigacji
        navButtons[0].classList.add('active');
        const firstSectionId = navButtons[0].getAttribute('onclick').match(/'([^']+)'/)[1];
        if (firstSectionId) {
            const firstSection = document.getElementById(firstSectionId);
            if (firstSection && !firstSection.classList.contains('active')) {
                 sections.forEach(s => s.classList.remove('active')); // dezaktywuj inne
                 firstSection.classList.add('active');
            } else if (!firstSection) {
                 sections.forEach(s => s.classList.remove('active'));
                 if(sections.length > 0) sections[0].classList.add('active'); // Awaryjnie aktywuj pierwszą sekcję
            }
        }
        console.warn("Nie znaleziono przycisku 'Start', aktywowano pierwszy dostępny przycisk i (potencjalnie) sekcję.");
    } else if (navButtons.length === 0) {
        console.warn("Nie znaleziono żadnych przycisków nawigacyjnych.");
         // Awaryjnie aktywuj pierwszą sekcję, jeśli żadna nie jest
        const anyActiveSection = document.querySelector('.content-section.active');
        if (!anyActiveSection && sections.length > 0) {
            sections[0].classList.add('active');
        }
    }

    // Ostateczne sprawdzenie, czy jakaś sekcja jest aktywna
    const anyActiveSectionAfterInit = document.querySelector('.content-section.active');
    if (!anyActiveSectionAfterInit && sections.length > 0) {
        sections[0].classList.add('active'); // Jeśli nic nie jest aktywne, aktywuj pierwszą
         if (navButtons.length > 0 && !document.querySelector('nav button.active')) {
            navButtons[0].classList.add('active'); // Aktywuj też pierwszy przycisk, jeśli żaden nie jest
        }
    }
});