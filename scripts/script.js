const passwordInput = document.querySelector('#password');
const eyeIcon = document.querySelectorAll('.eye');

if (passwordInput && eyeIcon && eyeIcon2) {
  eyeIcon.addEventListener('click', function () {
	const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
	passwordInput.setAttribute('type', type);
  this.classList.toggle('ri-eye-off-line');
  });
}