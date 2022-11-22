import {isAllowableLenght} from './util.js';

const fileSelect = document.querySelector('.img-upload__input');

const popup = document.querySelector('.img-upload__overlay');

const userForm = document.querySelector('.img-upload__form');

const modalCloseButton = document.querySelector('.img-upload__cancel');

const pristine = new Pristine(userForm,{
  classTo: 'img-upload__text',
  errorClass: 'textdescription--invalid',
  successClass: 'textdescription--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'textdescription__error',
});

const onModalEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    popup.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    fileSelect.value = '';
  }
};

const closeModal = () => {
  popup.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  fileSelect.value = '';

  document.removeEventListener('keydown', onModalEscKeydown);
  modalCloseButton.removeEventListener('click', closeModal);
};

const openModal = () => {
  popup.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  userForm.querySelector('.text__description').innerHTML = '';
  document.addEventListener('keydown', onModalEscKeydown);
  modalCloseButton.addEventListener('click', closeModal);
};

const uploadPhoto = () =>
  fileSelect.addEventListener('change',openModal);

const formValidate = () => {
  pristine.addValidator(
    userForm.querySelector('.text__description'),
    isAllowableLenght,
    'От 20 до 140 символов');
};

userForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export {uploadPhoto, formValidate};


