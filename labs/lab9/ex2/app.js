// Griffin Smith
// 4/6/2022
// n220

// Link the html to the js
let dvInputNumber = document.getElementById("inputNumber");
let dvWinner = document.getElementById("winner");

// Create a function that will take a user input
// The user input will spit out winner or loser depending on if they have three 1's in a row. 
function guess() {

    let guess = dvInputNumber.value;

    console.log(guess);

    let guessArray = guess.split(",")

    console.log(guessArray);

    let win = true;

    for (let i = 0; i < 3; i++) {
        if (guessArray[i] != 1) {
            win = false;
            break;
        }


    }
    // Create an if statement declaring the user a winner or loser
    if (win == true) {
        dvWinner.innerHTML = "Winner";
    } else {
        dvWinner.innerHTML = "Not Winner";
    }
    console.log(win);
}