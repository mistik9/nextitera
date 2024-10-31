import Link from 'next/link';
import AppNavigation from '@/components/AppNavigation';
import '../../../styles/MyApp.css';
import { app  as myApp }  from "@/utils/const";

export async function generateMetadata({ params }) {
  const app = myApp.find(el=> el.id === params.slug)

  return {
    title: app.title,
    description: app.slogan
    
  };
}

export default function AvitoLayout({ children }) {
  return <div>{children}</div>;
}
