export function generateHotels(hotels) {
  const listHotels = document.createElement('ul');

  hotels.forEach(hotel => {
    const itemHotel = document.createElement('li');
    const imageHotel = document.createElement('img');
    const titleHotel = document.createElement('h3');
    const addressHotel = document.createElement('p');
    const priceHotel = document.createElement('p');

    listHotels.setAttribute('class', 'popular-hotels__list');
    itemHotel.setAttribute('class', 'popular-hotels__item');
    imageHotel.setAttribute('src', hotel.img);  // hotel.img — это обращение к свойству img объекта hotel
    imageHotel.setAttribute('width', 300);
    imageHotel.setAttribute('height', 209);
    titleHotel.textContent = hotel.title;  //Устанавливается текстовое содержимое элемента <h2>, чтобы отображать название отеля (hotel.title)
    addressHotel.setAttribute('class', 'popular-hotels__address');
    addressHotel.textContent = hotel.address;
    priceHotel.textContent = hotel.price;

    listHotels.appendChild(itemHotel);
    itemHotel.appendChild(imageHotel);
    itemHotel.appendChild(titleHotel);
    itemHotel.appendChild(addressHotel);
    itemHotel.appendChild(priceHotel);
  });

  document.querySelector('.popular-hotels .container').appendChild(listHotels)
}