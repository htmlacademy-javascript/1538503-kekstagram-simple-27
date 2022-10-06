// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 || max <= min || typeof min !== 'number') {return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1,10);

const lineLenght = function (lineName, maxLenght) {
  if (maxLenght >= 20 && maxLenght < 141) {
    return true;
  }

  return false;
};

lineLenght('Имя', 130 );

