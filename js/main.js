const SIMILAR_ADS_COUNT = 10;
const AVATAR_COUNT = 8;
const AVATAR_CHECK_URL_NUMBER = 10;
const MIN_ACCOMMODATION_PRICE = 0;
const MAX_ACCOMMODATION_PRICE = 10000;
const MIN_ROOMS_NUMBER = 1;
const MAX_ROOMS_NUMBER = 20;
const MIN_GUESTS_NUMBER = 1;
const MAX_GUESTS_NUMBER = 50;
const MIN_LATITUDE = 35.65000;
const MAX_LATITUDE = 35.70000;
const MIN_LONGITUDE = 139.70000;
const MAX_LONGITUDE = 139.80000;
const COORDS_ACCURACY = 5;

const AVATAR_URLS = Array.from(Array(AVATAR_COUNT), (__, counter) => ++counter);

const ACCOMMODATION_TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
const ACCOMMODATION_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ACCOMMODATION_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ACCOMMODATION_TIMES = ['12:00', '13:00', '14:00'];
const ACCOMMODATION_DESCRIPTIONS = ['Находится в спальном районе с развитой инфраструктурой', 'Центр города, в 5 минутах ходьбы от ЦУМа', 'За городом, в шаговой доступности от остановки общественного транспорта, 15 минут езды до Северо-Западного района', 'Исторический центр города, рядом находится много достопримечательностей', 'Рядом речка и пляж, все что нужно для семейного отдыха'];
const ACCOMMODATION_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

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

const createAd = () => {
  const LAT_COORDS = getRandomFloatNumber(MIN_LATITUDE, MAX_LATITUDE, COORDS_ACCURACY);
  const LNG_COORDS = getRandomFloatNumber(MIN_LONGITUDE, MAX_LONGITUDE, COORDS_ACCURACY);
  const createAvatarUrl = (adNumber) => {
    const avatarNull = (adNumber < AVATAR_CHECK_URL_NUMBER) ? 0 : '';
    const avatarUrl = `img/avatars/user${  avatarNull  }${adNumber  }.png`;
    //AVATAR_URLS.splice(AVATAR_URLS.indexOf(adNumber), 1);
    return avatarUrl;
  };
  return {
    avatar: createAvatarUrl(getRandomArrayElement(AVATAR_URLS)),
    offer: {
      title: getRandomArrayElement(ACCOMMODATION_TITLES),
      address: `${LAT_COORDS  }, ${  LNG_COORDS}`,
      price: getRandomInteger(MIN_ACCOMMODATION_PRICE, MAX_ACCOMMODATION_PRICE),
      type: getRandomArrayElement(ACCOMMODATION_TYPES),
      rooms: getRandomInteger(MIN_ROOMS_NUMBER, MAX_ROOMS_NUMBER),
      guests: getRandomInteger(MIN_GUESTS_NUMBER, MAX_GUESTS_NUMBER),
      checkin: getRandomArrayElement(ACCOMMODATION_TIMES),
      checkout: getRandomArrayElement(ACCOMMODATION_TIMES),
      features: getRandomArray(ACCOMMODATION_FEATURES),
      description: getRandomArrayElement(ACCOMMODATION_DESCRIPTIONS),
      photos: getRandomArray(ACCOMMODATION_PHOTOS),
    },
    location: {
      lat: LAT_COORDS,
      lng: LNG_COORDS,
    },
  };
};

const similarAds = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAd());

similarAds;
