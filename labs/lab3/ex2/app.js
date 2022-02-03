// Griffin Smith
// 2/1/2022
// N220

// Global Variable
let noRed;


// Create a function for the canvas to be drawn on as well as a background
// set a variable that will determine a color
function setup() {
    noRed = color(170, 200, 150);
    createCanvas(800, 600);

    background(150, 150, 150);
}

// This function runs the "drawCircle" function
function draw() {
    drawCircle();
}

// Create a function that contains a circle and fills the color with the variable "noRed"
function drawCircle() {
    removeRed(noRed)
    fill(noRed);
    circle(300, 300, 100);

}

// Create a function that will remove the red from the color in the original circle
function removeRed(c) {
    c.setRed(0);
}