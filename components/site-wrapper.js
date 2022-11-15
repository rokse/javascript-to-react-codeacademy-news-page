import newsWrapper from "./news-wrapper.js";
import sideContent from "./side-content.js";

export default function siteWrapper() {
  const siteWrapperEl = document.createElement('div');
  siteWrapperEl.classList.add('site-wrapper');

  siteWrapperEl.append(newsWrapper(), sideContent())

  return siteWrapperEl;
}