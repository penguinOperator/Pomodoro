let timer = document.getElementById("timer")
let startButton = document.getElementById("startButton");

let resetButton = document.getElementById("resetButton");

let timeStarted = false

let countdown;

let orginTimer = timer.innerText = 5;

startButton.addEventListener("click", function() {
    timer.innerText = orginTimer;
    timer.innerText -= 1;
    timeStarted = true;
    countdown = setInterval(function() {
        if (timeStarted && timer.innerText > 0) {
            timer.innerText -= 1;
        } else {
            clearInterval(countdown);
            timer.innerText = "Time's up!";
            timeStarted = false;
            startButton.style.color = "#7cff75";
            startButton.style.boxShadow = "2px 2px 4px 0 rgba(6, 255, 0, 0.47)";
        }
    }, 1000);

    startButton.style.color = "gray";
    startButton.style.boxShadow = "2px 2px 4px 0 rgba(78, 78, 78, 0.47)";

});

resetButton.addEventListener("click", function() {
    clearInterval(countdown);
    timer.innerText = orginTimer;
    timeStarted = false;
    startButton.style.color = "#7cff75";
    startButton.style.boxShadow = "2px 2px 4px 0 rgba(6, 255, 0, 0.47)";
});