import ulListComponent from "./ul-list-component.js";

export default function header() {
  const headerElement = document.createElement('header');
  headerElement.classList.add('main-header');

  const logoWrapper = document.createElement('div');
  logoWrapper.classList.add('logo-wrapper');

  const logo = document.createElement('img');
  logo.src = 'https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg';
  logo.alt = 'Codeacademy logo';

  const navigation = document.createElement('nav');
  navigation.classList.add('main-navigation');

  const menuItemsObj =
  {
    listItems: [{
      title: 'Verslui',
      url: '#'
    },
    {
      title: 'Studentams',
      url: '#'
    },
    {
      title: 'Programos',
      url: '#'
    },
    {
      title: 'Apie mus',
      url: '#'
    },
    {
      title: 'Naujienos',
      url: '#'
    },
    {
      title: 'IT testas',
      url: '#'
    },
    {
      title: 'Kontaktai',
      url: '#'
    }],
    liClassName: 'menu-item',
    ulClassName: 'main-menu'
  };

  const mainMenu = ulListComponent(menuItemsObj);

  const callLinkEl = document.createElement('a');
  callLinkEl.classList.add('button');
  callLinkEl.href = '+37066366555';
  callLinkEl.textContent = 'Skambinti';

  navigation.append(mainMenu, callLinkEl);

  logoWrapper.append(logo);

  headerElement.append(logoWrapper, navigation);

  return headerElement;
};