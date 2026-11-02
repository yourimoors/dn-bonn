// Golvende rand onderaan (of met flip bovenaan) een sectie, in de kleur van de buursectie
export function Wave({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <svg
      className={`wave${flip ? " wave--top" : ""}`}
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 38C180 70 360 70 540 44S900 0 1080 18s300 44 360 30V70H0Z" fill={color} />
    </svg>
  );
}
