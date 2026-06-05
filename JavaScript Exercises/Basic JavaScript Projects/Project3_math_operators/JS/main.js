    document.addEventListener("DOMContentLoaded", // For ease of usand as dunctions were not needed mpre than once DOMContentLoaded was used to display most functions
    function multiply_Function() { //Multiply function
    var multiply = 3*4;
    document.getElementById("Math").innerHTML = "3 x 4 = " + multiply;
});

    document.addEventListener("DOMContentLoaded", //See 1st comment
    function sub_Function() { //subtraction
    var sub = 5-4;
    document.getElementById("Math2").innerHTML = "5 - 4 = " + sub;
});

    document.addEventListener("DOMContentLoaded",//See 1st comment
    function addit_Function() { // addition
    var addit = 5+4;
    document.getElementById("Math3").innerHTML = "5 + 4 = " + addit;
});

    document.addEventListener("DOMContentLoaded",//See 1st comment
    function divi_Function() { //division
    var divi = 4/4;
    document.getElementById("Math4").innerHTML = "4 / 4 = " + divi;
});

    document.addEventListener("DOMContentLoaded",//See 1st comment
    function multi_Function() { //addition, multiplication, subtraction and division
    var multi = ((((5+4) * 10) - 20) / 2) ;
    document.getElementById("Math5").innerHTML = "((((5 + 4) x 10) - 20) / 2) = " + multi;
});

    document.addEventListener("DOMContentLoaded",//See 1st comment
    function mod_opp() { //Unit count remaning after division
    var modd = 25%6;    
    document.getElementById("Math6").innerHTML = "25 / 6 has a remainder of:" + modd;
});

    document.addEventListener("DOMContentLoaded",//See 1st comment
    function multi_Function() { // Changing result to negative with unary operator
    var multi = ((((5+4) * 10) - 20) / 2) ;
    document.getElementById("Math7").innerHTML = "Unary Operator example using math 5 = " + -multi;
});

    var X = 5; 
    X++; //Increase result by one
    document.write (X, "<br>");

    var X = 5.25;
    X--; //Decrease result by one
    document.write (X, "<br>");

    window.alert (Math.round(Math.random() * 200));

    var X = Math.sqrt(16); //Using math object to apply a method on a number directly.
    document.write ("The math object is a set of mathematical functions and formulas assigned to the same amth object for ease of use. ",
        "These objects are static so their mothods of use can be called directly at need. <br>", "The following is the squreroot of 16: ", X, "<br>");