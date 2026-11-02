import { HERO_IMAGE } from "../data";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { Wave } from "./Wave";

export function Hero() {
  const status = useOpenStatus();
  return (
    <section className="hero" id="top">
      <div className="hero__bg" style={{ backgroundImage: `url("${HERO_IMAGE}")` }} role="img" aria-label="De paars verlichte bar van D'n Bonn" />
      <div className="wrap hero__inner">
        <span className={`status${status.open ? " status--open" : ""}`}>
          <span className="status__dot" />
          {status.text}
        </span>
        <h1>
          Gezelligheid
          <br />
          in de <span className="hl">Kempen!</span>
        </h1>
        <p className="hero__lead">
          Terras, bruin café en discotheek onder één dak. Van een rustig biertje na het fietsen tot dansen tot
          sluitingstijd, midden in Reusel.
        </p>
        <div className="actions">
          <a href="#tijden" className="pill pill--pink">Wanneer zijn we open?</a>
          <a href="#feest" className="pill pill--butter">Feestje geven</a>
        </div>
      </div>
      <Wave color="var(--butter)" />
    </section>
  );
}
