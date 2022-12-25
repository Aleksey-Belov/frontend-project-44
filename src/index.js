import readlineSync from 'readline-sync';

let yourName = '';

const requestName = () => {
  console.log('Welcome to the Brain Games!');
  yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  return yourName;
};

const getRandomNum = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const numberOfRounds = 2;

const comparisonGameResults = (messageWithRules, getDataForTask) => {
  console.log(messageWithRules);

  for (let i = 0; i <= numberOfRounds; i += 1) {
    const [jobCondition, correctAnswerTask] = getDataForTask();

    console.log(`Question: ${jobCondition}`);

    const playerResponse = readlineSync.question('Your answer: ');
    if (correctAnswerTask === playerResponse) {
      console.log('Correct!');
    } else {
      console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswerTask}'.\nLet's try again, ${yourName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${yourName}!`);
};

export { requestName, comparisonGameResults, getRandomNum };
