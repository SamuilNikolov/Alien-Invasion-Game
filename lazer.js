function Lazer(x,y)
{
this.x =x;
this.y = y;
this.r = 13;
this.toDelete = false;
this.show = function(){
  fill(255,0,0);
  noStroke();
  ellipse(this.x,this.y,3,this.r*2);
}
this.dissappear = function(){
  this.toDelete = true;
}
this.hitsShip = function(ship){
  var d = dist(this.x, this.y, ship.x, ship.y);
  if (d<this.r + ship.r) {
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
this.hits = function(zorg){
  var d = dist(this.x, this.y, ship.x, ship.y);
  if (d<this.r + ship.r) {
    return true;
  }
  else {
      return false;
  }

}
this.shoot = function(){
  this.y=this.y+4;
}
}
