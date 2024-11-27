document.addEventListener('DOMContentLoaded', function() {
    const btnLogOut = document.querySelector('.btn__logout');
    const nameUser = document.querySelector('.name__user--login')

    const storedUsername = localStorage.getItem('username');
    const checkLogOut = localStorage.getItem('isLoggedIn');

    if (checkLogOut === 'true') {
        nameUser.innerHTML = `${storedUsername}`;
        btnLogOut.classList.remove('hide');
    }

    btnLogOut.addEventListener('click', () => {
        nameUser.innerHTML = '';
        btnLogOut.classList.add('hide');

        localStorage.setItem('isLoggedIn', 'false');
    });
});
