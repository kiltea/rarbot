function getRandomHour() {
  return Math.floor(Math.random() * 24);
}

function getRandomMinute() {
  return Math.floor(Math.random() * 60);
}

const randomHour = getRandomHour();
const randomMinute = getRandomMinute();

console.log(`${randomMinute} ${randomHour} * * 1-5`);
