const getRandomNum = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const getRandomInt = (max) => Math.floor(Math.random() * max);

export { getRandomNum, getRandomInt };
