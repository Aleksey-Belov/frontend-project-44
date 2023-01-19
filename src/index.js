import readlineSync from 'readline-sync';

const getGameResults = (messageWithRules, getDataForTask) => {
  const numberOfRounds = 2;

  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
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

export default getGameResults;
