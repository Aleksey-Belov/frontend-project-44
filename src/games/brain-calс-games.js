import { getRandomNum, requestName, comparisonGameResults } from '../index.js';

const messageWithRules = 'What is the result of the expression?';
const arithmeticOperations = ['+', '-', '*'];
const maxNumber = 20;
const minNumber = 1;
const maxRandom = 2;
const minRandom = 0;

const getArithmeticOperation = (signForExpression, randomNumber1, randomNumber2) => {
  let correctAnswerTask = 0;
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
      console.log('Error, no such arithmetic operation was found');
  }
  return correctAnswerTask;
};

const getDataForTask = () => {
  let numericExpression = ' ';

  const signForExpression = arithmeticOperations[getRandomNum(minRandom, maxRandom)];
  const randomNumber1 = getRandomNum(minNumber, maxNumber);
  const randomNumber2 = getRandomNum(minNumber, maxNumber);

  numericExpression = `${randomNumber1} ${signForExpression} ${randomNumber2}`;
  const arithmeticOperationResult = getArithmeticOperation(
    signForExpression,
    randomNumber1,
    randomNumber2,
  );
  return [numericExpression, String(arithmeticOperationResult)];
};

const launchProjectBrainCalс = () => {
  requestName();
  comparisonGameResults(messageWithRules, getDataForTask);
};

export default launchProjectBrainCalс;
