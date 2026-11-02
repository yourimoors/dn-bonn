// Kleine "← Alle concepten"-knop, alleen bedoeld voor de presentatie. Verwijder de <script>-regel bij livegang.
(() => {
  const a = document.createElement("a");
  a.href = "../";
  a.textContent = "← Alle concepten";
  a.setAttribute("style", [
    "position:fixed", "left:14px", "bottom:var(--back-bottom,14px)", "z-index:9999",
    "font:700 13px/1 system-ui,sans-serif", "padding:10px 14px", "border-radius:999px",
    "background:#111", "color:#fff", "text-decoration:none", "opacity:.88",
    "box-shadow:0 4px 18px rgba(0,0,0,.35)", "border:1px solid rgba(255,255,255,.25)"
  ].join(";"));
  document.body.appendChild(a);
})();
