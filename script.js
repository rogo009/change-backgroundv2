//variables
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const button = document.getElementById('button').addEventListener('click', change);
let r, g, b;

// handler - see above


// function

function change() {
    r = Math.floor(Math.random() * 16).toString(16);
    g = Math.floor(Math.random() * 16).toString(16);
    b = Math.floor(Math.random() * 16).toString(16);
    color = `#${r}${g}${b}`;
    h1.textContent = color;
    body.style.backgroundColor = color;
}