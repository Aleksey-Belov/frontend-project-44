import { getRandomNum, requestName, comparisonGameResults } from '../index.js';

const messageWithRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxNumber = 50;
const minNumber = 1;

const getPrimeNumber = (randomNumber) => {
  let primeNumber = ' ';
  if (randomNumber < 2) {
    primeNumber = 'no';
    return primeNumber;
  }

  for (let i = 2; i <= randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      primeNumber = 'no';
      return primeNumber;
    }
  }
  primeNumber = 'yes';
  return primeNumber;
};

const getDataForTask = () => {
  const randomNumber = getRandomNum(minNumber, maxNumber);
  const primeNumberResult = getPrimeNumber(randomNumber);
  return [randomNumber, primeNumberResult];
};

const launchProjectBrainPrime = () => {
  requestName();
  comparisonGameResults(messageWithRules, getDataForTask);
};

export default launchProjectBrainPrime;
