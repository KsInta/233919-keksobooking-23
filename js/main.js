const getRandomInteger = function (min, max) {
  if (min >= 0 && max >= 0) {
    if (min > max) {
      //меняем местами min и max
      return Math.floor(Math.random() * (min + 1 - max)) + max;
    }
    //возвращаем случайное целое число в диапазоне
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
  //возвращаем undefined если min или max < 0
};

const getRandomFloatNumber = function (min, max, numeralCount) {
  let count = 1;
  //linter ругается на i как на короткое имя для переменной, поэтому counter
  for (let counter = 0; counter < numeralCount; counter ++) {
    count *= 10;
  }
  if (min >= 0 && max >= 0) {
    if (min > max) {
      return Math.floor((Math.random() * (min - max) + max) * count) / count;
    }
    return Math.floor((Math.random() * (max - min) + min) * count) / count;
  }
};

getRandomInteger(1, 10);
getRandomFloatNumber(1.54675747, 123.43534, 5);
