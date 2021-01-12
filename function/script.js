const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
next.addEventListener('click', () => {
  currentActive++
  if(currentActive > circles.length) {
    currentActive= circles.length
  }
  update()
})

prev.addEventListener('click', () => {
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

function generate () {
  var a = document.getElementById('next');
  if(currentActive===1) {
    a.href = getUrl1();
  }
  else if(currentActive === 2) {
    a.href = getUrl2();
  }
  else if(currentActive === 3) {
    a.href = getUrl3();
  }
  else if(currentActive === 4) {
    a.href = getUrl4();
  }
  
}
function getUrl1(that) {
   return "https://steverhee3.github.io/stepfunctionality/function/index1.html";
}
function getUrl2(that) {
   return "https://steverhee3.github.io/stepfunctionality/function/index2.html";
}
function getUrl3(that) {
   return "https://steverhee3.github.io/stepfunctionality/function/index3.html";
}
function getUrl4(that) {
   return "https://steverhee3.github.io/stepfunctionality/function/index4.html";
}

