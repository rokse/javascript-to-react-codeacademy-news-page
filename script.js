import header from './components/header.js';
import siteFooter from './components/site-footer.js';
import siteWrapper from './components/site-wrapper.js';

const root = document.querySelector('#root');
root.append(header(), siteWrapper());

document.body.append(siteFooter());