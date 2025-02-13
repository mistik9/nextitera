import Link from 'next/link';
import AppNavigation from '@/components/AppNavigation';
import '../../../styles/MyApp.css';
import { app as myApp } from '@/utils/const';
import Transition from '@/components/Transition';
import Scroll from '@/components/Scroll';
import Script from 'next/script';

export async function generateMetadata({ params }) {
  const app = myApp.find((el) => el.id === params.slug);
  return {
    title: app.title,
    description: app.slogan,
  };
}
export function generateStaticParams({}) {
  const app = myApp.map((el) => ({ slug: el.id, id: el.faq.map((i) => i.id) }));

  return app;
}

export default function AvitoLayout({ children, params }) {
  const app = myApp.find((el) => el.id === params.slug);

  return (
    <Transition>
      <Scroll />
      <div className="my-app-layout">
        <div className="my-app__title-container">
          <img className="my-app__img" src={app.img} alt="иконка" />
          <h3 className="my-app__title">{app.title}</h3>
          <p className="my-app__text">{app.slogan}</p>
          
          {app.link.length > 0 && (
            <Link href={app.link} target="_blank" rel="noreferrer" className="my-app__link">
              Ссылка на приложение{' '}
            </Link>
          )}
          {app.id === 'amo-drom' ? (
            <img className="my-app__market" src="/images/amo.png"></img>
          ) : (
            <img className="my-app__market" src="/images/b24_ru.png"></img>
          )}
        </div>
        <AppNavigation params={params} />
      </div>
      {children}
    </Transition>
  );
}
