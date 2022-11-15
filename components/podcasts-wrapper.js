import podcastsCard from "./podcasts-card.js";

export default function podcastsWrapper() {
  const podcastsWrapperEl = document.createElement('div');
  podcastsWrapperEl.classList.add('podcasts-wrapper');

  podcastsWrapperEl.append(podcastsCard('Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas', '2022-03-23'), podcastsCard('Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas', '2022-03-23'), podcastsCard('Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas', '2022-03-23'), podcastsCard('Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas', '2022-03-23'))

  return podcastsWrapperEl;
}