$(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  })

  document.addEventListener('DOMContentLoaded', function() { const button = document.querySelector('.whatsapp-button'); button.addEventListener('click', function() { window.open('https://wa.me/51999999999/?text=Hola', '_blank'); }); });