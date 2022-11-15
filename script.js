import siteFooter from './components/site-footer.js';
import mainWrap from './components/main-wrap.js';
import header from './components/header.js';

const root = document.querySelector('#root');
root.append(header(), mainWrap(), siteFooter());
