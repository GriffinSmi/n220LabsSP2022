// Griffin Smith
// 4/6/2022
// n220


// Link the html to the js
let dvInputNumber = document.getElementById("inputNumber");
let dvWinner = document.getElementById("winner");


// Create a function that will take the numbers inputed as a value and seperate them with the commas the user inputs.
function game() {

    let guess = dvInputNumber.value;

    let guessArray = guess.split(",");

    // Create an if statement that will determine whether the numbers inputted are winning or losing numbers. This will be grabbed from another function
    if (guessFunction(guessArray) == true) {
        dvWinner.innerHTML = "Winner";
    } else {
        dvWinner.innerHTML = "Not Winner";
    }

}

// Create a function that will determine whether the user is a winner or a loser dependant upon what the user inputs.
function guessFunction(array) {

    let win = true;


    for (let i = 0; i < 3; i++) {
        if (array[i] != 1) {
            win = false;
            break;
        }


    }

    return win;
}