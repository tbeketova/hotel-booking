export function generateServices(services) {
  const listServices = document.createElement('ul');
  listServices.setAttribute('class', 'services__list');

  services.forEach(service => {
    const itemService = document.createElement('li');
    const iconService = document.createElement('svg');
    const useElement = document.createElement('use');
    const titleService = document.createElement('h4'); 

    titleService.textContent = service.title;
    iconService.setAttribute('width', 30);
    iconService.setAttribute('height', 30);
    iconService.setAttribute('aria-label', service.title);
    useElement.setAttribute('href', `./public/assets/vectors/sprite.svg#${service.icon}`); // шаблонная строка (template literal) в JavaScript. Она позволяет легко вставлять динамические данные в строку с помощью синтаксиса ${variable}

    listServices.appendChild(itemService);
    itemService.appendChild(iconService);
    itemService.appendChild(titleService);
    iconService.appendChild(useElement);
  });
  
  document.querySelector('.services .container').appendChild(listServices);
};