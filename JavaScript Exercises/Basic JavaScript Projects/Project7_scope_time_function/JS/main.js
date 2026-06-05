var X = 10; //Open/unenclosed variable usable by any function
function Add_numbers_1() {
    document.write(20 + X +"<br>"); //function using X
} //Basic addition and print
function Add_numbers_2() {
    document.write(X + 100 + "<br>"); //function using X
} //Basic addition and print

Add_numbers_1(); //Use function on web page loading
Add_numbers_2(); //Use function on web page loading

function Add_numbers_3() {
    var Y = 10; //Closed variable within function
    document.write(20 + Y + "<br>"); //Basic addition and print
}

function Add_numbers_4() {
    document.write(Y + 100 + "<br>"); //Addition attemping to use a closed unusable function
    console.log(Y + 100); //Error log for previous function explaining that Y has no variable.
}

Add_numbers_3(); //Use function on web page loading
Add_numbers_4(); //Use function on web page loading & enter into log why expected answer is not present

function get_Date() {
    var Time = new Date() .getHours();
    if (Time < 12) {
        document.getElementById("Greeting").innerHTML = "How are you this Morning?";
    } //if function declaring morning 

    else if (Time >= 12 == Time < 18) {
        document.getElementById("Greeting").innerHTML = "How are you this afternoon?";
    } //function declaring afternoon 

    else {
        document.getElementById("Greeting").innerHTML = "How are you this evening?";
    } //function declaring evening
}