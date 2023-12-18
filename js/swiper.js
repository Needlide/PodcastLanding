document.addEventListener("DOMContentLoaded", function () {
  var gallerySwiper = new Swiper(".hero__gallery", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
  });

  var feedbacksSwiper = new Swiper(".feedbacks-list", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".navigation-right",
      prevEl: ".navigation-left",
    },
  });
});
