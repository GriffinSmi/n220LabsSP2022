// Griffin Smith
// 1/25/2022

var w = 1;
var h = 1;

// Create a canvas for the circle to be able to slide across
function setup() {
    createCanvas (800, 600);
    background (150, 150, 150);
}

// Create a black circle with the parameters of 1 and 1
function draw () {
    w = w + 1;
    h = h + 1;

    background (150, 150, 150);
    fill (0, 0, 0,);
    ellipse (400, 275, w, h);
    
    if(w == 200) {
        w = 1;
    }

    if(h == 200) {
        h = 1;
    }

}

// This code will require an if statement
// Much like the warping one but instead of moving the position we are changing the size