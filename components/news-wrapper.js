import mainNews from "./main-news.js";
import newsLink from "./news-link.js";
import secondaryNews from "./secondary-news.js";

export default function newsWrapper(props) {
  const newsWrapperEl = document.createElement('div');
  newsWrapperEl.classList.add('news-wrapper');

  const newsHeading = document.createElement('h1');
  newsHeading.textContent = 'Naujienos';

  newsWrapperEl.append(newsHeading, mainNews(props), secondaryNews(props), newsLink('Visos naujienos'));

  return newsWrapperEl;
};