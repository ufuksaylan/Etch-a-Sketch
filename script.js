const sketch = document.querySelector('#sketch');

let totalDiv = 36;
let divWidth = (400/Math.sqrt(totalDiv))-2;

for (let i = 0; i < totalDiv; i++) {
    const newDiv = document.createElement('div'); 
    newDiv.classList.add('divs');
    newDiv.setAttribute('style', `width: ${divWidth}px`);
    sketch.appendChild(newDiv);
}