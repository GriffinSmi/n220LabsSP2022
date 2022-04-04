// Griffin Smith
// 3/30/2022
// n220


// Set a variable for the div to generate after the button is clicked
let dvRandomResult = document.getElementById("randomResult");



function clickMe() {
    randomNumber();
}


// Create a function that randomly generates a number and displays it on the screen
function randomNumber() {


    let theNumber = Math.floor(Math.random() * 11);


    dvRandomResult.innerHTML = theNumber;


    console.log(theNumber);
}

