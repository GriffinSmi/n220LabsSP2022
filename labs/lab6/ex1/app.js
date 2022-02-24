// Griffin Smith
// 2/21/2022
// n220

// Get id from html
let dvNumbers = document.getElementById("num");

// dvNumbers.style.backgroundColor = "#00FF00"
// dvNumbers.style.width = "100px";
// dvNumbers.style.height = "100px";


// Create a loop that will display all the numbers required
for (let i = 1000; i < 6000; i += 1000) {
    dvNumbers.innerHTML += i + "<br />";
    console.log(i);
}