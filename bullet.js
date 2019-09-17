function Bullet(x,y)
{

this.x =x-24;
this.y = y-70;
this.r = 7;
this.toDelete = false;
this.randomNumber = int(random(1,10));
this.show = function(){



  noStroke();

  fill(40,255,40);
	ellipse(this.x,this.y,3,this.r*2);
}
this.dissappear = function(){
  this.toDelete = true;
}
this.hitsAlien = function(alien){
  var d = dist(this.x, this.y, alien.x, alien.y);
  if (d<this.r + alien.r) {
    return true;
  }
  else {
      return false;
  }

}
this.hitsZorg = function(zorg){
  var d = dist(this.x, this.y, zorg.x, zorg.y);
  if (d<this.r + zorg.r) {
    return true;
  }
  else {
      return false;
  }

}
this.hitsMeduza = function(zorg){
  var d = dist(this.x, this.y, zorg.x, zorg.y);
  if (d<this.r + zorg.r) {
    return true;
  }
  else {
      return false;
  }

}
this.hitsMachine = function(zorg){
  var d = dist(this.x, this.y, zorg.x, zorg.y);
  if (d<this.r + zorg.r) {
    return true;
  }
  else {
      return false;
  }

}
this.shoot = function(){
  this.y=this.y-2;
}
}
