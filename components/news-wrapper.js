import mainNews from "./main-news.js";
import newsLink from "./news-link.js";

export default function newsWrapper(props) {
  let { mainNewsInfo, secondaryNewsInfo } = props;
  const newsWrapperEl = document.createElement('div');
  newsWrapperEl.classList.add('news-wrapper');

  const newsHeading = document.createElement('h1');
  newsHeading.textContent = 'Naujienos';

  newsWrapperEl.append(newsHeading, mainNews(mainNewsInfo), mainNews(secondaryNewsInfo), newsLink('Visos naujienos'));

  return newsWrapperEl;
};