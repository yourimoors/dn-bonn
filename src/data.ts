// Alle inhoud van de site op één plek. Pas hier tijden, teksten en foto's aan.

const OLD_SITE = "https://www.dn-bonn.nl";

export type Day =
  | { name: string; closed: true }
  | { name: string; closed?: false; open: string; close: string; extra?: string };

// Index volgt Date.getDay(): 0 = zondag.
export const HOURS: Day[] = [
  { name: "Zondag", open: "14:00", close: "01:00", extra: "Gratis broodje" },
  { name: "Maandag", closed: true },
  { name: "Dinsdag", open: "20:00", close: "01:00" },
  { name: "Woensdag", open: "20:00", close: "01:00", extra: "Gratis darten" },
  { name: "Donderdag", open: "20:00", close: "01:00", extra: "Competitie darten" },
  { name: "Vrijdag", open: "20:00", close: "02:00" },
  { name: "Zaterdag", open: "20:00", close: "02:00" },
];

export const CONTACT = {
  street: "Wilhelminalaan 53",
  city: "5541 CT Reusel",
  phone: { label: "0497 64 14 14", href: "tel:+31497641414" },
  partyPhones: [
    { label: "06 18 94 10 94", href: "tel:+31618941094" },
    { label: "06 38 06 30 47", href: "tel:+31638063047" },
  ],
  email: "info@dn-bonn.nl",
  facebook: "https://www.facebook.com/dn.bonn",
  maps: "https://maps.google.com/?q=Wilhelminalaan+53,+5541CT+Reusel",
  mapEmbed: "https://maps.google.com/maps?q=Wilhelminalaan%2053%2C%205541CT%20Reusel&z=15&output=embed",
};

export const HERO_IMAGE = `${OLD_SITE}/images/discotheek-dnbonn-reusel.jpg`;
export const LOGO_SPRITE = `${OLD_SITE}/style/top.png`;

export type Space = {
  id: string;
  tag: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const SPACES: Space[] = [
  {
    id: "terras",
    tag: "Buiten",
    title: "Het terras",
    text: "Heerlijk uitrusten na een fietstocht door de Kempen, of gezellig afspreken met vrienden. Op ons terras geniet je van de Brabantse gezelligheid, met een drankje en een hapje erbij.",
    image: `${OLD_SITE}/images/terras2.jpg`,
    alt: "Het terras van D'n Bonn met parasols",
  },
  {
    id: "bonneke",
    tag: "Bruin café",
    title: "'t Bonneke",
    text: "In ons bruine café ben je altijd welkom voor een goed gesprek. Met D'n Bonn achter de tap en goede muziek op de achtergrond voel je je hier al snel thuis.",
    image: `${OLD_SITE}/images/bonneke.jpg`,
    alt: "Het bruine café 't Bonneke",
  },
  {
    id: "discotheek",
    tag: "Dansen",
    title: "De discotheek",
    text: "Voor jong en oud, single of getrouwd. De deejay draait allround: hits van nu en van vroeger. Heb je een verzoekje? Zeg het maar, dan draaien we het. Durf jij een dansje te wagen?",
    image: `${OLD_SITE}/images/bar.jpg`,
    alt: "De discotheek met paarse verlichting en de Shot & Cocktail Bar",
  },
];

export const ALBUMS = [
  {
    title: "Stappen @ D'n Bonn",
    image: `${OLD_SITE}/images/1185493_500599166695924_1723571368_n.jpg`,
    href: "https://www.facebook.com/pg/dn.bonn/photos/?tab=album&album_id=500600030029171",
  },
  {
    title: "Vrijdagavond Events",
    image: `${OLD_SITE}/images/11000654_798502503572254_7008382119285902711_o.jpg`,
    href: "https://www.facebook.com/pg/dn.bonn/photos/?tab=album&album_id=548702215218952",
  },
];
