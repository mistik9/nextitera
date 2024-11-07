'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { app } from '@/utils/const';
import '../../styles/News.css';

export default function News() {
  const updates = app.map((i) => i.updates.map((el) => ({ title: i.title, period: el.list_name, list: el.list }))); //из константы app составили массивы обновлений

  const flattenedUpdates = updates.flat(); // объединили в один массив

  //отсортировали массив по дате
  const sortedUpdates = flattenedUpdates.sort((a, b) => {
    const aa = a.period.split('.').reverse().join();
    const bb = b.period.split('.').reverse().join();
    return aa < bb ? 1 : aa > bb ? -1 : 0;
  });

  const [news, setNews] = useState(sortedUpdates);

  // фильтрация новостей по приложению
  const newsCheck = (title) => {
    if (title === '') return setNews(sortedUpdates);
    const newItems = sortedUpdates.filter((item) => item.title === title);
    return setNews(newItems);
  };

  return (
    <section className="news">
      <h2 className="news__title">Новости</h2>
      <div className="news__filter">
        <p className="section__text">Показывать:</p>
        <button className="news__btn" onClick={() => newsCheck('')}>
          Все новости
        </button>
        <button className="news__btn" onClick={() => newsCheck('Avito: автозагрузка')}>
          Avito: автозагрузка
        </button>
        <button className="news__btn" onClick={() => newsCheck('Avito: чаты и товары')}>
          Avito: чаты и товары
        </button>
        <button className="news__btn" onClick={() => newsCheck('ДРОМ: чаты, сделки, товары')}>
          ДРОМ: чаты, сделки, товары
        </button>
        <button className="news__btn" onClick={() => newsCheck('Avito: отклики и вакансии')}>
          Avito: отклики и вакансии
        </button>
      </div>
      <ul className="news__list">
        {news.map((i) => (
          <li className="news__list-item" key={i.period + i.title}>
            <p className="news__list-period">{i.period}</p>
            {i.title === 'Avito: автозагрузка' ? (
              <Link href="/autoload" className="news__list-title">
                {i.title}
              </Link>
            ) : i.title === 'Avito: чаты и товары' ? (
              <Link href="/avito" className="news__list-title">
                {i.title}
              </Link>
            ) : i.title === 'ДРОМ: чаты, сделки, товары' ? (
              <Link href="/drom" className="news__list-title">
                {i.title}
              </Link>
            ) : (
              <Link href="/avitojob" className="news__list-title">
                {i.title}
              </Link>
            )}
            {i.list?.map((el, index) => (
              <p className="news__text" key={index}>
                {el.text}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </section>
    // </motion.section>
  );
}
