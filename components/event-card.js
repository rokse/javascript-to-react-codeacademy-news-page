export default function eventCard(data) {
  let { day, month, eventLocation, eventDescription } = data;

  const eventCardEl = document.createElement('div');
  eventCardEl.classList.add('event-card');

  const eventDateFloatterEl = document.createElement('div');
  eventDateFloatterEl.classList.add('event-date-floatter');
  
  const eventDateFloatterDay = document.createElement('div');
  eventDateFloatterDay.classList.add('day');
  eventDateFloatterDay.textContent = day;
  
  const eventDateFloatterMonth = document.createElement('div');
  eventDateFloatterMonth.classList.add('month');
  eventDateFloatterMonth.textContent = month;

  const eventTypeEl = document.createElement('p');
  eventTypeEl.textContent = eventLocation;

  const eventHeadingEl = document.createElement('h2');
  eventHeadingEl.textContent = eventDescription;

  eventDateFloatterEl.append(eventDateFloatterDay, eventDateFloatterMonth);

  eventCardEl.append(eventDateFloatterEl, eventTypeEl, eventHeadingEl);

  return eventCardEl;
}