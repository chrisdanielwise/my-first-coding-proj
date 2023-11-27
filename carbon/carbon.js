let open = document.getElementById('open');
let link = document.getElementById('links');
let hamburger = document.getElementsByClassName('hamburger');
let imgAnima = document.getElementById('img-anima');
console.log(hamburger);

open.addEventListener('click', function(){
    if(open.style.backgroundColor == 'rgb(250, 250, 250)') {
        link.style.display = 'flex';
        open.style.backgroundColor = 'hsl(258, 63%, 49%)';
       
        for(let i = 0; i <= hamburger.length; i++){
            hamburger[i].style.backgroundColor = 'hsl(0, 0%, 100%)';
        }
        // hamburger[0].style.backgroundColor = 'hsl(0, 0%, 100%)';
        // hamburger[1].style.backgroundColor = 'hsl(0, 0%, 100%)';
        // hamburger[2].style.backgroundColor = 'hsl(0, 0%, 100%)';
    } else {
        link.style.display = 'none';
        open.style.backgroundColor = 'rgb(250, 250, 250)';
        for(let i = 0; i <= hamburger.length; i++){
            hamburger[i].style.backgroundColor = 'hsl(0, 0%, 0%)';
        }
        // hamburger[0].style.backgroundColor = 'hsl(0, 0%, 0%)';
        // hamburger[1].style.backgroundColor = 'hsl(0, 0%, 0%)';
        // hamburger[2].style.backgroundColor = 'hsl(0, 0%, 0%)';
    }
    
})



// window.addEventListener("scroll", () => {
//     console.log("scroll");
//     var offset = imgAnima.getBoundingClientRect().top - imgAnima.offsetParent
//     const top = window.pageYOffset + window.innerHeight - offset;
    
//     let pos = imgAnima.offsetTop;
// console.log(pos)
//     if (top === imgAnima.scrollHeight) {
//     console.log("bottom");
//     }
//     }, { passive: false });

var img;

let prevRatio = 0.0;
const numSteps = 20.0;
window.addEventListener("load", (event) => {
     img = document.querySelector("#img-anima");
  
    createObserver();
  }, false)


    function createObserver() {
        let observer;
      
        let options = {
          root: null,
          rootMargin: "0px",
          threshold: buildThresholdList()
        };
      
        observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(img);
      }

      function buildThresholdList() {
        let thresholds = [];
        let numSteps = 20;
      
        for (let i=1.0; i<=numSteps; i++) {
          let ratio = i/numSteps;
          thresholds.push(ratio);
        }
      
        thresholds.push(0);
        return thresholds;
      }
      
      function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > prevRatio) {
          
            entry.target.setAttribute("src", "./images/asset 50.png");
            entry.target.style.transition = '3s ease-in'
          } else {
            entry.target.style.transition = '3s ease-in'
            entry.target.setAttribute("src", "./images/asset 52.png");
          
        }
      
          prevRatio = entry.intersectionRatio;
        });
      }