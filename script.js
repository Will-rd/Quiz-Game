let btnStuff = document.querySelector("#mainBtn"); //lol....button stuff
let timeEl = document.querySelector("#time");
var mainEl = document.querySelector(".mainBox");
let secondsLeft = 10;
let questions = {
    one: "Does the first question work?",
    two: "Is this the second question?",
    three: "Well then, dont you feel silly now?",
    four: "Thats okay! Im silly too. Do you wanna pass the quiz?"
}
let quizAnswer = {
    yes: "Yes",
    no: "No"
}

//This is to test connectivity to the html file.
console.log('All systems are go if there are no errors here!')

//  The makeElement function here renders the quiz box that contains the quiz questions and the multiple
//choice answers

function makeElement() {
    let main = document.createElement("main");
    main.setAttribute("id", "testing");
    main.classList.add("mainBox")
    main.textContent = questions.one;

    let answersYes = document.createElement("button");
    answersYes.setAttribute("id", "ansYes");
    answersYes.setAttribute("class", "yesBtn");
    answersYes.textContent = quizAnswer.yes;

    let answersNo = document.createElement("button");
    answersNo.setAttribute("id", "ansNo");
    answersNo.setAttribute("class", "noBtn");
    answersNo.textContent = quizAnswer.no;

    document.body.appendChild(main);
    let testingQ1 = document.getElementById("testing");

    testingQ1.appendChild(answersYes);
    testingQ1.appendChild(answersNo);
    answersYes.addEventListener("click", function(e) {
       
         e = bigQuizFunction();
        
        return e;

    })

    answersNo.addEventListener("click", function(doom) {
        doom = document.getElementById("boom").setAttribute("class", "display-test");
       
       return doom;

   })


    setTime();
};


//   This will start a timer that will begin at the amount of seconds left which is defined globally when
//the button is clicked.
function setTime() {
    let timerInterval = setInterval(function () {

        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds untill you lose!";



        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            youLose();
            // newMessage();
        }
    }, 1000);

    return;
}




//This is a function to change the text in the main element where the questions will be appended.
function questTwo() {
    const wtfMain = document.getElementById("testing");
    wtfMain.innerHTML = questions.two;

    let answersYes = document.createElement("button");
    answersYes.setAttribute("id", "twoYes");
    answersYes.setAttribute("class", "yesBtn");
    answersYes.textContent = quizAnswer.yes;

    let answersNo = document.createElement("button");
    answersNo.setAttribute("id", "twoNo");
    answersNo.setAttribute("class", "noBtn");
    answersNo.textContent = quizAnswer.no;

    wtfMain.appendChild(answersYes);
    wtfMain.appendChild(answersNo);
    answersYes.addEventListener("click", function(e) {
        e = questThree();
       
       return e;

   })



    // wtfMain.setAttribute("class", "display-test");
}


function questThree() {
    console.log("question three")
    let threeMain = document.getElementById("testing");
    threeMain.innerHTML = questions.three;

    let answersYes = document.createElement("button");
    answersYes.setAttribute("id", "threeYes");
    answersYes.setAttribute("class", "yesBtn");
    answersYes.textContent = quizAnswer.yes;

    let answersNo = document.createElement("button");
    answersNo.setAttribute("id", "threeNo");
    answersNo.setAttribute("class", "noBtn");
    answersNo.textContent = quizAnswer.no;

    threeMain.appendChild(answersYes);
    threeMain.appendChild(answersNo);
    answersYes.addEventListener("click", function(e) {
        e = questFour();
       
       return e;

   })
}

function questFour() {
    console.log("the fourth question");
    let fourMain = document.getElementById("testing");
    fourMain.innerHTML = questions.four;

    let answersYes = document.createElement("button");
    answersYes.setAttribute("id", "fourYes");
    answersYes.setAttribute("class", "yesBtn");
    answersYes.textContent = quizAnswer.yes;

    let answersNo = document.createElement("button");
    answersNo.setAttribute("id", "fourNo");
    answersNo.setAttribute("class", "noBtn");
    answersNo.textContent = quizAnswer.no;

    fourMain.appendChild(answersYes);
    fourMain.appendChild(answersNo);
   document.getElementById('fourYes').onclick = function () {
    location.href = './score.html';
   }
}

function questFive() {
    console.log("final answer");
    // let scoresHtml = document.
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



function bigQuizFunction() {
    
    questTwo();
    console.log("were in here");
}

//When the start button is clicked it will render the quiz element on the page and this also will begin the timer.
btnStuff.addEventListener("click", function () {

    let removeButton = document.getElementById('mainBtn');
    removeButton.remove();
    makeElement();
});
