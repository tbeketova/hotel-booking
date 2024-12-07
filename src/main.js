import '/public/styles/style.scss'
/* import { initTabs } from './js/tabs.js' */
import { hotels } from "./js/hotels.js";
import { generateHotels } from './js/generate-hotels.js';
import { services } from './js/services.js';
import {generateServices} from './js/generate-services.js';



/* Фильтруем только популярные отели, лучше использовать spred оператор или slice filter подходит для select*/
const popularHotels = hotels.filter(hotel => hotel.popular === true);
generateHotels(popularHotels); 

  // Находим кнопку "View All"
const viewAllButton = document.querySelector('.popular-hotels__button');
viewAllButton.addEventListener('click', function() {
  const popularList = document.querySelector('.popular-hotels__list');
  if (popularList) {
    popularList.remove(); // Удаляем существующий список
  }
  generateHotels(hotels);
});
/* ./Фильтруем только популярные отели, лучше использовать метод spred оператор */

generateServices(services);

/* setTimeout(() => generateHotels(hotels), 1000) */  //используется для того, чтобы задержать выполнение вызова функции generateHotels(hotels) на определённое количество времени — в данном случае на 1000 миллисекунд (или 1 секунду
/* initTabs(); */
