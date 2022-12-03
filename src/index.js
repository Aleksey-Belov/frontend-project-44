import readlineSync from 'readline-sync';

let yourName = '';

const requestName = () => {
  console.log('Welcome to the Brain Games!');
  yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  return yourName;
};

function getRandomIntInclusive1(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const conditionCheck = (messageWithRules, functionMaterial) => {
  console.log(messageWithRules);

  for (let i = 0; i <= 2; i += 1) {
    const values = functionMaterial();
    const resolt3 = values[0];
    const result = values[1];

    console.log(`Question: ${resolt3}`);

    const playerResponse = readlineSync.question('Your answer: ');
    if (
      typeof result === 'number'
        ? result === Number(playerResponse)
        : result === playerResponse
    ) {
      console.log('Correct!');
    } else {
      console.log(
        `'${playerResponse}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${yourName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${yourName}!`);
};

export { requestName, conditionCheck, getRandomIntInclusive1 };
