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

    if (sectionId === 'notes' && typeof initNotes === 'function') {
        initNotes();
    } else if (sectionId === 'flashcards' && typeof initFlashcardCategories === 'function') {
        initFlashcardCategories();
    } else if (sectionId === 'quiz' && typeof initQuiz === 'function') {
        initQuiz();
    } else if (sectionId === 'test' && typeof initTest === 'function') {
        initTest();
    }
}


// --- Inicjalizacja przy załadowaniu strony ---
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = Array.from(navButtons).find(btn => btn.textContent && btn.textContent.trim() === 'Start');
    const homeSection = document.getElementById('home');

    if (homeButton && homeSection && !homeSection.classList.contains('active')) {
        sections.forEach(section => section.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));
        homeSection.classList.add('active');
        homeButton.classList.add('active');
    } else if (homeButton && homeSection && homeSection.classList.contains('active')) {
        navButtons.forEach(btn => btn.classList.remove('active'));
        homeButton.classList.add('active');
    } else if (!homeButton && navButtons.length > 0) {
        navButtons[0].classList.add('active');
        const firstSectionId = navButtons[0].getAttribute('onclick').match(/'([^']+)'/)[1];
        if (firstSectionId) {
            const firstSection = document.getElementById(firstSectionId);
            if (firstSection && !firstSection.classList.contains('active')) {
                 sections.forEach(s => s.classList.remove('active'));
                 firstSection.classList.add('active');
            } else if (!firstSection) {
                 sections.forEach(s => s.classList.remove('active'));
                 if(sections.length > 0) sections[0].classList.add('active');
            }
        }
        console.warn("Nie znaleziono przycisku 'Start', aktywowano pierwszy dostępny przycisk i (potencjalnie) sekcję.");
    } else if (navButtons.length === 0) {
        console.warn("Nie znaleziono żadnych przycisków nawigacyjnych.");
        const anyActiveSection = document.querySelector('.content-section.active');
        if (!anyActiveSection && sections.length > 0) {
            sections[0].classList.add('active');
        }
    }

    const anyActiveSectionAfterInit = document.querySelector('.content-section.active');
    if (!anyActiveSectionAfterInit && sections.length > 0) {
        sections[0].classList.add('active');
         if (navButtons.length > 0 && !document.querySelector('nav button.active')) {
            navButtons[0].classList.add('active');
        }
    }
});