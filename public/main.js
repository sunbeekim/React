
  const toggleBtn = document.querySelector('.toogle');
  const menu = document.getElementById('toggle');

  if(toggleBtn == null){

  }else{
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      console.log("toggle click");
    })
  }
