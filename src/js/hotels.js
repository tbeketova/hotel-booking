const checkPath = window.location.href;  // Получаем текущий URL страницы
const hasCatalog = checkPath.indexOf('pages') !== -1;  // Проверяем, есть ли "pages" в URL
let path = '';
if(hasCatalog) {
  path = './../../';
} else {
  path = './';
}

export const hotels = [
  {
    img: `${path}public/assets/images/hotel-London.webp`,
    address: 'London NW8 7JT England',
    title: 'Danubius Hotel Regents Park',
    price: '$200 Par Night',
    rating: 4.8,
    popular: true,
  },
  {
    img: `${path}public/assets/images/hotel-Regents.webp`,
    address: 'London NW8 7JT England',
    title: 'The Resident Soho',
    price: '$250 Par Night',
    rating: 4.7,
    popular: true,
  },
  {
    img: `${path}public/assets/images/hotel-Soho.webp`,
    address: 'London NW8 7JT England',
    title: 'London Bridge Hotel',
    price: '$200 Par Night',
    rating: 4.8,
  },
  {
    img: `${path}public/assets/images/hotel-London.webp`,
    address: 'London NW8 7JT England',
    title: '3 The Resident Soho',
    price: '$150 Par Night',
    rating: 4.7,
    popular: true,
  },
  {
    img: './../../public/assets/images/hotel-Regents.webp',
    address: 'London NW8 7JT England',
    title: '4 London Bridge Hotel',
    price: '$100 Par Night',
    rating: 3.8,
  },
  {
    img: `${path}public/assets/images/hotel-Soho.webp`,
    address: 'London NW8 7JT England',
    title: '5 The Resident Soho',
    price: '$280 Par Night',
    rating: 4.7,
  },
  {
    img: `${path}public/assets/images/hotel-London.webp`,
    address: 'London NW8 7JT England',
    title: 'London Bridge Hotel',
    price: '$200 Par Night',
    rating: 3.8,
  },
  {
    img: './../../public/assets/images/hotel-Regents.webp',
    address: 'London NW8 7JT England',
    title: 'The Resident Soho',
    price: '$220 Par Night',
    rating: 4.7,
  },
  {
    img: `${path}public/assets/images/hotel-Soho.webp`,
    address: 'London NW8 7JT England',
    title: 'London Bridge Hotel',
    price: '$260 Par Night',
    rating: 3.8,
  },
  {
    img: `${path}public/assets/images/hotel-London.webp`,
    address: 'London NW8 7JT England',
    title: 'The Resident Soho',
    price: '$200 Par Night',
    rating: 4.7,
  },
  {
    img: './../../public/assets/images/hotel-Regents.webp',
    address: 'London NW8 7JT England',
    title: 'London Bridge Hotel',
    price: '$200 Par Night',
    rating: 3.8,
  },
]