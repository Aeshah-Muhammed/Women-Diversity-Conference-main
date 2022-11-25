let donateContainer = document.querySelector(".donate-container");
let donateIcon = document.querySelector(".donate-icon");
let donate = document.getElementById("donate");
let container = document.querySelector(".container");


donate.addEventListener('click',
function()  {
  container.style.display = 'none'
  donateContainer.style.display = 'flex'
})

donateIcon.addEventListener('click',
function() {
donateContainer.style.display = 'none'
container.style.display = 'block'
})