
// _____________________________________________________________________

function search() {
 let input = document.getElementById('search').value
 input = input.toLowerCase()
 let x = document.getElementsByClassName('card-text');

 if (input == ""){
 for (i = 0; i < x.length; i++) { 
  x[i].parentElement.parentElement.parentElement.style.display="initial";                
 }
 }
 

 for (i = 0; i < x.length; i++) { 
  if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].parentElement.parentElement.parentElement.style.display="none";
  }
  else {
      x[i].style.display="initial";                 
  }
}
}

let input = document.getElementById('search').addEventListener('keyup', search)
