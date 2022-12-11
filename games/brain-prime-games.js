import { getRandomNumber } from '../src/index.js';

const messageWithRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxNumber = 50;
const minNumber = 1;

const getDataForTask = () => {
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  let primeNumberResult = ' ';

  if (randomNumber < 2) {
    primeNumberResult = 'no';
    return [randomNumber, primeNumberResult];
  }

  for (let i = 2; i <= randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      primeNumberResult = 'no';
      return [randomNumber, primeNumberResult];
    }
  }
  primeNumberResult = 'yes';
  return [randomNumber, primeNumberResult];
};

export { messageWithRules, getDataForTask };
