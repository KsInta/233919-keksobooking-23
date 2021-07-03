import {showAlert, isEscEvent, isEnterEvent} from './util.js';

showAlert(document.querySelector('#error').content.querySelector('.error'));
showAlert(document.querySelector('#success').content.querySelector('.success'));

const adSuccess = document.querySelector('.success');
const adError = document.querySelector('.error');
const adErrorClose = adError.querySelector('.error__button');

const onSuccessPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessModal();
  }
};

const onErrorPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorModal();
  }
};

const openSuccessModal = () => {
  adSuccess.classList.remove('hidden');
  document.addEventListener('keydown', onSuccessPopupEscKeydown);
  document.addEventListener('click', onSuccessPopupEscKeydown);
};

const closeSuccessModal = () => {
  adSuccess.classList.add('hidden');
  document.removeEventListener('keydown', onSuccessPopupEscKeydown);
  document.removeEventListener('click', onSuccessPopupEscKeydown);
};

const openErrorModal = () => {
  adError.classList.remove('hidden');
  document.addEventListener('keydown', onErrorPopupEscKeydown);
};

const closeErrorModal = () => {
  adError.classList.remove('hidden');
  document.removeEventListener('keydown', onErrorPopupEscKeydown);
};

adErrorClose.addEventListener('click', () => {
  closeErrorModal();
});

adErrorClose.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    closeErrorModal();
  }
});

export {openSuccessModal, openErrorModal, adSuccess, adError};
