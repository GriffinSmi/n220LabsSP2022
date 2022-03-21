// Griffin Smith
// 3/18/2022
// n220


// get the ID from html to link js to html
let guess = document.getElementById("guess");

// Set a variable for the div to generate after the button is clicked
let dvGuessResult = document.getElementById("guessResult");


// Create a function to take the inputted number and see if it matches the hard coded number and if so say Correct, if not say Incorrect
function randomNumber() {
    let number = guess.value;

    let theNumber = 12;
    // if statement to determine if inputted value if matching the hard coded value
    if (number == theNumber) {
        var yayOrNay = `Correct`;
    } else {
        var yayOrNay = `Incorrect`;
    }

    // let noVowel = `${number}`;

    dvGuessResult.innerHTML = yayOrNay;

    guess.value = "";
}