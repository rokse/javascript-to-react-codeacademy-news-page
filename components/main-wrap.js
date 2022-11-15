import siteWrapper from './site-wrapper.js';

export default function mainWrap() {
  const mainWrapEl = document.createElement('div');
  mainWrapEl.classList.add('wrap');

  mainWrapEl.append(siteWrapper());

  return mainWrapEl;
};