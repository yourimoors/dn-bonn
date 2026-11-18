// Gedeelde logica voor concept 2 en 3: openingstijden, open-status, menu, formulieren, reveal.
// Verwacht (optioneel) de ids: week, status, statusText, year, nav, menuToggle, navLinks.
(() => {
  // Openingstijden. Index volgt Date.getDay(): 0 = zondag.
  const HOURS = [
    { name: "Zondag",    open: "14:00", close: "01:00", extra: "Gratis broodje" },
    { name: "Maandag",   closed: true },
    { name: "Dinsdag",   closed: true },
    { name: "Woensdag",  open: "20:00", close: "01:00", extra: "Gratis darten" },
    { name: "Donderdag", open: "20:00", close: "01:00", extra: "Dartavond" },
    { name: "Vrijdag",   open: "20:00", close: "02:00" },
    { name: "Zaterdag",  open: "20:00", close: "02:00" },
  ];
  const $ = id => document.getElementById(id);
  const toMin = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };

  // Tijd in Reusel, ongeacht waar de bezoeker zit
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }));
  const today = now.getDay();
  const nowMin = now.getHours() * 60 + now.getMinutes();

  const week = $("week");
  if (week) {
    [1, 2, 3, 4, 5, 6, 0].forEach(i => {
      const d = HOURS[i];
      const el = document.createElement("div");
      el.className = "day" + (d.closed ? " closed" : "") + (i === today ? " today" : "");
      el.innerHTML = `<span class="day-name">${d.name}</span>
        <span class="day-time">${d.closed ? "Gesloten" : `${d.open} – ${d.close}`}</span>
        ${d.extra ? `<span class="day-extra">${d.extra}</span>` : ""}`;
      week.appendChild(el);
    });
  }

  // Open-status: sluitingstijd na middernacht hoort bij de vorige dag
  function status() {
    const y = HOURS[(today + 6) % 7];
    if (!y.closed && nowMin < toMin(y.close)) return { open: true, text: `Nu open tot ${y.close}` };
    const t = HOURS[today];
    if (!t.closed && nowMin >= toMin(t.open)) return { open: true, text: `Nu open tot ${t.close}` };
    if (!t.closed) return { open: false, text: `Vandaag open vanaf ${t.open}` };
    for (let k = 1; k <= 7; k++) {
      const n = HOURS[(today + k) % 7];
      if (!n.closed) return { open: false, text: `${k === 1 ? "Morgen" : n.name} weer open vanaf ${n.open}` };
    }
  }
  const s = status();
  document.querySelectorAll("[data-status]").forEach(el => el.classList.toggle("open", s.open));
  document.querySelectorAll("[data-status-text]").forEach(el => { el.textContent = s.text; });
  if ($("year")) $("year").textContent = now.getFullYear();

  // Nav
  const nav = $("nav"), toggle = $("menuToggle");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", scrollY > 30);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    if (toggle) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open);
      });
      document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => {
        nav.classList.remove("open"); toggle.setAttribute("aria-expanded", false);
      }));
    }
  }

  // ---------------------------------------------------------------
  // FORMULIEREN via Formspree
  // Vul hieronder de adressen in die Formspree geeft, bijvoorbeeld
  //   contact: "https://formspree.io/f/abcdwxyz"
  // Beide formulieren mogen hetzelfde adres gebruiken. Zolang een adres leeg is,
  // opent de site het mailprogramma van de bezoeker (mailto), zodat niets stuk gaat.
  // ---------------------------------------------------------------
  const FORMSPREE = Object.assign({
    contact: "https://formspree.io/f/mwlobanr",    // contactformulier onderaan de pagina
    feestzaal: "https://formspree.io/f/mrpqkrao",  // aanvraag feestzaal
  }, window.FORMSPREE_ENDPOINTS || {});
  const FALLBACK_MAIL = "info@dn-bonn.nl";
  const MSG = {
    sending: "Bezig met versturen…",
    ok: "Bedankt! Je bericht is verstuurd. We nemen zo snel mogelijk contact met je op.",
    err: "Versturen is niet gelukt. Probeer het opnieuw of bel ons: 06 38 06 30 47.",
  };

  document.querySelectorAll("form[data-mailto]").forEach(form => {
    const btn = form.querySelector('button[type="submit"]');
    let note = form.querySelector(".form-status");
    if (!note) { note = document.createElement("p"); note.className = "form-status"; note.setAttribute("role", "status"); note.setAttribute("aria-live", "polite"); (btn || form).after(note); }

    // verborgen valstrik tegen spambots (veld mag leeg blijven)
    if (!form.querySelector('[name="_gotcha"]')) {
      const hp = document.createElement("input");
      hp.type = "text"; hp.name = "_gotcha"; hp.tabIndex = -1; hp.autocomplete = "off"; hp.setAttribute("aria-hidden", "true");
      hp.style.cssText = "position:absolute;left:-9999px;width:1px;height:1px;opacity:0";
      form.appendChild(hp);
    }

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const endpoint = FORMSPREE[form.dataset.form];
      const f = new FormData(form);
      const subject = f.get("subject") || form.dataset.subject || "Bericht via de website";

      if (!endpoint) { // geen Formspree-adres ingevuld: mailprogramma openen
        const lines = [];
        form.querySelectorAll("input, select, textarea").forEach(el => {
          const v = f.get(el.name);
          if (!el.name || !v || el.name === "message" || el.name === "_gotcha") return;
          const label = el.dataset.label || (el.labels && el.labels[0] ? el.labels[0].textContent.replace("*", "").trim() : el.name);
          lines.push(`${label}: ${v}`);
        });
        const msg = f.get("message");
        location.href = `mailto:${FALLBACK_MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent((msg ? msg + "\n\n" : "") + lines.join("\n"))}`;
        return;
      }

      // Formspree: onderwerp meesturen, en antwoord-adres als de bezoeker een e-mailadres gaf
      f.set("subject", subject);
      const contact = String(f.get("contact") || "");
      if (!f.get("email") && /^\S+@\S+\.\S+$/.test(contact)) f.set("email", contact);

      note.className = "form-status"; note.textContent = MSG.sending;
      if (btn) btn.disabled = true;
      try {
        const res = await fetch(endpoint, { method: "POST", body: f, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        note.className = "form-status ok"; note.textContent = MSG.ok;
      } catch (err) {
        note.className = "form-status err"; note.textContent = MSG.err;
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  });

  // Scroll-reveal
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();
