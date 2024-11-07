import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';
import ScrollToTop from '@/components/ScrollToTop';
import Transition from '@/components/Transition';

export const metadata = {
  title: 'ITera',
  description: 'Мы занимаемся разработкой приложений и интеграций для CRM. Основное направление - интеграции с маркетплейсами и торговыми площадками.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="page">
        <ScrollToTop />
        <Header />
        <Transition> {children} </Transition>
        <Footer />
      </body>
    </html>
  );
}
