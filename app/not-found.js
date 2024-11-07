"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/PageNotFound.css';

function PageNotFound() {
    const router = useRouter();

  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__subtitle">Страница не найдена</p>
      <button className="notfound__btn" onClick={() => router.back()}>
        Назад
      </button>
      <div className="notfound__img"></div>
    </div>
  );
}

export default PageNotFound;