const sketch = document.querySelector('#sketch');

function createDivs(totalDiv){
  let divWidth = (400/totalDiv) -2;
  for (let i = 0; i < totalDiv *totalDiv; i++) {
    const newDiv = document.createElement('div'); 
    newDiv.classList.add('divs');
    newDiv.setAttribute('style', `width: ${divWidth}px`);
    sketch.appendChild(newDiv);
  }
}

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

