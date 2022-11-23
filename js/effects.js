import {userForm} from './user-form.js';
const uploadPreview = document.querySelector('.img-upload__preview');

const onChangeImageFilters = (evt) => {
  const filterName = evt.target.value;
  uploadPreview.className = 'img-upload__preview';
  uploadPreview.classList.add(`effects__preview--${filterName}`);
};

const setChangeImageFilters = () => userForm.addEventListener('change', onChangeImageFilters);

export {setChangeImageFilters};
