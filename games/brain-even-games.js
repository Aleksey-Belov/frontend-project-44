import { getRandomIntInclusive1 } from '../src/index.js';

const messageWithRules = 'Answer "yes" if the number is even, otherwise answer "no".';

let resolt3 = ' ';

const functionMaterial = () => {
  const randomNumber = getRandomIntInclusive1(1, 20);

  if (randomNumber % 2 === 0) {
    resolt3 = 'yes';
  } else {
    resolt3 = 'no';
  }
  return [randomNumber, resolt3];
};

export { messageWithRules, functionMaterial };
