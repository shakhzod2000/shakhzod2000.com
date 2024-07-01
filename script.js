const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const germanBtn = document.querySelector('.german-btn');
const englishBtn = document.querySelector('.english-btn');
const essentialsPopup = document.querySelector('.essentials-popup');
const EssPopupTitle = document.querySelector('.essentials-popup h2');
// const essentialsBtn = document.querySelectorAll('.essentials-btn');
const errorPopup = document.querySelector('.error-popup');
const errorPopupTitle = document.querySelector('.error-popup h2');
const OKBtn = document.querySelector('.OK-btn');
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
const DeBtnUnit9 = document.querySelector('.btn9');
const DeBtnUnit10 = document.querySelector('.btn10');
const DeBtnUnit11 = document.querySelector('.btn11');
const DeBtnUnit12 = document.querySelector('.btn12');
const DeBtnUnit13 = document.querySelector('.btn13');
const DeBtnUnit14 = document.querySelector('.btn14');
const DeBtnUnit15 = document.querySelector('.btn15');
const DeBtnUnit16 = document.querySelector('.btn16');
const DeBtnUnit17 = document.querySelector('.btn17');
const DeBtnUnit18 = document.querySelector('.btn18');
const DeBtnUnit19 = document.querySelector('.btn19');
const DeBtnUnit20 = document.querySelector('.btn20');
const DeBtnUnit21 = document.querySelector('.btn21');
const DeBtnUnit22 = document.querySelector('.btn22');
const DeBtnUnit23 = document.querySelector('.btn23');
const DeBtnUnit24 = document.querySelector('.btn24');
const DeBtnUnit25 = document.querySelector('.btn25');
const DeBtnUnit26 = document.querySelector('.btn26');
const DeBtnUnit27 = document.querySelector('.btn27');
const DeBtnUnit28 = document.querySelector('.btn28');
const DeBtnUnit29 = document.querySelector('.btn29');
const DeBtnUnit30 = document.querySelector('.btn30');
const EnBtnUnit = document.querySelector('.unit-container-en');
const EnBtnUnit1 = document.querySelector('.tugma1');
const EnBtnUnit2 = document.querySelector('.tugma2');
const EnBtnUnit3 = document.querySelector('.tugma3');
const EnBtnUnit4 = document.querySelector('.tugma4');
const EnBtnUnit5 = document.querySelector('.tugma5');
const EnBtnUnit6 = document.querySelector('.tugma6');
const EnBtnUnit7 = document.querySelector('.tugma7');
const EnBtnUnit8 = document.querySelector('.tugma8');
const EnBtnUnit9 = document.querySelector('.tugma9');
const EnBtnUnit10 = document.querySelector('.tugma10');
const EnBtnUnit11 = document.querySelector('.tugma11');
const EnBtnUnit12 = document.querySelector('.tugma12');
const EnBtnUnit13 = document.querySelector('.tugma13');
const EnBtnUnit14 = document.querySelector('.tugma14');
const EnBtnUnit15 = document.querySelector('.tugma15');
const EnBtnUnit16 = document.querySelector('.tugma16');
const EnBtnUnit17 = document.querySelector('.tugma17');
const EnBtnUnit18 = document.querySelector('.tugma18');
const EnBtnUnit19 = document.querySelector('.tugma19');
const EnBtnUnit20 = document.querySelector('.tugma20');
const EnBtnUnit21 = document.querySelector('.tugma21');
const EnBtnUnit22 = document.querySelector('.tugma22');
const EnBtnUnit23 = document.querySelector('.tugma23');
const EnBtnUnit24 = document.querySelector('.tugma24');
const EnBtnUnit25 = document.querySelector('.tugma25');
const EnBtnUnit26 = document.querySelector('.tugma26');
const EnBtnUnit27 = document.querySelector('.tugma27');
const EnBtnUnit28 = document.querySelector('.tugma28');
const EnBtnUnit29 = document.querySelector('.tugma29');
const EnBtnUnit30 = document.querySelector('.tugma30');
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
        errorPopupTitle.textContent = "Not available yet";
    }
    else {
        EssPopupTitle.textContent = "Wähle gewünschtes Buch zu üben";
        backToLang.textContent = "Zurück";
        backToUnit.textContent = "Zurück"
        nextBtn.textContent = "Weiter";
        resultBoxTitle.textContent = "Quiz Ergebnis!";
        goHome.textContent = "Startseite";
        tryAgain.textContent = "Erneut versuchen";
        errorPopupTitle.textContent = "Noch nicht verfügbar";
    }
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

