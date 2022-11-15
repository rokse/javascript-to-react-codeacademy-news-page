import secondaryNewsCard from "./secondary-news-card.js";

export default function secondaryNews() {
  const secondaryNewsEl = document.createElement('div');
  secondaryNewsEl.classList.add('secondary-news');

  const newsCardInfo = {
    imageUrl: 'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg',
    newsCategory: 'Technologijų ritmu',
    newsDescription: 'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
    newsDate: '2022-03-23'
  }

  const newsCardInfoTwo = {
    imageUrl: 'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg',
    newsCategory: 'Technologijų ritmu',
    newsDescription: 'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
    newsDate: '2022-03-23'
  }

  const newsCardInfoThree = {
    imageUrl: 'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg',
    newsCategory: 'Technologijų ritmu',
    newsDescription: 'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
    newsDate: '2022-03-23'
  }

  const newsCardInfoFour = {
    imageUrl: 'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg',
    newsCategory: 'Technologijų ritmu',
    newsDescription: 'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
    newsDate: '2022-03-23'
  }

  secondaryNewsEl.append(secondaryNewsCard(newsCardInfo), secondaryNewsCard(newsCardInfoTwo), secondaryNewsCard(newsCardInfoThree), secondaryNewsCard(newsCardInfoFour));

  return secondaryNewsEl;
}