const cart = document.querySelector('.showCart')
const btnAdd = document.querySelector('.btn__buy')
const overlayCart = document.querySelector('.over__lay')
const iconCart = document.querySelector('.header__right__cart')

function showCart(btn) {
    btn.addEventListener('click', () => {
        cart.style.display = 'block'
        overlayCart.classList.remove('hide')
    })

    overlayCart.addEventListener('click', () => {
        cart.style.display = 'none'
        overlayCart.classList.add('hide')
    })
}
showCart(btnAdd)
showCart(iconCart)

//Thông tin sản phẩm
const mainImg = document.querySelector('.container__info--img__main img');
const nameProduct = document.querySelector('.container__info--details h1');
const priceProduct = document.querySelector('.container__info--details__price');
const sizeProduct = document.querySelector('.size__slect');
const listProduct = document.getElementById('mycart');
const totalPriceProduct = document.querySelector('.showCart-footer--into__money p');
const totalQuantityDisplay = document.querySelector('.quality__product');

let gioHang = [];

btnAdd.addEventListener('click', () => {
    const product = {
        image: mainImg.src,
        name: nameProduct.textContent,
        price: priceProduct.textContent,
        size: sizeProduct.textContent
    };

    gioHang.push(product);
    updateLocalStorage();
    addElement(gioHang.length - 1);
    updateQuantityDisplay();
});

function addElement(index) {
    const product = gioHang[index];
    let div = document.createElement('div');
    div.setAttribute('class', 'mycart--item');
    div.innerHTML = `
    <div class="mycart--item__img">
        <img src="${product.image}" alt="">
    </div>
    <div class="mycart--item__info">
        <div class="mycart--item__info--name">${product.name}</div>
        <div class="mycart--item__info--size">
            <p>Size : </p>
            <p>${product.size}</p>
        </div>
        <div class="mycart--item__info--price">
            <p>Giá :</p>
            <p>${product.price}</p>
        </div>
        <div class="mycart--item__info--close">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    `;

    listProduct.appendChild(div);

    // Remove product event listener
    const btnRemoveProduct = div.querySelectorAll('.mycart--item__info--close i');

    btnRemoveProduct.forEach((button, index) => {
        button.addEventListener('click', () => {
            gioHang.splice(index, 1);
            div.remove();
            updateLocalStorage();
            updateMoney();
            updateQuantityDisplay();
        });
    });

    // Update tổng tiền
    updateMoney();

    //Update số lượng
    updateQuantityDisplay()

}

function updateMoney() {
    let totalPrice = 0;
    gioHang.forEach(product => {
        let price = parseFloat(product.price.replace('₫', '').replace(/,/g, ''), 10);
        totalPrice += price;
    });
    totalPrice *= 1000;

    const formattedTotalPrice = totalPrice.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
        useGrouping: true
    });

    const formattedTotalPriceWithComma = formattedTotalPrice.replace(/\./g, ',').replace(/\s/g, '');

    totalPriceProduct.innerHTML = formattedTotalPriceWithComma;

    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('gioHang', JSON.stringify(gioHang));
}

const showNoneCart = document.querySelector('.showCart-none')
function updateQuantityDisplay() {
    totalQuantityDisplay.textContent = gioHang.length;
    checkQuality()
}
function checkQuality() {
    if (gioHang.length == 0) {
        showNoneCart.classList.remove('hide')
    } else {
        showNoneCart.classList.add('hide')
    }
}
updateQuantityDisplay()

// Tải giỏ hàng từ bộ nhớ cục bộ khi tải trang
window.addEventListener('load', () => {
    const storedCart = localStorage.getItem('gioHang');
    if (storedCart) {
        gioHang = JSON.parse(storedCart);
        gioHang.forEach((product, index) => {
            addElement(index);
        });
    }
});