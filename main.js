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
  