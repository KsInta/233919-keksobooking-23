import {openSuccessModal} from './user-modal.js';

const getData = async (url, onSuccess, onError) => {
  const ads = await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`Ошибка ${response.status}, не удалось получить данные с сервера...`);
    })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((err) => onError(err.message));

  return await ads || [];
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        openSuccessModal();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
