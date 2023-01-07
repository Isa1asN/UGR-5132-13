const close = document.getElementById('close_btn')
const menu = document.getElementById('menu_btn')
close.addEventListener('click', ()=>{
  document.querySelector('nav .navigation ul').classList.remove('active')
})
menu.addEventListener('click',()=>{
  document.querySelector('nav .navigation ul').classList.add('active')
})
