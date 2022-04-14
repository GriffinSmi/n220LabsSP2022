// Griffin Smith
// 4/10/2022
// n220

// create a variable for the div "answer" to display the answer to the button clicked
let dvAnswer = document.getElementById("answer");


// create a function that changes the inner html of the variable dvanswer
function answerButton() {
    dvAnswer.innerHTML = event.target.dataset.answer
}

