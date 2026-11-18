# Disco-Bar D'n Bonn

Nieuwe website voor [dn-bonn.nl](https://www.dn-bonn.nl) (Wilhelminalaan 53, Reusel). Statische HTML, geen build-stap.

## Structuur

- `index.html`: de hele site (stamkroeg met feestzaal, paarse moderne look)
- `assets/app.js`: openingstijden, open-status, menu en formulieren
- `vercel.json`: nette URL's op Vercel

## Let op

- Foto's en het logo worden nog geladen van `https://www.dn-bonn.nl/images/…` en `/style/top.png` (oude site). Kopieer die mee of vervang ze door de nieuwe foto's voordat de oude site verdwijnt.
- Veranda: de foto volgt. Het fotovlak heeft het opschrift "Foto volgt binnenkort" (class `veranda-ph`).
- Het contactformulier en het zaalaanvraagformulier openen het mailprogramma van de bezoeker (`mailto:`). Voor echt versturen: koppel een dienst zoals Formspree.
- Openingstijden staan in de `HOURS`-lijst in `assets/app.js`: vijf avonden open, maandag en dinsdag gesloten.
- De eerdere designconcepten staan in de git-geschiedenis (commit `0662c20`).

## Formulieren (Formspree)

Beide formulieren staan klaar voor Formspree. Vul in `assets/app.js` bij `FORMSPREE` de adressen in (`https://formspree.io/f/...`). Zolang een adres leeg is, opent de site het mailprogramma van de bezoeker. Het onderwerp, de spamvalstrik (`_gotcha`) en het antwoord-adres worden automatisch meegestuurd.
