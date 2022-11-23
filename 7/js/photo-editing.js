const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const SCALE_DEFAULT_VALUE = 100;

const imgPreviewContainer = document.querySelector('.img-upload__preview-container');

const scaleDownButton = imgPreviewContainer.querySelector('.scale__control--smaller');

const scaleUpButton = imgPreviewContainer.querySelector('.scale__control--bigger');

const scaleValue = imgPreviewContainer.querySelector('.scale__control--value');

const imagePreview = imgPreviewContainer.querySelector('.img-upload__preview');

const scaleDown = () => {
  let value = parseInt(scaleValue.value, 10);
  if (value > MIN_SCALE_VALUE) {
    value -= SCALE_STEP;
    scaleValue.value = `${value}%`;
    imagePreview.style = `transform: scale(${value / 100})`;
  }
};

const scaleUp = () => {
  let value = parseInt(scaleValue.value, 10);
  if (value < MAX_SCALE_VALUE) {
    value += SCALE_STEP;
    scaleValue.value = `${value}%`;
    imagePreview.style = `transform: scale(${value / 100})`;
  }
};

const addScaleHandler = () => {
  scaleValue.value = `${SCALE_DEFAULT_VALUE}%`;
  scaleDownButton.addEventListener('click', scaleDown);
  scaleUpButton.addEventListener('click', scaleUp);
};

const removeScaleHandler = () => {
  scaleDownButton.removeEventListener('click', scaleDown);
  scaleUpButton.removeEventListener('click', scaleUp);
  imagePreview.style = 'transform: scale(1)';
};

export {addScaleHandler, removeScaleHandler};
