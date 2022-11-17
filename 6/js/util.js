const getRandomIntInclusive = ((min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 || max <= min || typeof min !== 'number') {return NaN;}
  return Math.floor(Math.random() * (max - min + 1)) + min;
});

const minCommentLength = 20;
const maxCommentLenght = 140;

const isAllowableLenght = (line) => line.length >= minCommentLength && line.length <= maxCommentLenght;

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

export {getRandomArrayElement, getRandomIntInclusive, isAllowableLenght, minCommentLength, maxCommentLenght};
