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

    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}
