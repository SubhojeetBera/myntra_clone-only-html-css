//Slideshow js code

var i = 0;
var image = [];
var time = 3000;
image[0] = 'banner/banner.jpg';
image[1] = 'banner/banner1.jpg';
image[2] = 'banner/b2.jpg';
image[3] = 'banner/b3.png';
image[4] = 'banner/b4.jpg';
image[5] = 'banner/b5.webp';
image[6] = 'banner/b6.webp';

function changeImg() {
  document.slide.src = image[i];
  if (i < image.length - 1) {
    i++;
  }
  else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg;


//Browser inspect disable js code

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();

});
document.onkeydown = function (e) {
  if (event.keycode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }

};