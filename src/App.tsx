import { CONTACT, SPACES } from "./data";
import { Albums } from "./components/Albums";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hours } from "./components/Hours";
import { Party } from "./components/Party";
import { Split } from "./components/Split";
import { Ticker } from "./components/Ticker";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div id="zaak">
          <div className="intro tone-butter">
            <div className="wrap section-head">
              <h2>
                Drie sferen, <span className="hl">één adres</span>
              </h2>
              <p>
                Buiten in de zon, aan de tap bijpraten of de dansvloer op: bij D'n Bonn kan het allemaal, gewoon onder
                één dak.
              </p>
            </div>
          </div>
          {SPACES.map((s, i) => (
            <Split
              key={s.id}
              tag={s.tag}
              title={s.title}
              image={s.image}
              alt={s.alt}
              tone={i % 2 === 0 ? "butter" : "plum"}
              reverse={i % 2 === 1}
            >
              <p>{s.text}</p>
            </Split>
          ))}
        </div>
        <Ticker />
        <Hours />
        <Party />
        <Albums />
        <Contact />
      </main>
      <Footer />
      <a href={CONTACT.phone.href} className="call-fab pill pill--pink">
        Bel {CONTACT.phone.label}
      </a>
    </>
  );
}
