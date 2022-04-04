// Griffin Smith
// 3/30/2022
// n220

// Create an array with 3 indexes
let navArray = ["Home", "About", "Art"];

// Set a variable for the div to generate after the button is clicked
let dvNavResult = document.getElementById("navResult");


// Create a functions that will display the proper index in the array above
function navArrayHome() {

    dvNavResult.innerHTML = navArray[0];

}


function navArrayAbout() {

    dvNavResult.innerHTML = navArray[1];

}


function navArrayArt() {

    dvNavResult.innerHTML = navArray[2];

}