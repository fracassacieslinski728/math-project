
const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const getRandomColor = () => {
  const colors = ['red', 'green', 'blue'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const getRandomBoolean = () => {
  return Math.random() < 0.5;
}

const getRandomName = () => {
  const names = ['Alice', 'Bob', 'Charlie'];
  return names[Math.floor(Math.random() * names.length)];
}

const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

const getRandomDate = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 30);
  return new Date(currentYear, randomMonth, randomDay);
}