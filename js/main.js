import {SIMILAR_ADS_COUNT} from './data.js';
import './popup.js';
import {createMarker} from './map.js';
import './user-modal.js';
import {setUserFormSubmit, sendUserForm} from './user-form.js';
import {getData} from './server.js';

getData((similarAds) => {
  similarAds.slice(0, SIMILAR_ADS_COUNT).forEach((item) => {
    createMarker(item.author.avatar, item.offer, item.location);
  });
});

setUserFormSubmit(sendUserForm);
