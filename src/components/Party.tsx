import { CONTACT } from "../data";
import { useReveal } from "../hooks/useReveal";
import { Wave } from "./Wave";

const FACTS = [
  { big: "150", small: "gasten max" },
  { big: "€0", small: "zaalhuur" },
  { big: "DJ", small: "met verzoekjes" },
];

export function Party() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="party tone-pink" id="feest">
      <Wave color="var(--pink)" flip />
      <div ref={ref} className="wrap party__inner reveal">
        <div>
          <span className="kicker">Heb je iets te vieren?</span>
          <h2>Geef je feest bij D'n Bonn</h2>
          <p>
            Verjaardag, jubileum of gewoon een reden om te proosten? Wij regelen de ruimte, de bar en de muziek. Bel of
            mail ons voor de mogelijkheden.
          </p>
          <div className="actions">
            {CONTACT.partyPhones.map((p, i) => (
              <a key={p.href} href={p.href} className={`pill ${i === 0 ? "pill--plum" : "pill--cream"}`}>
                {p.label}
              </a>
            ))}
            <a href={`mailto:${CONTACT.email}?subject=Feestje%20bij%20D'n%20Bonn`} className="pill pill--cream">
              Mail ons
            </a>
          </div>
        </div>
        <ul className="stickers">
          {FACTS.map((f) => (
            <li key={f.big} className="badge">
              <b>{f.big}</b>
              <span>{f.small}</span>
            </li>
          ))}
        </ul>
      </div>
      <Wave color="var(--plum)" />
    </section>
  );
}
