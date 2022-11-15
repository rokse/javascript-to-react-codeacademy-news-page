import siteFooter from './components/site-footer.js';
import mainWrap from './components/main-wrap.js';

const root = document.querySelector('#root');
root.append(mainWrap(), siteFooter());
