function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.documentElement.toggleAttribute('data-theme');
  toggleButton.textContent = document.documentElement.hasAttribute('data-theme') ? '☀️' : '🌙';
});