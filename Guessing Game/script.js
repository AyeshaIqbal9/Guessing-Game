// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to elements
// When a user types something, the browser automatically updates the value property of that element.
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const restartButton = document.getElementById("restartButton");
const result = document.getElementById("result");

// Function to handle user guesses
checkButton.onclick = () => {
    //The input is automatically stored in the input element when the user types, and .value lets you get or set that input.
    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        result.textContent = "Enter a number between 1 and 100.";
        result.style.color = "red";
    } else if (guess === randomNumber) {
        result.textContent = "🎉 Correct! You guessed it!";
        result.style.color = "green";
        checkButton.disabled = true;
        restartButton.style.display = "block";
    } else {
        result.textContent = guess < randomNumber ? "🙊Too low! Try again." : "🙉Too high! Try again.";
        result.style.color = "orange";
    }
    //clears the input field, removing any value the user entered.
    guessInput.value = ""; // Clear input
    //puts the cursor back into the input field, so the user can type again without having to click on it.and also make the input field outline black
    guessInput.focus();   // Refocus input
};

// Function to restart the game
restartButton.onclick = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = "";
    checkButton.disabled = false;
    restartButton.style.display = "none";
    guessInput.focus();
    //The restartButton.onclick function resets the game state (generates a new random number, clears messages, etc.).
    //The checkButton.onclick function, which checks the user’s guesses, is always active as long as the button exists. You don’t need to call it again after restarting.
    //After clicking restart, the user can continue entering guesses in the input field, and checkButton.onclick will handle the next guesses.
};