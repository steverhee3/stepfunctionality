const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
var currentActive
 

next.addEventListener('click', () => {
  

  currentActive++
  console.log(currentActive)
  if(currentActive > circles.length) {
    currentActive= circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  
  currentActive--
  console.log(currentActive)
  if(currentActive < 1) {
    currentActive= 1
  }
  
  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if(idx <= currentActive) {
      circle.classList.add('active')
    }
    else {
      circle.classList.remove('active')
    }
  })
  const actives = document.querySelectorAll('.active')
  
  progress.style.width=(actives.length-1) / (circles.length-1)*100+'%'
  
  if(currentActive <= 1) {
    prev.disabled = true
  }
  else if(currentActive >= circles.length){
    next.disabled= true
    
  }
}
function load () {
  var b = document.querySelector('p').id;
  
  if (b == '1') {
    currentActive = 0; 
    
  }
  else if (b == '2') {
    currentActive = 1;
    
  }
  else if (b == '3') {
    currentActive = 2;
    
  }
  else if (b == '4') {
    currentActive = 3;
    
  }
 circles.forEach((circle, idx) => {
    if(idx < currentActive) {
      circle.classList.add('active')
    }
    else {
      circle.classList.remove('active')
    }
  })
  const actives = document.querySelectorAll('.active')
  
  progress.style.width=(actives.length-1) / (circles.length-1)*100+'%'
  
  if(currentActive <= 1) {
    prev.disabled = true
  }
  else if(currentActive >= circles.length){
    next.disabled= true
    
  }
 
}

next.addEventListener('load', () => {
 var b = document.querySelector('p').id;
  
  if (b == '1') {
    currentActive = 0; 
    
  }
  else if (b == '2') {
    currentActive = 1;
    
  }
  else if (b == '3') {
    currentActive = 2;
    
  }
  else if (b == '4') {
    currentActive = 3;
    
  }
 circles.forEach((circle, idx) => {
    if(idx < currentActive) {
      circle.classList.add('active')
    }
    else {
      circle.classList.remove('active')
    }
  })
  const actives = document.querySelectorAll('.active')
  
  progress.style.width=(actives.length-1) / (circles.length-1)*100+'%'
  
  if(currentActive <= 1) {
    prev.disabled = true
  }
  else if(currentActive >= circles.length){
    next.disabled= true
    
  }
  


})
