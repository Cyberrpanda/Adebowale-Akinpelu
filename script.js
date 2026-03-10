// Scroll reveal – adds 'visible' class to fade-sections when they appear
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.fade-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // optional: stop observing after animation
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });
});