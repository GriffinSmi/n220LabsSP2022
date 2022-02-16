// Griffin Smith
// 2/16/2022
// n220


// get the ID from html to link js to html
let dvSquareTwo = document.getElementById("squareTwo");

// style and create size of square
dvSquareTwo.style.backgroundColor = "#00FFFF";
dvSquareTwo.style.width = "100px";
dvSquareTwo.style.height = "100px";


// create a function to work when I hover over the square
function textOver() {
    dvSquareTwo.innerHTML = "Hello There";
    dvSquareTwo.style.backgroundColor = "#00FF00"

}


// Create a function to work when the mouse leaves the square
function textOut() {
    dvSquareTwo.innerHTML = "";
    dvSquareTwo.style.backgroundColor = "#00FFFF"

}