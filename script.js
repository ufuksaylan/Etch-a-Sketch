const sketch = document.querySelector('#sketch');

createDivs(16);

const slider = document.getElementById("DimensionSlider");
const DimensionValue = document.getElementById("DimensionValue");

// Update the current slider value  and sketch (each time you drag the slider handle)
slider.oninput = function(){
  // delete divs 
  document.querySelectorAll('.divs').forEach(e => e.remove());

  DimensionValue.innerHTML = `${slider.value}x${slider.value}`;
  const totalDiv = slider.value;

  createDivs(totalDiv);
}

blackMode();
eraser();
clean();
rainbowMode();

function blackMode(){
  const black = document.querySelector('#blackMod');
  black.addEventListener('click', () => {
    const divs = document.querySelectorAll('.divs');
    divs.forEach(function(e){
      e.addEventListener('mouseover',  function(){
        this.style.backgroundColor = 'black';
      });
    });
  });
}
function eraser(){
  const eraser = document.querySelector('#eraser');
  eraser.addEventListener('click', () => {
    const divs = document.querySelectorAll('.divs');
    divs.forEach(function(e){
      e.addEventListener('mouseover',  function(){
        this.style.backgroundColor = '#d3d3d3';
      });
    });
  });
}
function clean(){
  const clean = document.querySelector('#clean');
  clean.addEventListener('click', () => {
    const divs = document.querySelectorAll('.divs');
    divs.forEach(function(e){
      e.style.backgroundColor = '#d3d3d3';
    });
  });
}
function rainbowMode(){
  const rainbow = document.querySelector('#rainbowMode');
  rainbow.addEventListener('click', () => {
    const divs = document.querySelectorAll('.divs');
    divs.forEach(function(e){
      e.addEventListener('mouseover',  function(){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = `#${randomColor}`;
      });
    });
  });
}
function createDivs(totalDiv){
  let divWidth = (400/totalDiv) -2;
  for (let i = 0; i < totalDiv *totalDiv; i++) {
    const newDiv = document.createElement('div'); 
    newDiv.classList.add('divs');
    newDiv.setAttribute('style', `width: ${divWidth}px`);
    sketch.appendChild(newDiv);
  }
}
