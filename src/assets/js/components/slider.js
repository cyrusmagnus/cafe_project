const popularSlider = new Swiper('.popular-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.popular-slider-next',
        prevEl: '.popular-slider-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        660: {
            slidesPerView: 2,
        }
    }
});

const reviewsSlider = new Swiper('.slider-reviews', {
    spaceBetween: 20,
    slidesPerView: 1,
    autoHeight: true,
    // Navigation arrows
    navigation: {
        nextEl: '.slider-reviews-next',
        prevEl: '.slider-reviews-prev',
    },
});