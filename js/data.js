import {getRandomArrayElement} from './util.js';
import {getRandomIntInclusive} from './util.js';

const IDs = Array.from({length: 25}, (_, index) => index + 1);

const ImageURLs = Array.from({length: 25}, (_, index) => `photos/${index + 1}.jpg`);

const DESCRIPTIONS = ['Отличное фото', 'Мы с друзьями', 'Первые шаги Степы', 'Мамин юбилей', 'Вперед Спартак', 'Премьера фильма', 'Человек на Луне', 'Пикник в августе', 'Первая поездка на новом мотоцикле', 'Любовь и голуби'];

const getPicDescribtion = () => ({
  id: getRandomArrayElement(IDs),
  url: getRandomArrayElement(ImageURLs),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(15, 200),
  comments: getRandomIntInclusive(0, 200)
});

const genPicArray = () => Array.from({length: 25}, getPicDescribtion);

export {getPicDescribtion, genPicArray};


