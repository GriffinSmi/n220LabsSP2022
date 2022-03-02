// Griffin Smith
// 2/21/2022
// n220


var btns = document.getElementsByClassName("button");

var score = 0;

for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = "#00FFFF";
    btns[i].style.width = "100px";
    btns[i].style.height = "100px";
    btns[i].style.marginBottom = "10px";
}

function computer() {
    let choices = ["rock", "paper", "scissors"];

    let random = Math.floor(Math.random() * 3);

    return choices[random];

}

function updateScore() {
    document.getElementById("score").innerHTML = score;
}

function displayChoices(player, computer) {

    document.getElementById("choices").innerHTML = "Your Choice: " + player + "<br/>" + "Computer's Choice: " + computer;

}

function rockFunction() {

    let computerChoice = computer();

    console.log(computerChoice);

    if (computerChoice === "paper") {
        score = score - 1;
    }
    else if (computerChoice === "scissors") {
        score = score + 1;
    }
    else if (computerChoice === "rock") {
        score = score;
    }

    updateScore();

    displayChoices("rock", computerChoice);

    console.log(score);
}

function paperFunction() {

    let computerChoice = computer();

    console.log(computerChoice);

    if (computerChoice === "scissors") {
        score = score - 1;
    }
    else if (computerChoice === "rock") {
        score = score + 1;
    }
    else if (computerChoice === "paper") {
        score = score;
    }

    updateScore();

    displayChoices("paper", computerChoice);

    console.log(score);

}

function scissorsFunction() {

    let computerChoice = computer();

    console.log(computerChoice);

    if (computerChoice === "rock") {
        score = score - 1;
    }
    else if (computerChoice === "paper") {
        score = score + 1;
    }
    else if (computerChoice === "scissors") {
        score = score;
    }

    updateScore();

    displayChoices("scissors", computerChoice);

    console.log(score);
}

function guardFunction() {
    score = score - 0.5;

    updateScore();

    displayChoices("guard", "none");

    console.log(score);
}