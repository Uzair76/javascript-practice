'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent ='🎉 Correct Number';

// console.log(document.querySelector('.number-box').textContent=15);
// console.log(document.querySelector('.score').textContent=15);


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check-btn').addEventListener('click', function () {
    const guess = Number(document.querySelector('.number-input').value); // Convert to number
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '😑 No Number!';
    } else if (score > 1) {
        if (guess < secretNumber) {
            document.querySelector('.message').textContent = '📉 Too Low!';
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = '📈 Too High!';
        } else {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('.number-box').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number-box').style.width = '30rem';

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💀 You Lose!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
    }
});

document.querySelector('.again-btn').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number-box').textContent = '?';
    document.querySelector('.number-box').style.width = '15rem';
    document.querySelector('.number-input').value = ''; // Clear input field
    document.querySelector('body').style.backgroundColor = '#222';
});
