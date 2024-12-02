import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import app from"../images/app.svg";
import "../styles/MyApps.css"

function MyApps() {
  return (
    <section className="section my-apps" id="my-apps">
      <h2 className="section__title">Наши приложения</h2>
      <div className="my-apps__container">
        <Link href="/drom" className="section__link" >
          <div className="my-apps__item">
            <Image className="my-apps__img" src="/images/app.svg" height={60} width={70} alt="иконка" />
            <h4 className="my-apps__subtitle">ДРОМ: чаты, сделки, товары </h4>
            <p className="my-apps__text ">Интеграция диалогов, сделок, объявлений о продаже запчастей и автомобилей.</p>
            <p className="section__text section__text_sm"> Подробнее &#8594;</p>
          </div>
        </Link>
        <Link href="/avito" className="section__link" >
          <div className="my-apps__item">
            <Image className="my-apps__img" src="/images/app.svg" height={60} width={70} alt="иконка" />
            <h4 className="my-apps__subtitle">Avito: чаты и товары </h4>
            <p className="my-apps__text ">Интеграция диалогов и товаров на сайте Avito с порталом Битрикс24.</p>
            <p className="section__text section__text_sm"> Подробнее &#8594;</p>
          </div>
        </Link>
        <Link href="/autoload" className="section__link" >
          <div className="my-apps__item">
            <Image className="my-apps__img" src="/images/app.svg" height={60} width={70} alt="иконка" />
            <h4 className="my-apps__subtitle">Avito: автозагрузка</h4>
            <p className="my-apps__text ">Aвтозагрузка товаров или услуг с портала Битрикс24 на Avito.</p>
            <p className="section__text section__text_sm"> Подробнее &#8594;</p>
          </div>
        </Link>
        <Link href="/avitojob" className="section__link">
          <div className="my-apps__item">
            <Image className="my-apps__img" src="/images/app.svg" height={60} width={70} alt="иконка" />
            <h4 className="my-apps__subtitle">Avito: отклики и вакансии</h4>
            <p className="my-apps__text ">Чат, номер телефона кандидата, отклик и резюме в одном лиде или сделке портала Битрикс24.</p>
            <p className="section__text section__text_sm"> Подробнее &#8594;</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export { MyApps };
