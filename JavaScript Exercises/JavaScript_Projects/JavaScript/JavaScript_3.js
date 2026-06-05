

function validateFoum() {
    let x = document.forms ["myForm"]["fname"]["lname"]["email"]["numb"].value;   
}

function displayInfo(information) {
    var informationType = information.getAttribute("data-information-type");
    alert("A " + information.innerHTML + " is " + informationType);
}