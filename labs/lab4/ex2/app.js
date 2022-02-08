// Griffin Smith
// 2/7/2022
// N220

// Global Variable and Object

let objBall = {

    ballColor: "#00FF99",
    size: 75,
    // offsetX: objBall.x
};

// Create a setup Function where I create a canvas and a background color so that it is visible
function setup() {
    createCanvas(800, 800);

    background(150);

}

// Create a draw function that runs the drawBall function
function draw() {
    objBall.x = mouseX;
    objBall.y = mouseY;
    // objBall.offsetX = 
    drawBall();

}

// Create a function that draws the ball and uses the properties of the object
function drawBall() {
    background(150);

    fill(objBall.ballColor);

    circle(objBall.x, objBall.y, objBall.size);
    if (mouseIsPressed === true) {
        objBall.x = objBall.x + 1
    }

    else {
        objBall.x = objBall.x - 1
    }

}