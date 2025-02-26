document.addEventListener("DOMContentLoaded", function () {
  var gallerySwiper = new Swiper(".hero__gallery", {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
  });

  var feedbacksSwiper = new Swiper(".feedbacks-list", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".navigation-right",
      prevEl: ".navigation-left",
    },
  });

  var feedbacksVerticalSwiper = new Swiper(".feedbacks-list-vertical", {
    slidesPerView: 1,
    spaceBetween: 15,
    direction: "vertical",
    loop: true,
  });
});
