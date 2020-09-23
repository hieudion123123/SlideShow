var i = 0;
var images = [];
var time = 2000;

images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image3.jpg";

function imgchange(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("imgchange()", time);
}

window.onload = imgchange;