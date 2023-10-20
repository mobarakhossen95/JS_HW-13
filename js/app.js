let btn = document.querySelector('.box button')
let heading  = document.querySelector('h1') 
let onBulb = document.querySelector('.onbtn')
let offBulb = document.querySelector('.offbtn')
let img = document.querySelector('img')
function changeHeading() {
  heading.innerHTML = 'I am Frontend Developer'
}

btn.addEventListener("click",changeHeading)




// on light
function changeBulb(){
  img.src = "./images/on_bulb.jpg"
}
 
onBulb.addEventListener('click',changeBulb)

// off

function offBulbe (){
  img.src = "./images/off_bulb.jpg"
}
offBulb.addEventListener('click',offBulbe)