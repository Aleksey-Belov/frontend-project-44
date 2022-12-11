import { getRandomNumber } from '../src/index.js';

const messageWithRules = 'What is the result of the expression?';
let correctAnswerTask = 0;
let numericExpression = ' ';
const arithmeticOperations = ['+', '-', '*'];
const maxNumber = 20;
const minNumber = 1;
const maxRandom = 2;
const minRandom = 0;

const getDataForTask = () => {
  const signForExpression = arithmeticOperations[getRandomNumber(minRandom, maxRandom)];
  const randomNumber1 = getRandomNumber(minNumber, maxNumber);
  const randomNumber2 = getRandomNumber(minNumber, maxNumber);

  numericExpression = `${randomNumber1} ${signForExpression} ${randomNumber2}`;

  switch (signForExpression) {
    case '+':
      correctAnswerTask = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswerTask = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswerTask = randomNumber1 * randomNumber2;
      break;
    default:
      correctAnswerTask = null;
  }
  return [numericExpression, correctAnswerTask];
};

export { messageWithRules, getDataForTask };
