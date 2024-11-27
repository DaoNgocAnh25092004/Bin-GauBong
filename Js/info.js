// Lựa chọn ảnh
const listImg = document.querySelectorAll('.container__info--img__add div img');
const imgMain = document.querySelector('.container__info--img__main img')
listImg.forEach(item => {
    item.addEventListener('click', () => {
        listImg.forEach(itemBoder => {
            itemBoder.classList.remove('img-boder__info')
        })
        item.classList.add('img-boder__info')
        imgMain.src = item.src
    })
})

//Lựa chọn size
const sizes = document.querySelectorAll('.container__info--details__size p');
const price = document.querySelector('.container__info--details__price')
sizes.forEach(item => {
    item.addEventListener('click', () => {
        sizes.forEach(itemBoder => {
            itemBoder.classList.remove('size__slect')
        })
        item.classList.add('size__slect')
        price.innerHTML = ''
        price.innerHTML = item.getAttribute('value')
        price.setAttribute('value', item.getAttribute('value'))
    })
})