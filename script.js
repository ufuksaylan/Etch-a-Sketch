const sketch = document.querySelector('#sketch');

let totalDiv = 16;
let divWidth = (400/totalDiv) -2;

for (let i = 0; i < totalDiv *totalDiv; i++) {
    const newDiv = document.createElement('div'); 
    newDiv.classList.add('divs');
    newDiv.setAttribute('style', `width: ${divWidth}px`);
    sketch.appendChild(newDiv);
}