let red = document.getElementById('red')
let green = document.getElementById('green')
let blue = document.getElementById('blue')
let body = document.querySelector('body')
let rgb_color = document.querySelector('.rgb_color')
let colors = () =>{
  body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`
  rgb_color.textContent = `rgb(${red.value},${green.value},${blue.value})`
}
