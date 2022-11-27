import {displayRandomPhotos} from './random-thumbnail.js';
import {uploadPhoto} from './user-form.js';
import {formValidate} from './user-form.js';
import {setUserFormSubmit} from './user-form.js';
import {closeModal} from './user-form.js';
import {addSuccessMessage} from './user-form.js';
import {addErrorMessage} from './user-form.js';
import {getData} from './api.js';

uploadPhoto();

formValidate();

setUserFormSubmit(closeModal, addSuccessMessage, addErrorMessage);

getData(displayRandomPhotos);
