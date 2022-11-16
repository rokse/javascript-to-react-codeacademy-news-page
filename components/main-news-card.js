export default function mainNewsCard(data) {
  console.log(data)
  const { info, mainNewsCardClass, cardInfoClass, newsDescriptionClass } = data;
  const { imageUrl, newsCategory, newsDescription, newsDate } = info;

  const cardLinkEl = document.createElement('a');
  cardLinkEl.href = '#';
  
  const mainNewsCard = document.createElement('div');
  mainNewsCard.classList.add(mainNewsCardClass);

  const imageEl = document.createElement('img');
  imageEl.src = imageUrl;
  
  const cardInfoEl = document.createElement('div');
  cardInfoEl.classList.add(cardInfoClass);

  const newsCategoryEl = document.createElement('p');
  newsCategoryEl.classList.add('news-category');
  newsCategoryEl.textContent = newsCategory;

  const newsDescriptionEl = document.createElement('h2');
  newsDescriptionEl.classList.add(newsDescriptionClass);
  newsDescriptionEl.textContent = newsDescription;

  const newsDateEl = document.createElement('p');
  newsDateEl.classList.add('news-date');
  newsDateEl.textContent = newsDate;

  cardInfoEl.append(newsCategoryEl, newsDescriptionEl, newsDateEl);

  mainNewsCard.append(imageEl, cardInfoEl);

  cardLinkEl.append(mainNewsCard);

  return cardLinkEl;
};