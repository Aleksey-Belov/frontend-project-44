import { getRandomIntInclusive1 } from '../src/index.js';

const messageWithRules = 'What is the result of the expression?';

let result = 0;
let resolt3 = ' ';

const functionMaterial = () => {
  const arrayOperation = ['+', '-', '*'];
  const signForExpression = arrayOperation[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

  const randomNumber1 = getRandomIntInclusive1(1, 20);
  const randomNumber2 = getRandomIntInclusive1(1, 20);
  resolt3 = `${randomNumber1} ${signForExpression} ${randomNumber2}`;

  switch (signForExpression) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      result = null;
  }
  return [resolt3, result];
};

export { messageWithRules, functionMaterial };
