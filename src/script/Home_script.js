
// -------------------------This is for the email subscription--------------
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz2q9L1X_hKlbuKN39D0Wg9uCeJ1JbjrRSgtkI1D2xcGvr-zMX_ehX7MZ7RbW7CtGYJ/exec'
  const form = document.forms['submit-to-google-sheet']
  const input = document.getElementById('emailform')
  const msg = document.getElementById('enter_email')
  const btn = document.getElementById('subscribe')
  
  btn.addEventListener('click', ()=>{
    input.readOnly = true;
    msg.innerText = "Thanks for subscribing!"
    msg.style = 'color: red;'
    btn.style = 'display: none;'
  }
)
                       

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        input.readOnly = true;
        msg.innerText = "Thanks for subscribing!"
        msg.style = 'color: red;'
        btn.style = 'display: none;'
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
// _----____-----____-----_____------______________-----------------
// ______________________________NAV BAR_______________________________-

const close = document.getElementById('close_btn')
const menu = document.getElementById('menu_btn')
close.addEventListener('click', ()=>{
  document.querySelector('nav .navigation ul').classList.remove('active')
})
menu.addEventListener('click',()=>{
  document.querySelector('nav .navigation ul').classList.add('active')
})
