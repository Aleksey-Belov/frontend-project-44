import readlineSync from 'readline-sync';

const requestName = () => {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
};

export default requestName;
