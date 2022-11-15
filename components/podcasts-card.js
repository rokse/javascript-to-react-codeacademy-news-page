export default function podcastsCard(headingInfo, date) {
  const podcastsCardEl = document.createElement('div');
  podcastsCardEl.classList.add('podcasts-card');

  const podcastsCardImg = document.createElement('img');
  podcastsCardImg.src = './components/podcasts-image.png';

  const podcastsCardDescriptionEl = document.createElement('div');
  podcastsCardDescriptionEl.classList.add('podcasts-card-description');

  const podcastsCardHeading = document.createElement('h2');
  podcastsCardHeading.textContent = headingInfo;

  const podcastsCardDate = document.createElement('p');
  podcastsCardDate.classList.add('news-date');
  podcastsCardDate.textContent = date;

  podcastsCardDescriptionEl.append(podcastsCardHeading, podcastsCardDate);

  podcastsCardEl.append(podcastsCardImg, podcastsCardDescriptionEl);

  return podcastsCardEl;
};