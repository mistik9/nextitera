
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';

export const metadata = {
  title: 'ITera',
  description: 'Мы занимаемся разработкой приложений и интеграций для CRM. Основное направление - интеграции с маркетплейсами и торговыми площадками.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='page'>
        <Header />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
