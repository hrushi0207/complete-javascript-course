"use strict";
// console.log(document.querySelector('.message'));
// // console.log(document.querySelector('.message').textContent);       --------> prints the text of html page
// console.log(
//   (document.querySelector('.message').textContent = 'Correct guess..!!')
// );
// document.querySelector('.number').textContent = '15';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = '12';
// console.log((document.querySelector('.guess').value = '12'));
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".score").textContent = score;
let highscore = 0;
const displayMessage = function(msg) {
    document.querySelector(".message").textContent = msg;
};
document.querySelector(".check").addEventListener("click", function() {
    //  document.querySelector('.message').textContent = 'Guessing number';
    displayMessage("Guessing number");
    const guessing_number = Number(document.querySelector(".guess").value);
    console.log(typeof guessing_number);
    if (!guessing_number) // document.querySelector('.message').textContent = 'No number entered';
    displayMessage("No number entered");
    else if (guessing_number === secretNumber) {
        // document.querySelector('.message').textContent ='It is the correct guess...Congratulations'
        displayMessage("It is the correct guess... Congratulations");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "80rem";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guessing_number !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guessing_number > secretNumber? 'it is too high...please try again' : 'it is too low..please try again';
            displayMessage(guessing_number > secretNumber ? "it is too high...please try again" : "it is too low..please try again");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost the game...better luck next time ';
            displayMessage("You lost the game....better luck next time");
            document.querySelector(".score").textContent = 0;
        }
    }
// else if(guessing_number > secretNumber){
//     if(score>1){
//     document.querySelector('.message').textContent = 'it is too high...please try again'
//     score--;
//     document.querySelector('.score').textContent = score
//     }
//     else {
//         document.querySelector('.message').textContent = 'You lost the game...better luck next time ';
//         document.querySelector('.score').textContent = 0;
//     }
// }
// else if(guessing_number < secretNumber){
//     if(score>1){
//         document.querySelector('.message').textContent = 'it is low ...please try again'
//         score--;
//         document.querySelector('.score').textContent = score
//         }
//         else {
//             document.querySelector('.message').textContent = 'You lost the game...better luck next time ';
//             document.querySelector('.score').textContent = 0;
//         }
// }    
});
// setting this to initial stage of the game.
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Guessing the number';
    displayMessage("Guessing the number..!!!");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});

//# sourceMappingURL=index.672d4772.js.map
