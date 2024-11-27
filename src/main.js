import '/public/styles/style.scss'
import { setupCounter } from './js/counter.js'
import { initTabs } from './js/tabs.js'

const counter = document.querySelector('.counter');
if (counter) {
  setupCounter(counter);
}
initTabs();
