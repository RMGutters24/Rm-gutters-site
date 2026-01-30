// RM Gutters - shared scripts
function toggleNav() {
  document.body.classList.toggle('nav-open');
}

// Close mobile nav when clicking a link (mobile friendliness)
document.addEventListener('click', (e) => {
  const link = e.target.closest('.nav-links a');
  if (link && document.body.classList.contains('nav-open')) {
    document.body.classList.remove('nav-open');
  }
});