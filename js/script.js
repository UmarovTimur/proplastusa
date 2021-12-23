"use strict";
function ibg() {
   let ibg = document.querySelectorAll("._ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
window.onload = function () {
   document.addEventListener('click', documentAction);
   //document.addEventListener('resize', screenResizing);
   window.addEventListener('scroll', scrollAction);
}
//Actions(делегирование события click)
function documentAction(e) {
   const targetElement = e.target;
   if (window.innerWidth <= 767) {
      if (targetElement.closest('.header__burger') && document.querySelector('.header__burger').classList.contains('_active')) {
         document.querySelector('.header__menu').classList.remove('_active');
         document.querySelector('.header__burger').classList.remove('_active');
      } else if (targetElement.closest('.header__burger')) {
         document.querySelector('.header__menu').classList.add('_active');
         document.querySelector('.header__burger').classList.add('_active');
      } else if (!targetElement.closest('.header__menu')) {
         document.querySelector('.header__menu').classList.remove('_active');
         document.querySelector('.header__burger').classList.remove('_active');
      }
   } if ((targetElement.closest('.scroll__top')) && document.querySelector('.scroll__top').classList.contains('_visible')) {
      document.querySelector('.scroll__top').classList.remove('_visible')
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth"
      })
      setTimeout(() => {
         document.querySelector('.scroll__top').classList.remove('_active')
      }, 1000);
   } if (targetElement.closest('.patio_doors_fs')) {
      const scrollEl = document.querySelector('._patioFs');
      e.preventDefault();
      scrollEl.scrollIntoView({
         block: "center",
         behavior: "smooth",
         inline: "nearest"
      });
   } else if (targetElement.closest('.patio_doors_hs')) {
      const scrollEl = document.querySelector('._patioHs');
      e.preventDefault();
      scrollEl.scrollIntoView({
         block: "center",
         behavior: "smooth",
         inline: "nearest"
      });
   } else if (targetElement.closest('._window')) {
      const scrollEl = document.querySelector('.window');
      e.preventDefault();
      scrollEl.scrollIntoView({
         block: "center",
         behavior: "smooth",
         inline: "nearest"
      });
   } else if (targetElement.classList.contains('first-screen-arrow-down')) {
      //window.scrollBy(0, window.innerHeight);
      window.scrollTo({
         top: window.innerHeight,
         left: 0,
         behavior: "smooth"
      })
   }
}
function scrollAction(e) {
   const windowScrollTop = window.pageYOffset;
   if ((windowScrollTop > 100) && (!document.querySelector('.scroll__top').classList.contains('_active'))) {
      document.querySelector('.scroll__top').classList.add('_active');
      document.querySelector('.scroll__top').classList.add('_visible');
   } else if (windowScrollTop < 100) {
      document.querySelector('.scroll__top').classList.remove('_active');
      document.querySelector('.scroll__top').classList.remove('_visible');

   }
}