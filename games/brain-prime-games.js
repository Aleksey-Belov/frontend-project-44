import { getRandomIntInclusive1 } from '../src/index.js';

const messageWithRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const functionMaterial = () => {
  const result3 = getRandomIntInclusive1(1, 20);
  let result = ' ';

  if (result3 < 2) {
    result = 'no';
    return [result3, result];
  }

  for (let i = 2; i <= result3 / 2; i += 1) {
    if (result3 % i === 0) {
      result = 'no';
      return [result3, result];
    }
  }
  result = 'yes';
  return [result3, result];
};

export { messageWithRules, functionMaterial };
