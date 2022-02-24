// Griffin Smith
// 2/21/2022
// n220


// get the ID from html to link js to html
let dvBeepBop = document.getElementById("beepBop");

dvBeepBop.style.backgroundColor = "#00FF00";
dvBeepBop.style.width = "800px";
// dvBeepBoop.innerHTML = "Bigger!";

for (let i = 1; i < 26; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        dvBeepBop.innerHTML += "Beep Bop" + "<br />";
    }
    else if (i % 3 == 0) {
        dvBeepBop.innerHTML += "Beep " + "<br />";
    }
    else if (i % 5 == 0) {
        dvBeepBop.innerHTML += "Bop " + "<br />";
    }
    else {
        dvBeepBop.innerHTML += " " + [i] + "<br />";
    }

}