function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 || max <= min || typeof min !== 'number') {return NaN;}
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1,10);

const lineLenght = (line, maxLenght) => line.length < maxLenght;

lineLenght('', 130 );

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

getRandomArrayElement([]);

export {getRandomArrayElement};
export {getRandomIntInclusive};
