'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "../styles/AppNavigation.css"

function AppNavigation({params}) {
  const pathname = usePathname().replace(/\//gm, "");// отрезать слэш слышь
    return (
      <div className="nav__menu">
        <Link href={`/${params.slug}`} className={`link ${pathname === params.slug ? 'nav__menu-item nav__link nav__link_active' : 'nav__menu-item nav__link'}`} >
          {' '}
          Описание{' '}
        </Link>
        <Link href={`/${params.slug}/faq`} className={`link ${pathname!== params.slug ? 'nav__menu-item nav__link nav__link_active' : 'nav__menu-item nav__link'}`}>
          Вопросы и ответы
        </Link>
      </div>
    );
  }
  export default AppNavigation;