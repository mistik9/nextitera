import Link from 'next/link';
import { app as myApp } from '@/utils/const';

export async function generateMetadata({ params }) {
  const app = myApp.find((el) => el.id === params.slug);
  const faqItem = app.faq.find((el) => el.id === params.id);

  return {
    title: `${app.title} "${faqItem.title}"`,
    description: `Вопросы и ответы по приложению ${app.title}`,
  };
}
export function generateStaticParams({ params }) {
  return params.id.map((i) => ({ id: i }));
}

export default function FaqLayout({ children, params }) {
  return <div>{children}</div>;
}
