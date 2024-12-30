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








