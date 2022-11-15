import siteFooter from './components/site-footer.js';
import mainWrap from './components/main-wrap.js';
import header from './components/header.js';
import facebookSvg from "./components/facebook.js";
import instagramSvg from "./components/instagram.js";
import linkedInSvg from "./components/linkedin.js";

const footerData = {
  listIconsObj: {
    listItems: [
      {
        title: instagramSvg(),
        url: 'http://instagram.com'
      },
      {
        title: facebookSvg(),
        url: 'http://facebook.com'
      },
      {
        title: linkedInSvg(),
        url: 'http://linkedin.com'
      },
    ]
  },
  listItemsObj: {
    listItems: [
      {
        title: 'Saulėtakio al. 15,<br>Vilnius',
        url: '#'
      },
      {
        title: 'Antakalnio g. 17,<br>Vilnius',
        url: '#'
      },
    ]
  },
  footerMenuItems: {
    listItems: [
      {
        title: 'Studentams',
        url: '#'
      },
      {
        title: 'Jei galiu as - gali ir tu!',
        url: '#'
      },
      {
        title: 'Verslui',
        url: '#'
      },
      {
        title: 'Programos',
        url: '#'
      },
      {
        title: 'Nemokamos studijos',
        url: '#'
      },
      {
        title: 'UZT kursai',
        url: '#'
      },
      {
        title: 'Programavimo kalbos',
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
        title: 'Karjera - We are hiring!',
        url: '#'
      },
      {
        title: 'ES parama',
        url: '#'
      },
      {
        title: 'Kontaktai',
        url: '#'
      }],
    liClassName: 'menu-item'
  }
}

const root = document.querySelector('#root');
root.append(header(), mainWrap(), siteFooter(footerData));

