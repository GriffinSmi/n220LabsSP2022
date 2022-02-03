// Griffin Smith
// 2/2/2022
// N220

// Create a canvas for work to be shown on as well as a background color
function setup() {

    createCanvas(800, 600);

    background(150, 150, 150);
}

// Create a function that shows a circle moving when my mouse is moved
// Have a background for the circle to reset so it isn't repeating
function draw() {
    background(150, 150, 150);

    let res = polarPoint(10);
    translate(100, 100);
    circle(res.x, res.y, 10)


    console.log(res)

}
// Create a function to work a mathproblem and spit a location out when the mouse is moved
function polarPoint(r) {

    let x = r * Math.sin(mouseX);

    let y = Math.cos(mouseX);

    return createVector(x, y);

}