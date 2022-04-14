// Griffin Smith
// 4/6/2022
// n220


let dvInputNumber = document.getElementById("inputNumber");
let dvWinner = document.getElementById("winner");


function game() {

    let guess = dvInputNumber.value;

    let guessArray = guess.split(",");


    if (guessFunction(guessArray) == true) {
        dvWinner.innerHTML = "Winner";
    } else {
        dvWinner.innerHTML = "Not Winner";
    }

}

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