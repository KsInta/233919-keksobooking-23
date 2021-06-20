import {createAds, GUESTS, ROOMS} from './data.js';
import {getRussianCase, getRussianGenitiveCase, getAccommodationType} from './util.js';

const map = document.querySelector('.map');
const mapCanvas = map.querySelector('#map-canvas');
const adCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = createAds();

const similarListFragment = document.createDocumentFragment();

similarAds.forEach((ad) => {
  const adElement = adCardTemplate.cloneNode(true);
  ad.offer.title ? adElement.querySelector('.popup__title').textContent = ad.offer.title : adElement.querySelector('.popup__title').classList.add('visually-hidden');
  ad.offer.address ? adElement.querySelector('.popup__text--address').textContent = ad.offer.address : adElement.querySelector('.popup__text--address').classList.add('visually-hidden');
  ad.offer.price ? adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь` : adElement.querySelector('.popup__text--price').classList.add('visually-hidden');
  ad.offer.type ? adElement.querySelector('.popup__type').textContent = getAccommodationType(ad.offer.type) : adElement.querySelector('.popup__type').classList.add('visually-hidden');
  ad.offer.rooms && ad.offer.guests ? adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} ${getRussianCase(ad.offer.rooms, ROOMS)} для ${ad.offer.guests} ${getRussianGenitiveCase(ad.offer.guests, GUESTS)}` : adElement.querySelector('.popup__text--capacity').classList.add('visually-hidden');
  ad.offer.checkin && ad.offer.checkout ? adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}` : adElement.querySelector('.popup__text--time').classList.add('visually-hidden');
  if (ad.offer.features) {
    const modifiers = ad.offer.features.map((feature) => `popup__feature--${feature}`);
    adElement.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];
      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });
  } else {
    adElement.querySelector('.popup__features').classList.add('visually-hidden');
  }
  ad.offer.description ? adElement.querySelector('.popup__description').textContent = ad.offer.description : adElement.querySelector('.popup__description').classList.add('visually-hidden');
  if (ad.offer.photos) {
    ad.offer.photos.forEach((item) => {
      const img = adElement.querySelector('.popup__photo').cloneNode();
      img.setAttribute('src', item);
      adElement.querySelector('.popup__photos').appendChild(img);
    });
    adElement.querySelector('.popup__photo').remove();
  } else {
    adElement.querySelector('.popup__photos').classList.add('visually-hidden');
  }
  similarListFragment.appendChild(adElement);
});

mapCanvas.appendChild(similarListFragment.firstChild);

export {mapCanvas};
