const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_ROOM_NUMBER = 100;

const adForm = document.querySelector('.ad-form');
const adTitle = adForm.querySelector('#title');
const adPrice = adForm.querySelector('#price');
const adRoomNumber = adForm.querySelector('#room_number');
const adGuestNumber = adForm.querySelector('#capacity');

//Чтобы не запускать onSelectRoomChange когда страница загрузится. Также можно было это сделать в html.
adGuestNumber.querySelector('option[value="1"]').setAttribute('selected', 'selected');

const onSelectRoomChange = () => {
  const roomsValue = adRoomNumber.value;
  const guestValue = adGuestNumber.value;
  if (parseInt(roomsValue, 10) === MAX_ROOM_NUMBER && parseInt(guestValue, 10) !== 0) {
    adGuestNumber.setCustomValidity('Такое здание не для приема гостей');
  } else if (guestValue > roomsValue) {
    adGuestNumber.setCustomValidity('Количество гостей не может превышать количество комнат');
  } else {
    adGuestNumber.setCustomValidity('');
  }

  adGuestNumber.reportValidity();
};

adTitle.addEventListener('input', () => {
  const valueLength = adTitle.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Добавьте ещё ${MIN_TITLE_LENGTH - valueLength} символов в заголовок`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Уберите ${valueLength - MAX_TITLE_LENGTH} символов из заголовка`);
  } else {
    adTitle.setCustomValidity('');
  }

  adTitle.reportValidity();
});

adPrice.addEventListener('input', () => {
  const value = adPrice.value;
  if (value < MIN_PRICE) {
    adPrice.setCustomValidity(`Цена не может быть меньше ${MIN_PRICE}`);
  } else if (value > MAX_PRICE) {
    adPrice.setCustomValidity(`Цена не может превышать ${MAX_PRICE}`);
  } else {
    adPrice.setCustomValidity('');
  }

  adPrice.reportValidity();
});

adRoomNumber.addEventListener('change', onSelectRoomChange);
adGuestNumber.addEventListener('change', onSelectRoomChange);
