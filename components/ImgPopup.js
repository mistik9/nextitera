import '../styles/ImgPopup.css';
import Image from 'next/image';
import hostImageLoader from './ImageLoader';

function ImgPopup({ selectedImg, onclose, isPopupOpen }) {
  const placeholderURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkOAMAANIAzr59FiYAAAAASUVORK5CYII="
  return (
    <section className={`popup ${isPopupOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container popup__container_image">
        <button className="popup__close" type="button" onClick={onclose}></button>
        <Image loader={hostImageLoader} placeholder="blur" blurDataURL='placeholderURL'    className="popup__image" src={selectedImg ? selectedImg: placeholderURL} alt="скриншот" width={860} height={480}/>
        <p className="popup__disc"></p>
      </div>
    </section>
  );
}

export   {ImgPopup};