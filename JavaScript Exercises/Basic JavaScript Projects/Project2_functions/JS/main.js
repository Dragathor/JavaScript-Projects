function Project2_Function() { //function name
    const button=document.getElementById("Button").style.backgroundColor = "red"; //Set button color to change on click
    var butt = "Look ma no change!"; //Change button text variable
    document.getElementById("Button").innerHTML = butt; //assigne now button text on click
}

function Project2_Function_2() { //function name
    document.getElementById("par").style.backgroundColor = "yellow"; //set p background on button click via id
    document.getElementById("par").style.textAlign = "center" //set p alignment on bitton click via id
}

function concat() { //function name
    var sentence = "I am learning "; //concat part1
        sentence += "a lot from this book!"; // add concat part2
    document.getElementById("concatenate").innerHTML = sentence; //display full concat on web page
}