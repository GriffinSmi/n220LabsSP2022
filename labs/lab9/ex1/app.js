// Griffin Smith
// 4/6/2022
// n220


let dvBoxes = document.getElementById("boxes");

// Create an array for the boxes and set a color, height, and width for each of them.
let objects = [

    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },

    { color: "#00ffff", height: 300, width: 100 },

];






// Create a function that will take the objects from the array and display them in the div.
function theBoxes() {


    for (let i = 0; i < 3; i++) {

        let div = document.createElement("div");

        div.style.backgroundColor = objects[i].color;
        div.style.height = objects[i].height + "px";
        div.style.width = objects[i].width + "px";

        dvBoxes.appendChild(div);

    }


}

theBoxes();
