// Griffin Smith
// 3/31/2022
// n220


let dvSquareOne = document.getElementById("squareOne");

let dvSquareTwo = document.getElementById("squareTwo");

let dvSquareThree = document.getElementById("squareThree");

// Style the square with color and size
dvSquareOne.style.backgroundColor = "#FF000F";
dvSquareOne.style.width = "100px";
dvSquareOne.style.height = "100px";

dvSquareTwo.style.backgroundColor = "#FF000F";
dvSquareTwo.style.width = "100px";
dvSquareTwo.style.height = "100px";

dvSquareThree.style.backgroundColor = "#FF000F";
dvSquareThree.style.width = "100px";
dvSquareThree.style.height = "100px";


// Create a function that will change the style of the div being targetted
function changeStyle(targetDiv) {
    targetDiv.style.backgroundColor = "#00FFFF";
    targetDiv.style.width = "50px";
    targetDiv.style.height = "100px";
}

// Create functions for the three buttons
function clickOne() {
    changeStyle(dvSquareOne);
}

function clickTwo() {
    changeStyle(dvSquareTwo);
}

function clickThree() {
    changeStyle(dvSquareThree);
}