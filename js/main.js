import {SIMILAR_ADS_COUNT} from './data.js';
import './popup.js';
import {createMarker} from './map.js';
import './user-modal.js';
import {setUserFormSubmit, sendUserForm} from './user-form.js';
import {getData} from './server.js';
import {showLoadFailMessage} from './user-modal.js';

getData('https://23.javascript.pages.academy/keksobooking/data', (data) => data.slice(0, SIMILAR_ADS_COUNT).forEach((item) => {createMarker(item.author.avatar, item.offer, item.location);}), showLoadFailMessage);

setUserFormSubmit(sendUserForm);
