let flagdiv = document.querySelector('.flag');
let getbtn = document.querySelector('.getBtn');
let countries = [];

getbtn.addEventListener('click', function() {
let randomcountry = countries[Math.floor(Math.random() * countries.length)];
let randomflag = randomcountry.flags.png;
  Flag(randomflag);
  let flags = JSON.parse(localStorage.getItem('flags')) || [];
  flags.push(randomflag);
  localStorage.setItem('flags', JSON.stringify(flags));
});

getcountries();

function getcountries() {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      countries = data;
      displayFlags();
    });
}

function displayFlags() {
  let flags = JSON.parse(localStorage.getItem('flags')) || [];
  flags.forEach(Flag);
}

function Flag(flag) {
  let img = document.createElement('img');
  img.src = flag;
  flagdiv.appendChild(img);
}
