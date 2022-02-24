// Griffin Smith
// 2/21/2022
// n220


// get the ID from html to link js to html
let dvFavStuff = document.getElementById("favStuff");


// Create an array that has some of my favorite things
let things = ["Tennis", "Food", "Work", "Racing", "Golfing"];
console.log(things);

// Create a loop that will repeat for the length of the array and print all the "Favorite things" until they have all been printed in the div once
for (let i = 0; i < things.length; i++) {
    dvFavStuff.innerHTML += things[i] + " is one of my favorite things to do!" + "<br />";
    console.log(things.length);
}

