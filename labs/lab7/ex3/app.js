// Griffin Smith
// 3/20/2022
// n220

// Set a global variable for the text box
let greet = document.getElementById("greeting");

// Set a variable for the div to generate after the button is clicked
let dvTxtResult = document.getElementById("greetResult");


// Create a function to take the vowels out of the work and display on the div
function greetTxt() {
    let textBox = greet.value;



    for (var i = 0; i < textBox.length; i++) {
        let char = textBox[i];

    }

    let theGreeting = `Hello ${textBox}`;

    // dvTxtResult.innerHTML = theGreeting;

    console.log(theGreeting);

    greet.value = "";
}
