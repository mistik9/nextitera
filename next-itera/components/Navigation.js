import React from 'react';
import Link from 'next/link';
import '../styles/Navigation.css';

function Navigation({ isNavOpen, openMenu, setIsNavOpen }) {
  return (
    <nav className="nav">
      <div className={`nav__list ${!isNavOpen ? '' : 'nav__list_shown'}`}>
        <Link className="nav__link" href="/#about">
          О компании
        </Link>
        <Link className="nav__link" href="/#my-apps">
          Наши приложения
        </Link>
        <Link className="nav__link" href="/bitrix">
          Битрикс24
        </Link>
        <Link className="nav__link" href="/news">
          Новости
        </Link>
        <Link className="nav__link" href="/#feedback">
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
