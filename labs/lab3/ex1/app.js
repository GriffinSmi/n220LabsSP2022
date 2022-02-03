// Griffin Smith
// 2/1/2022
// N220

// create the canvas that I will be working on and add a background color to it

function setup() {
    createCanvas(800, 600);

    background(150, 150, 150);
}


// Call the functions to make them positioned in three places
function draw() {
    drawFlag(150, 150);
    drawFlag(300, 300);
    drawFlag(500, 150);
}

function drawFlag(x, y) {
    // Create the Flag
    fill(255, 255, 255);
    rect(x, y, 100, 50)

    // Create the post to the flag
    fill(254, 154, 67);
    rect(x, y, 20, 200)

}
