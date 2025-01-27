'use client';

import Link from 'next/link';
import { app } from '@/utils/const';
import React from 'react';
import { usePathname } from 'next/navigation';
import '../../../../styles/Faq.css';


export default function Faq({params}) {
  const pathname = usePathname();
  let match = pathname.match(/\/([^}]+)\//);
  let substring = match ? match[1] : '';
  const myApp = app.find((el) => el.id === substring);

  const renderFaq = myApp.faq?.map((item, ) => (
    <Link className="faq__link" href={`/${params.slug}/faq/${item.id}`} key={item.id}>
      <div className="faq__block">
        <div className="faq__icon"> </div>
        <h4 className="faq__subtitle">{item.title}</h4>
      </div>
      </Link>
  ));

  return (
    <div className="faq">
      {myApp.faq.length > 0  ? (
        renderFaq
      ) : (
        <div className="my-app__title-container">
          <h4 className="my-app__subtitle">Здесь пусто. Пока что...</h4>
        </div>
      )}
    </div>
  );
}
