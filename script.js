const toggleButton = document.querySelector('.mobile-nav-toggle');
const menu = document.querySelector('.nav');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});
