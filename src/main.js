import '/public/styles/style.scss'
/* import { initTabs } from './js/tabs.js' */
import { hotels } from "./js/hotels.js";
import { generateHotels } from './js/generate-hotels.js';


// Фильтруем только популярные отели
function popularHotel(hotel) {
  if (hotel.popular === true) {
    return true;
  } else {
    return false;
  }
}
const popularHotels = hotels.filter(popularHotel);
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

/* setTimeout(() => generateHotels(hotels), 1000) */  //используется для того, чтобы задержать выполнение вызова функции generateHotels(hotels) на определённое количество времени — в данном случае на 1000 миллисекунд (или 1 секунду
/* initTabs(); */
