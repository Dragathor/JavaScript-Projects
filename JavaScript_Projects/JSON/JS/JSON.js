/* JS dictionary object */
const dog = {name: "Dax", breed: "Great Pyrenees", color: "White"};

/* This is a JSON string variable */
const dog2 = '{name: "Dax", breed: "Great Pyrenees", color: "White"}';

/* convert Javascript objects to string format */

var JSONstring = JSON.stringify(dog);
document.getElementById("myDog").innerHTML = JSONstring;

/* convert JSON string back to JS dictionary from string */
var JSONstring2 = JSON.parse(JSONstring);
document.getElementById("myDog2").innerHTML = JSONstring2.name + " the " + JSONstring2.breed;

/* set the data as a ket/value pair to be saved locally in your browser */
localStorage.setItem("Name", "Dax");
document.getElementById("myDog3").innerHTML = localStorage.getItem("Name");