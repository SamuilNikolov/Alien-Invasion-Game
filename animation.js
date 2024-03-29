var images = [];
var totalImages = 2;
var counterImage = 0;
var loadingImage = false;

var loading = true;
var index = 0;


function loadImageElement(filename) {
  loadImage(filename, imageLoaded);

  function imageLoaded(image) {
    console.log(filename);
    images.push(image);
    counterImage++;
    if (counterImage == totalImages) {
      loadingImage = true;
    }
  }
}

function setup() {
  clear();
frameRate(1);


  for (var i = 1; i <= totalImages; i++) {
    loadImageElement("alien" + i + ".jpg");
  }

}

function draw() {
  if ((loadingImage)) {
    loading = false;
  }

  if (!loading) {
    clear();
  image(images[index],0,0);
  index = (index+1)%2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
