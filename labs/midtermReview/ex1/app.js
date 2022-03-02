// Griffin Smith
// 2/28/2022
// n220

// Get id from html
var dvs = document.getElementsByClassName("dvNumbers");

for (let i = 0; i < dvs.length; i++) {
    dvs[i].style.height = "100px";
    dvs[i].style.width = "100px";
    dvs[i].style.backgroundColor = "#00FFFF";
}

function highlight() {

    console.log(event.target);

    for (let i = 0; i < dvs.length; i++) {
        dvs[i].style.height = "100px";
        dvs[i].style.width = "100px";
        dvs[i].style.backgroundColor = "#00FFFF";
        dvs[i].style.margin = "0 0";
    }

    event.target.style.backgroundColor = "#00FF00";
    event.target.style.fontWeight = "bold";
    event.target.style.margin = "0 auto";


}