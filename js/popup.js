import {createAds, getAccommodationType, GUESTS, ROOMS} from './data.js';
import {getRussianCase, getRussianGenitiveCase} from './util.js';

const map = document.querySelector('.map');
const mapCanvas = map.querySelector('#map-canvas');
const adCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = createAds();

const similarListFragment = document.createDocumentFragment();

similarAds.forEach((ad) => {
  const adElement = adCardTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = getAccommodationType(ad.offer.type);
  adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} ${getRussianCase(ad.offer.rooms, ROOMS)} для ${ad.offer.guests} ${getRussianGenitiveCase(ad.offer.guests, GUESTS)}`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  const modifiers = ad.offer.features.map((feature) => `popup__feature--${feature}`);
  adElement.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  adElement.querySelector('.popup__description').textContent = ad.offer.description;
  ad.offer.photos.forEach((item) => {
    const img = adElement.querySelector('.popup__photo').cloneNode();
    img.setAttribute('src', item);
    adElement.querySelector('.popup__photos').appendChild(img);
  });
  adElement.querySelector('.popup__photo').remove();
  similarListFragment.appendChild(adElement);
});

mapCanvas.appendChild(similarListFragment);
