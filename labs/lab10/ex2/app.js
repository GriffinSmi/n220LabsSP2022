// Griffin Smith
// 4/10/2022
// n220



// get the ID from html to link js to html
let dvSquares = document.getElementsByClassName("square");

// Style the square with color and size Add margin
for (i = 0; i < dvSquares.length; i++) {
    dvSquares[i].style.backgroundColor = "grey"
    dvSquares[i].style.width = "200px";
    dvSquares[i].style.height = "200px";
    dvSquares[i].style.margin = "5px";
}





// Create a function to change color when the mouse clicked on the div
function clickColor() {
    event.target.style.backgroundColor = event.target.dataset.color;
}

