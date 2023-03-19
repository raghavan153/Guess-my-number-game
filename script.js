'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'Correct Number')
);

console.log((document.querySelector('.number').textContent = '??'));
console.log((document.querySelector('.guess').value = 23));
console.log(document.querySelector('.guess').value);
*/

let score = 20;
let variable = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const random = Number(document.querySelector('.guess').value);
  console.log(random);

  //when there is no input
  if (!random) {
    console.log(
      (document.querySelector('.message').textContent = 'NO NUMBER ⛔⛔')
    );
    //when it is equal and correct
  } else if (random === variable) {
    console.log(
      (document.querySelector('.message').textContent = 'CORRECT NO 🙌🔥'),
      console.log((document.querySelector('.number').textContent = variable))
    );
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when the random is greater
  } else if (random > variable) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent = 'TOO HIGH ↗↗')
      );
      const number1 = score--;
      document.querySelector('.score').textContent = number1;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
    //when the random is smaller.
  } else if (random < variable) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent = 'TOO LOW ↘↘')
      );
      const number = score--;
      document.querySelector('.score').textContent = number;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  variable = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
