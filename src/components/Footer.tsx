import { CONTACT } from "../data";
import { Logo } from "./Logo";
import { Wave } from "./Wave";

export function Footer() {
  return (
    <footer className="footer tone-plum">
      <Wave color="var(--plum)" flip />
      <div className="wrap footer__inner">
        <Logo size={72} />
        <p className="footer__tag">Gezelligheid in de Brabantse Kempen</p>
        <nav className="footer__links">
          <a href="#zaak">De zaak</a>
          <a href="#tijden">Openingstijden</a>
          <a href="#feest">Feestje</a>
          <a href={CONTACT.facebook} target="_blank" rel="noopener">Facebook</a>
        </nav>
        <p className="footer__small">
          © {new Date().getFullYear()} Disco-Bar D'n Bonn · {CONTACT.street}, Reusel · {CONTACT.phone.label}
        </p>
      </div>
    </footer>
  );
}
