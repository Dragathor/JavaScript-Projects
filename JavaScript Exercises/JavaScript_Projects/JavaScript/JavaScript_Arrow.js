arrow_practice = () => document.getElementById("arrow").innerHTML = "Helo World"



var ages = [2, 10, 18, 20, 13, 15, 30]; //Create index
checkAge = (age) => age >= 18; //Set a parameter of age
myfunction = () => document.getElementById("displayAge").innerHTML = ages.some(checkAge); //iterate through the array to find amd display the resuly