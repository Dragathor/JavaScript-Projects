window.alert ("Helo, World!"); // Creating pop up box on load

document.write("Helo, World!"); //Entering data on load

var A = "Hello,world!";
document.write(A); //Entering data on load with variable with data

var B = "123456";
window.alert (B); //Entering data on load with variable with data

document.write("\"Hello,World !\""); //Entering data on load and showing "" with \

document.write("<br>I don\'t see how this matters!" //Concantinate and enter data on load
    +"It feels like an uter waste of time!!!");

var C = ("<br>I don\'t see how this matters!" 
    +"It feels like an uter waste of time!!!");

var D = ("<br>") + A + C + "<br>"; //Creating concantinate with multipe var data 
document.write (D);

var Family = "The Arezzinis", Dad = "Jeremiah", Mum = "Hermoine",
    Daughter = "Penny", Son = "Zorro";
document.write (Dad); //Enter sprcific data within data set on load  

document.write ("<br>1+1=Window"); //data

function My_First_Function () { //Defining Fiction and giving name
    var str = "This is the button text!"; //Definfing variable and naming
    document.getElementById("Button_Text").innerHTML = str; 
    // Telling finction where to look in html doc via ID
}

function My_First_Function_Extended () {
    document.b.style.backgroundColor = "blue";
    document.getElementById("Button_Text")
}
