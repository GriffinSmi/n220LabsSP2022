// Griffin Smith
// 1/25/2022

let number = 0;


// create a canvas where the number can be displayed
function setup() {
    createCanvas(800, 600);

    // Make the framerate 30 fps so it can be more viewable
    frameRate(30);
}

// Create a function that draws a number and increases after each frame goes by
function draw() {
    background(200);
    number = number + 1;
    console.log(number);

}
