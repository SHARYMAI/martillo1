noseX=200;
noseY=100;

function preload() {
    clown_nose = loadImage('MARTILLOBLINK.png');
   
  }
  function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
