(function () {
  const navLinks = Array.from(document.querySelectorAll("[data-navlink]"));
  if (!navLinks.length) return;

  const linkTargets = navLinks
    .map((a) => {
      const href = a.getAttribute("href") || "";
      const id = href.startsWith("#") ? href.slice(1) : "";
      const el = id ? document.getElementById(id) : null;
      return { a, id, el };
    })
    .filter((x) => x.el);

  if (!linkTargets.length) return;

  let currentActive = "";
  let hasInteracted = false; // 👈 solo escribimos hash después de interacción

  function paintActive(activeId) {
    if (!activeId || currentActive === activeId) return;
    currentActive = activeId;

    for (const { a, id } of linkTargets) {
      const isActive = id === activeId;
      a.classList.toggle("active", isActive);
      a.classList.toggle("text-white", isActive);
      a.classList.toggle("text-white/90", !isActive);
      a.classList.toggle("font-extrabold", isActive);
      a.classList.toggle("font-bold", !isActive);
    }
  }

  function updateActiveSection({ writeHash }) {
    const scrollPos = window.scrollY + 120; // offset header
    let activeSection = "";

    for (const { el, id } of linkTargets) {
      const top = el.offsetTop; // más directo que getBoundingClientRect + scrollY
      if (scrollPos >= top) activeSection = id;
    }

    // Si estamos arriba del todo, NO forces “soluciones”
    if (window.scrollY < 40) {
      paintActive("soluciones"); // o el que quieras que sea default visual
      if (writeHash) history.replaceState(null, "", window.location.pathname); // sin hash
      return;
    }

    paintActive(activeSection || linkTargets[0].id);

    if (writeHash && activeSection) {
      history.replaceState(null, "", `#${activeSection}`);
    }
  }

  // Estado inicial:
  // - Si hay hash (entraron directo a #blog), respétalo.
  // - Si no hay hash, solo pinta visualmente, NO cambies la URL.
  if (window.location.hash) {
    paintActive(window.location.hash.slice(1));
  } else {
    paintActive("soluciones"); // lo que quieres que se vea activo al inicio
  }

  // Scroll: marca interacción y actualiza (y ya se permite hash)
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      hasInteracted = true;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveSection({ writeHash: true });
        ticking = false;
      });
    },
    { passive: true }
  );

  // Click: interacción inmediata (y permite hash)
  for (const { a, id } of linkTargets) {
    a.addEventListener(
      "click",
      () => {
        hasInteracted = true;
        paintActive(id);
        history.replaceState(null, "", `#${id}`);
      },
      { passive: true }
    );
  }

  // Update inicial SIN escribir hash
  updateActiveSection({ writeHash: false });
})();
