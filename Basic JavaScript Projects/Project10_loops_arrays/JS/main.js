function count_To_Ten() { 
    var Digit = ""; //set Digit as a variable
    var X = 1; //initial X value
    while (X < 11) { //variable for loop to continue
        Digit += "<br>" + X; //set digit = to X with result on next line
        X++; //incriment x up by 1
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit; //where to print counting no. on the webpage during loop
}
         
function length2() {
    var Y = document.getElementById("output").innerText.length; //set Y to output element inner text as length property
    document.getElementById("output").innerHTML = Y; //replace message on button with Y which is now length of the string
    //click again for current shown string length so "2"
}

    function for_Loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //arrey 
    var Content = ""; //set undefined variable
    var Y; //variable for index no.

        for (Y = 0; Y < Instruments.length; Y++) { //move though inxed and increase inxed if Y isn't = to no. of items in index
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}



    var Z = 0;
 function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    
    if (Z < 3){
        Z = Z + 1} //each click of button displays one increase of the array index possition 
        else {(Z = 0)} // if index denominator would be > than 3 then set to 0
    
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[Z] + "."; //show each array value as the index is increased with each click
}


function constant_function() {
    const Musical_Instrument = {type: "guitar", brand:"Fender", color:"black", string:"6 strings"}; //array with constant values
    Musical_Instrument.color = "blue"; //change a variable in a constant array
    Musical_Instrument.price = "£900" //add new variable
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + ". It also has " + Musical_Instrument.string + "."; //print string on page
}

var Q = 82; //set variable
document.write(Q);
{
    let Q = 33; //temporary override to X
    document.write ("<br>" + Q);
}
document.write ("<br>" + Q); //X back to origional variable

var Q = 72; //set Q to new variable
document.write ("<br>" + Q);
{
    var Q = 113; //Override Q to new variab;e
    document.write ("<br>" + Q);
}
document.write ("<br>" + Q); //Q is the latest varable

document.getElementById("square_area").innerHTML = getRectArea(9, 10); // set area  width and height for function for print
function getRectArea(width, height) { //set function
  if (width > 0 && height > 0) {
    return width * height; //return is a stop for a function
  }
  return 0;
}

let car = {
 make: "Dodge ",
 model:"Viper ",
 year: "2021 ",
 color: "red ",
 description: function() {
    return "The car is a " + this.year + this.color + this.make + this.model;
 }
};
document.getElementById("Car_Object").innerHTML = car.description();


function count_up() {
let text = "";

for (let i = 0; i < 10; i++) { // set i to 0 and incliment by one while i is less than 10
    if (i === 7) {break} //break stops the function when the condition is met, in this case 7
    text += "The number is ." + i + "<br>"; //set text that can be used even tick of the function
}

document.getElementById("count").innerHTML = text; //print text with every tick of the function 
}