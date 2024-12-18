export function generateIcons(icons) {

const listIcons = document.createElement('ul');
listIcons.setAttribute('class', 'test__list');

  icons.forEach(icon => {
    const itemIcon = document.createElement('li');
    const imgIcon = document.createElement('img');
    const titleIcon = document.createElement('h4');

    titleIcon.textContent = icon.title;

    imgIcon.setAttribute('width', 50);
    imgIcon.setAttribute('height', 50);

    imgIcon.setAttribute('href', icon.img);

    listIcons.appendChild(itemIcon);
    itemIcon.appendChild(imgIcon);
    itemIcon.appendChild(titleIcon);
  });
  
  document.querySelector('.test .container').appendChild(listIcons);
};
