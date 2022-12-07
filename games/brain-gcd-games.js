import { getRandomIntInclusive1 } from '../src/index.js';

const messageWithRules = 'Find the greatest common divisor of given numbers.';

let resolt3 = ' ';

const functionMaterial = () => {
  let randomNumber1 = getRandomIntInclusive1(2, 70);
  let randomNumber2 = getRandomIntInclusive1(2, 70);
  resolt3 = `${randomNumber1} ${randomNumber2}`;

  let result = randomNumber2;
  while (result > 0) {
    if (randomNumber1 % randomNumber2 === 0) {
      break;
    } else {
      Math.floor(randomNumber1 / randomNumber2);
      result = randomNumber1 % randomNumber2;
      randomNumber1 = randomNumber2;
      randomNumber2 = result;
    }
  }
  return [resolt3, result];
};

export { messageWithRules, functionMaterial };
