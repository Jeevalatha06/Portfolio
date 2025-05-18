const sections = document.querySelectorAll('.fade-in');
function animateOnScroll() {
  const windowHeight = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight) {
      section.classList.add('show');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);