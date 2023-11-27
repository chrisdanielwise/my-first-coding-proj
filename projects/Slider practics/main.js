const carouselContainer = document.querySelector('.carouselContainer');
const slides = document.querySelector('.slides');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
var i = 0

let imgSlides = [
  "./images/assets 1.jpg",
  "./images/assets 2.jpg",
  "./images/assets 3.jpg",
  "./images/assets 4.jpg",
  "./images/assets 5.jpg"
]

let imgLength = imgSlides.length;

const nexting = () =>{  
   if(i > imgLength-1){
       i = 0;
     }
     slides.src = imgSlides[i];

     i++
    
 }
 const previewing = () =>{
  if(i < 0){
    i = imgLength-1;
  }
  slides.src = imgSlides[i];
  i--
  imgSlides[i].style.transition = '2s ease-in'
}
next.addEventListener('click',nexting);
prev.addEventListener('click',previewing);

