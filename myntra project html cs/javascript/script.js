var i=0;
    var image=[];
    var time=3000;
    image[0]='banner/banner.jpg';
    image[1]='banner/banner1.jpg';
    image[2]='banner/b2.jpg';
    image[3]='banner/b3.png';
    image[4]='banner/b4.jpg';
    image[5]='banner/b5.webp';
    image[6]='banner/b6.webp';

    function changeImg(){
      document.slide.src=image[i];
      if(i<image.length-1){
        i++;
      }
      else{
        i=0;
      }
      setTimeout("changeImg()",time);
    }
    window.onload=changeImg;