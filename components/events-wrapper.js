import eventCard from "./event-card.js";
import newsLink from "./news-link.js";

export default function eventWrapper() {
  const eventWrapperEl = document.createElement('div');
  eventWrapperEl.classList.add('events-wrapper');

  const eventImageEl = document.createElement('img');
  eventImageEl.src = 'https://codeacademy.lt/wp-content/uploads/2022/10/279056133_5029178327168536_4126724437953769972_n-1.png';
  eventImageEl.alt = 'Event image';

  eventWrapperEl.append(eventImageEl, eventCard(), eventCard(), eventCard(), newsLink('Daugiau'));

  return eventWrapperEl;
};