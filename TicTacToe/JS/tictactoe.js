//This variable keeps track of whose turn it is.
let activePlayer = "X";
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an X or an O in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
if (!selectedSquares.some(element => element.includes(squareNumber))) {
    //This variable retrives the HTML element id that was clicked.
    let select = document.getElementById(squareNumber);
    //This condition checks who's turn it is.
    if (activePlayer === "X") {
        //if player = x, place x img.
        select.style.backgroundImage = "url('images/X2.jpg')";
        //Player can only = X or O
        } else {
            //If player is = O, place O
            select.style.backgroundImage = "url('images/O2.jpg')";
        }
        //squareNo. and activePlay are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //Call function to loook for win condition.
        checkWinConditions();
        //condition is for changing current/active player. if player X change to O
        if (activePlayer === "X") {
            activePlayer = "O";
            //If player is not X set to X
        } else {
            activePlayer = "X";
        }
        //Set audio for placeing X or O
        audio("./media/spell.mp3");
        //Function if player = O disable clicking for user for 1s
        if (activePlayer === "O") {
            disableClick();
            //sets during 1s the computer turn function to place an O
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //A part of the the computerTurn variable to end computer turn loop 
        return true;
}
//Set up computer placeing a tile at random
function computersTurn() {
    //Boolian needed for the while loop for pc turn
    let success = false;
    //success becomes in pickASquare variable number 0 - 8
    let pickASquare;
    //Check if a square has been picked already been picked
    while (!success) { //if succsess is false keep trying bolow loop
        //set let pickASquare between 0-8 
        pickASquare = String(Math.floor(Math.random() * 9));
        //checks if  square is = to true, square chan be picked if false loop
        if (placeXOrO(pickASquare)) {
            //if square is = true end loop by changing boolean success to true and end loop
            placeXOrO(pickASquare);
            //bfd
            success = true;
        };
    }
}
}

//This function parses the selectedSquares array to search for win condition.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    if (arrayIncludes("0X", "1X", "2X")) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes("3X", "4X", "5X")) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes("6X", "7X", "8X")) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes("0X", "3X", "6X")) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes("1X", "4X", "7X")) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes("2X", "5X", "8X")) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes("6X", "4X", "2X")) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes("0X", "4X", "8X")) {drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes("0O", "1O", "2O")) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes("3O", "4O", "5O")) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes("6O", "7O", "8O")) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes("0O", "3O", "6O")) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes("1O", "4O", "7O")) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes("2O", "5O", "8O")) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes("6O", "4O", "2O")) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes("0O", "4O", "80")) {drawWinLine(100, 100, 520, 520)}
    //Condition checks for a tie. If none of the results above are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9){
        //Game tie sound selection
        audio("./media/ties.mp3");
        //resets the game if tie found (see below)
        setTimeout(function () {resetGame();}, 500);
    }

    //Function used to see in an array included 3 strings. It is used to check for
    //each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //arrayIncludes becomes an array a b c
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If 3 variables all true exicute drawline() function
        if (a === true && b === true && c === true) {return true; }
    }
}

//Set function called earlier to enable element lockout 
function disableClick() {
    //makes body unclickable 
    body.style.pointerEvents = "none";
    //set timer to allow clicking again
    setTimeout(function () { body.style.pointerEvents = "auto";}, 1000);
}
//Funcion takes place, tie and win audio placements and makes them into an object on call and exicuted
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//Use canvas to draw lines for win condition
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //access html pages current canvas 
    const canvas = document.getElementById("win-lines");
    //enable canvas draw function on page
    const c = canvas.getContext("2d");
    //set start points of the x and y axis
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        //variable stores the temporary x and y axis data we update in an animation loop
        x = x1,
        y = y1;
//Function that interacts with canvas and draws the lines
function animateLineDrawing() {
    //creats a loop
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //Clears information from previous loop
    c.clearRect(0, 0, 608, 608);
    //Starts a new line
    c.beginPath();
    //Default start point of line
    c.moveTo(x1, y1);
    //end point of line
    c.lineTo(x, y);
    //Width of line drawn
    c.lineWidth = 10;
    //Color of line
    c.strokeStyle = "rgba(70, 255, 33, 0.8)";
    //Use above settings to draw line
    c.stroke();
    //Check if endpoints have been reached
    if (x1 <= x2 && y1 <= y2) {
        //Adds 10 to the previous endpoint if x and y
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        //This is needed for the 6,4,2 win condition
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
    //This is needed to do 6,4,2 win condition
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }
}
//Clears canvas after win line drawn
function clear() {
    //Starts clear loop
    const animationLoop = requestAnimationFrame(clear);
    //This line clears cnavas
    c.clearRect(0, 0, 608, 608);
    //Stops animation loop
    cancelAnimationFrame(animationLoop);
}
//Disables clicking canvas while win sound is playing
disableClick();
//Play win sound
audio("./media/win.mp3");
//Call main animatio loop
animateLineDrawing();
//waits 3 seconds then clears canvas and resets the game and alows clicking again
setTimeout(function () { clear(); resetGame(); }, 3000);
}

//Reset game finction
function resetGame() {
    //This loop iterates through each HTML square element 
    for (let i = 0; i <9; i++) {
        //uses select square element
        let square = document.getElementById(String(i));
        //removes picture in seach tile 0-8
        square.style.backgroundImage = "";
    }
    //Resets selectedSquares array to empty
    selectedSquares = [];
}