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

  function paintActive(activeId) {
    if (currentActive === activeId) return; // Evita repintados innecesarios
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

  // Estado inicial
  const initial = window.location.hash 
    ? window.location.hash.slice(1) 
    : linkTargets[0]?.id || "";
  
  if (initial) paintActive(initial);

  // Debounce para evitar múltiples updates rápidos
  let ticking = false;
  let lastKnownScrollPosition = 0;

  function updateActiveSection() {
    ticking = false;
    
    // Encuentra la sección más visible basada en posición del scroll
    const scrollPos = window.scrollY + 100; // Offset para el header sticky
    
    let activeSection = linkTargets[0]?.id || "";
    
    for (const { el, id } of linkTargets) {
      const rect = el.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top;
      
      // Si ya pasamos esta sección, es la activa
      if (scrollPos >= offsetTop - 100) {
        activeSection = id;
      }
    }
    
    paintActive(activeSection);
    
    // Actualiza URL
    if (history.replaceState && activeSection) {
      history.replaceState(null, "", `#${activeSection}`);
    }
  }

  // Listener de scroll con debounce
  window.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection();
      });
      ticking = true;
    }
  }, { passive: true });

  // Click directo (feedback inmediato)
  for (const { a, id } of linkTargets) {
    a.addEventListener("click", () => {
      paintActive(id);
    }, { passive: true });
  }

  // Update inicial
  updateActiveSection();
})();