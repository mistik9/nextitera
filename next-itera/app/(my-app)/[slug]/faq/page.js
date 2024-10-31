import FaqItem from './[id]';
import Link from 'next/link';


export default function Faq({ faq }) {

    console.log(faq)
  const renderFaq = faq?.map((item) => (
        <Link className="faq__link" href={`${item.id}`} key={item.id}>
            {console.log(item)}
            <div className="faq__block">
                <div className="faq__icon"> </div>
                <h4 className="faq__subtitle">{item.title}</h4>
            </div>
            <FaqItem item={item} />
        </Link>
  ));

  return (
        <div className="faq">
            {faq ? (renderFaq) : (
                <div className="my-app__title-container" >
                    <h4 className="my-app__subtitle">Здесь пусто. Пока что...</h4>
                </div >
            )}
        </div >

  );
}