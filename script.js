(function () {
  const toggleBtn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (!toggleBtn || !nav) return;

  function closeNav() {
    nav.classList.remove("is-open");
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  function toggleNav() {
    const isOpen = nav.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  }

  toggleBtn.addEventListener("click", toggleNav);

  // Close when clicking a link (mobile UX)
  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) closeNav();
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  // Close if resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeNav();
  });
})();
