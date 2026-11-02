import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Tone = "butter" | "plum";

type Props = {
  id?: string;
  tag: string;
  title: string;
  image: string;
  alt: string;
  tone: Tone;
  reverse?: boolean;
  children: ReactNode;
};

// Blok van twee helften: foto op een gekleurd vlak, tekst op het andere
export function Split({ id, tag, title, image, alt, tone, reverse = false, children }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const other: Tone = tone === "butter" ? "plum" : "butter";
  return (
    <section id={id} className={`split${reverse ? " split--reverse" : ""}`}>
      <div className={`split__media tone-${other}`}>
        <figure className="photo">
          <img src={image} alt={alt} loading="lazy" />
          <figcaption className="sticker">{tag}</figcaption>
        </figure>
      </div>
      <div className={`split__text tone-${tone}`}>
        <div ref={ref} className="split__copy reveal">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
