'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { updatesAutoload, updatesAvito, updatesDrom, updatesAvitojob } from '@/utils/const';
import "../../styles/News.css";

export default function News() {
  const autoload = updatesAutoload.map((i) => ({ title: (i.title = 'Avito: автозагрузка'), period: i.list_name, list: i.list }));
  const avito = updatesAvito.map((i) => ({ title: (i.title = 'Avito: чаты и товары'), period: i.list_name, list: i.list }));
  const drom = updatesDrom.map((i) => ({ title: (i.title = 'ДРОМ: чаты, сделки, товары'), period: i.list_name, list: i.list }));
  const avitojob = updatesAvitojob.map((i) => ({ title: (i.title = 'Avito: отклики и вакансии'), period: i.list_name, list: i.list }));
  const resArr = avito.concat(autoload, drom, avitojob);

  const resArrConverted = resArr.sort((a, b) => {
    const aa = a.period.split('.').reverse().join();
    const bb = b.period.split('.').reverse().join();
    return aa < bb ? 1 : aa > bb ? -1 : 0;
  });
  const [news, setNews] = useState(resArrConverted);

  const newsCheck = (title) => {
    if (title === '') return setNews(resArrConverted);
    const newItems = resArrConverted.filter((item) => item.title === title);
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
            {i.list?.map((el) => (
              <p className="news__text">{el.text}</p>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}
