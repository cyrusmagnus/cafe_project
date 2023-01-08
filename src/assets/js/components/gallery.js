const galleryItems = document.querySelectorAll('.gallery__item');

if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
        new Swiper(item, {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
        })
    })
}