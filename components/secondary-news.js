import mainNewsCard from "./main-news-card.js";

export default function secondaryNews(props) {
  let { secondaryNewsCardInfo, secondaryNewsCardInfoTwo, secondaryNewsCardInfoThree, secondaryNewsCardInfoFour, mainNewsCardClass, cardInfoClass, newsDescriptionClass } = props;
  
  const secondaryNewsEl = document.createElement('div');
  secondaryNewsEl.classList.add('secondary-news');

  const newsCardInfo = mainNewsCard( secondaryNewsCardInfo, mainNewsCardClass, cardInfoClass, newsDescriptionClass );

  const newsCardInfoTwo = mainNewsCard( secondaryNewsCardInfoTwo, mainNewsCardClass, cardInfoClass, newsDescriptionClass );

  const newsCardInfoThree = mainNewsCard( secondaryNewsCardInfoThree, mainNewsCardClass, cardInfoClass, newsDescriptionClass );

  const newsCardInfoFour = mainNewsCard( secondaryNewsCardInfoFour, mainNewsCardClass, cardInfoClass, newsDescriptionClass );

  secondaryNewsEl.append(newsCardInfo, newsCardInfoTwo, newsCardInfoThree, newsCardInfoFour);

  return secondaryNewsEl;
}