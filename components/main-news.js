import mainNewsCard from "./main-news-card.js";

export default function mainNews(props) {
  let { newsCardInfo, newsCardInfoTwo, mainNewsCardClass, cardInfoClass, newsDescriptionClass } = props;

  const mainNewsEl = document.createElement('div');
  mainNewsEl.classList.add('main-news');


  const mainNewsCardElement = mainNewsCard(newsCardInfo, mainNewsCardClass, cardInfoClass, newsDescriptionClass);
  
  const mainNewsCardSecondElement = mainNewsCard(newsCardInfoTwo, mainNewsCardClass, cardInfoClass, newsDescriptionClass);

  mainNewsEl.append(mainNewsCardElement, mainNewsCardSecondElement);

  return mainNewsEl;
};