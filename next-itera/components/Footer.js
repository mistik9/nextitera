
import { Logo } from './Logo';

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <Logo />
      <p className="footer__copyright">{`© ${currentDate}`}</p>
    </footer>
  );
}

export { Footer };
