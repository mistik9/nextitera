'use client';
import Link from 'next/link';
import Sector from '@/components/Sector';
import { usePathname } from 'next/navigation';
import { app as myApp } from '@/utils/const';

import AppNavigation from '@/components/AppNavigation';
import Faq from './faq/page';

export default function Avito() {
  const path = usePathname().replace(/\//gm, '');
  const app = myApp.find((el) => el.id === path);
  const { description } = app;

  const decsItem = description.list?.map((i) => (
    <li key={i.text} className="my-app__list-item">
      <p className="my-app__text">{i.text}</p>
    </li>
  ));

  return (
    <>
      <div className="my-app-layout">
        <div className="my-app__title-container">
          <img className="my-app__img" src={app.img} alt="иконка" />
          <h3 className="my-app__title">{app.title}</h3>
          <p className="my-app__text">{app.slogan}</p>
          <Link href={app.link} target="_blank" rel="noreferrer" className="my-app__link">
            Ссылка на приложение{' '}
          </Link>
        </div>
        <AppNavigation faq={app.faq}/>
      </div>
      <div className="my-app">
        <p className="my-app__text">{app.about}</p>
        <ul className="my-app__list">
          Главные преимущества приложения:
          {decsItem}
        </ul>
        <h4 className="my-app__subtitle">
          Все обновления приложения вы можете посмотреть в разделе:
          <Link className="my-app__navlink" href="/news">
            Новости
          </Link>
        </h4>

        <Sector />
      </div>
  
    </>
  );
}
