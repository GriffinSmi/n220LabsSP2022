// Griffin Smith
// 2/16/2022
// n220


// get the ID from html to link js to html
let dvSquare = document.getElementById("square");


// Style the square with color and size
dvSquare.style.backgroundColor = "#00FFFF";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";


// Create a function to change color when the mouse is hovering over the box
function mouseOver() {
    let boxChange = document.getElementById("square").style.backgroundColor = "#000000";
}


// Create a function to change color when the mouse is not hovering over the box
function mouseOut() {
    let boxChange = document.getElementById("square").style.backgroundColor = "#00FFFF";
}