document.addEventListener('DOMContentLoaded', function () {
      var gallerySwiper = new Swiper('.gallery', {
        slidesPerView: 5,
        spaceBetween: 25,
        loop: true,
      });

      var feedbacksSwiper = new Swiper('.feedbacks-list', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.navigation-right',
          prevEl: '.navigation-left',
        }
      });
    });