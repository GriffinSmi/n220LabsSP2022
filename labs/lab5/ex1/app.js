// Griffin Smith
// 2/16/2022
// n220

let dvSquareOne = document.getElementById("squareOne");

dvSquareOne.style.backgroundColor = "#00FF00";
dvSquareOne.style.width = "100px";
dvSquareOne.style.height = "100px";
dvSquareOne.innerHTML = "hello";

// Make a var
let size = 100;


// When click
function grow() {

    size = size * 1.1;
    // Multiply size by 1.1

    // set width to px
    w = size + "px";

    // set height to px
    h = size + "px";

    dvSquareOne.style.width = w;
    dvSquareOne.style.height = h;
}