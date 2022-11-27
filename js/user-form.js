import {isAllowableLenght} from './util.js';
import {addScaleHandler,removeScaleHandler} from './photo-editing.js';
import {setChangeImageFilters, cancelChaneImageFilters} from './effects.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const successMessageFragment = document.createDocumentFragment();

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const body = document.querySelector('body');

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
    removeScaleHandler();
    setChangeImageFilters();
  }
};

const closeModal = () => {
  popup.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  fileSelect.value = '';

  document.removeEventListener('keydown', onModalEscKeydown);
  modalCloseButton.removeEventListener('click', closeModal);
  removeScaleHandler();
  cancelChaneImageFilters();
  userForm.reset();
};

const openModal = () => {
  popup.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  userForm.querySelector('.text__description').textContent = '';
  document.addEventListener('keydown', onModalEscKeydown);
  modalCloseButton.addEventListener('click', closeModal);
  addScaleHandler();
  setChangeImageFilters();
};

const uploadPhoto = () =>
  fileSelect.addEventListener('change',openModal);

const formValidate = () => {
  pristine.addValidator(
    userForm.querySelector('.text__description'),
    isAllowableLenght,
    'От 20 до 140 символов');
};

const setUserFormSubmit = (onSuccess, showSuccessMessage, showErorMessage) => {
  userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
            showSuccessMessage();
          } else {
            showErorMessage();
          }
        })
        .catch(() => {
          showErorMessage();
        });
    }
  });
};

const addSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  successMessageFragment.append(successMessage);
  body.append(successMessageFragment);
  const successButton = successMessage.querySelector('.success__button');
  successButton.addEventListener('click', () => {
    successMessage.remove();
  });

  const onSuccessMessageEscKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      successMessage.remove();
    }
  };

  document.addEventListener('keydown', onSuccessMessageEscKeyDown);

  document.onclick = function (evt) {
    if (evt.target.className !== successMessage) {
      successMessage.remove();
    }
  };
};

const addErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  body.append(errorMessage);
  const errorButton = errorMessage.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    errorMessage.remove();
  });

  const onErrorMessageEscKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      errorMessage.remove();
    }
  };

  document.addEventListener('keydown', onErrorMessageEscKeyDown);

  document.onclick = function (evt) {
    if (evt.target.className !== errorMessage) {
      errorMessage.remove();
    }
  };
};

export {uploadPhoto, formValidate, setUserFormSubmit, closeModal, addSuccessMessage, addErrorMessage};
