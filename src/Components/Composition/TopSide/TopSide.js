import { useState } from 'react';
import CurrentDate from '../CurrentDate';
import NewsButton from '../NewsButton/NewsButton';
import NewsElement from '../NewsElement';
import QuoteElement from '../QuoteElement';

import styles from './style.module.scss';

const typeNews = [
    {
      type: 'now',
      text: 'Сейчас в СМИ',
    },
    {
      type: 'germany',
      text: 'в Германии',
    },
    {
      type: 'recommended',
      text: 'Рекомендуемое',
    },
  ];
  const news = [
    {
      type: 'now',
      imageSource: 'https://picsum.photos/30/30.webp',
      text: 'Блинкен обсудил «смертоносные» действия России с чешским премьером',
      link: '',
    },
    {
      type: 'germany',
      imageSource: 'https://picsum.photos/30/30.webp',
      text:
        'США и Чехия договорились ответить на «дестабилизирующие» действия России',
      link: '',
    },
    {
      type: 'germany',
      imageSource: 'https://picsum.photos/30/30.webp',
      text:
        'США и Чехия договорились ответить на «дестабилизирующие» действия России',
      link: '',
    },
    {
      type: 'germany',
      imageSource: 'https://picsum.photos/30/30.webp',
      text:
        'США и Чехия договорились ответить на «дестабилизирующие» действия России',
      link: '',
    },
    {
      type: 'germany',
      imageSource: 'https://picsum.photos/30/30.webp',
      text:
        'США и Чехия договорились ответить на «дестабилизирующие» действия России',
      link: '',
    },
    {
      type: 'germany',
      imageSource: 'https://picsum.photos/30/30.webp',
      text:
        'США и Чехия договорились ответить на «дестабилизирующие» действия России',
      link: '',
    },
    {
      type: 'recommended',
      imageSource: 'https://picsum.photos/30/30.webp',
      text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
      link: '',
    },
    {
      type: 'recommended',
      imageSource: 'https://picsum.photos/30/30.webp',
      text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
      link: '',
    },
    {
      type: 'recommended',
      imageSource: 'https://picsum.photos/30/30.webp',
      text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
      link: '',
    },
    {
      type: 'recommended',
      imageSource: 'https://picsum.photos/30/30.webp',
      text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
      link: '',
    },
    {
      type: 'recommended',
      imageSource: 'https://picsum.photos/30/30.webp',
      text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
      link: '',
    },
  ];
  const quotes = [
    {
      name: 'USD',
      value: 76.5,
      shift: '-1,5',
    },
    {
      name: 'EUR',
      value: 84.5,
      shift: '+1,5',
    },
    {
      name: 'MNGO',
      value: 76.5,
      shift: '-1,54%',
    },
  ];
const TopSide = () => {
    const [selectTypeNews, setSelectTypeNews] = useState('now');

    return (
        <div className={styles.container}>
            <div className={styles.controlContainer}>
                {typeNews.map((el, index) => (
                    <NewsButton 
                        key={index}
                        text={el.text}
                        type={el.type}
                        isActive={el.type === selectTypeNews}
                        select={(val)=> setSelectTypeNews(val)}
                    />
                ))}
                <CurrentDate/>
            </div>
            <div className={styles.newsContainer}>
                {news.map(
                    (el,index) => el.type === selectTypeNews && (<NewsElement 
                    key={index}
                    text={el.text}
                    link={el.link}
                    imageSource={el.imageSource}
                    />)
                )}
            </div>
            <div className={styles.quotesElement}>
                {quotes.map((el,index) => (
                    <QuoteElement 
                        key={index}
                        name={el.name}
                        value={el.value}
                        shift={el.shift}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopSide;