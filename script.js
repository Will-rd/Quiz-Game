let btnStuff = document.querySelector("#mainBtn"); //lol....button stuff
let timeEl = document.querySelector("#time");
var mainEl = document.querySelector(".mainBox");

let secondsLeft = 120;

let questions = {
    one: "What year did the Titanic sink?",
    two: "What is the capital of New Hampshire",
    three: "How many quarts are in one gallon?",
    four: "How many grams are in an ounce?",
    five: "Who sewed the American Flag?",
    six: "How many sides does a rhombus have?",
    seven: "What types of cells have a cell wall?",
    eight: "What organelle is known as the powerhouse of the cell?",
    nine: "Which of the following is the pythagorean theorum?",
    ten: "Which of the following verbs is in the inifinitve form?",
    eleven: "Who composed Moonlight Sonata?",
    twelve: "What kind of race is the Iditarod?"
}
let quizAnswer = [
    {
        q1a1: "1492",
        q1a2: "1865",
        q1a3: "1776",
        q1a4: "1912"
    },
    {
        q2a1: "East Berlin",
        q2a2: "Concord",
        q2a3: "Mavis",
        q2a4: "Hartford"
    },
    {
        q3a1: "9",
        q3a2: "7",
        q3a3: "2",
        q3a4: "4"
    },
    {
        q4a1: "28",
        q4a2: "36",
        q4a3: "42",
        q4a4: "16"
    },
    {
        q5a1: "Betsy Ross",
        q5a2: "Bill Clinton",
        q5a3: "Frederick Douglass",
        q5a4: "Celine Dion"
    },
    {
        q6a1: "8",
        q6a2: "100",
        q6a3: "4",
        q6a4: "9"
    },
    {
        q7a1: "Nucleus Cells",
        q7a2: "Prokaryotic Cells",
        q7a3: "Plant Cells",
        q7a4: "Animal Cells"
    },
    {
        q8a1: "Mitochondria",
        q8a2: "Endoplasmic Reticulum",
        q8a3: "Static-Pod",
        q8a4: "Freaknic Module"
    },
    {
        q9a1: "a + b = x^2",
        q9a2: "(x + y)(x - y)",
        q9a3: "a^2 + b^2 = c^2",
        q9a4: "E=MC^2"
    },
    {
        q10a1: "is running",
        q10a2: "has run",
        q10a3: "to run",
        q10a4: "will run"
    },
    {
        q11a1: "Ludwig van Beethoven",
        q11a2: "Gustav Holst",
        q11a3: "Johann Sebastian Bach",
        q11a4: "Robbie Coltrane"
    },
    {
        q12a1: "A sled dog race in Alaska",
        q12a2: "A marathon in Europe",
        q12a3: "A bike race in France",
        q12a4: "A horse race in Kentucky"
    },
]

//This is to test connectivity to the html file.
console.log('All systems are go if there are no errors here!')






//   This will start a timer that will begin at the amount of seconds left which is defined globally when
//the button is clicked.
function setTime() {
    let timerInterval = setInterval(function () {

        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds untill you lose!";



        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            youLose();
            
        }
    }, 1000);

    return;
}

//  The makeElement function here renders the quiz box that contains the quiz questions and the multiple
//choice answers

function makeElement() {
    console.log('question 1')
    let main = document.createElement("main");
    main.setAttribute("id", "testing");
    main.classList.add("mainBox")
    main.textContent = questions.one;
    document.body.appendChild(main);

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[0].q1a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "incorrect");
    answer2.textContent = quizAnswer[0].q1a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","incorrect");
    answer3.textContent = quizAnswer[0].q1a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "incorrect");
    answer4.textContent = quizAnswer[0].q1a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    setTime();

    let correctAnswer4 = document.getElementById('ans4');

    correctAnswer4.addEventListener("click", function() {
        console.log("correct!")
        questTwo();
    })

    let wrongAnswer1 = document.getElementById('ans1');

    wrongAnswer1.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer3 = document.getElementById('ans3');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    

    
    
};



// function bigQuizFunction() {
    
//     questTwo();
//     console.log("were in here");
// }




//This is a function to change the text in the main element where the questions will be appended.
function questTwo() {
    console.log('question 2')
    const newMain = document.getElementById("testing");
    newMain.innerHTML = questions.two;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[1].q2a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[1].q2a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[1].q2a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[1].q2a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer2 = document.getElementById('ans2');

    correctAnswer2.addEventListener("click", function() {
        console.log("correct!")
        questThree();
    })

    let wrongAnswer1 = document.getElementById('ans1');

    wrongAnswer1.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer3 = document.getElementById('ans3');

    wrongAnswer3.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    
    
}


function questThree() {
    console.log('question 3')
    console.log("question three")
    let threeMain = document.getElementById("testing");
    threeMain.innerHTML = questions.three;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[2].q3a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[2].q3a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[2].q3a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[2].q3a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer4 = document.getElementById('ans4');

    correctAnswer4.addEventListener("click", function() {
        console.log("correct!")
        questFour();
    })

    let wrongAnswer1 = document.getElementById('ans1');

    wrongAnswer1.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer3 = document.getElementById('ans3');

    wrongAnswer3.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    
}

