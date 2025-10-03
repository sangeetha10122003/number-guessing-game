let randomNumber;
let attempts = 0;
let highscore = 0;
let timerInterval;
let seconds = 0;

function newGame() {
    randomNumber = Math.floor(Math.random() * 101);
    attempts = 0;
    seconds = 0;
    document.getElementById("attempts").innerText = attempts;
    document.getElementById("message").innerText = "";
    document.getElementById("guessInput").value = "";
    clearInterval(timerInterval);
    startTimer();
    console.log("Random Number:", randomNumber); // for testing
}

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    attempts++;
    document.getElementById("attempts").innerText = attempts;

    if (guess === randomNumber) {
        document.getElementById("message").innerText = `🎉 Correct! Number was ${randomNumber}`;
        if (highscore === 0 || attempts < highscore) {
            highscore = attempts;
            document.getElementById("highscore").innerText = highscore;
        }
        clearInterval(timerInterval);
    } else if (guess > randomNumber) {
        document.getElementById("message").innerText = `${guess} is High, Try Again!`;
    } else {
        document.getElementById("message").innerText = `${guess} is Low, Try Again!`;
    }
}

function giveUp() {
    document.getElementById("message").innerText = `You gave up! Number was ${randomNumber}`;
    clearInterval(timerInterval);
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        let min = String(Math.floor(seconds / 60)).padStart(2, "0");
        let sec = String(seconds % 60).padStart(2, "0");
        document.getElementById("timer").innerText = `${min}:${sec}`;
    }, 1000);
}

// Start new game on load
window.onload = newGame;
