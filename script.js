// Mobile menu toggle (simple show/hide – you can enhance this)
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav-links');
  
  if (toggle) {
    toggle.addEventListener('click', function() {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.width = '100%';
      nav.style.backgroundColor = '#014284';
      nav.style.padding = '1rem';
    });
  }

  // Smooth fade-in on scroll for cards (optional)
  const cards = document.querySelectorAll('.competency-card, .exp-card, .project-card, .edu-card, .cert-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
  });
});