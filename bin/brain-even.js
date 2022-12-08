#!/usr/bin/env node

import readlineSync from 'readline-sync';

let yourName = '';

const requestName = () => {
  yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  return yourName;
};

const getRandomIntInclusive = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

const parityCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = getRandomIntInclusive(1, 20);

    console.log(`Question: ${randomNumber}`);
    const playerResponse = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
      if (playerResponse === 'yes') {
        console.log('Correct!');
      } else {
        console.log(
          `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${yourName}!`,
        );
        return;
      }
    } else if (playerResponse === 'no') {
      console.log('Correct!');
    } else {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${yourName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${yourName}!`);
};

console.log('Welcome to the Brain Games!');
requestName();
parityCheck();

export default parityCheck;
