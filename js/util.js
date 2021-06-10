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

const getRandomArray = (parentArray) => {
  const arrayCopy = parentArray.slice();
  const deletedElementsCount = getRandomInteger(0, arrayCopy.length);
  for (let counter = 0; counter < deletedElementsCount; counter++) {
    arrayCopy.splice(getRandomInteger(0, arrayCopy.length - 1), 1);
  }
  return arrayCopy;
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

export {getRandomInteger, getRandomFloatNumber, getRandomArray, getRandomArrayElement};

//Этот модуль уберем когда настроим работу с сервером.
