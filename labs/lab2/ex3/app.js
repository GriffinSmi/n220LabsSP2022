// Griffin Smith
// 1/25/2022

// Create a global variable for the x position of the circle
let xPos = 0;


// Create a cavas of 800 x 600
function setup () {
    createCanvas (800,600);
    background (150, 150, 150);
}

// Create a finction that draws out a circle 
function draw () {
    xPos = xPos + 5;
    background (150, 150, 150);
    circle (xPos, 300, 50);
    // Create an if statement that will reset the circles position back to x=0
    if (xPos == 800) {
        xPos = 0;
    }
}