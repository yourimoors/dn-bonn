import type { FormEvent } from "react";
import { CONTACT } from "../data";
import { useReveal } from "../hooks/useReveal";
import { Wave } from "./Wave";

// Formulier opent de mailapp van de bezoeker (geen server nodig)
function onSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const name = String(f.get("name"));
  const email = String(f.get("email") || "");
  const body = `${f.get("message")}\n\n${name}${email ? ` (${email})` : ""}`;
  const subject = String(f.get("subject") || "Bericht via de website");
  location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="contact tone-butter" id="contact">
      <Wave color="var(--butter)" flip />
      <div className="wrap">
        <div className="section-head">
          <h2>Kom langs of stuur een berichtje</h2>
          <p>Vraag, reservering of feestje? Laat het ons weten, we reageren zo snel mogelijk.</p>
        </div>
        <div ref={ref} className="contact__grid reveal">
          <div className="card">
            <dl className="info">
              <div>
                <dt>Adres</dt>
                <dd>
                  <a href={CONTACT.maps} target="_blank" rel="noopener">
                    {CONTACT.street}
                    <br />
                    {CONTACT.city}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Telefoon</dt>
                <dd>
                  <a href={CONTACT.phone.href}>{CONTACT.phone.label}</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </dd>
              </div>
            </dl>
            <form className="form" onSubmit={onSubmit}>
              <div className="form__row">
                <label>
                  Naam *
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  E-mail
                  <input name="email" type="email" autoComplete="email" />
                </label>
              </div>
              <label>
                Onderwerp
                <input name="subject" />
              </label>
              <label>
                Bericht *
                <textarea name="message" required />
              </label>
              <button className="pill pill--pink" type="submit">
                Verstuur bericht
              </button>
            </form>
          </div>
          <div className="map">
            <iframe title={`Kaart: ${CONTACT.street}, Reusel`} loading="lazy" src={CONTACT.mapEmbed} />
          </div>
        </div>
      </div>
    </section>
  );
}
