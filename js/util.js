const getRandomInteger = (min, max) => {
  if (min >= 0 && max >= 0) {
    return (min > max) ? (Math.floor(Math.random() * (min + 1 - max)) + max) : (Math.floor(Math.random() * (max + 1 - min)) + min);
  }
  throw 'Одно из чисел меньше 0';
};

const getRandomFloatNumber = (min, max, numeralCount) => {
  let count = 1;
  for (let counter = 0; counter < numeralCount; counter++) {
    count *= 10;
  }
  if (min >= 0 && max >= 0) {
    return (min > max) ? (Math.floor((Math.random() * (min - max) + max) * count) / count) : (Math.floor((Math.random() * (max - min) + min) * count) / count);
  }
  throw 'Одно из чисел меньше 0';
};

const getFloatNumber = (number, numeralCount) => {
  let count = 1;
  for (let counter = 0; counter < numeralCount; counter++) {
    count *= 10;
  }
  if (number >= 0) {
    return Math.floor(number * count) / count;
  }
  throw 'Число меньше 0';
};

const getRandomArray = (parentArray) => {
  const arrayCopy = parentArray.slice();
  const deletedElementsCount = getRandomInteger(0, arrayCopy.length);
  for (let counter = 0; counter < deletedElementsCount; counter++) {
    arrayCopy.splice(getRandomInteger(0, arrayCopy.length - 1), 1);
  }
  return arrayCopy;
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getRussianCase = (integer, russianWord) => {
  const remainder = integer % 10;
  if (integer > 10 && integer < 20) {
    return russianWord[2];
  } else if (remainder > 1 && remainder < 5) {
    return russianWord[1];
  } else if (remainder === 1) {
    return russianWord[0];
  }
  return russianWord[2];
};

const getRussianGenitiveCase = (integer, russianWord) => {
  const remainder = integer % 10;
  return remainder === 1 && integer !== 11 ? russianWord[0] : russianWord[1];
};

const getAccommodationType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};

export {getRandomInteger, getRandomFloatNumber, getFloatNumber, getRandomArray, getRandomArrayElement, getRussianCase, getRussianGenitiveCase, getAccommodationType};

//Этот модуль уберем когда настроим работу с сервером.
