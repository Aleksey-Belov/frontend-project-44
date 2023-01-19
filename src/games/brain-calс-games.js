import getGameResults from '../index.js';
import { getRandomNum, getRandomInt } from '../utils.js';

const messageWithRules = 'What is the result of the expression?';
const arithmeticOperations = ['+', '-', '*'];
const maxNumber = 20;
const minNumber = 1;

const getArithmeticOperation = (signForExpression, randomNumber1, randomNumber2) => {
  switch (signForExpression) {
    case '+':
      return randomNumber1 + randomNumber2;
    case '-':
      return randomNumber1 - randomNumber2;
    case '*':
      return randomNumber1 * randomNumber2;
    default:
      throw new Error(`Unknown arithmetic operator "${signForExpression}"!`);
  }
};

const getDataForTask = () => {
  const signForExpression = arithmeticOperations[getRandomInt(arithmeticOperations.length)];
  const randomNumber1 = getRandomNum(minNumber, maxNumber);
  const randomNumber2 = getRandomNum(minNumber, maxNumber);
  const numericExpression = `${randomNumber1} ${signForExpression} ${randomNumber2}`;
  const arithmeticResult = getArithmeticOperation(signForExpression, randomNumber1, randomNumber2);
  return [numericExpression, String(arithmeticResult)];
};

const launchProjectBrainCalс = () => {
  getGameResults(messageWithRules, getDataForTask);
};

export default launchProjectBrainCalс;
