import {debounce} from './utils/debounce.js';
import './map.js';
import './popup.js';
import './user-modal.js';
import {setUserFormSubmit, sendUserForm} from './user-form.js';
import {setFilterFormChange, renderSimilarList} from './filter-form.js';
import {getData} from './server.js';
import {showLoadFailMessage} from './user-modal.js';

const RERENDER_DELAY = 500;

getData(
  'https://23.javascript.pages.academy/keksobooking/data',
  (data) => {
    renderSimilarList(data);
    setFilterFormChange(debounce(
      () => renderSimilarList(data),
      RERENDER_DELAY,
    ));
  },
  showLoadFailMessage);

setUserFormSubmit(sendUserForm);
