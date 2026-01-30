function toggleMenu(){
  const links = document.getElementById("nav-links");
  if (links) links.classList.toggle("show");
}

document.addEventListener("click", (e) => {
  const links = document.getElementById("nav-links");
  const burger = document.querySelector(".hamburger");
  if (!links || !burger) return;

  // close menu if you click outside it on mobile
  const clickedInside = links.contains(e.target) || burger.contains(e.target);
  if (!clickedInside) links.classList.remove("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
