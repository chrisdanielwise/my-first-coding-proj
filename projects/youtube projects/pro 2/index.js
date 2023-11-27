function changeColor1(){
  var text1 = document.querySelector('.text1');
  var color = '#'
  color +=  Math.random().toString(16).slice(2,8).toUpperCase()
  document.body.style.backgroundColor = color;
  text1.innerHTML = color;
  text1.classList.add('font','font1');
}
function changeColor2(){
  var text2 = document.querySelector('.text2');
  var rgb = document.querySelector('body');
  var i,j,k;
  i = Math.round(Math.random() *255)
  j = Math.round(Math.random() *255)
  k = Math.round(Math.random() *255)
  rgb.style.backgroundColor = `rgb(${i},${j},${k})`
  text2.innerHTML = `rgb(${i},${j},${k})`;
  text2.classList.add('font', 'font1'); 
}
//EXAMPLE 1


// Math.round() rounds a number to the nearest integer,
//  while Math.floor() rounds a number down to the nearest integer.
//  So if you were to use Math.random() to generate a random decimal number between 0 and 255,
//   Math.round() would round that number to the nearest whole number,
//  while Math.floor() would round it down to the next lowest whole number.

// For example, if Math.random() generated the number 0.8,
//  Math.round(0.8) would return 1, while Math.floor(0.8) would return 0.
// The main difference between the two functions is the way in which they
//  handle decimal values: Math.round() rounds up or down to the nearest whole number,
//  while Math.floor() always rounds down.
 
//EXAMPLE 2
// In JavaScript, Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).
//  Math.round() rounds a number to the nearest integer,
//  while Math.floor() rounds a number down to the nearest integer.

// When you multiply the result of Math.random() by 255,
//  you get a number between 0 and 255. When you pass this number to Math.round(),
//   it rounds the number to the nearest integer. For example,
//    if Math.random() returns 0.6, then Math.round(Math.random() * 255)
//     would return 153 because 0.6 * 255 is 153.3 and Math.round() rounds 153.3 to 153.

// On the other hand, if you pass the result of Math.random() * 255 to Math.floor(),
//  it rounds the number down to the nearest integer. So, using the same example,
//   Math.floor(Math.random() * 255) would return 153 as well because
//    0.6 * 255 is 153.3 and Math.floor() rounds 153.3 down to 153.

// In other words, both Math.round(Math.random() * 255) and
//  Math.floor(Math.random() * 255) will return a random integer between 0 and 255,
//   but Math.floor() will always round down while Math.round() will round to the nearest integer.