
// First Image slider

var slider = document.getElementById('slider');
document.getElementById("body").addEventListener("load",sliderImg);
var images = []

images[0] = "images/asset 6.jpeg";
images[1] = "images/asset 7.jpeg";
images[2] = "images/asset 8.jpeg";
images[3] = "images/asset 9.jpeg";

var imageLength = images.length;
    var i = 0;
    function sliderImg(){
        if(i > imageLength-1){
            i = 0;
        }
        
        slider.src = images[i];
        i++;
        setTimeout('sliderImg()',1000);
    }

    // Second Image slider



