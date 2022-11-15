import podcastsWrapper from "./podcasts-wrapper.js";
import eventWrapper from "./events-wrapper.js";

export default function sideContent() {
  const sideContentEl = document.createElement('div');
  sideContentEl.classList.add('side-content');

  const podcastsContentHeading = document.createElement('h1');
  podcastsContentHeading.textContent = 'Podcastai ir radijo laidos';
  
  const eventsContentHeading = document.createElement('h1');
  eventsContentHeading.textContent = 'Renginiai';

  sideContentEl.append(podcastsContentHeading, podcastsWrapper(), eventsContentHeading, eventWrapper());

  return sideContentEl;
}