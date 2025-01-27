'use client';
import Link from 'next/link';
import Sector from '@/components/Sector';
import { usePathname } from 'next/navigation';
import { app as myApp } from '@/utils/const';
import Script from 'next/script';

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
    <div className="my-app">
      <p className="my-app__text">{app.about}</p>
      <ul className="my-app__list">
        Главные преимущества приложения:
        {decsItem}
      </ul>
      <div>
        {app.id == 'amo-drom' && (
          <div className='my-app__amo-block'>
            <a  href="https://www.amocrm.ru/oauth/?client_id=445790ae-b04d-4df8-9803-d93430251b3b" target="_blank" rel="noopener">
              <button className="my-app__btn">Установить виджет</button>
            </a>
            <h3>Подключите {app.title} к amoCRM</h3>
          </div>
        )}
      </div>
      <h4 className="my-app__subtitle">
        Все обновления приложения вы можете посмотреть в разделе:
        <Link className="my-app__navlink" href="/news">
          Новости
        </Link>
      </h4>

      <Sector />
    </div>
  );
}
