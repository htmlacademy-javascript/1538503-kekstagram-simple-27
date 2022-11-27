const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const gallery = document.querySelector('.pictures');

const randomPhotoFragment = document.createDocumentFragment();

const displayRandomPhotos = (generatedPhotos) => {
  generatedPhotos.forEach((photo) => {
    const randomPhoto = pictureTemplate.cloneNode(true);
    randomPhoto.querySelector('.picture__img').src = photo.url;
    randomPhoto.querySelector('.picture__likes').textContent = photo.likes;
    randomPhoto.querySelector('.picture__comments').textContent = photo.comments;
    randomPhotoFragment.append(randomPhoto);
  });

  gallery.append(randomPhotoFragment);
};

export {displayRandomPhotos};

