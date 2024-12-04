import '/public/styles/style.scss'
/* import { initTabs } from './js/tabs.js' */
import { hotels } from "./js/hotels.js";
import { generateHotels } from './js/generate-hotels.js';


// Фильтруем только популярные отели
function isPopularHotel(hotel) {
  if (hotel.popular === true) {
    return true;
  } else {
    return false;
  }
}
const popularHotels = hotels.filter(isPopularHotel);
generateHotels(popularHotels);



/* setTimeout(() => generateHotels(hotels), 1000) */  //используется для того, чтобы задержать выполнение вызова функции generateHotels(hotels) на определённое количество времени — в данном случае на 1000 миллисекунд (или 1 секунду
/* initTabs(); */
