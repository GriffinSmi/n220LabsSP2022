// Griffin Smith
// 2/16/2022
// n220

let dvSquareTwo = document.getElementById("squareTwo");

dvSquareTwo.style.backgroundColor = "#00FFFF";
dvSquareTwo.style.width = "100px";
dvSquareTwo.style.height = "100px";


function textOver() {
    dvSquareTwo.innerHTML = "Hello There";
    dvSquareTwo.style.backgroundColor = "#00FF00"

}

function textOut() {
    dvSquareTwo.innerHTML = "";
    dvSquareTwo.style.backgroundColor = "#00FFFF"

}