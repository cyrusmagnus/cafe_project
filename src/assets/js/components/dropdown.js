const filter = document.querySelector('.filter');

if (filter) {
    const items = document.querySelectorAll('.block-filter');

    items.forEach(item => {
        item.addEventListener('click', event => {
            console.log('gg')
            item.querySelector('.block-filter__dropdown').classList.toggle('_active');
            item.querySelector('.block-filter__icon').classList.toggle('_active');

            if (event.target.classList.contains('block-filter__item')) {
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    })
}