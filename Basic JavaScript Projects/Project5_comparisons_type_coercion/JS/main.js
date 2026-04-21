document.write(typeof "King", "<br>"); //Write text is string operator
document.write(typeof 9, "<br>"); //Write text is a number operator
document.write("23" + 15, "<br>"); //Error as two different values present so a coercion error to print as string

function my_Function() {
    document.getElementById("test").innerHTML = 0/0; //Error of NaN
    document.getElementById("test2").innerHTML = isNaN("This is a string"); //Is a string
    document.getElementById("test3").innerHTML = isNaN("007"); //Is a number
    document.getElementById("not1").innerHTML = !(6 < 9); //NOT bullion False
    document.getElementById("not2").innerHTML = !(7 > 99); //NOT bullion True
}

document.write ("<br>", 2E310); //Possi Infini
document.write ("<br>", -3E310); //Negi Infini

document.write ("<br>", 10 > 2); //Boolian Logic - TRUE
document.write ("<br>", 10 < 2); //Boolian Logic - FALSE

console.log(2*16); //Consol usage *
console.log(2<=16); //Boolian Logic consol cmd

document.write ("<br>", 10 == 2); //Comparison is false
document.write ("<br>", 10 == (2+8)); //Comparison is true

x = 82;
y = 82;
document.write ("<br>", x === y, "<br>"); //Comparison is TRUE

x = "43";
y = 89;
document.write (x === y, "<br>"); //Comparison is False

x = 26;
y = "26";
document.write (x === y, "<br>"); //Comparison is False

A = "BOB";
B = "TIM";
document.write (A === B, "<br>"); //Comparison is False

document.write (6 > 4 && 52 > 1, "<br>"); //AND bullion True
document.write (5 < 15 && 12 < 1 , "<br>"); //AND bullion False
document.write (4 > 6 || 10 > 2, "<br>"); //OR bullion True
document.write (4 > 6 || 10 < 2, "<br>"); //OR bullion False