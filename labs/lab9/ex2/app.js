// Griffin Smith
// 4/6/2022
// n220


let dvInputNumber = document.getElementById("inputNumber");
let dvWinner = document.getElementById("winner");

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

    if (win == true) {
        dvWinner.innerHTML = "Winner";
    } else {
        dvWinner.innerHTML = "Not Winner";
    }
    console.log(win);
}