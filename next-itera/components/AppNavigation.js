'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "../styles/AppNavigation.css"

function AppNavigation({faq}) {
  const pathname = usePathname()


    return (
      <div className="nav__menu">
        <Link href={pathname} className={`link ${pathname === './' ? 'nav__menu-item nav__link nav__link_active' : 'nav__menu-item nav__link'}`} >
          {' '}
          Описание{' '}
        </Link>
        <Link href={`${pathname}/faq`} className={`link ${pathname === './faq' ? 'nav__menu-item nav__link nav__link_active' : 'nav__menu-item nav__link'}`}>
          Вопросы и ответы
        </Link>
      </div>
    );
  }
  export default AppNavigation;