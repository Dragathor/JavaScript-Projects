function Ride_function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_function() { //Age program name
var age, can_vote; //variable names
age = document.getElementById("age").value; //age value
can_vote = (age > 17) ? "You are old enough":"You are too young"; //age comparison and result 
document.getElementById("Vote").innerHTML = can_vote + " to vote!" //concatenate final answer submition to html page
}

function Vehicle (Make, Model, Year, Color) { //create new object Vehicle template
    this.Vehicle_Make = Make; //object variable
    this.Vehicle_Model = Model; //object variable
    this.Vehicle_Year = Year; //object variable
    this.Vehicle_Color = Color; //object variable
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red"); //create object Vehicle with defined variables
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black"); //create object  Vehiclewith defined variables
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard"); //create object Vehicle with defined variables
function myCar_function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
} //call created Vehicle object Erik

function count_function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    } 
}

