const ITEMS = ["Terras", "'t Bonneke", "Discotheek", "Shot & Cocktail Bar", "Gratis darten", "Verzoekjes welkom"];

export function Ticker() {
  // Twee keer dezelfde rij, zodat de loop naadloos is
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
