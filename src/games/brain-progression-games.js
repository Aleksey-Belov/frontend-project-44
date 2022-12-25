import { getRandomNum, requestName, comparisonGameResults } from '../index.js';

const messageWithRules = 'What number is missing in the progression?';
const maxLength = 10;
const minLength = 5;
const maxStep = 20;
const minStep = 1;
const minArrayNumber = 0;

const getArrayNumbers = (arrayStep, arrayLength) => {
  const numbers = [];

  for (let i = arrayStep; numbers.length < arrayLength; i += arrayStep) {
    numbers.push(i);
  }
  return numbers;
};

const getDataForTask = () => {
  const arrayLength = getRandomNum(minLength, maxLength);
  const arrayStep = getRandomNum(minStep, maxStep);
  const numberFromArray = getRandomNum(minArrayNumber, arrayLength - 1);
  const arrayNumbers = getArrayNumbers(arrayStep, arrayLength);

  const hiddenNumber = arrayNumbers[numberFromArray];
  arrayNumbers[numberFromArray] = '..';
  const arrayFinishedProgression = arrayNumbers.join(' ');

  return [arrayFinishedProgression, String(hiddenNumber)];
};

const launchProjectBrainProgression = () => {
  requestName();
  comparisonGameResults(messageWithRules, getDataForTask);
};

export default launchProjectBrainProgression;
