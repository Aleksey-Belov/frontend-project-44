import readlineSync from 'readline-sync';

let yourName = '';

const requestName = () => {
  console.log('Welcome to the Brain Games!');
  yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  return yourName;
};

function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

const numberOfRounds = 2;

const comparisonGameResults = (messageWithRules, getDataForTask) => {
  console.log(messageWithRules);

  for (let i = 0; i <= numberOfRounds; i += 1) {
    const values = getDataForTask();
    const jobCondition = values[0];
    const correctAnswerTask = values[1];

    console.log(`Question: ${jobCondition}`);

    const playerResponse = readlineSync.question('Your answer: ');
    if (
      typeof correctAnswerTask === 'number'
        ? correctAnswerTask === Number(playerResponse)
        : correctAnswerTask === playerResponse
    ) {
      console.log('Correct!');
    } else {
      console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswerTask}'.\nLet's try again, ${yourName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${yourName}!`);
};

export { requestName, comparisonGameResults, getRandomNumber };
