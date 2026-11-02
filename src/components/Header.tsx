import { useEffect, useState } from "react";
import { CONTACT } from "../data";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#zaak", label: "De zaak" },
  { href: "#tijden", label: "Openingstijden" },
  { href: "#feest", label: "Feestje" },
  { href: "#fotos", label: "Foto's" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);

  // Escape sluit het mobiele menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`header${open ? " header--open" : ""}`}>
      {showBar && (
        <div className="announce">
          <span>
            Elke woensdag <b>gratis darten</b> · Zondag <b>gratis broodje</b>
          </span>
          <button className="announce__close" onClick={() => setShowBar(false)} aria-label="Melding sluiten">
            ×
          </button>
        </div>
      )}
      <nav className="nav">
        <a href="#top" className="nav__brand" aria-label="D'n Bonn, naar boven">
          <Logo size={56} />
        </a>
        <ul className="nav__links" id="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={CONTACT.phone.href} className="pill pill--pink">
              Bel ons
            </a>
          </li>
        </ul>
        <button
          className="nav__toggle"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
