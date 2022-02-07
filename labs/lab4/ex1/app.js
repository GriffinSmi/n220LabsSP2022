// Griffin Smith
// 2/7/2022
// N220

// Create Global Variables

let objClock = {
    x: 350,
    y: 350,
    clockColor: "#000000",
    size: 100,
};

// Create a setup function where the canvas can be created
function setup() {

    createCanvas(800, 800);

    background(150, 150, 150);
}

// Call the clck function in the draw function
function draw() {
    clock();
}

// Create a function that holds the properties for the shape "clock"
function clock() {
    fill(objClock.clockColor);

    circle(objClock.x, objClock.y, objClock.size);
}

