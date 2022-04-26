// Griffin Smith
// 4/25/2022
// n220

// Grab the ids and create variables to link the display box and current color
let dvCard = document.getElementsByClassName("memoryCard");

for (i = 0; i < dvCard.length; i++) {
    dvCard[i].style.backgroundColor = "grey"
    dvCard[i].style.width = "200px";
    dvCard[i].style.height = "200px";
    dvCard[i].style.margin = "5px";
    dvCard[i].addEventListener("click", clickColor);
}

let dvRow = document.getElementsByClassName("row");

for (i = 0; i < dvRow.length; i++) {
    dvRow[i].style.display = "flex";
}


let dvReplay = document.getElementById("buttonReplay");

dvReplay.style.width = "200px";
dvReplay.style.height = "75px";
dvReplay.style.margin = "5px";
dvReplay.style.fontSize = "24px";
dvReplay.style.backgroundColor = "grey";
dvReplay.style.color = "white";

// Create an array that will store the targeted colors
let clickedCards = [];

// Create a function that will reveal the color of the cards when clicked on
function clickColor() {
    event.target.style.backgroundColor = event.target.dataset.color;

    clickedCards.push(event.target);

    // Create an if statement that checks for 2 cards to be stored in the array
    if (clickedCards.length == 2) {
        // Remove all listeners from the cards to prevent errors and set a timeout for 2 seconds to remove/ flip the cards
        for (i = 0; i < dvCard.length; i++) {
            dvCard[i].removeEventListener("click", clickColor);
        };
        setTimeout(checkColor, 2000);
        // checkColor(clickedCards);
    }

    // console.log(clickedCards);
}


// Create a function that will check if the cards flipped are matching
function checkColor() {
    // Checks to see if colors are the same and cards (id's) are seperate.
    if ((clickedCards[0].dataset.color == clickedCards[1].dataset.color) && (clickedCards[0].dataset.id != clickedCards[1].dataset.id)) {

        // removes cards from board if they match
        for (i = 0; i < clickedCards.length; i++) {
            clickedCards[i].style.backgroundColor = "white";
        }

        console.log("Im Working");
    } else {

        // Flips cards back to grey if they don't match. 
        for (i = 0; i < clickedCards.length; i++) {
            clickedCards[i].style.backgroundColor = "grey";
        }
    }

    // Clear the "clickedCards" Array
    clickedCards = [];

    // Add listeners back to the cards once the array is cleared
    for (i = 0; i < dvCard.length; i++) {
        dvCard[i].addEventListener("click", clickColor);
    };

    // console.log("Im Working");
}


// Create a function that will reset the game
function replay() {
    // this essentially reloads the page
    location.reload();
}