function clickHeart() {
    const productItem = document.querySelectorAll('.product__item');

    productItem.forEach((item) => {
        const heartProductList = item.querySelector('.product__item--footer i');

        heartProductList.addEventListener('click', () => {
            heartProductList.classList.toggle('product__item--footer__icon');
        })
    })
    console.log(1);
}
clickHeart();

const userHeader = document.querySelector('.header__right__user .fa-user');

userHeader.addEventListener('click', () => {
    window.location.href = 'signin.html'
})

const listItemProduct = document.querySelectorAll('.product__item');

listItemProduct.forEach(item => {
    let idItem = item.getAttribute('data-id');
    const btn = item.querySelector('.product__item--img__detail--container');

    if (btn) {
        btn.addEventListener('click', () => {
            if (idItem) {
                window.location.href = `sp${idItem}.html`;
            }
        });
    }

    if (window.innerWidth < 740) {
        item.addEventListener('click', () => {
            if (idItem) {
                window.location.href = `sp${idItem}.html`;
            }
        });
    }
});
