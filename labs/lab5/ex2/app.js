// Griffin Smith
// 2/16/2022
// n220

let dvSquare = document.getElementById("square");

dvSquare.style.backgroundColor = "#00FFFF";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

function mouseOver() {
    let boxChange = document.getElementById("square").style.backgroundColor = "#000000";
}

function mouseOut() {
    let boxChange = document.getElementById("square").style.backgroundColor = "#00FFFF";
}