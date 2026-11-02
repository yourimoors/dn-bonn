import { ALBUMS, CONTACT } from "../data";
import { useReveal } from "../hooks/useReveal";

export function Albums() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="albums tone-plum" id="fotos">
      <div className="wrap">
        <div className="section-head">
          <h2>
            Zo gaat het <span className="hl">eraan toe</span>
          </h2>
          <p>Bekijk de albums op onze Facebook-pagina en zoek jezelf terug.</p>
        </div>
        <div ref={ref} className="albums__grid reveal">
          {ALBUMS.map((a) => (
            <a key={a.href} className="album" href={a.href} target="_blank" rel="noopener">
              <img src={a.image} alt={a.title} loading="lazy" />
              <span className="album__label">
                {a.title}
                <span className="album__arrow" aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
        <div className="center">
          <a href={CONTACT.facebook} className="pill pill--butter" target="_blank" rel="noopener">
            Volg ons op Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
