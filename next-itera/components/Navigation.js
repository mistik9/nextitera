'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/Navigation.css';

function Navigation({}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function openMenu() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <nav className="nav">
      <div className={`nav__list ${!isNavOpen ? '' : 'nav__list_shown'}`}>
        <Link className="nav__link" href="/#about" onClick={()=>setIsNavOpen(false)}>
          О компании
        </Link>
        <Link className="nav__link" href="/#my-apps" onClick={()=>setIsNavOpen(false)}>
          Наши приложения
        </Link>
        <Link className="nav__link" href="/bitrix"   onClick={()=>setIsNavOpen(false)}>
          Битрикс24
        </Link>
        <Link className="nav__link" href="/news" onClick={()=>setIsNavOpen(false)}>
          Новости
        </Link>
        <Link className="nav__link" href="/#feedback" onClick={()=>setIsNavOpen(false)}>
          Контакты
        </Link>
      </div>
      <button className={`nav__burger ${!isNavOpen ? '' : 'nav__burger_close'}`} onClick={openMenu}>
        <div className={`nav__burger-line  ${!isNavOpen ? '' : 'nav__burger-line_first'}`}></div>
        <div className={`nav__burger-line  ${!isNavOpen ? '' : 'nav__burger-line_second'}`}></div>
        <div className={`nav__burger-line  ${!isNavOpen ? '' : 'nav__burger-line_third'}`}></div>
      </button>
    </nav>
  );
}
export { Navigation };
