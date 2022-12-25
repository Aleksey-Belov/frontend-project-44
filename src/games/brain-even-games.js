import { getRandomNum, requestName, comparisonGameResults } from '../index.js';

const messageWithRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumber = 20;
const minNumber = 1;

const getParityNumber = (randomNumber) => {
  let correctAnswerTaskParity = ' ';
  if (randomNumber % 2 === 0) {
    correctAnswerTaskParity = 'yes';
  } else {
    correctAnswerTaskParity = 'no';
  }
  return correctAnswerTaskParity;
};

const getDataForTask = () => {
  const randomNumber = getRandomNum(minNumber, maxNumber);
  const testResult = getParityNumber(randomNumber);
  return [randomNumber, testResult];
};

const launchProjectBrainEven = () => {
  requestName();
  comparisonGameResults(messageWithRules, getDataForTask);
};

export default launchProjectBrainEven;
