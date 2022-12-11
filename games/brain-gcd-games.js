import { getRandomNumber } from '../src/index.js';

const messageWithRules = 'Find the greatest common divisor of given numbers.';
let twoIntegers = ' ';
const maxNumber = 70;
const minNumber = 2;

const getDataForTask = () => {
  let randomNumber1 = getRandomNumber(minNumber, maxNumber);
  let randomNumber2 = getRandomNumber(minNumber, maxNumber);
  twoIntegers = `${randomNumber1} ${randomNumber2}`;

  let correctAnswerTaskGcd = randomNumber2;
  while (correctAnswerTaskGcd > 0) {
    if (randomNumber1 % randomNumber2 === 0) {
      break;
    } else {
      Math.floor(randomNumber1 / randomNumber2);
      correctAnswerTaskGcd = randomNumber1 % randomNumber2;
      randomNumber1 = randomNumber2;
      randomNumber2 = correctAnswerTaskGcd;
    }
  }
  return [twoIntegers, correctAnswerTaskGcd];
};

export { messageWithRules, getDataForTask };
