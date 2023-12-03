const loginForm = document.querySelector('.login form');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = loginForm.querySelector('input[name="username"]').value;
      const password = loginForm.querySelector('input[name="password"]').value;

      if (username !== 'mila' || password !== 'sari') {
        alert('USERNAME ATAU PASSWORD SALAH!');
      } else {
        window.location.href = 'beranda.html';
      }
    });
  
    