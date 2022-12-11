import { getRandomNumber } from '../src/index.js';

const messageWithRules = 'Answer "yes" if the number is even, otherwise answer "no".';
let correctAnswerTaskParity = ' ';
const maxNumber = 20;
const minNumber = 1;

const getDataForTask = () => {
  const randomNumber = getRandomNumber(minNumber, maxNumber);

  if (randomNumber % 2 === 0) {
    correctAnswerTaskParity = 'yes';
  } else {
    correctAnswerTaskParity = 'no';
  }
  return [randomNumber, correctAnswerTaskParity];
};

export { messageWithRules, getDataForTask };
