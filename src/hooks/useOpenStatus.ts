import { useEffect, useState } from "react";
import { HOURS } from "../data";

const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

// Tijd in Reusel, ongeacht waar de bezoeker zit
export function reuselNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }));
}

export type OpenStatus = { open: boolean; text: string; today: number };

export function getOpenStatus(now = reuselNow()): OpenStatus {
  const today = now.getDay();
  const nowMin = now.getHours() * 60 + now.getMinutes();

  // Sluitingstijd na middernacht hoort bij de vorige dag
  const y = HOURS[(today + 6) % 7];
  if (!y.closed && nowMin < toMin(y.close)) return { open: true, text: `Nu open tot ${y.close}`, today };

  const t = HOURS[today];
  if (!t.closed && nowMin >= toMin(t.open)) return { open: true, text: `Nu open tot ${t.close}`, today };
  if (!t.closed) return { open: false, text: `Vandaag open vanaf ${t.open}`, today };

  for (let k = 1; k <= 7; k++) {
    const n = HOURS[(today + k) % 7];
    if (!n.closed) return { open: false, text: `${k === 1 ? "Morgen" : n.name} weer open vanaf ${n.open}`, today };
  }
  return { open: false, text: "Gesloten", today };
}

export function useOpenStatus() {
  const [status, setStatus] = useState(getOpenStatus);
  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
}
