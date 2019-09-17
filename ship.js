function Ship(x,r) {
  this.x = x;
  this.r = r;
  this.xdir = 0;
this.y=height-60;
  this.show = function() {

    image(img,this.x-35,this.y-18);

  }
this.die = function(){
  fill(0);
}
  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*5;
  }

}
