"use client"
import React from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useParams, usePathname } from 'next/navigation'

import { ImgPopup } from '@/components/ImgPopup';

function FaqItem({ faq }) {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);
  const { id } = useParams();
  // const navigate = useNavigate();
  const path = usePathname().replace(/[^\/]+$/, ''); // обрезать последнюю часть url
  const selectedItem = faq?.filter((i) => i.id === id).map((i) => i)[0];

  function closePopup() {
    setIsPopupOpen(false);
  }

  function onClickImg(e) {
    setIsPopupOpen(true);
    setSelectedImg(e.target.src);
  }

  return (
    <>

      {faq
        ?.filter((i) => i.id === id)
        .map((i, index) => (
          <div className="faq" key={index}>
            <div className="faq__block" key={i.id} onClick={() => console.log('navigate(`${path}`)')}>
              <div className="faq__icon faq__icon_minus"> </div>
              <h4 className="faq__subtitle">{i.title}</h4>
            </div>
            <ul className="faq__list">
              {i?.list?.map((i, index) => (
                <li key={index} className="faq__list-item">
                  <p className="faq__text">{i.text}</p>
                  <div className="faq__img-container">{i.link ? <img className="faq__img" src={i.link} alt="скриншот" onClick={onClickImg}></img> : null}</div>
                </li>
              ))}
              {i?.text}
              <div className="faq__support">
                {i.support && <a className="section__icon section__icon_tg" href="https://t.me/+79958454368" target="_blank" rel="noreferrer" ></a>}
                {i.support_wa && <a className="section__icon section__icon_wa" href="https://wa.me/79958454368?text=" target="_blank" rel="noreferrer"></a>}
              </div>
            </ul>
          </div>
        ))}
      <ImgPopup selectedImg={selectedImg} onclose={closePopup} isPopupOpen={isPopupOpen} />
    </>
  );
}

export default FaqItem;