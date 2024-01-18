window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.nav-open-btn').addEventListener('click', () => {
      document.querySelector('.navbar').classList.add('navbar-active');
  });

  document.querySelector('.nav-close-btn').addEventListener('click', () => {
      document.querySelector('.navbar').classList.remove('navbar-active');
  });
});