var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var userAnswer = false;

function getRandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}

do {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount++;

    if (parseInt(guess) === randomNumber) {
        userAnswer = true;
    }
} while (!userAnswer)


document.write('<h1>It took you ' + guessCount + ' times to get random number ' + randomNumber);