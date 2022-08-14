const checkbox = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('currentTheme');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})