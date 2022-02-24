// Griffin Smith
// 2/21/2022
// n220


// get the ID from html to link js to html
let dvTopNumber = document.getElementById("topNumber");

// Create a size and color to allow for the divs to be easily distinguished
dvTopNumber.style.backgroundColor = "#00FFFF";
dvTopNumber.style.width = "100px";
dvTopNumber.style.height = "100px";
// dvThreeNumbers.innerHTML = "Bigger!";

// grab the second id to connect the second div
dvlastTwo = document.getElementById("lastTwo");

// Create a size and color to allow for the divs to be easily distinguished
dvlastTwo.style.backgroundColor = "#00FF00";
dvlastTwo.style.width = "100px";
dvlastTwo.style.height = "100px";

// Create an array for the three different numbers
let theNumbers = ["2.56", "13.20", "19.75"];
console.log(theNumbers);

// create innerHTML for the first div
dvTopNumber.innerHTML += theNumbers[0];

// create innerHTML for the second div
dvlastTwo.innerHTML += theNumbers[1];
dvlastTwo.innerHTML += "<br />"
dvlastTwo.innerHTML += theNumbers[2];