function questFour() {
    console.log('question 4')
    console.log("the fourth question");
    let fourMain = document.getElementById("testing");
    fourMain.innerHTML = questions.four;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[3].q4a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[3].q4a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[3].q4a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[3].q4a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer1 = document.getElementById('ans1');

    correctAnswer1.addEventListener("click", function() {
        console.log("correct!")
        questFive();
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer3 = document.getElementById('ans3');

    wrongAnswer3.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    
}

function questFive() {
    console.log('question 5')
    let fiveMain = document.getElementById("testing");
    fiveMain.innerHTML = questions.five;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[4].q5a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[4].q5a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[4].q5a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[4].q5a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer1 = document.getElementById('ans1');

    correctAnswer1.addEventListener("click", function() {
        console.log("correct!");
        questSix();
        
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer3 = document.getElementById('ans3');

    wrongAnswer3.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })
}

function questSix() {
    console.log('question 6')
    let sixMain = document.getElementById("testing");
    sixMain.innerHTML = questions.six;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[5].q6a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[5].q6a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[5].q6a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[5].q6a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer3 = document.getElementById('ans3');

    correctAnswer3.addEventListener("click", function() {
        console.log("correct!");
        questSeven();
        
    })

    let wrongAnswer1 = document.getElementById('ans1');

    wrongAnswer1.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })
}

function questSeven() {
    console.log('question 7')
    let sevenMain = document.getElementById("testing");
    sevenMain.innerHTML = questions.seven;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[6].q7a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[6].q7a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[6].q7a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[6].q7a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer3 = document.getElementById('ans3');

    correctAnswer3.addEventListener("click", function() {
        console.log("correct!");
        questEight();
        
    })

    let wrongAnswer1 = document.getElementById('ans1');

    wrongAnswer1.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })
}

function questEight() {
    console.log('question 8')
    let eightMain = document.getElementById("testing");
    eightMain.innerHTML = questions.eight;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[7].q8a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[7].q8a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[7].q8a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[7].q8a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer1 = document.getElementById('ans1');

    correctAnswer1.addEventListener("click", function() {
        console.log("correct!");
        questNine();
        
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer3 = document.getElementById('ans3');

    wrongAnswer3.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })
}


function questNine() {
    console.log('question 9')
    let nineMain = document.getElementById("testing");
    nineMain.innerHTML = questions.nine;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[8].q9a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[8].q9a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[8].q9a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[8].q9a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer3 = document.getElementById('ans3');

    correctAnswer3.addEventListener("click", function() {
        console.log("correct!");
        questTen();
        
    })

    let wrongAnswer1 = document.getElementById('ans1');

    wrongAnswer1.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })
}

function questTen() {
    console.log('question 10')
    let tenMain = document.getElementById("testing");
    tenMain.innerHTML = questions.ten;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[9].q10a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[9].q10a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[9].q10a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[9].q10a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer3 = document.getElementById('ans3');

    correctAnswer3.addEventListener("click", function() {
        console.log("correct!");
        questEleven();
        
    })

    let wrongAnswer1 = document.getElementById('ans1');

    wrongAnswer1.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })
}

function questEleven() {
    console.log('question 11')
    let elevenMain = document.getElementById("testing");
    elevenMain.innerHTML = questions.eleven;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[10].q11a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[10].q11a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[10].q11a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[10].q11a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer1 = document.getElementById('ans1');

    correctAnswer1.addEventListener("click", function() {
        console.log("correct!");
        questTwelve();
        
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer3 = document.getElementById('ans3');

    wrongAnswer3.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })
}

function questTwelve() {
    console.log('question 12')
    let twelveMain = document.getElementById("testing");
    twelveMain.innerHTML = questions.twelve;

    let answer1 = document.createElement("button");
    answer1.setAttribute("id", "ans1");
    answer1.setAttribute("class", "ansBtn");
    answer1.textContent = quizAnswer[11].q12a1;

    let answer2 = document.createElement("button");
    answer2.setAttribute("id", "ans2");
    answer2.setAttribute("class", "ansBtn");
    answer2.textContent = quizAnswer[11].q12a2;

    let answer3 = document.createElement("button");
    answer3.setAttribute("id", "ans3");
    answer3.setAttribute("class","ansBtn");
    answer3.textContent = quizAnswer[11].q12a3;

    let answer4 = document.createElement("button");
    answer4.setAttribute("id", "ans4");
    answer4.setAttribute("class", "ansBtn");
    answer4.textContent = quizAnswer[11].q12a4;

    let target1 = document.getElementById('testing')

    target1.appendChild(answer1);
    target1.appendChild(answer2);
    target1.appendChild(answer3);
    target1.appendChild(answer4);

    let correctAnswer1 = document.getElementById('ans1');

    correctAnswer1.addEventListener("click", function() {
        console.log("correct!");
        location.href = './score.html';
        
        
    })

    let wrongAnswer2 = document.getElementById('ans2');

    wrongAnswer2.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer3 = document.getElementById('ans3');

    wrongAnswer3.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })

    let wrongAnswer4 = document.getElementById('ans4');

    wrongAnswer4.addEventListener("click", function() {
        secondsLeft--;
        console.log("Incorrect!")
    })
}

//This function lets the user know that they have lost. Git gud.
function youLose() {
    
    timeEl.textContent = "You lost bud :(";
    let loser= document.getElementById("testing")
    loser.remove();
    let loseMessage = document.createElement("div")
    loseMessage.setAttribute("id", "loser");
    loseMessage.textContent = "Gotta be quicker than that!"
    document.body.appendChild(loseMessage);
    
}





//When the start button is clicked it will render the quiz element on the page and this also will begin the timer.
btnStuff.addEventListener("click", function () {

    let removeButton = document.getElementById('mainBtn');
    removeButton.remove();
    makeElement();
});

