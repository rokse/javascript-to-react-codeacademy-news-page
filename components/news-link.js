export default function newsLink(text) {
  const newsLinkWrapperEl = document.createElement('a');
  newsLinkWrapperEl.href = '#';

  const newsLinkEl = document.createElement('div');
  newsLinkEl.classList.add('news-link');

  const newsLinkTextEl = document.createElement('p');
  newsLinkTextEl.textContent = text;

  const newsLinkIconEl = document.createElement('img');
  newsLinkIconEl.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='33'%3E%3Cpath d='M2.535 32.526L.033 30.024l13.76-13.761L.034 2.502 2.535-.001 18.8 16.263z' fill-rule='evenodd'/%3E%3C/svg%3E`;
  newsLinkIconEl.alt = 'arrow';

  newsLinkEl.append(newsLinkTextEl, newsLinkIconEl);

  newsLinkWrapperEl.append(newsLinkEl);

  return newsLinkWrapperEl;
}