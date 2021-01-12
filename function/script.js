const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


next.addEventListener('click', () => {
  var b = document.querySelector('p').id;
  if (b == '1') {
    let currentActive = 1;  
  }
  else if (b == '2') {
    let currentActive = 2;
  }
  else if (b == '3') {
    let currentActive = 3;
  }
  else if (b == '4') {
    let currentActive = 4;
  }
  
  currentActive++
  if(currentActive > circles.length) {
    currentActive= circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  var b = document.querySelector('p').id;
  if (b == '1') {
    let currentActive = 1;  
  }
  else if (b == '2') {
    let currentActive = 2;
  }
  else if (b == '3') {
    let currentActive = 3;
  }
  else if (b == '4') {
    let currentActive = 4;
  }
  currentActive--
  if(currentActive < 1) {
    currentActive= 1
  }
  
  update()
})

function update() {
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
  
  if(currentActive=== 1) {
    prev.disabled = true
  }
  else if(currentActive === circles.length){
    next.disabled= true
    
  }
  else {
    prev.disabled = false
    next.disabled = false
  }
}






