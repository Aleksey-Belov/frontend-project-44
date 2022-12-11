import { getRandomNumber } from '../src/index.js';

const messageWithRules = 'What number is missing in the progression?';
const maxLength = 10;
const minLength = 5;
const maxStep = 20;
const minStep = 1;
const minArrayNumber = 0;

const getDataForTask = () => {
  const arrayLength = getRandomNumber(minLength, maxLength);
  const arrayStep = getRandomNumber(minStep, maxStep);
  const numberFromArray = getRandomNumber(minArrayNumber, arrayLength - 1);
  const numbers = [];

  for (let i = arrayStep; numbers.length < arrayLength; i += arrayStep) {
    numbers.push(i);
  }
  const hiddenNumber = numbers[numberFromArray];
  numbers[numberFromArray] = '..';
  const arrayFinishedProgression = numbers.join(' ');

  return [arrayFinishedProgression, hiddenNumber];
};

export { messageWithRules, getDataForTask };
