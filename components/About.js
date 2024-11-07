import React from "react";
import { Circle } from "./Circle";
import "../styles/About.css"

function About ()  {
  return (
    <>
      <section  className="lead section" id="about">
        <div className="d1">
          <div className="d2">
            <div className="d3">
              <div className="d4">
                <div className="d5">
                  <div className="d6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1  className="lead__title">
          ITera
        </h1>
        <p  className="lead__subtitle">
          Открой новые возможности
        </p>
      </section>
      <section className="section " id="about">
 <Circle />
        <article className="section__article">
          <p className="section__text">Компания ITera специализируется на разработке актуального программного обеспечения для бизнеса в Битрикс24.</p>
          <p className="section__text">Мы предлагаем широкий спектр решений, которые помогут вашей компании эффективно работать в современных условиях.</p>
          <p className="section__text">
            Наша команда опытных разработчиков гарантирует высокое качество наших продуктов и оперативное реагирование на запросы клиентов.
          </p>
        </article>
      </section>
      <section className="section section_right">
      <Circle />
        <article className="section__article">
          <p className="section__text">Мы занимаемся разработкой приложений и интеграций для CRM.</p>
          <p className="section__text">Наше основное направление - интеграции с маркетплейсами и торговыми площадками.</p>
        </article>
      </section>
      </>
  )
};

export  {About};
