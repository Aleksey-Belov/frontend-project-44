import { getRandomIntInclusive1 } from '../src/index.js';

const messageWithRules = 'What number is missing in the progression?';

const functionMaterial = () => {
  const arrayLength = getRandomIntInclusive1(5, 10);
  const arrayStep = getRandomIntInclusive1(1, 20);
  const numberFromArray = getRandomIntInclusive1(0, arrayLength - 1);
  const arrayTask = [];

  for (let i = arrayStep; arrayTask.length < arrayLength; i += arrayStep) {
    arrayTask.push(i);
  }
  const result = arrayTask[numberFromArray];
  arrayTask[numberFromArray] = '..';

  const result3 = arrayTask.join(' ');

  return [result3, result];
};

export { messageWithRules, functionMaterial };
