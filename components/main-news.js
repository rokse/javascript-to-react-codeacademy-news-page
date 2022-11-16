import mainNewsCard from "./main-news-card.js";

export default function mainNews(props) {
  let { mainClass, mainNewsCardClass, cardInfoClass, newsDescriptionClass, newsInfo } = props;
  
  const mainNewsEl = document.createElement('div');
  mainNewsEl.classList.add(mainClass);
 
  newsInfo.map(info => {
    let mainNewsCardElement = mainNewsCard({info, mainNewsCardClass, cardInfoClass, newsDescriptionClass});
    mainNewsEl.append(mainNewsCardElement);
  });
  
  return mainNewsEl;
};