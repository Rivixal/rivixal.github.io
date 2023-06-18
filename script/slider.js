var mySwiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });