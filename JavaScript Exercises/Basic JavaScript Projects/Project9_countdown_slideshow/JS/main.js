function countdown() { //name of overall function 
    var seconds = document.getElementById("seconds").value; //print location for end of function loop

    function tick() { //internal looping functi on
        seconds = seconds - 1; //variable
        timer.innerHTML = seconds; //set when the changing variable "seconds" is located
        var time = setTimeout (tick, 1000); //how long each cycle of seconds lasts, 1000ms (1s)
        if (seconds == -1) { //stop alert triggered by timout
            alert("Time is up!");
            clearTimeout(time);
            timer.innerHTML == "";
        }
    }
    tick();
}

//set base index for display
let slideIndex = 1;
showSlides(slideIndex);

//increase or decrease index for next/previous
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//image selection based on index number
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
    for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace("active", "");}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}