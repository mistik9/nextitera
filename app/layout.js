import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';
import ScrollToTop from '@/components/ScrollToTop';
import Transition from '@/components/Transition';
import YandexMetrika from '@/components/YandexMetrika';

export const metadata = {
  title: 'ITera',
  description: 'Мы занимаемся разработкой приложений и интеграций для CRM. Основное направление - интеграции с маркетплейсами и торговыми площадками.',
  openGraph: {
    title: 'ITera',
    description: 'Мы занимаемся разработкой приложений и интеграций для CRM. Основное направление - интеграции с маркетплейсами и торговыми площадками.',
    url: 'https://newitera.ru',
    siteName: 'ITera',
    images: [
      {
        url: 'https://newitera.ru/images/', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <YandexMetrika yid="95887604" clickmap={true} trackLinks={true} accurateTrackBounce={true} webvisor={true} />
      </head>
      <body className="page">
        <ScrollToTop />
        <Header />
        <Transition> {children} </Transition>
        <Footer />
      </body>
    </html>
  );
}
