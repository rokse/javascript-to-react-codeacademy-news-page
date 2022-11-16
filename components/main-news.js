import mainNewsCard from "./main-news-card.js";

export default function mainNews(props) {
  let { mainClass, newsInfo } = props;
  
  const mainNewsEl = document.createElement('div');
  mainNewsEl.classList.add(mainClass);
 
  newsInfo.map(info => {
    let mainNewsCardElement = mainNewsCard(info);
    mainNewsEl.append(mainNewsCardElement);
  });
  
  return mainNewsEl;
};