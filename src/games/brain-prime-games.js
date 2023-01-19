import getGameResults from '../index.js';
import { getRandomNum } from '../utils.js';

const messageWithRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxNumber = 50;
const minNumber = 1;

const getPrimeNumber = (randomNumber) => {
  if (randomNumber < 2) {
    return false;
  }

  for (let i = 2; i <= randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const getDataForTask = () => {
  const randomNumber = getRandomNum(minNumber, maxNumber);
  const primeNumber = getPrimeNumber(randomNumber) ? 'yes' : 'no';
  return [randomNumber, primeNumber];
};

const launchProjectBrainPrime = () => {
  getGameResults(messageWithRules, getDataForTask);
};

export default launchProjectBrainPrime;
