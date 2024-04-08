$(document).ready(function() {
    const testimoniosWrapper = $('#testimonios .testimonios-wrapper');
    const testimonioWidth = $('#testimonios .testimonio').outerWidth(true);
    let currentPosition = 0;
  
    function showTestimonios(position) {
      testimoniosWrapper.css('transform', `translateX(-${position}px)`);
      currentPosition = position;
    }
  
    function nextTestimonio() {
      const newPosition = currentPosition + testimonioWidth;
      showTestimonios(newPosition);
    }
  
    function prevTestimonio() {
      const newPosition = currentPosition - testimonioWidth;
      showTestimonios(newPosition);
    }
  
    $('#testimonios .btn-next').on('click', nextTestimonio);
    $('#testimonios .btn-prev').on('click', prevTestimonio);
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const cursoMenu = document.querySelector('#curso-menu');
    const cursoLinks = cursoMenu.querySelectorAll('.nav-link');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const targetId = entry.target.getAttribute('id');
        const correspondingLink = cursoMenu.querySelector(`a[href="#${targetId}"]`);
  
        if (entry.isIntersecting) {
          cursoLinks.forEach(link => link.classList.remove('active'));
          correspondingLink.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
  
    const cursoSections = document.querySelectorAll('.tab-pane');
    cursoSections.forEach(section => observer.observe(section));
  
    cursoLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  