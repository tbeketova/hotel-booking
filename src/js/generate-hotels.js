export function generateHotels(hotels) {
  const listHotels = document.createElement('ul');

  hotels.forEach(hotel => {
    const itemHotel = document.createElement('li');
    const imageHotel = document.createElement('img');
    const titleHotel = document.createElement('h3');
    const addressHotel = document.createElement('p');
    const priceHotel = document.createElement('p');
    const ratingHotel = document.createElement('div');

    listHotels.setAttribute('class', 'popular-hotels__list');
    itemHotel.setAttribute('class', 'popular-hotels__item card-hotel');
    imageHotel.setAttribute('class', 'card-hotel__img');
    imageHotel.setAttribute('src', hotel.img);  // hotel.img — это обращение к свойству img объекта hotel
    imageHotel.setAttribute('width', 300);
    imageHotel.setAttribute('height', 209);
    addressHotel.setAttribute('class', 'card-hotel__address');
    addressHotel.textContent = hotel.address;
    titleHotel.textContent = hotel.title;  //Устанавливается текстовое содержимое элемента <h2>, чтобы отображать название отеля (hotel.title)
    titleHotel.setAttribute('class', 'card-hotel__title');
    priceHotel.textContent = hotel.price;
    priceHotel.setAttribute('class', 'card-hotel__price');
    ratingHotel.textContent = hotel.rating;
    ratingHotel.setAttribute ('class', 'card-hotel__rating');

    listHotels.appendChild(itemHotel);
    itemHotel.appendChild(imageHotel);
    itemHotel.appendChild(addressHotel);
    itemHotel.appendChild(titleHotel);
    itemHotel.appendChild(priceHotel);
    itemHotel.appendChild(ratingHotel);
  });

  document.querySelector('.popular-hotels .container').appendChild(listHotels)
}