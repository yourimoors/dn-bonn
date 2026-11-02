import { LOGO_SPRITE } from "../data";

// Originele logo-tegel, uitgesneden uit de oude header (120×127 px op 15,29 in top.png)
export function Logo({ size = 60 }: { size?: number }) {
  const s = size / 120;
  return (
    <span
      className="logo"
      role="img"
      aria-label="Logo Disco-Bar d'n bonn"
      style={{
        width: size,
        height: 127 * s,
        backgroundImage: `url("${LOGO_SPRITE}")`,
        backgroundSize: `${960 * s}px ${180 * s}px`,
        backgroundPosition: `${-15 * s}px ${-29 * s}px`,
      }}
    />
  );
}
