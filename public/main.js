const toggleBtn = document.querySelector('.toogle');
const menu = document.getElementById("toggle");

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
})
