// Griffin Smith
// 2/7/2022
// N220

// Global Variable and Object

let objBall = {
    x: 0,
    y: 0,
    ballColor: "#00FF99",
    size: 75,
    offsetX: 0,
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
    drawBall();

}

// Create a function that draws the ball and uses the properties of the object
function drawBall() {
    background(150);

    fill(objBall.ballColor);

    if (mouseIsPressed === true) {

        if (objBall.offsetX != 0) {
            objBall.offsetX = objBall.offsetX - 1;
        }

        //console.log("ball");

    }

    else {
        objBall.offsetX = objBall.offsetX + 1;

    }

    circle((objBall.x + objBall.offsetX), objBall.y, objBall.size);


}