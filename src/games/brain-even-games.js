import getGameResults from '../index.js';
import { getRandomNum } from '../utils.js';

const messageWithRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumber = 20;
const minNumber = 1;

const isParityNumber = (randomNumber) => randomNumber % 2 === 0;

const getDataForTask = () => {
  const randomNumber = getRandomNum(minNumber, maxNumber);
  const correctAnswerTaskParity = isParityNumber(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswerTaskParity];
};

const launchProjectBrainEven = () => {
  getGameResults(messageWithRules, getDataForTask);
};

export default launchProjectBrainEven;
