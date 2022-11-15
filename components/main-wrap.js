import header from './header.js';
import siteWrapper from './site-wrapper.js';

export default function mainWrap() {
  const mainWrapEl = document.createElement('div');
  mainWrapEl.classList.add('wrap');

  mainWrapEl.append(header(), siteWrapper());

  return mainWrapEl;
};