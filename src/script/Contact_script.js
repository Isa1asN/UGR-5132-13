const scriptURL = 'https://script.google.com/macros/s/AKfycbymARiZlAu1kHvVuCKtv39dloWLFyHk-mjUAo3GN78-psRxwnoC1OZMcUmwLWNu4yRS9Q/exec'

const form = document.forms['contact-list']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response)
      confirm("Message sent succesfully, thanks we'll be in touch.")

  })

    .catch(error => console.error('Error!', error.message))
})


