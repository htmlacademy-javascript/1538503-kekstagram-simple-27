const uploadPreview = document.querySelector('.img-upload__preview');

const imgFiltersFieldset = document.querySelector('.img-upload__effects');

const onChangeImageFilters = (evt) => {
  const filterName = evt.target.value;
  uploadPreview.className = 'img-upload__preview';
  uploadPreview.classList.add(`effects__preview--${filterName}`);
};

const setChangeImageFilters = () => imgFiltersFieldset.addEventListener('change', onChangeImageFilters);

const cancelChaneImageFilters = () => {
  uploadPreview.className = 'img-upload__preview';
  imgFiltersFieldset.removeEventListener('change', onChangeImageFilters);
};

export {onChangeImageFilters, cancelChaneImageFilters, setChangeImageFilters};
