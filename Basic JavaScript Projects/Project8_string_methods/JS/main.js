function full_Sentence() { //Concatenate example 
    var part_1 ="I have ";
    var part_2 ="made this ";
    var part_3 ="into a complete ";
    var part_4 ="sentence.";
    var whole_sentence = part_1.concat (part_2, part_3, part_4, "<br>"); //concaterante full sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence; //print
}

function slice_Method(){ //Slice and uppercase examples
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice (26,33); //Slice function with numbers as string locations to be sliced
    var Upper = Section.toUpperCase(); //toUpperCase() is used to make the containing elements all uppercase when new object used
    document.getElementById("Slice").innerHTML = Sentence + Upper;
    let position = Sentence.search("work"); // Used to find the specific position or existence of a select peice of data, used for large data sets.
    document.getElementById("search_result").innerHTML = position; //Print data position
}

function string_Method() {
    var X = 182; //set variable
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //display string of number
}

function precision_Method() {
   var X = 12345.123456789;
   document.getElementById("Precision").innerHTML = X.toPrecision(10); //round to only display up tp 10 character places   
}

function fix() {
    let num = 5.56789;
    let n = num.toFixed(2); //rounds no. to specific decimal place
    document.getElementById("place").innerHTML = n;
}


//Can't find any explination of how to get .valueOf working in a way I understand atall and have given up.
// I understand it's used for debugging but no idea of how to use it 
// num = 100;
//String g = String.valueOf(num);
//System.out.println("Integer value: " + g);