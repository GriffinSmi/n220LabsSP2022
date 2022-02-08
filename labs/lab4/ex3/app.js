// Griffin Smith
// 2/8/2022
// n220

// Global Variable
let xPos = 0;
let yPos = 100;

let xSpeed = 5;
let ySpeed = 5;

// Create a canvas and background for a workspace
function setup() {
    createCanvas(800, 600);

    background(150);
}

function draw() {
    drawCircle();

}

function drawCircle() {
    background(150);

    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    fill(50, 100, 200);
    circle(xPos, yPos, 50);

    if (xPos == 800) {
        xSpeed = -5;
    }

    if (yPos == 600) {
        ySpeed = -5;
    }

    if (xPos == 0) {
        xSpeed = 5;
    }

    if (yPos == 0) {
        ySpeed = 5;
    }

}