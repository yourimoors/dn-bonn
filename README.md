# Disco-Bar D'n Bonn

Nieuwe website voor [dn-bonn.nl](https://www.dn-bonn.nl) (Wilhelminalaan 53, Reusel). Statische HTML, geen build-stap.

## Designconcepten

Deze branch bevat zeven richtingen om aan de eigenaren te laten zien:

| Pad | Concept |
| --- | --- |
| `/` | Overzichtspagina met alle concepten |
| `/origineel/` | Huidige one-page versie (paars, modern) |
| `/concept-1-moderne-club/` | Dark mode met neon, DJ-vibe |
| `/concept-2-stamkroeg/` | Warm bruin café, historie, darten, Bavaria |
| `/concept-3-event-locatie/` | Hoog contrast, zaalverhuur en aanvragen |
| `/concept-4-memphis-disco/` | Speels 90s Memphis, dikke lijnen en vormen |
| `/concept-5-minimal-editorial/` | Rustig magazine, veel witruimte |
| `/concept-6-brabants-feest/` | Vrolijk Brabants, vlaggetjes en rood-wit blokken |

`assets/app.js` (openingstijden, menu, formulieren) wordt gedeeld door concept 2 t/m 6. `assets/back.js` toont de knop "← Alle concepten" en is alleen voor de presentatie.

## Vercel

Importeer de repo in Vercel als "Other" / statische site (geen build command, output directory leeg). `vercel.json` zet nette URL's aan.

## Let op bij live zetten

- Kies één concept en verplaats die `index.html` naar de root. Verwijder daarna de andere mappen, `assets/back.js` en de overzichtspagina.
- Foto's en het logo worden nog geladen van `https://www.dn-bonn.nl/images/…` en `/style/top.png` (oude site). Kopieer die mee voordat de oude site verdwijnt.
- De sfeerfoto's van Unsplash zijn placeholders. Vervang ze door eigen foto's.
- Het contactformulier opent het mailprogramma van de bezoeker (`mailto:`). Voor echt versturen: koppel een dienst zoals Formspree.
- Openingstijden staan in de `HOURS`-lijst (in `index.html` bij concept 1 en origineel, in `assets/app.js` bij concept 2 t/m 6).
- Concept 3: de inhoud van de twee arrangementen is voorbeeldtekst tot de echte inhoud bekend is.
