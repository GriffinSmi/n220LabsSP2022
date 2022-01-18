
function setup() {
    // create a canvas that is 800px for my work to show up on
    createCanvas (800,600);
    
    // create my boat using different shapes and placing them where they need to be to construct a boat 
    
    // color and creation of the night sky
    fill(112, 94, 120);
    rect(0, 0, 800, 350);

    // color and creation of the sail
    fill(255, 255, 255);
    triangle(220, 200, 320, 200, 220, 100);

    // color and creation of wooden support post
    fill(254, 154, 67);
    rect(220, 200, 100, 5)

    // color and creation of the wooden post
    fill(254, 154, 67);
    rect(200, 300, 20, -200);
    
    // color and creation of the hull of the boat
    fill (129,47,51);
    arc(200, 300, 200, 200, 0, PI, CHORD);

    // color and creation of the water and the water 
    fill(134, 190, 224);
    rect(0, 350, 800, 550);
}

// function draw() {
//     circle(mouseX, mouseY, frameCount/50);
// }