# Disco-Bar D'n Bonn

Website voor [dn-bonn.nl](https://www.dn-bonn.nl) (Wilhelminalaan 53, Reusel), gebouwd met React + Vite + TypeScript.

## Starten

```bash
npm install
npm run dev      # lokaal op http://localhost:5173
npm run build    # productieversie in dist/, die map upload je naar de webserver
```

## Inhoud aanpassen

Alle teksten, openingstijden, telefoonnummers en foto-links staan in [`src/data.ts`](src/data.ts).
Kleuren en lettertypes staan bovenaan [`src/styles.css`](src/styles.css).

## Let op bij live zetten

- Foto's en het logo worden nog geladen van `https://www.dn-bonn.nl/images/…` en `/style/top.png` (oude site). Zet ze in `public/` en pas de paden in `src/data.ts` aan voordat de oude site verdwijnt.
- De foto's van de oude site zijn klein (ca. 300 px breed). Nieuwe, grotere foto's maken de site een stuk mooier.
- Het logo is uitgesneden uit de oude header (`top.png`). Vervang door een los logobestand (SVG/groot PNG) als dat er is.
- Het contactformulier opent het mailprogramma van de bezoeker (`mailto:`). Voor echt versturen: koppel een dienst zoals Formspree.
