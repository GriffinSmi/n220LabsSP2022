// Griffin Smith
// 2/8/2022
// n220

// Global Variable/Object

let objBounce = {

    latPos: 0,
    longPos: 100,
    latSpeed: 5,
    longSpeed: 5,
    bounceColor: "#00FF99",
    size: 75,
    // offsetX: objBall.x
};

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

    objBounce.latPos = objBounce.latPos + objBounce.latSpeed;
    objBounce.longPos = objBounce.longPos + objBounce.longSpeed;

    fill(50, 100, 200);
    circle(objBounce.latPos, objBounce.longPos, 50);

    if (objBounce.latPos == 800) {
        objBounce.latSpeed = -5;
    }

    if (objBounce.longPos == 600) {
        objBounce.longSpeed = -5;
    }

    if (objBounce.latPos == 0) {
        objBounce.latSpeed = 5;
    }

    if (objBounce.longPos == 0) {
        objBounce.longSpeed = 5;
    }

}