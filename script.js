// document.addEventListener('DOMContentLoaded', () => {

const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const germanBtn = document.querySelector('.german-btn');
const englishBtn = document.querySelector('.english-btn');
const essentialsPopup = document.querySelector('.essentials-popup');
const EssPopupTitle = document.querySelector('.essentials-popup h2');
const essentialsBtn = document.querySelector('.essentials-btn');
const backToLang = document.querySelector('.backToLang-btn');
const unitPopup = document.querySelector('.unit-popup');
const backToEss = document.querySelector('.backToEss-btn');
const unitPopupEn = document.querySelector('.unit-popup-en');
const backToEssEn = document.querySelector('.backToEssEn-btn');
const DeBtnUnit = document.querySelector('.unit-container');
const DeBtnUnit1 = document.querySelector('.btn1');
const DeBtnUnit2 = document.querySelector('.btn2');
const DeBtnUnit3 = document.querySelector('.btn3');
const DeBtnUnit4 = document.querySelector('.btn4');
const DeBtnUnit5 = document.querySelector('.btn5');
const DeBtnUnit6 = document.querySelector('.btn6');
const DeBtnUnit7 = document.querySelector('.btn7');
const DeBtnUnit8 = document.querySelector('.btn8');
const DeBtnUnit11 = document.querySelector('.btn11');
const EnBtnUnit = document.querySelector('.unit-container-en');
const EnBtnUnit1 = document.querySelector('.tugma1');
const EnBtnUnit2 = document.querySelector('.tugma2');
const EnBtnUnit3 = document.querySelector('.tugma3');
const EnBtnUnit4 = document.querySelector('.tugma4');
const EnBtnUnit5 = document.querySelector('.tugma5');
const EnBtnUnit6 = document.querySelector('.tugma6');
const EnBtnUnit7 = document.querySelector('.tugma7');
const EnBtnUnit8 = document.querySelector('.tugma8');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const optionList = document.querySelector('.option-list');
const backToUnit = document.querySelector('.backToUnit-btn');
const backToUnitEn = document.querySelector('.backToUnit-btn');
const nextBtn = document.querySelector('.next-btn');
const resultBox = document.querySelector('.result-box');
const resultBoxTitle = document.querySelector('.result-box h2');
const tryAgain = document.querySelector('.tryAgain-btn');
const goHome = document.querySelector('.goHome-btn');

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

let activeLanguage;

germanBtn.onclick = () => {
    popupInfo.classList.remove('active');
    essentialsPopup.classList.add('active');
    activeLanguage = 'De';
    translate();
}

englishBtn.onclick = () => {
    popupInfo.classList.remove('active');
    essentialsPopup.classList.add('active');
    activeLanguage = 'En';
    translate();
}

