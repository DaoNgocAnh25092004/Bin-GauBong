const nutDangKi = document.querySelector('.signup-btn');
const nhapTenDangNhap = document.querySelector('.username');
const nhapMatKhau = document.querySelector('.password');
const loiTenDangNhap = document.querySelector('.err-username');
const loiMatKhau = document.querySelector('.err-password');
const nhapMatKhauXacNhan = document.querySelector('.confirm-password');
const loiMatKhauXacNhan = document.querySelector('.err-enter__password');
const nhapSoDienThoai = document.querySelector('.phone');
const loiSoDienThoai = document.querySelector('.err-phone');

nhapTenDangNhap.addEventListener('blur', () => {
    if (nhapTenDangNhap.value.trim() === '') {
        loiTenDangNhap.innerHTML = 'Tên người dùng không được để trống!';
    } else if (!/^[A-Z][a-zA-Z ]{4,}$/.test(nhapTenDangNhap.value)) {
        loiTenDangNhap.innerHTML = 'Ít nhất 5 từ, viết hoa chữ cái đầu mỗi từ!';
    } else {
        loiTenDangNhap.innerHTML = '';
    }
});

nhapMatKhau.addEventListener('blur', () => {
    if (nhapMatKhau.value.trim() === '') {
        loiMatKhau.innerHTML = 'Mật khẩu không được để trống!';
    } else if (!/^[a-zA-Z ]{3,}$/.test(nhapMatKhau.value)) {
        loiMatKhau.innerHTML = 'Ít nhất 3 từ!';
    } else {
        loiMatKhau.innerHTML = '';
    }
});

nhapMatKhauXacNhan.addEventListener('blur', () => {
    if (nhapMatKhauXacNhan.value.trim() === '') {
        loiMatKhauXacNhan.innerHTML = 'Xác nhận mật khẩu không được để trống!';
    } else if (nhapMatKhauXacNhan.value !== nhapMatKhau.value) {
        loiMatKhauXacNhan.innerHTML = 'Mật khẩu không khớp!';
    } else {
        loiMatKhauXacNhan.innerHTML = '';
    }
});

nhapSoDienThoai.addEventListener('blur', () => {
    if (nhapSoDienThoai.value.trim() === '') {
        loiSoDienThoai.innerHTML = 'Số điện thoại không được để trống!';
    } else if (!/^(09|08|03)\d{9}$/.test(nhapSoDienThoai.value)) {
        loiSoDienThoai.innerHTML = 'Phải là số, bắt đầu bằng 09 hoặc 08 hoặc 03, có độ dài 10 số!';
    } else {
        loiSoDienThoai.innerHTML = '';
    }
});
nutDangKi.addEventListener('click', () => {
    let isValid = true;

    if (nhapTenDangNhap.value.trim() === '') {
        loiTenDangNhap.innerHTML = 'Tên người dùng không được để trống!';
        isValid = false;
    }

    if (nhapMatKhau.value.trim() === '') {
        loiMatKhau.innerHTML = 'Mật khẩu không được để trống!';
        isValid = false;
    }

    if (nhapMatKhauXacNhan.value.trim() === '') {
        loiMatKhauXacNhan.innerHTML = 'Xác nhận mật khẩu không được để trống!';
        isValid = false;
    }

    if (nhapSoDienThoai.value.trim() === '') {
        loiSoDienThoai.innerHTML = 'Số điện thoại không được để trống!';
        isValid = false;
    }


    if (isValid) {
        localStorage.setItem('username', nhapTenDangNhap.value.trim());
        localStorage.setItem('password', nhapMatKhau.value.trim());

        alert('Đăng kí thành công!');
        window.location.href = 'signin.html';
    }
});