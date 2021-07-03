import {showAlert, isEscEvent, isEnterEvent} from './util.js';
import {mapCanvas} from './popup.js';

showAlert(document.querySelector('#error').content.querySelector('.error'));
showAlert(document.querySelector('#success').content.querySelector('.success'));

const showLoadFailMessage = (message) => {
  const errorMessageBlock = document.createElement('div');
  errorMessageBlock.style.cssText = `
    position: relative;
    margin: 10px auto;
    display: flex;
    width: 70%;
    height: 10%;
    align-items: center;
    justify-content: center;
    background-color: red;
    color: white;
    border-radius: 20px;
    border: 1px solid #cb2020;
    z-index: 999;
    text-align: center;
    font-size: 1.5em;
    line-height: 1em;
    font-weight: bold;
  `;
  errorMessageBlock.textContent = message;
  mapCanvas.appendChild(errorMessageBlock);
};

const adSuccess = document.querySelector('.success');
const adError = document.querySelector('.error');
const adErrorClose = adError.querySelector('.error__button');

const onSuccessPopupEscKeydown = (evt) => {
  if (isEscEvent(evt) || evt.currentTarget === document) {
    evt.preventDefault();
    adSuccess.classList.add('hidden');
    document.removeEventListener('keydown', onSuccessPopupEscKeydown);
    document.removeEventListener('click', onSuccessPopupEscKeydown);
  }
};

const onErrorPopupEscKeydown = (evt) => {
  if (isEscEvent(evt) || evt.currentTarget === document) {
    evt.preventDefault();
    adError.classList.add('hidden');
    document.removeEventListener('keydown', onErrorPopupEscKeydown);
    document.removeEventListener('click', onErrorPopupEscKeydown);
  }
};

const openSuccessModal = () => {
  adSuccess.classList.remove('hidden');
  document.addEventListener('keydown', onSuccessPopupEscKeydown);
  document.addEventListener('click', onSuccessPopupEscKeydown);
};

const openErrorModal = () => {
  adError.classList.remove('hidden');
  document.addEventListener('keydown', onErrorPopupEscKeydown);
  document.addEventListener('click', onErrorPopupEscKeydown);
};

const closeErrorModal = () => {
  adError.classList.add('hidden');
  document.removeEventListener('keydown', onErrorPopupEscKeydown);
  document.removeEventListener('click', onErrorPopupEscKeydown);
};

adErrorClose.addEventListener('click', () => {
  closeErrorModal();
});

adErrorClose.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    closeErrorModal();
  }
});

export {openSuccessModal, openErrorModal, showLoadFailMessage, adSuccess, adError};
