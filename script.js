//funcion animar contador 
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});

//funcion animar texto de video 

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.overlay h3, .overlay p, .overlay .btn');
  elements.forEach(el => {
    el.style.opacity = '0';
  });

  window.setTimeout(() => {
    elements.forEach(el => {
      el.style.opacity = '';
    });
  }, 100);
});


//funcion hacer scrolling navbar 


    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { // Ajusta este valor según tus necesidades
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });








