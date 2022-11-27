import {getRandomArrayElement} from './util.js';
import {getRandomIntInclusive} from './util.js';

const ELEMENTS_COUNT = 25;

const IDs = Array.from({length: ELEMENTS_COUNT}, (_, index) => index + 1);

const ImageURLs = Array.from({length: ELEMENTS_COUNT}, (_, index) => `photos/${index + 1}.jpg`);

const DESCRIPTIONS = ['Отличное фото', 'Мы с друзьями', 'Первые шаги Степы', 'Мамин юбилей', 'Вперед Спартак!', 'Премьера фильма', 'Человек на Луне', 'Пикник в августе', 'Первая поездка на новом мотоцикле', 'Любовь и голуби'];

const getPictureDescribtion = () => ({
  id: getRandomArrayElement(IDs),
  url: getRandomArrayElement(ImageURLs),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(15, 200),
  comments: getRandomIntInclusive(0, 200)
});

const generateRandomPhotos = () => Array.from({length: ELEMENTS_COUNT}, getPictureDescribtion);

export {getPictureDescribtion, generateRandomPhotos};
