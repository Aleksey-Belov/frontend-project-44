import { getRandomNum, requestName, comparisonGameResults } from '../index.js';

const messageWithRules = 'Find the greatest common divisor of given numbers.';
const maxNumber = 70;
const minNumber = 2;

const getCommonDivisor = (randomNumber1, randomNumber2) => {
  let correctAnswerTaskGcd = randomNumber2;
  let randomNumber1Test = randomNumber1;
  let randomNumber2Test = randomNumber2;
  while (correctAnswerTaskGcd > 0) {
    if (randomNumber1Test % randomNumber2Test === 0) {
      break;
    } else {
      Math.floor(randomNumber1Test / randomNumber2Test);
      correctAnswerTaskGcd = randomNumber1Test % randomNumber2Test;
      randomNumber1Test = randomNumber2Test;
      randomNumber2Test = correctAnswerTaskGcd;
    }
  }
  return correctAnswerTaskGcd;
};

const getDataForTask = () => {
  let twoIntegers = ' ';
  const randomNumber1 = getRandomNum(minNumber, maxNumber);
  const randomNumber2 = getRandomNum(minNumber, maxNumber);

  twoIntegers = `${randomNumber1} ${randomNumber2}`;
  const greatestCommonDivisor = getCommonDivisor(randomNumber1, randomNumber2);
  return [twoIntegers, String(greatestCommonDivisor)];
};

const launchProjectBrainGcd = () => {
  requestName();
  comparisonGameResults(messageWithRules, getDataForTask);
};

export default launchProjectBrainGcd;
