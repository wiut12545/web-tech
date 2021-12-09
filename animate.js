window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      document.querySelector('.navbar').classList.add('sticky');
      document.querySelector('.goTop').fadeIn();
    } else {
      document.querySelector('.navbar').removeClass('sticky');
      document.querySelector('.goTop').fadeOut();
    }
    document.querySelector('.goTop').click(function () {
      scroll(0, 0)
    });
  });
  window.addEventListener("click", function () {
    if (".menu-toggler", "click") {
      document.querySelector(".menu-toggler").classList.toggle("active")
      document.querySelector(".navbar-menu").classList.toggle("active")
    }
  })
  
  document.querySelector(document).ready(function () {
    document.querySelector(".works").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true
      }
    })
  
  
  });
  document.querySelector( document ).ready(function() {
    document.querySelector('#about1').addEventListener('click', function(){
        document.querySelector('html, body').animate({
            scrollTop: document.querySelector('#about').offset().top
        }, 1500);
    });
  
    });