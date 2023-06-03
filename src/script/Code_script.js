const close = document.getElementById('close_btn');
const menu = document.getElementById('menu_btn');

close.addEventListener('click', () => {
const navigation = document.querySelector('nav .navigation ul');
navigation.classList.remove('active');
});

menu.addEventListener('click', () => {
const navigation = document.querySelector('nav .navigation ul');
navigation.classList.add('active');
});

const htmlCode = document.querySelector('.html-code textarea');
const cssCode = document.querySelector('.css-code textarea');
const jsCode = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

function run() {
// Storing data in local storage
localStorage.setItem('html_code', htmlCode.value);
localStorage.setItem('css_code', cssCode.value);
localStorage.setItem('js_code', jsCode.value);

// Executing HTML, CSS & JS code
result.contentDocument.body.innerHTML = <style>${localStorage.css_code}</style> + localStorage.html_code;
result.contentWindow.eval(localStorage.js_code);
console.log("run function executed");
}

// Checking if user is typing anything in input field
htmlCode.onkeyup = run;
cssCode.onkeyup = run;
jsCode.onkeyup = run;

// Accessing data stored in local storage
htmlCode.value = localStorage.html_code;
cssCode.value = localStorage.css_code;
jsCode.value = localStorage.js_code;
