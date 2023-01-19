import getGameResults from '../index.js';
import { getRandomNum } from '../utils.js';

const messageWithRules = 'Find the greatest common divisor of given numbers.';
const maxNumber = 70;
const minNumber = 2;

const getCommonDivisorfactorial = (randomNumber1, randomNumber2) => {
  if (randomNumber2 === 0) {
    return randomNumber1;
  }

  return getCommonDivisorfactorial(randomNumber2, randomNumber1 % randomNumber2);
};

const getDataForTask = () => {
  const randomNumber1 = getRandomNum(minNumber, maxNumber);
  const randomNumber2 = getRandomNum(minNumber, maxNumber);

  const twoIntegers = `${randomNumber1} ${randomNumber2}`;
  const greatestCommonDivisor = getCommonDivisorfactorial(randomNumber1, randomNumber2);
  return [twoIntegers, String(greatestCommonDivisor)];
};

const launchProjectBrainGcd = () => {
  getGameResults(messageWithRules, getDataForTask);
};

export default launchProjectBrainGcd;