// essentialsBtn.onclick = () => {
//     whichEssentialsBtn();
//     essentialsPopup.classList.remove('active');
//     if (activeLanguage == 'De') 
//         unitPopup.classList.add('active');
//     else
//         unitPopupEn.classList.add('active');
// }

// function whichEssentialsBtn(event) {
//     if (!event.target.classList.contains('essential E1'))
//         console.log("Noch nicht verfügbar");
// }

// whichEssentialsBtn.forEach(container => {
//     container.addEventListener('click', whichEssentialsBtn);
// })

const essentialsBtnContainers = document.querySelectorAll('.essentials-btn');

function onEssentialClick(event) {
    if (event.target.classList.contains('essential')) {
        if (!event.target.classList.contains('E1')) {
            errorPopup.classList.add('active');
            OKBtn.onclick = () => {
                errorPopup.classList.remove('active');
            }
            return;
        }
        essentialsPopup.classList.remove('active');
        if (activeLanguage == 'De') 
            unitPopup.classList.add('active');
        else
            unitPopupEn.classList.add('active');
    }
}

essentialsBtnContainers.forEach(container => {
    container.addEventListener('click', onEssentialClick);
});

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

DeBtnUnit9.onclick = () => {
    questions = questions9;
}

DeBtnUnit10.onclick = () => {
    questions = questions10;
}

DeBtnUnit11.onclick = () => {
    questions = questions11;
}

DeBtnUnit12.onclick = () => {
    questions = questions12;
}

DeBtnUnit13.onclick = () => {
    questions = questions13;
}

DeBtnUnit14.onclick = () => {
    questions = questions14;
}

DeBtnUnit15.onclick = () => {
    questions = questions15;
}

DeBtnUnit16.onclick = () => {
    questions = questions16;
}

DeBtnUnit17.onclick = () => {
    questions = questions17;
}

DeBtnUnit18.onclick = () => {
    questions = questions18;
}

DeBtnUnit19.onclick = () => {
    questions = questions19;
}

DeBtnUnit20.onclick = () => {
    questions = questions20;
}

DeBtnUnit21.onclick = () => {
    questions = questions21;
}

DeBtnUnit22.onclick = () => {
    questions = questions22;
}


DeBtnUnit23.onclick = () => {
    questions = questions23;
}

DeBtnUnit24.onclick = () => {
    questions = questions24;
}

DeBtnUnit25.onclick = () => {
    questions = questions25;
}

DeBtnUnit26.onclick = () => {
    questions = questions26;
}

DeBtnUnit27.onclick = () => {
    questions = questions27;
}

DeBtnUnit28.onclick = () => {
    questions = questions28;
}

DeBtnUnit29.onclick = () => {
    questions = questions29;
}

DeBtnUnit30.onclick = () => {
    questions = questions30;
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

EnBtnUnit9.onclick = () => {
    questions = savollar9;
}

EnBtnUnit10.onclick = () => {
    questions = savollar10;
}

EnBtnUnit11.onclick = () => {
    questions = savollar11;
}

EnBtnUnit12.onclick = () => {
    questions = savollar12;
}

EnBtnUnit13.onclick = () => {
    questions = savollar13;
}

EnBtnUnit14.onclick = () => {
    questions = savollar14;
}

EnBtnUnit15.onclick = () => {
    questions = savollar15;
}

EnBtnUnit16.onclick = () => {
    questions = savollar16;
}

EnBtnUnit17.onclick = () => {
    questions = savollar17;
}

EnBtnUnit18.onclick = () => {
    questions = savollar18;
}

EnBtnUnit19.onclick = () => {
    questions = savollar19;
}

EnBtnUnit20.onclick = () => {
    questions = savollar20;
}

EnBtnUnit21.onclick = () => {
    questions = savollar21;
}

EnBtnUnit22.onclick = () => {
    questions = savollar22;
}

EnBtnUnit23.onclick = () => {
    questions = savollar23;
}

EnBtnUnit24.onclick = () => {
    questions = savollar24;
}

EnBtnUnit25.onclick = () => {
    questions = savollar25;
}

EnBtnUnit26.onclick = () => {
    questions = savollar26;
}

EnBtnUnit27.onclick = () => {
    questions = savollar27;
}

EnBtnUnit28.onclick = () => {
    questions = savollar28;
}

EnBtnUnit29.onclick = () => {
    questions = savollar29;
}

EnBtnUnit30.onclick = () => {
    questions = savollar30;
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
