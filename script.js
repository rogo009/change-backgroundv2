// change-background v2

//variables
const body = document.querySelector('body');
const h1 = document.querySelector('h1'); // not attached to any function
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

//add another type of color generator like hex