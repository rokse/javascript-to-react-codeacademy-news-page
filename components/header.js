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

  const mainMenu = document.createElement('ul');
  mainMenu.classList.add('main-menu');

  const menuItemsArr = ['Verslui', 'Studentams', 'Programos', 'Apie mus', 'Naujienos', 'IT testas', 'Kontaktai'];

  menuItemsArr.forEach(item => {
    const listEl = document.createElement('li');
    listEl.classList.add('menu-item');

    const listLinkEl = document.createElement('a');
    listLinkEl.href = '#';
    listLinkEl.textContent = item;

    listEl.append(listLinkEl);

    mainMenu.append(listEl);
  });

  const callLinkEl = document.createElement('a');
  callLinkEl.classList.add('button');
  callLinkEl.href = '+37066366555';
  callLinkEl.textContent = 'Skambinti';

  navigation.append(mainMenu, callLinkEl);

  logoWrapper.append(logo);

  headerElement.append(logoWrapper, navigation);

  return headerElement;
};