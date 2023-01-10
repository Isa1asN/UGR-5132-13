const scriptURL = 'https://script.google.com/macros/s/AKfycbymARiZlAu1kHvVuCKtv39dloWLFyHk-mjUAo3GN78-psRxwnoC1OZMcUmwLWNu4yRS9Q/exec'

const form = document.forms['contact-list']
const btn = document.getElementById('btn-submit').addEventListener('click',()=>{
  btn.style.display = 'none'
  confirm("Message sent succesfully, we'll be in touch soon.")
})


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response)
      btn.style.display = 'none'
      confirm("Message sent succesfully, thanks we'll be in touch.")

  })

    .catch(error => console.error('Error!', error.message))
})
// _______________________________________navbar_________________________________________________
const close = document.getElementById('close_btn')
const menu = document.getElementById('menu_btn')
close.addEventListener('click', ()=>{
  document.querySelector('nav .navigation ul').classList.remove('active')
})
menu.addEventListener('click',()=>{
  document.querySelector('nav .navigation ul').classList.add('active')
})
// __________________________________________________________________________________________
