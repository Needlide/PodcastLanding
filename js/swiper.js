document.addEventListener("DOMContentLoaded", function () {
  var gallerySwiper = new Swiper(".hero__gallery", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
  });

  var feedbacksSwiper = new Swiper(".feedbacks-list", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".navigation-right",
      prevEl: ".navigation-left",
    },
  });
});
