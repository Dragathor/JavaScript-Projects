const Calculator = { //Create opbject to keep track of values.
    Display_Value: "0", //default display no.
    First_Operand: null, //Hold for first operand inputted  
    Wait_Second_Operand: false, //Check for if second operand has been inputted
    operator: null, //Hold for operator
};

function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    if (Wait_Second_Operand === true) { //See if second opp is true, set display to last button pressed
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit; //If display 0 overwrite if not add onto current value
    }
}

function Input_Decimal(dot) { //Decimal point use setup
    if (Calculator.Wait_Second_Operand === true) return; //ck. to see if . has been used to stop trying to add a second .
    if (!Calculator.Display_Value.includes(dot)) {
        //
        Calculator.Display_Value += dot; //if no . present add .
    }
}

function Handle_Operator(Next_Operator) { //operator setup for use
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value); //When no. pressed display on screen and store onto First_oper if not in use
    if (operator && Calculator.Wait_Second_Operand) { //Ck. if operator exists and if wait_2nd, true. Updare operator and exit function
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //ck if operator already exists
        const Value_Now = First_Operand || 0;
        let result = Preform_Calculation[operator](Value_Now, Value_of_Input); //if operator exists looks up preform calculation from list and executes
        result = Number(result).toFixed (9); //limits decimals to 9
        result = (result *1).toString(); //removes excess 0's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Preform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { //Function upates the calculator screen with the contents of Display_Value
    const display = document.querySelector(".calculator-screen"); //makes calculator-screen the target for input
    display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    const { target } = event; //The 'event' is the object button that was last clicked
    if (!target.matches("button")) { //if 'button' was not clicked end loop.
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("all-clear")){ //Ensures ac clears all inputs from screen
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
});

$("#slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);