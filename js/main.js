// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 || max <= min || typeof min !== 'number') {return NaN;}
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1,10);

const lineLenght = (line, maxLenght) => {
  if (line.length < maxLenght) {
    return true;
  }

  return false;
};

lineLenght('', 130 );

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const ID = Array.from({length: 25}, (_, index) => index + 1);

const URL = Array.from({length: 25}, (_, index) => `photos/${index + 1}.jpg`);

const DESCRIPTION = ['Отличное фото', 'Мы с друзьями', 'Первые шаги Степы', 'Мамин юбилей', 'Вперед Спартак', 'Премьера фильма', 'Человек на Луне', 'Пикник в августе', 'Первая поездка на новом мотоцикле', 'Любовь и голуби'];

const getPicDescribtion = function () {
  return {
    IDs: getRandomArrayElement(ID),
    URLs: getRandomArrayElement(URL),
    DESCRIPTION: getRandomArrayElement(DESCRIPTION),
    LIKES: getRandomIntInclusive(15, 200),
    COMMENTS: getRandomIntInclusive(0, 200)
  };
};

const newArray = () => Array.from({length: 25}, getPicDescribtion);

newArray();

