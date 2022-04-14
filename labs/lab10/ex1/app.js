// Griffin Smith
// 4/9/2022
// n220

// Grab the ids and create variables to link the display box and current color
let dvColorBox = document.getElementById("displayColor");

let dvCurrentColorBox = document.getElementById("currentColor");

// Create the width and height for the displayed box
dvColorBox.style.width = "500px"
dvColorBox.style.height = "200px"

// Set values for each color in a variable
let redValue = 0

let greenValue = 0

let blueValue = 0

changeColor();

// Create functions for each color property (red, green, blue) That will 
function red() {
    redValue += Number(event.target.dataset.value);

    changeColor();
}

function green() {
    greenValue += Number(event.target.dataset.value);

    changeColor();
}

function blue() {
    blueValue += Number(event.target.dataset.value);

    changeColor();
}

// Create a function that will change the value of the RGB and update the color
function changeColor() {

    let color = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";

    dvColorBox.style.background = color;

    dvCurrentColorBox.innerHTML = "Current Color: " + color;

    console.log(color);
}
