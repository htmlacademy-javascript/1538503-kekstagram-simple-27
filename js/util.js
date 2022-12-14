const getRandomIntInclusive = ((min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 || max <= min || typeof min !== 'number') {return NaN;}
  return Math.floor(Math.random() * (max - min + 1)) + min;
});

const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

const isAllowableLenght = (line) => line.length >= MIN_COMMENT_LENGTH && line.length <= MAX_COMMENT_LENGTH;

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

export {getRandomArrayElement, getRandomIntInclusive, isAllowableLenght, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH};
