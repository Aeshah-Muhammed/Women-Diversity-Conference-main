let donateContainer = document.querySelector(".donate-container");
let donateIcon = document.querySelector(".donate-icon");
let donate = document.getElementById("donate");
let container = document.querySelector(".container");
let noneshownDonate = document.getElementById('noneshown-donate');



donate.addEventListener('click',
function()  {
  container.style.display = 'none'
  donateContainer.style.display = 'block'
  noneshownDonate.style.display = 'none'
})



donateIcon.addEventListener('click',
function() {
donateContainer.style.display = 'none'
noneshownDonate.style.display = 'flex'
container.style.display = 'block'


})




function click()  {
  donateContainer.style.display = 'block'
  noneshownDonate.style.display = 'none'
}