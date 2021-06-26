import {getRandomInteger, getRandomFloatNumber, getRandomArray, getRandomArrayElement} from './util.js';

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
const GUESTS = ['гостя', 'гостей'];
const ROOMS = ['комната', 'комнаты', 'комнат'];

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

const createAds = () => new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAd());

export {createAds, GUESTS, ROOMS};
//Сейчас генерируем данные самостоятельно. В будущем будем получать их с сервера, поэтому необходимость в модуле util.js отпадет. Модуль data.js будет подключаться к map.js для отрисовки пинов на карте и информации о похожих объявлениях. Подключение этого модуля к точке входа уберем. Возможно и сам этот модуль надо будет убрать, так как объявления в виде объектов у нас уже есть на сервере. Нам надо будет только делать массив из 10 и выводить на карте
