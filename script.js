let flagdiv = document.querySelector('.flag');
let getBtn = document.querySelector('.getBtn');

getBtn.addEventListener('click', function () {
    generateflag();
  })
  
  getCnts();
  
let countries = [];

function getCnts() {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
      countries = data;
      displayFlags();
    })
}

function displayFlags() {
  let flags = localStorage.getItem('flags');
  if (flags) {
    flags = JSON.parse(flags);
    flags.forEach((flag) => {
      Flag(flag)
    })
  } else {
    generateflag();
  };
}

function Flag(flag) {
  let img = document.createElement('img');
  img.src = flag;
  flagdiv.appendChild(img);
}

function generateflag() {
  let randomind = Math.floor(Math.random() * countries.length);
  let randomcntr = countries[randomind];
  let randomflag = randomcntr.flags.png;
  Flag(randomflag);
  let flags = localStorage.getItem('flags');
  if (flags) {
    flags = JSON.parse(flags);
    flags.push(randomflag);
  } else {
    flags = (randomflag);
  
  localStorage.setItem('flags', JSON.stringify(flags));
}}
