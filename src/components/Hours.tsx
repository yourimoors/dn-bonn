import { HOURS } from "../data";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { useReveal } from "../hooks/useReveal";

// Week begint op maandag
const ORDER = [1, 2, 3, 4, 5, 6, 0];

export function Hours() {
  const { today } = useOpenStatus();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="hours tone-plum" id="tijden">
      <div className="wrap">
        <div className="section-head">
          <h2>
            Zes avonden <span className="hl">per week</span>
          </h2>
          <p>Maandag zijn we dicht. De rest van de week staat de tap voor je klaar, met op een paar dagen iets extra's.</p>
        </div>
        <div ref={ref} className="week reveal">
          {ORDER.map((i) => {
            const d = HOURS[i];
            const cls = ["ticket", d.closed && "ticket--closed", i === today && "ticket--today"].filter(Boolean).join(" ");
            return (
              <div key={d.name} className={cls}>
                {i === today && <span className="ticket__badge">Vandaag</span>}
                <span className="ticket__day">{d.name}</span>
                <span className="ticket__time">{d.closed ? "Gesloten" : `${d.open} – ${d.close}`}</span>
                {!d.closed && d.extra && <span className="ticket__extra">{d.extra}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
