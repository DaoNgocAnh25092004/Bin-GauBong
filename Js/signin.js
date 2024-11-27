const loginButton = document.querySelector('.login-button');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const usernameError = document.querySelector('.err-username');
const passwordError = document.querySelector('.err-password');

usernameInput.addEventListener('blur', () => {
    if (usernameInput.value.trim() === '') {
        usernameError.innerHTML = 'Username không được bỏ trống!';
    }  else {
        usernameError.innerHTML = '';
    }
});

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value.trim() === '') {
        passwordError.innerHTML = 'Password không được bỏ trống!';
    }  else {
        passwordError.innerHTML = '';
    }
});

const isLoggedIn = false;

loginButton.addEventListener('click', () => {
    let isValid = true; // Cờ để theo dõi tính hợp lệ của biểu mẫu tổng thể

    // Validate username
    if (usernameInput.value.trim() === '') {
        usernameError.innerHTML = 'Tên người dùng không được bỏ trống!';
        isValid = false;
    } 

    // Validate password
    if (passwordInput.value.trim() === '') {
        passwordError.innerHTML = 'Mật khẩu không được bỏ trống!';
        isValid = false;
    }

    // Kiểm tra xem tên người dùng và mật khẩu đã nhập có khớp với các giá trị được lưu trữ trong localStorage không
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (usernameInput.value.trim() === storedUsername && passwordInput.value.trim() === storedPassword) {
        // Chuyển hướng đến trang chủ nếu đăng nhập thành công
        window.location.href = 'index.html';
        localStorage.setItem('isLoggedIn', true);
    } else {
        // Hiển thị một thông báo lỗi nếu đăng nhập thất bại
        alert('Tên đăng nhập hoặc mật khẩu của bạn không đúng');
        isValid = false;
    }
});
