export default function eventCard() {
  const eventCardEl = document.createElement('div');
  eventCardEl.classList.add('event-card');

  const eventDateFloatterEl = document.createElement('div');
  eventDateFloatterEl.classList.add('event-date-floatter');
  
  const eventDateFloatterDay = document.createElement('div');
  eventDateFloatterDay.classList.add('day');
  eventDateFloatterDay.textContent = '5';
  
  const eventDateFloatterMonth = document.createElement('div');
  eventDateFloatterMonth.classList.add('month');
  eventDateFloatterMonth.textContent = 'Rug';

  const eventTypeEl = document.createElement('p');
  eventTypeEl.textContent = 'Online';

  const eventHeadingEl = document.createElement('h2');
  eventHeadingEl.textContent = 'Intro: Dirbtinis intelektas ir Duomenų mokslas';

  eventDateFloatterEl.append(eventDateFloatterDay, eventDateFloatterMonth);

  eventCardEl.append(eventDateFloatterEl, eventTypeEl, eventHeadingEl);

  return eventCardEl;
}