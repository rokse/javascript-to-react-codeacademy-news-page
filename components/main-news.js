import mainNewsCard from "./main-news-card.js";

export default function mainNews() {
  const mainNewsEl = document.createElement('div');
  mainNewsEl.classList.add('main-news');

  const newsCardInfo = {
    imageUrl: 'https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-2048x1988.jpg',
    newsCategory: 'Naujienos',
    newsDescription: 'Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti',
    newsDate: '2022-03-23'
  }

  const newsCardInfoTwo = {
    imageUrl: 'https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-2048x1988.jpg',
    newsCategory: 'Naujienos',
    newsDescription: 'Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti',
    newsDate: '2022-03-23'
  }

  mainNewsEl.append(mainNewsCard(newsCardInfo), mainNewsCard(newsCardInfoTwo));

  return mainNewsEl;
};