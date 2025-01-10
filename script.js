
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

//funcion hacer scrolling imagenes mision 

    document.addEventListener('DOMContentLoaded', () => {
      const objetivos = document.querySelectorAll('.objetivos');
  
      const observar = new IntersectionObserver((entradas, observador) => {
          entradas.forEach(entrada => {
              if (entrada.isIntersecting) {
                  entrada.target.classList.add('visible');
              } else {
                  entrada.target.classList.remove('visible');
              }
          });
      });
  
      objetivos.forEach(objetivo => {
          observar.observe(objetivo);
      });
  });
  




