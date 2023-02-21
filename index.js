let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const image = new Image();
image.src = './map1.png';

image.onload = () => {
  c.drawImage(image, -1050, -800);
}