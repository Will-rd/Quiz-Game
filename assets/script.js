// const quizDisplay = document.getElementById("display");
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let coundown;


// Questions and Answer Arrays

const quizArray = [
    {
     id: "0",
     question:"Who does Number Two work for?",
     options:["I'll never tell", "Dr.Evil", "Dr.No", "Sir, This is a Wendy's."],
     correct:"Dr.Evil",
     },
    {
     id: "1",
     question:"What is the average flying speed of an unladen swallow?",
     options:["African or European?", "9.8m/s^2", "42", "Pretty fast G, ngl"],
     correct:"African or European",
     },
    { 
     id: "2",
     question:"Whats 13-50?",
     options:["gd....47", "19", "28", "-37"],
     correct:"-37",
    },
];



// restart
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});


nextBtn.addEventListener("click", (displayNext = () => {
    questionCount += 1:

    if (questionCount == quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = scoreCount;
    }
})
);



// Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if(count == 0) {
            clearInterval(coundown);
            displayNext();

        }
    }, 1000);
};

// display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    // hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    // display current question
    quizCards[questionCount].classList.remove("hide");
};


// Quiz Creation
function quizCreator() {
    // randomly sorts questions
    quizArray.sort(() => Math.random() - 0.5);
    // generate quiz
    for(let i of quizArray){
        // randomly sorts options
        i.options.sort(() => Math.random() - 0.5);
        // quiz card create
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        // question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        // question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        // answers
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        `;
        quizContainer.appendChild(div);
    }
}

// checker function
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    // if user clicked the right answer
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }


    // clear interval
    clearInterval(coundown);
    options.forEach((element) => {
        element.diabled = true;
    });


}

// initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(coundown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

// when user clicks the start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});


// hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
}