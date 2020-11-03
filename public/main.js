const toggleBtn = document.getElementsByClassName('toogle');
const menu = document.getElementsByClassName('navi_menu');
const icons = document.getElementsByClassName('icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.add("active");
  console.log("2");
  icons.classList.toggle("active");
})
