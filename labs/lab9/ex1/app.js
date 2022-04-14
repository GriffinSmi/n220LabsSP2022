// Griffin Smith
// 4/6/2022
// n220


let dvBoxes = document.getElementById("boxes");

// dvBoxes.style.height = 1000;

// 
let objects = [

    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },

    { color: "#00ffff", height: 300, width: 100 },

];






// 
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