function translate() {
    if (activeLanguage == 'En') {
        EssPopupTitle.textContent = "Select desired book to practise";
        backToLang.textContent = "Back";
        backToUnit.textContent = "Back"
        nextBtn.textContent = "Next";
        resultBoxTitle.textContent = "Quiz Result!";
        goHome.textContent = "Go Home";
        tryAgain.textContent = "Try Again";
    }
    else {
        EssPopupTitle.textContent = "Wähle gewünschtes Buch zu üben";
        backToLang.textContent = "Zurück";
        backToUnit.textContent = "Zurück"
        nextBtn.textContent = "Weiter";
        resultBoxTitle.textContent = "Quiz Ergebnis!";
        goHome.textContent = "Startseite";
        tryAgain.textContent = "Erneut versuchen";
    }
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

essentialsBtn.onclick = () => {
    essentialsPopup.classList.remove('active');
    if (activeLanguage == 'De') 
        unitPopup.classList.add('active');
    else
        unitPopupEn.classList.add('active');
}

backToLang.onclick = () => {
    popupInfo.classList.add('active');
    essentialsPopup.classList.remove('active');
}

let activeUnit;

DeBtnUnit.onclick = () => {
    unitPopup.classList.remove('active');
    main.classList.remove('active');
    quizSection.classList.add('active');
    quizBox.classList.add('active');
    backToUnit.classList.add('active');
    activeUnit = 'De';
    
    showQuestions(0);
    questionCounter(1);
    headerScore();
}

backToEss.onclick = () => {
    essentialsPopup.classList.add('active');
    unitPopup.classList.remove('active');
}

EnBtnUnit.onclick = () => {
    unitPopupEn.classList.remove('active');
    main.classList.remove('active');
    quizSection.classList.add('active');
    quizBox.classList.add('active');
    backToUnitEn.classList.add('active');
    activeUnit = 'En';
    
    showQuestions(0);
    questionCounter(1);
    headerScore();
}

backToEssEn.onclick = () => {
    essentialsPopup.classList.add('active');
    unitPopupEn.classList.remove('active');
}

DeBtnUnit1.onclick = () => {
    questions = questions1;
}

DeBtnUnit2.onclick = () => {
    questions = questions2;
}

DeBtnUnit3.onclick = () => {
    questions = questions3;
}

DeBtnUnit4.onclick = () => {
    questions = questions4;
}

DeBtnUnit5.onclick = () => {
    questions = questions5;
}

DeBtnUnit6.onclick = () => {
    questions = questions6;
}

DeBtnUnit7.onclick = () => {
    questions = questions7;
}

DeBtnUnit8.onclick = () => {
    questions = questions8;
}

DeBtnUnit11.onclick = () => {
    questions = questions11;
}

EnBtnUnit1.onclick = () => {
    questions = savollar1;
}

EnBtnUnit2.onclick = () => {
    questions = savollar2;
}

EnBtnUnit3.onclick = () => {
    questions = savollar3;
}

EnBtnUnit4.onclick = () => {
    questions = savollar4;
}

EnBtnUnit5.onclick = () => {
    questions = savollar5;
}

EnBtnUnit6.onclick = () => {
    questions = savollar6;
}

EnBtnUnit7.onclick = () => {
    questions = savollar7;
}

EnBtnUnit8.onclick = () => {
    questions = savollar8;
}

backToUnit.onclick = () => {
    quizSection.classList.remove('active');
    main.classList.add('active');
    nextBtn.classList.remove('active');
    
    if (activeUnit == 'De')
        unitPopup.classList.add('active');
    else
        unitPopupEn.classList.add('active');
        
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
}

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) { // -1, weil Array bei 0 anfängt;  
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    }
    else
        showResultBox();
}

tryAgain.onclick = () => {
    quizBox.classList.add('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
}

goHome.onclick = () => {
    resultBox.classList.remove('active');
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
}

// Fragen und Optionen aus dem Array holen
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
    
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    
    optionList.innerHTML = optionTag;

    const options = document.querySelectorAll('.option');
    options.forEach((option) => {
        option.addEventListener('click', function() {
            optionSelected(this);
        });
    });
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length; // '.children' gibt alle Kinderelemente eines Elements zurück.
    
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        answer.classList.add('incorrect');
        // korrekte Antwort hervorheben
        for (let i = 0; i < allOptions; i++)
            if (optionList.children[i].textContent == correctAnswer)
                optionList.children[i].setAttribute('class', 'option correct');
    }
    // wenn Nutzer ausgewählt hat, dann keine Auswahl mehr möglich
    for (let i = 0; i < allOptions; i++) 
        optionList.children[i].classList.add('disabled');

    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    if (activeLanguage == 'En')
        questionTotal.textContent = `${index} of ${questions.length} questions`;
    else
        questionTotal.textContent = `${index} von ${questions.length} Fragen`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    if (activeLanguage == 'En')
        headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
    else
        headerScoreText.textContent = `Spielstand: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    
    const scoreText = document.querySelector('.score-text');
    if (activeLanguage == 'En')
        scoreText.textContent = `You got ${userScore} out of ${questions.length} questions correct.`;
    else
        scoreText.textContent = `Du hast ${userScore} von ${questions.length} Fragen richtig beantwortet.`;
    
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;
    
    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#5bf846 ${progressStartValue * 3.6}deg, white 0deg)`; // "style" ermöglicht, CSS-Regeln zu setzen oder zu ändern.
        if (progressStartValue == progressEndValue)
            clearInterval(progress);
    }, speed);
}

document.addEventListener('dblclick',function(e){
    e.preventDefault();
});

// });
    
