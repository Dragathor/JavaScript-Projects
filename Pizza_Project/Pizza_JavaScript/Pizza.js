function getReceipt() {
    //Create string that all items can be added to to form receipt 
    var text1 ="<h3>You Ordered:<h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    } //Size array for pizza cost vs size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Party Pizza") {
        sizeTotal = 16;
    }
    //Update price for chosen pizza size
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size tex1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed to each function
    getTopping(runningTotal,text1);
};


//Running tally array for total toppings used
function getTopping(runningTotal,text1) {
    var getTopping = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //Add topping cost to size cost
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};


//Validation code for ensuring fields are full
function validateForm() {
  let x = document.forms["myForm"]["fname"]["lname"]["numb"].value;
  if (x == "") {
    alert("All details bust be filled out!");
    return false;
  }
}


//Open and close function for name and number form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}