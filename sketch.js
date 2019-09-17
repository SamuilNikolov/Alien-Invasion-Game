var goToNewPage = false;
var useBombImg;
var arrow;
var hoverArrow;
var buttonToGoToMenu;
var cantUseBombImg;
var usedBombLvl1 = false;
var usedBombLvl2 = false;
var zorgsMAppeared = false;
var shipImg;
var usingBomb2 = false;
var pointsForBomb2 = 0;
var canUseBomb2 = false;
let randomIndex = 0;
var usingBomb = false;
var pointsForBomb = 0;
var canUseBomb = false;
var returnedSpaningForZorgsM = false;
var explodedForZorgsM = false;
var meduzasMAppeared = false;
var explodedForMeduzasM = false;
var returnedSpaningForMeduzasM = false;
var zorgsMAppeared = false;
var multiplicordiv = 0;
var shipR;
var returnedSpaningForAliensM = false;
var explodedForAliensM = false;
var canAppearAliensM = false;
var aliensMAppeared = false;
var paused = false;
var startedGame  = true;
var wentFullScreen = false;
var lvl1;
var shipL;
var lvl2;
var returnedSpaningForMeduzas = false;
var eplodedForMeduzas = false;
var canAppearMeduzas = false;
var meduzasAppeared = false;
var difficulty = "";
var milisecBeforeLvl1 = 0;
var tookMilBeforeLvl1 = false;
var lvl1ImgShowed = false;
var lvl2ImgShowed = false;
var lvl2Counter = 0;
﻿var text1 = "";
var text2 = "ГОТОВ ЛИ СИ ЗА МАТЕМАТИЧЕСКО ПРИКЛЮЧЕНИЕ?\n  Избери ниво на трудност:\n  :: Натисни 1 за 120 муниции (лесно) \n  :: Натисни 2 за 100 муниции (трудно) \n  :: Натисни 3 за 80 муниции (много трудно)";
var text3 = "";
var text1UntilNow = "";
var text2UntilNow = "";
var text3UntilNow = "";
var alienMImage1;
var leftKeyImg;
var rightKeyImg;
var spacebarImg;
var skipText = false;
var returnedSpaningForZorgs = false;
var firstTextShowed = false;
var secondTextShowed = false;
var thirdTextShowed = false;
var iTxt = 0;
var jTxt=0;
var kTxt=0;
var sizeOfTxt;
var ship;
var musicStarted = false;
var started = false;
var imageForShipLife;
var imageForShipLife2;
var imageForShipLife3;
var gameEndImage;
var gameWinImage;
var spawningExplosion;
var eplodedForZorgs = false;
var explodedForAliens = false;
var infoAlien;
var infoZorg;
var infoMeduza;
var zorgsAppeared = false;
var aliensAppeared = false;
var canAttackZorgs = false;
var canAttackAliens = false;
var spawningMachine;
var spawningY = -20;
var canAppearZorgs = false;
var canAppearAliens = false;
var canAppearAliensM = false;
var canAttackAliensM = false;
var canAppearZorgsM = false;
var canAttackZorgsM = false;
var canAppearMeduzasM = false;
var canAttackMeduzasM = false;
var nums = [];
var numsM = [];
var numsMZorgs = [];
var numsMMeduzas = [];
var shipNumAliensM = 0;
var firstRandNumAliensM = 0;
var secondRandNumAliensM = 0;
var indexNumAliensM = 0;
var shipNumZorgsM = 0;
var firstRandNumZorgsM = 0;
var secondRandNumZorgsM = 0;
var indexNumZorgsM = 0;
var shipNumMeduzasM = 0;
var firstRandNumMeduzasM = 0;
var secondRandNumMeduzasM = 0;
var indexNumMeduzasM = 0;
var shipNumAliens = 0;
var firstRandNumAliens = 0;
var secondRandNumAliens = 0;
var indexNumAliens = 0;
var numsZorgs = [];
var shipNumZorgs = 0;
var firstRandNumZorgs = 0;
var secondRandNumZorgs = 0;
var indexNumZorgs = 0;
var numsMeduzas = [];
var shipNumMeduzas = 0;
var firstRandNumMeduzas = 0;
var secondRandNumMeduzas = 0;
var indexNumMeduzas = 0;
var plusOrMinus = 0;
var colorBullet;
var bgMusic;
var hitShipSound;
var gameOverSound;
var winSound;
var shipHealth = 3;
var bg;
var machineDown = false;
var otherDirection = false;
var ammo=999;
var points = 0;
var aliens = [];
var aliensM = [];
var zorgsM = [];
var meduzasM = [];
var zorgs = [];
var meduzas = [];
var lazers =[];
var bullets = [];
var zorgHealth = [];
var zorgHealthM = [];
var meduzaHealth = [];
var meduzaHealthM = [];
var explozionAlien ;
var hitZorg;
var explozionUfo;
var hitMeduza;
var explozionUfo;
var appearNewLevel;
var shooting;
var flying;
var img;
var transparent;
var win=false;
var alienImgs=[];
var zorgImgs=[];
var meduzaImgs=[];
var flyingMachineImg;
var rAlien = 0;
var rAlienM = 0;
var rZorgM = 0;
var rMeduzaM = 0;
var rZorg = 0;
var rMeduza = 0;
var mil = 0;
var clearScreen = false;
var bd;
function preload() {
	transparent = loadImage("transparent.png");
	arrow = loadImage("img0004.png");
	hoverArrow = loadImage("img0004_hover.png");
	useBombImg = loadImage("bomba.png");
	cantUseBombImg = loadImage("bomb.png");
	leftKeyImg = loadImage("left key.png");
	lvl1 = loadImage("lvl1.png");
	lvl2 = loadImage("lvl2.png");
	shipR = loadImage("shipR.png");
	shipImg = loadImage("ship.png");
	shipL = loadImage("shipL.png");
	//alienMImage1 = loadImage("alien1m.png");
	rightKeyImg = loadImage("right key.png");
	spacebarImg = loadImage("spacebar.png");
	bd = loadImage("SpaceBackground3.jpg");
	gameEndImage = loadImage("loss.jpg");
	gameWinImage = loadImage("win.jpg");
	imageForShipLife = loadImage("live3.png");
	imageForShipLife2 = loadImage("live2.png");
	imageForShipLife3 = loadImage("live1.png");
	spawningExplosion = loadImage("spawning explosion.png");
	infoAlien = loadImage('mathafix-alien.png');
	infoZorg = loadImage('zorgInfo.png');
	infoMeduza = loadImage('meduaInfo.png');
	spawningMachine = loadImage("allaliens.png");
	appearNewLevel = loadSound("Power_Up_Ray-Mike_Koenig-800933783.mp3");
  bg = loadImage("spaceBackground.jpg");
  hitShipSound=loadSound("Roundhouse Kick-SoundBible.com-1663225804.mp3");
  bgMusic=loadSound("bgMusic.mp3");
  explozionAlien= loadSound("Shotgun_Blast-Jim_Rogers-1914772763.mp3");
  hitZorg= loadSound("punch_or_whack_-Vladimir-403040765.mp3");
  shooting = loadSound("Silencer-SoundBible.com-1632156458.mp3");
  hitMeduza = loadSound("Strong_Punch-Mike_Koenig-574430706.mp3")
  explozionUfo = loadSound("Martian_Death_Ray-Mike_Koenig-937891031.mp3")
  img = loadImage("ship.png");
  alienImgs[0] = loadImage("alien1.png");
  alienImgs[1] = loadImage("alien2.png");
  zorgImgs[0] = loadImage("zorg1.png");
  zorgImgs[1] = loadImage("zorg2.png");
  meduzaImgs[0] = loadImage("meduza1.png");
  meduzaImgs[1] = loadImage("meduza2.png");
flyingMachineImg=loadImage("allaliens1.png");
flying=loadSound("Strange Noise-SoundBible.com-229408508.mp3");
winSound=loadSound("341984__unadamlar__winning.wav");
gameOverSound=loadSound("382310__myfox14__game-over-arcade.wav");
}
function changeBG() {
  var val = random(255);
	window.open("menu.html","_self");
  background(val);
}
function setup(){
  createCanvas(windowWidth,windowHeight);
	frameRate(15);
	buttonToGoToMenu = createImg("img0004.png");
	buttonToGoToMenu.position(80,30);
	buttonToGoToMenu.mousePressed(changeBG);
	sizeOfTxt = (windowWidth*windowHeight)/60000;
	for (var i = 0; i < 6; i++) {
	    numsM[i] = int(random(1,11));
	  }
	indexNumAliensM = int(random(0,6));
	shipNumAliensM = numsM[indexNumAliensM];
	//
	if (shipNumAliensM%4 == 0) {
firstRandNumAliensM = shipNumAliensM/4;
}
else if(shipNumAliensM%3 == 0){
firstRandNumAliensM = shipNumAliensM/3;
}
else if (shipNumAliensM%2==0) {
firstRandNumAliensM = shipNumAliensM/2;
}
else {
  while(shipNumAliensM%firstRandNumAliensM!=0){
  firstRandNumAliensM = int(random(0,shipNumAliensM+1));
  }
}
	//
	secondRandNumAliensM = shipNumAliensM/firstRandNumAliensM;
	for (var i = 0; i < 7; i++) {
	    numsMZorgs[i] = int(random(1,11));
	  }
		indexNumZorgsM = int(random(0,7));
		shipNumZorgsM = numsMZorgs[indexNumZorgsM];
		firstRandNumZorgsM = int(random(0,11));
		if (shipNumZorgsM*4<=10) {
			firstRandNumZorgsM = shipNumZorgsM*4;
			secondRandNumZorgsM = 4;
		}
		if (shipNumZorgsM*3<=10) {
			firstRandNumZorgsM = shipNumZorgsM*3;
			secondRandNumZorgsM = 3;
		}if (shipNumZorgsM*2<=10) {
			firstRandNumZorgsM = shipNumZorgsM*2;
			secondRandNumZorgsM = 2;
		}
		else {
			firstRandNumZorgsM = shipNumZorgsM;
			secondRandNumZorgsM = 1;
		}
	for (var i = 0; i < 8; i++) {
	    numsMMeduzas[i] = int(random(1,11));
	  }
	indexNumMeduzasM = int(random(0,8));
	shipNumMeduzasM = numsMMeduzas[indexNumMeduzasM];
	firstRandNumMeduzasM = int(random(0,11));
	multiplicordiv = int(random(0,2));
	if (multiplicordiv == 0) {
		if (shipNumMeduzasM*4<=10) {
			firstRandNumMeduzasM = shipNumMeduzasM*4;
			secondRandNumMeduzasM = 4;
		}
		if (shipNumMeduzasM*3<=10) {
			firstRandNumMeduzasM = shipNumMeduzasM*3;
			secondRandNumMeduzasM = 3;
		}if (shipNumMeduzasM*2<=10) {
			firstRandNumMeduzasM = shipNumMeduzasM*2;
			secondRandNumMeduzasM = 2;
		}
		else {
			firstRandNumMeduzasM = shipNumMeduzasM;
			secondRandNumMeduzasM = 1;
		}
	}
	if (multiplicordiv == 1) {

		if (shipNumMeduzasM%4 == 0) {
		firstRandNumMeduzasM = shipNumMeduzasM/4;
		}
		else if(shipNumMeduzasM%3 == 0){
		firstRandNumMeduzasM = shipNumMeduzasM/3;
		}
		else if (shipNumMeduzasM%2==0) {
		firstRandNumMeduzasM = shipNumMeduzasM/2;
		}
		else {
		while(shipNumMeduzasM%firstRandNumMeduzasM!=0){
		firstRandNumMeduzasM = int(random(0,shipNumMeduzasM+1));
		}
		}
		secondRandNumMeduzasM = shipNumMeduzasM/firstRandNumMeduzasM;

	}

  for (var i = 0; i < 6; i++) {
    nums[i] = int(random(1,11));
  }
  indexNumAliens = int(random(0,6));
console.log(nums[indexNumAliens]);
shipNumAliens = nums[indexNumAliens];
firstRandNumAliens = int(random(0,shipNumAliens+1));
console.log(firstRandNumAliens);
secondRandNumAliens = shipNumAliens-firstRandNumAliens;
console.log(secondRandNumAliens);
for (var i = 0; i < 7; i++) {
  numsZorgs[i] = int(random(1,11));
}
indexNumZorgs = int(random(0,7));
console.log(nums[indexNumZorgs]);
shipNumZorgs = numsZorgs[indexNumZorgs];
firstRandNumZorgs = int(random(shipNumZorgs,11));
console.log(firstRandNumZorgs);
secondRandNumZorgs = firstRandNumZorgs-shipNumZorgs;
console.log(secondRandNumZorgs);
for (var i = 0; i < 8; i++) {
  numsMeduzas[i] = int(random(1,11));
}
indexNumMeduzas = int(random(0,8));
plusOrMinus = int(random(0,2));
if(plusOrMinus == 0){
	indexNumMeduzas = int(random(0,6));
console.log(nums[indexNumMeduzas]);
shipNumMeduzas = numsMeduzas[indexNumMeduzas];
firstRandNumMeduzas = int(random(0,shipNumMeduzas+1));
console.log(firstRandNumMeduzas);
secondRandNumMeduzas = shipNumMeduzas-firstRandNumMeduzas;
console.log(secondRandNumMeduzas);
}
if(plusOrMinus == 1){
console.log(nums[indexNumMeduzas]);
shipNumMeduzas = numsMeduzas[indexNumMeduzas];
firstRandNumMeduzas = int(random(shipNumMeduzas,11));
console.log(firstRandNumMeduzas);
secondRandNumMeduzas = firstRandNumMeduzas-shipNumMeduzas;
console.log(secondRandNumMeduzas);
}
  ship=new Ship(width/2,30);
  setTimeout(animAliens, 1000);
	setTimeout(animAliensM,1000);
  setTimeout(animZorgs, 1000);
  setTimeout(animMeduzas, 1000);
  setTimeout(attack,1000);

   bgMusic.setVolume(0.1);
//bgMusic.play();
//  bullet = new Bullet(width/2,height/2);
  for (var i = 0; i < 6; i++) {
    rAlien =(rAlien+1)%2;
    aliens[i]= new Alien(i*120+windowWidth/4,180,alienImgs[rAlien]);
  }
	for (var i = 0; i < 6; i++) {
    rAlienM =(rAlienM+1)%2;
    aliensM[i]= new AlienM(i*120+windowWidth/4,180,alienImgs[rAlien]);
  }
	for (var i = 0; i < 7; i++) {
		rZorgM =(rZorgM+1)%2;
		zorgHealthM[i] = 2;
		zorgsM[i]= new ZorgM(i*120+windowWidth/4,180,zorgImgs[rZorgM],zorgHealthM[i]);
	}
	for (var i = 0; i < 8; i++) {
		rMeduzaM =(rMeduzaM+1)%2;
		meduzaHealthM[i] = 3;
		meduzasM[i]= new MeduzaM(i*120+windowWidth/4,180,meduzaImgs[meduzasM],meduzaHealthM[i]);
	}
  for (var i = 0; i < 8; i++) {
    rMeduza =(rMeduza+1)%2;
    meduzaHealth[i]=3;
    meduzas[i]= new Meduza(i*120+windowWidth/4,180,meduzaImgs[rMeduza],meduzaHealth[i]);
  }
  for (var i = 0; i < 7; i++) {
    rZorg =(rZorg+1)%2;
    zorgHealth[i]=2;
    zorgs[i]= new Zorg(i*120+windowWidth/4,180,zorgImgs[rZorg],zorgHealth[i]);
  }

}
function draw()
{
	if(ship.xdir == 0){
		img = shipImg;
	}
if (aliens.length == 0 && zorgs.length == 0 && meduzas.length == 0 && aliensM.length == 0 && zorgsM.length == 0 && meduzasM.length == 0){
win=true;
}
	if(!musicStarted && started){
	bgMusic.play();
	musicStarted = true;
	frameRate(60);
}
	if(musicStarted){

	}
	if(!started){
		background(bd);
	  typing();
	  console.log(thirdTextShowed);

	if (firstTextShowed) {
	  image(alienImgs[0],windowWidth-440,60);
	  image(zorgImgs[0],windowWidth-360,60);
	  image(meduzaImgs[0],windowWidth-280,60);



	  //console.log(firstTextShowed);
	  typing2();
	  if(firstTextShowed){
			image(leftKeyImg,windowWidth-460,340);
			image(rightKeyImg,windowWidth-250,340);
			image(spacebarImg,windowWidth-401,340);
			image(img,windowWidth-360,280);
			textSize(15);
			text("(движение \n наляво)",windowWidth-470,420);
			text("(движение \n надясно)",windowWidth-250,420);
			text("(ИЗСТРЕЛ)",windowWidth-365,420);
	    typing3();
	  }
	}
	}
  if (clearScreen && started) {
    clear();
	background(gameEndImage);

    fill(255);
textSize(70);
textAlign(CENTER);
    text(points,windowWidth/2,windowHeight/2);
	textAlign(LEFT);
		textSize(30);
		textAlign(CENTER, CENTER);
		//text("НАТИСНИ '4' ЗА НОВА ИГРА!",windowWidth/2,30);
		textAlign(LEFT, LEFT);
    bgMusic.stop();
    explozionAlien.stop();
    gameOverSound.play();
    ammo=0;
    draw.stop();

  }
else if (win && started) {

    clear();

	background(gameWinImage);

    fill(255);
		textSize(70);
		textAlign(CENTER);

    text(points,windowWidth/2,windowHeight/2);
	textAlign(LEFT);

		textSize(30);
		textAlign(CENTER, CENTER);

		//text("НАТИСНИ '4' ЗА НОВА ИГРА!",windowWidth/2,30);
		textAlign(LEFT, LEFT);

    ammo=0;
    bgMusic.stop();
    winSound.play();
    draw.stop();
  }
  else if(started){


		//console.log(zorgHealth);
		//console.log(meduzaHealth);
		//console.log(zorgHealthM);
//console.log(meduzaHealthM);
    mil=millis();
    //console.log(mil);
    background(bg);

		if(shipHealth == 3)
		image(imageForShipLife,windowWidth-180,0);
		if(shipHealth==2)
		image(imageForShipLife2,windowWidth-180,0);
		if(shipHealth == 1)
		image(imageForShipLife3,windowWidth-180,0);
		if (!tookMilBeforeLvl1) {
			milisecBeforeLvl1 = mil;
			tookMilBeforeLvl1 = true;
		}
if (lvl1ImgShowed == false) {
imageMode(CENTER);
	image(lvl1,windowWidth/2,windowHeight/2);
if (spawningY>150) {
	lvl1ImgShowed = true;

}
imageMode(CORNER);
}
if (lvl2ImgShowed == false && meduzas.length == 0 && !explodedForAliensM) {
imageMode(CENTER);
	image(lvl2,windowWidth/2,windowHeight/2);
	lvl2Counter ++;
	if (difficulty == "easy") {
		ammo = 120;
	}
	else if (difficulty == "hard") {
		ammo = 100;
	}
	else if (difficulty == "very hard") {
		ammo = 80;
	}
if (lvl2Counter > 300) {
	lvl2ImgShowed = true;

}
imageMode(CORNER);
}
frameRate(60);
    fill(255);
	 textSize(15);
	text('Муниции: '+ammo,windowWidth-465,20);
    text('Точки: '+points,windowWidth-330,20);
    	text('Живот:',windowWidth-230,20);
	textSize(15);
	text('За да унищожите нашествениците са нужни:       ',10,20);
	image(infoAlien,314,-5);
    text('- 1 удар',345,20);
	image(infoZorg,398,-5);
    text('- 2 ударa',435,20);
	image(infoMeduza,498,-5);
    text('- 3 ударa',535,20);
	imageMode(CENTER);

		//image(useBombImg,windowWidth/2,windowHeight/2);
		imageMode(CORNER);
	if(usingBomb){
		if (zorgs.length == 0 && meduzas.length != 0 && usedBombLvl1 == false) {
			meduzas.length = 0;
			console.log("test");
			usingBomb=false;
											image(spawningExplosion,windowWidth/2-200,60);
		}
		if (aliens.length == 0 && zorgs.length!= 0 && usedBombLvl1 == false) {
			zorgs.length = 0;
			console.log("test");
			usingBomb=false;
											image(spawningExplosion,windowWidth/2-200,60);
		}
usedBombLvl1 = true;

	}
	if(usingBomb2){
		if (zorgsM.length == 0 && meduzasM.length != 0 && usedBombLvl2 == false) {
			meduzasM.length = 0;
			console.log("test");
			usingBomb2=false;
											image(spawningExplosion,windowWidth/2-200,60);
		}
		if (aliensM.length == 0 && zorgsM.length!= 0 && usedBombLvl2 == false) {
			zorgsM.length = 0;
			console.log("test");
			usingBomb2=false;
											image(spawningExplosion,windowWidth/2-200,60);
		}
usedBombLvl2 = true;

	}
	if (canUseBomb && usedBombLvl1 == false) {
		textAlign(CENTER,CENTER);
		//fill(255,50,50);
		textSize(15);
		fill(255);
		textAlign(CENTER,CENTER);
		text("Бомбата е заредена!",windowWidth/2+110,20);
		textAlign(CORNER,CORNER);
		imageMode(CENTER);

		image(useBombImg,windowWidth/2,30);
		imageMode(CORNER);

	textAlign(LEFT,LEFT);
	}
	else if( canUseBomb == false && usedBombLvl1 == false){
		textAlign(CENTER,CENTER);
		//fill(255,50,50);
		textSize(30);
		imageMode(CENTER);

		image(cantUseBombImg,windowWidth/2,30);
		imageMode(CORNER);

	textAlign(LEFT,LEFT);
	}
		if (canUseBomb2 && usedBombLvl2 == false) {
			textAlign(CENTER,CENTER);
			//fill(255,50,50);
			textAlign(CENTER,CENTER);
			fill(255);
		text("Бомбата е заредена!",windowWidth/2+110,20);
		textAlign(CORNER,CORNER);
			imageMode(CENTER);

			image(useBombImg,windowWidth/2,30);
			imageMode(CORNER);

		textAlign(LEFT,LEFT);
		}
		else if( canUseBomb == false && usedBombLvl2 == false){
			textAlign(CENTER,CENTER);
			//fill(255,50,50);
			textSize(30);
			imageMode(CENTER);

			image(cantUseBombImg,windowWidth/2,30);
			imageMode(CORNER);

		textAlign(LEFT,LEFT);
		}
	//text(shipNumMeduzas,windowWidth-300,windowHeight-500);
	textSize(25);
  if(aliens.length != 0)
	text(firstRandNumAliens+' + '+secondRandNumAliens,ship.x-28,ship.y+45);
else if(zorgs.length != 0){
  text(firstRandNumZorgs+' - '+secondRandNumZorgs,ship.x-28,ship.y+45);
}
else if(meduzas.length != 0){
	if(plusOrMinus == 0)
	text(firstRandNumMeduzas+' + '+secondRandNumMeduzas,ship.x-28,ship.y+45);
if(plusOrMinus == 1)
	text(firstRandNumMeduzas+' - '+secondRandNumMeduzas,ship.x-28,ship.y+45);
}
	else if(aliensM.length != 0){
	  text(firstRandNumAliensM+' x '+secondRandNumAliensM,ship.x-28,ship.y+45);
}
else if(zorgsM.length != 0 && explodedForZorgsM){
	text(firstRandNumZorgsM+' / '+secondRandNumZorgsM,ship.x-28,ship.y+45);
}
else if(meduzasM.length != 0 && multiplicordiv == 1){
	text(firstRandNumMeduzasM+' x '+secondRandNumMeduzasM,ship.x-28,ship.y+45);
}
else {
	text(firstRandNumMeduzasM+' / '+secondRandNumMeduzasM,ship.x-28,ship.y+45);

}
if(goToNewPage){
	location.reload();

}

	for(var i = 0; i<bullets.length; i++){
		if(bullets[i].y < 0){
			bullets.splice(i,1);
		}
	}
	for(var i = 0; i<lazers.length; i++){
		if(lazers[i].y > windowHeight){
			lazers.splice(i,1);
		}
		//console.log(lazers.length);
	}
	for(var i =0; i<aliens.length; i++){
		fill(255);

		textSize(20);
		if(nums[i]<=9 && canAppearAliens){


			text(nums[i],aliens[i].x-6,aliens[i].y+4);
		}
	else if(canAppearAliens)
	{
		text(nums[i],aliens[i].x-12,aliens[i].y+4);
	}

	}
	for(var i =0; i<aliensM.length; i++){
		fill(255);

		textSize(20);
		if(numsM[i]<=9 && canAppearAliensM){


			text(numsM[i],aliensM[i].x-6,aliensM[i].y+4);
		}
	else if(canAppearAliensM)
	{
		text(numsM[i],aliensM[i].x-12,aliensM[i].y+4);
	}

	}
	for(var i =0; i<zorgsM.length; i++){
		fill(255);

		textSize(20);
		if(numsMZorgs[i]<=9 && canAppearZorgsM && explodedForZorgsM){

			if(zorgHealthM[i] == 1)
				fill(255,0,0);
			text(numsMZorgs[i],zorgsM[i].x-6,zorgsM[i].y+4);
		}
	else if(canAppearZorgsM && explodedForZorgsM)
	{if(zorgHealthM[i] == 1)
		fill(255,0,0);
		text(numsMZorgs[i],zorgsM[i].x-12,zorgsM[i].y+4);
	}

}for(var i =0; i<meduzasM.length; i++){
		fill(255);

		textSize(20);
		if(numsMMeduzas[i]<=9 && explodedForMeduzasM){

			if(meduzaHealthM[i] == 2)
				fill(0,255,0);
			if(meduzaHealthM[i] == 1)
				fill(255,0,0);
			text(numsMMeduzas[i],meduzasM[i].x+6,meduzasM[i].y+4);
		}
	else if(explodedForMeduzasM)
	{if(meduzaHealthM[i] == 2)
		fill(0,255,0);
	if(meduzaHealthM[i] == 1)
		fill(255,0,0);
		text(numsMMeduzas[i],meduzasM[i].x+2,meduzasM[i].y+4);
	}

	}
  for(var i =0; i<zorgs.length; i++){
		fill(255);

		textSize(20);
		if(numsZorgs[i]<=9 && aliens.length == 0 && canAppearZorgs){

			if(zorgHealth[i] == 1)
				fill(255,0,0);
			text(numsZorgs[i],zorgs[i].x-6,zorgs[i].y+4);
		}
	else if(aliens.length == 0 && canAppearZorgs)
	{
		if(zorgHealth[i] == 1)
				fill(255,0,0);
		text(numsZorgs[i],zorgs[i].x-12,zorgs[i].y+4);
	}
	}
	for(var i =0; i<meduzas.length; i++){
		fill(255);

		textSize(20);
		if(numsMeduzas[i]<=9 && zorgs.length == 0 && canAppearMeduzas){
			if(meduzaHealth[i] == 2)
				fill(0,255,0);
			if(meduzaHealth[i] == 1)
				fill(255,0,0);
			text(numsMeduzas[i],meduzas[i].x+8,meduzas[i].y+4);
		}
	else if(zorgs.length == 0 && canAppearMeduzas)
	{
		if(meduzaHealth[i] == 2)
			fill(0,255,0);
		if(meduzaHealth[i] == 1)
			fill(255,0,0);
		text(numsMeduzas[i],meduzas[i].x+3,meduzas[i].y+4);
	}
	}
    if (ship.x>windowWidth-40) {
      ship.x=20;
    }
    if (ship.x<0) {
      ship.x=windowWidth-60;
    }
    ship.show();
      ship.move();

for (var i = 0; i < lazers.length; i++) {
  lazers[i].show();
  lazers[i].shoot();

  if (lazers[i].hits(ship[0])) {
    shipHealth--;
    if (shipHealth==0) {
clearScreen=true;
}else {
  hitShipSound.play();
}
  lazers[i].dissappear();
  }



}

if(aliens.length == 0 && meduzas.length == 0 && zorgs.length == 0 && aliensM.length == 0 && zorgsM.length == 0 && meduzasM.length == 0){
	win = true;
}
    for (var i = 0; i < bullets.length; i++){
      bullets[i].show();
      bullets[i].shoot();
      for (var j = 0; j < aliens.length; j++) {
       if (bullets[i].hitsAlien(aliens[j]) && shipNumAliens == nums[j]) {
  aliens[j].die();
  //console.log('hi = '+aliensM.length);
  nums.splice(j,1);
  indexNumAliens = int(random(0,nums.length));
console.log(nums[indexNumAliens]);
shipNumAliens = nums[indexNumAliens];
firstRandNumAliens = int(random(0,shipNumAliens+1));
console.log(firstRandNumAliens);
secondRandNumAliens = shipNumAliens-firstRandNumAliens;
  explozionAlien.play();
  if (aliens[j].hits(ship)) {
  ship.die();

  }
  bullets[i].dissappear();
  }
	if (bullets[i].hitsAlien(aliens[j]) && shipNumAliens != nums[j]) {
		points-=5;
		bullets[i].dissappear();

}
  }
    }
		if(canAppearAliensM){
		for (var i = 0; i < bullets.length; i++){
      bullets[i].show();
      bullets[i].shoot();

      for (var j = 0; j < aliensM.length; j++) {
       if (bullets[i].hitsAlien(aliensM[j]) && shipNumAliensM == numsM[j] && explodedForAliensM) {
				 console.log(win);
				 console.log(aliens.length  +  '   VERSUS '+aliensM.length);

  aliensM[j].die();
	numsM.splice(j,1);
	console.log(aliensM.length);

	indexNumAliensM = int(random(0,numsM.length));
	shipNumAliensM = numsM[indexNumAliensM];
	//
	if (shipNumAliensM%4 == 0 && !win && aliensM.length > 1) {
firstRandNumAliensM = shipNumAliensM/4;
}
else if(shipNumAliensM%3 == 0 && !win && aliensM.length > 1){
firstRandNumAliensM = shipNumAliensM/3;
}
else if (shipNumAliensM%2==0 && !win && aliensM.length > 1) {
firstRandNumAliensM = shipNumAliensM/2;
}
else {
  while(shipNumAliensM%firstRandNumAliensM!=0 && !win && aliensM.length > 1){
  firstRandNumAliensM = int(random(0,shipNumAliensM+1));
  }
}
	//
	secondRandNumAliensM = shipNumAliensM/firstRandNumAliensM;
	console.log('random number = '+numsM[indexNumAliensM]);
	console.log('random index = '+indexNumAliensM);
  explozionAlien.play();
  if (aliensM[j].hits(ship)) {
  ship.die();

  }
  bullets[i].dissappear();
  }
	if (bullets[i].hitsAlien(aliensM[j]) && shipNumAliensM != numsM[j] && explodedForAliensM) {
		points-=5;
		bullets[i].dissappear();

}
  }
    }
	}
	if(canAppearZorgsM){
	for (var i = 0; i < bullets.length; i++){
		bullets[i].show();
		bullets[i].shoot();

		for (var j = 0; j < zorgsM.length; j++) {
		 if (bullets[i].hitsZorg(zorgsM[j]) && shipNumZorgsM == numsMZorgs[j] && explodedForZorgsM) {
			 console.log(zorgHealthM);
			 zorgHealthM[j]--;
			 console.log(zorgHealthM);

if(zorgHealthM[j] == 0){
zorgsM[j].die();
zorgHealthM[j] = zorgHealthM[j+1];

numsMZorgs.splice(j,1);
zorgHealthM[j] = zorgHealthM[j+1];

console.log(zorgsM.length);

indexNumZorgsM = int(random(0,numsMZorgs.length));
shipNumZorgsM = numsMZorgs[indexNumZorgsM];
firstRandNumZorgsM = int(random(0,11));
if (shipNumZorgsM*4<=10) {
	firstRandNumZorgsM = shipNumZorgsM*4;
	secondRandNumZorgsM = 4;
}
if (shipNumZorgsM*3<=10) {
	firstRandNumZorgsM = shipNumZorgsM*3;
	secondRandNumZorgsM = 3;
}if (shipNumZorgsM*2<=10) {
	firstRandNumZorgsM = shipNumZorgsM*2;
	secondRandNumZorgsM = 2;
}
else {
	firstRandNumZorgsM = shipNumZorgsM;
	secondRandNumZorgsM = 1;
}
console.log('random number = '+numsMZorgs[indexNumZorgsM]);
console.log('random index = '+indexNumZorgsM);
explozionAlien.play();
}
else {
	hitZorg.play();
}
if (zorgsM[j].hits(ship)) {
ship.die();

}
bullets[i].dissappear();
}
if (bullets[i].hitsAlien(zorgsM[j]) && shipNumZorgsM != zorgsM[j] && explodedForZorgsM) {
	points-=5;
	bullets[i].dissappear();

}
}
	}
}
//
if(canAppearMeduzasM){
for (var i = 0; i < bullets.length; i++){
	bullets[i].show();
	bullets[i].shoot();

	for (var j = 0; j < meduzasM.length; j++) {
	 if (bullets[i].hitsZorg(meduzasM[j]) && shipNumMeduzasM == numsMMeduzas[j] && explodedForMeduzasM) {
meduzaHealthM[j]--;
 console.log(meduzaHealthM);

if (meduzaHealthM[j]==0) {
	meduzasM[j].die();
	meduzaHealthM[j] = meduzaHealthM[j+1];
	numsMMeduzas.splice(j,1);
	console.log(numsMMeduzas);
	indexNumMeduzasM = int(random(0,meduzasM.length-1));
	shipNumMeduzasM = numsMMeduzas[indexNumMeduzasM];
	firstRandNumMeduzasM = int(random(0,11));
	multiplicordiv = int(random(0,2));
	if (multiplicordiv == 0) {
		if (shipNumMeduzasM*4<=10) {
			firstRandNumMeduzasM = shipNumMeduzasM*4;
			secondRandNumMeduzasM = 4;
		}
		if (shipNumMeduzasM*3<=10) {
			firstRandNumMeduzasM = shipNumMeduzasM*3;
			secondRandNumMeduzasM = 3;
		}if (shipNumMeduzasM*2<=10) {
			firstRandNumMeduzasM = shipNumMeduzasM*2;
			secondRandNumMeduzasM = 2;
		}
		else {
			firstRandNumMeduzasM = shipNumMeduzasM;
			secondRandNumMeduzasM = 1;
		}
	}
	if (multiplicordiv == 1) {

		if (shipNumMeduzasM%4 == 0) {
		firstRandNumMeduzasM = shipNumMeduzasM/4;
		}
		else if(shipNumMeduzasM%3 == 0){
		firstRandNumMeduzasM = shipNumMeduzasM/3;
		}
		else if (shipNumMeduzasM%2==0) {
		firstRandNumMeduzasM = shipNumMeduzasM/2;
		}
		else {
		while(shipNumMeduzasM%firstRandNumMeduzasM!=0 && meduzasM.length!=0){
		firstRandNumMeduzasM = int(random(0,shipNumMeduzasM+1));
		}
		}
		secondRandNumMeduzasM = shipNumMeduzasM/firstRandNumMeduzasM;

	}
	console.log('random number = '+numsMMeduzas[indexNumMeduzasM]);
	console.log('random index = '+indexNumMeduzasM);
	console.log(firstRandNumMeduzasM);
	console.log(secondRandNumMeduzasM);

	explozionAlien.play();
}
else {
	hitMeduza.play();
}
if (meduzasM[j].hits(ship)) {
ship.die();

}
bullets[i].dissappear();
}
if (bullets[i].hitsAlien(meduzasM[j]) && shipNumMeduzasM != numsMMeduzas[j] && explodedForMeduzasM) {
points-=5;
bullets[i].dissappear();

}
}
}
}


//

    for (var i = 0; i < bullets.length; i++){
      bullets[i].show();
      bullets[i].shoot();
      for (var j = 0; j < zorgs.length; j++) {
       if (bullets[i].hitsZorg(zorgs[j]) && aliens.length == 0 && shipNumZorgs == numsZorgs[j] && eplodedForZorgs) {
zorgHealth[j]--;

if (zorgHealth[j]==0) {
  zorgs[j].die();
  zorgHealth[j] = zorgHealth[j+1];
  numsZorgs.splice(j,1);
  indexNumZorgs = int(random(0,numsZorgs.length));
console.log(numsZorgs[indexNumZorgs]);
shipNumZorgs = numsZorgs[indexNumZorgs];
firstRandNumZorgs = int(random(shipNumZorgs,11));
console.log(firstRandNumZorgs);
secondRandNumZorgs = firstRandNumZorgs-shipNumZorgs;
  explozionAlien.play();
}
else {
  hitZorg.play();
}


    if (zorgs[j].hits(ship)) {
    ship.die();

    }
    bullets[i].dissappear();
    }
if (bullets[i].hitsAlien(zorgs[j]) && shipNumZorgs != numsZorgs[j] && eplodedForZorgs) {
		points-=5;
		bullets[i].dissappear();

}
    }
    }
    for (var i = 0; i < bullets.length; i++){
      bullets[i].show();
      bullets[i].shoot();
      for (var j = 0; j < meduzas.length; j++) {
       if (bullets[i].hitsMeduza(meduzas[j]) && zorgs.length == 0 && shipNumMeduzas == numsMeduzas[j] && eplodedForMeduzas) {
         meduzaHealth[j]--;

         if (meduzaHealth[j]==0) {
           meduzas[j].die();
           meduzaHealth[j] = meduzaHealth[j+1];
		   numsMeduzas.splice(j,1);
  plusOrMinus = int(random(0,2));
if(plusOrMinus == 0){
	indexNumMeduzas = int(random(0,numsMeduzas.length));
console.log('random number = '+numsMeduzas[indexNumMeduzas]);
shipNumMeduzas = numsMeduzas[indexNumMeduzas];
firstRandNumMeduzas = int(random(0,shipNumMeduzas+1));
console.log(firstRandNumMeduzas);
secondRandNumMeduzas = shipNumMeduzas-firstRandNumMeduzas;
}
if(plusOrMinus==1){
		indexNumMeduzas = int(random(0,numsMeduzas.length));
shipNumMeduzas = numsMeduzas[indexNumMeduzas];
console.log('random number = '+numsMeduzas[indexNumMeduzas]);
console.log('random index = '+indexNumMeduzas);
firstRandNumMeduzas = int(random(shipNumMeduzas,11));
console.log(firstRandNumMeduzas);
secondRandNumMeduzas = firstRandNumMeduzas-shipNumMeduzas;
}

           explozionAlien.play();
         }
         else {
           hitMeduza.play();
         }

    if (meduzas[j].hits(ship)) {
    ship.die();

    }
    bullets[i].dissappear();
    }
if (bullets[i].hitsAlien(meduzas[j]) && shipNumMeduzas != numsMeduzas[j] && eplodedForMeduzas) {
		points-=5;
		bullets[i].dissappear();

}
    }
    }


    var edge = false;


		if(spawningY>windowWidth/2-200 && spawningY<windowWidth/2-170){

						image(spawningExplosion,40,140);


		}

		if(aliens.length != 0){

		for(var i=0; i<40; i++){
								image(spawningMachine,spawningY,20);

					spawningY+=0.05;

					if(spawningY > windowWidth/2-200){
						if (!explodedForAliens) {
							for (var i = 0; i < 200; i++) {
								image(spawningExplosion,windowWidth/2-200,60);

							}
	explodedForAliens = true;
						}
					canAppearAliens = true;
					if(aliensAppeared == false){

					appearNewLevel.play();
					aliensAppeared=true;
					}
									aliensAppeared=true;

					}

			}


			if(canAppearAliens){
				canAttackAliens = true;
			for (var i = 0; i < aliens.length; i++) {
	      aliens[i].show();
	      aliens[i].move();
	      if (aliens[i].x>width || aliens[i].x<0) {
	        edge=true;

	      }

	    }
			}



		}
		//console.log(win);

		if (aliens.length == 0 &&  zorgs.length ==  0 && meduzas.length == 0 && aliensM.length == 0) {
			canAppearZorgsM = true;
		}
		if (aliens.length == 0 &&  zorgs.length ==  0 && meduzas.length == 0 && aliensM.length == 0 && zorgsM.length == 0 && explodedForZorgsM) {
			canAppearMeduzasM  = true;
		}
		if (canAppearZorgsM) {
			for (var i = 0; i < zorgsM.length; i++) {
				zorgsM[i].show();
					zorgsM[i].move();






			}
		}
		if (canAppearMeduzasM) {
			for (var i = 0; i < meduzasM.length; i++) {
				meduzasM[i].show();
				if (zorgsM.length == 0) {
					meduzasM[i].move();

				}


				if (meduzasM[i].x>width || meduzasM[i].x<0) {
					edge=true;

				}

			}
		}
	if(aliens.length == 0){
if(spawningY>windowWidth && !returnedSpaningForZorgs){
	spawningY = -20;
	returnedSpaningForZorgs = true;
}
	for(var i=0; i<40; i++){
							image(spawningMachine,spawningY,20);

				spawningY+=0.05;
				if(spawningY > windowWidth/2-200){
					if (!eplodedForZorgs) {
						for (var i = 0; i < 200; i++) {
							image(spawningExplosion,windowWidth/2-200,60);

						}
eplodedForZorgs = true;
					}
				canAppearZorgs = true;
				if(zorgsAppeared == false){

				appearNewLevel.play();
				zorgsAppeared=true;
				}
								zorgsAppeared=true;

				}

		}


		if(canAppearZorgs){
			canAttackZorgs = true;
		for (var i = 0; i < zorgs.length; i++) {
      zorgs[i].show();
      zorgs[i].move();
      if (zorgs[i].x>width || zorgs[i].x<0) {
        edge=true;

      }

    }
		}

	}
	//console.log(canAppearMeduzasM);
	//

	if(meduzas.length == 0){
	if(spawningY>windowWidth && !returnedSpaningForAliensM){
	spawningY = -20;
	returnedSpaningForAliensM = true;
	}
	for(var i=0; i<40; i++){
							image(spawningMachine,spawningY,20);

				spawningY+=0.05;
				if(spawningY > windowWidth/2-200){
					if (!explodedForAliensM) {
						for (var i = 0; i < 200; i++) {
							image(spawningExplosion,windowWidth/2-200,60);

						}
	explodedForAliensM = true;
					}
				canAppearAliensM = true;
				if(aliensMAppeared == false){

				appearNewLevel.play();
				aliensMAppeared=true;
				}
								aliensMAppeared=true;

				}

		}


		if(canAppearAliensM){
			canAttackAliensM = true;
		for (var i = 0; i < aliensM.length; i++) {
			aliensM[i].show();
			aliensM[i].move();
			if (aliensM[i].x>width || aliensM[i].x<0) {
				edge=true;

			}

		}
		}

	}

	//
	if(aliensM.length == 0){
		//console.log(edge);
	if(spawningY>windowWidth && !returnedSpaningForZorgsM){
	spawningY = -20;
	returnedSpaningForZorgsM = true;
	}
	for(var i=0; i<40; i++){
							image(spawningMachine,spawningY,20);

				spawningY+=0.05;
				if(spawningY > windowWidth/2-200){
					if (!explodedForZorgsM) {
						for (var i = 0; i < 200; i++) {
							image(spawningExplosion,windowWidth/2-200,60);

						}
	explodedForZorgsM = true;
					}
				canAppearZorgsM = true;
				if(zorgsMAppeared == false){

				appearNewLevel.play();
				zorgsMAppeared=true;
				}
								zorgsMAppeared=true;

				}

		}


		if(canAppearZorgsM){
			canAttackZorgsM = true;
		for (var i = 0; i < zorgsM.length; i++) {
			zorgsM[i].show();
			zorgsM[i].move();
			if (zorgsM[i].x>width || zorgsM[i].x<0) {
				edge=true;

			}

		}
		}

	}
	//
	if(zorgsM.length == 0){
	if(spawningY>windowWidth && !returnedSpaningForMeduzasM){
	spawningY = -20;
	returnedSpaningForMeduzasM = true;
	}
	for(var i=0; i<40; i++){
							image(spawningMachine,spawningY,20);

				spawningY+=0.05;
				if(spawningY > windowWidth/2-200){
					if (!explodedForMeduzasM) {
						for (var i = 0; i < 200; i++) {
							image(spawningExplosion,windowWidth/2-200,60);

						}
	explodedForMeduzasM = true;
					}
				canAppearMeduzasM = true;
				if(meduzasMAppeared == false){

				appearNewLevel.play();
				meduzasMAppeared=true;
				}
								meduzasMAppeared=true;

				}

		}


		if(canAppearMeduzasM){
			canAttackMeduzasM= true;
		for (var i = 0; i < meduzasM.length; i++) {
			meduzasM[i].show();
			//meduzasM[i].move();


		}
		}

	}
	//
    if(zorgs.length == 0){
		//console.log("zorgs are gone");
		if(spawningY>windowWidth && !returnedSpaningForMeduzas){
	spawningY = -20;
	returnedSpaningForMeduzas = true;
}
	for(var i=0; i<40; i++){
							image(spawningMachine,spawningY,20);
//console.log("Machine");
				spawningY+=0.05;
				if(spawningY > windowWidth/2-200){
					if (!eplodedForMeduzas) {
						for (var i = 0; i < 200; i++) {
							image(spawningExplosion,windowWidth/2-200,60);

						}
eplodedForMeduzas = true;
					}
				canAppearMeduzas = true;
				if(meduzasAppeared == false){

				appearNewLevel.play();
				meduzasAppeared=true;
				}
								meduzasAppeared=true;

				}

		}
    for (var i = 0; i < meduzas.length; i++) {
		if(zorgs.length == 0){
      meduzas[i].show();
      meduzas[i].move();
		}
      if (meduzas[i].x>width || meduzas[i].x<0) {
        edge=true;

      }

    }
	}
    if (edge) {
      for (var i = 0; i < aliens.length; i++) {
        aliens[i].shiftDown();
        if (aliens[i].y>=height-60) {
          clearScreen=true;
        }
      }
    }
		if (edge && meduzas.length == 0) {
      for (var i = 0; i < aliensM.length; i++) {
        aliensM[i].shiftDown();
        if (aliensM[i].y>=height-60) {
          clearScreen=true;
        }
      }
    }
		if (edge && aliensM.length == 0 && canAppearZorgsM) {
      for (var i = 0; i < zorgsM.length; i++) {
        zorgsM[i].shiftDown();
        if (zorgsM[i].y>=height-60) {
          clearScreen=true;
        }
      }
    }
		if (edge && zorgsM.length == 0) {
      for (var i = 0; i < meduzasM.length; i++) {
        meduzasM[i].shiftDown();
        if (meduzasM[i].y>=height-60) {
          clearScreen=true;
        }
      }
    }
    if (edge && aliens.length==0) {
      for (var i = 0; i < zorgs.length; i++) {
        zorgs[i].shiftDown();
        if (zorgs[i].y>=height-60) {
          clearScreen=true;
        }
      }
    }
    if (edge && zorgs.length == 0) {
      for (var i = 0; i < meduzas.length; i++) {
        meduzas[i].shiftDown();
        if (meduzas[i].y>=height-60) {
          clearScreen=true;
        }
      }
    }


    for (var i = bullets.length-1; i >=0 ; i--) {
  if (bullets[i].toDelete==true) {
    bullets.splice(i,1);
  }

  }
  for (var i = lazers.length-1; i >=0 ; i--) {
if (lazers[i].toDelete==true) {
  lazers.splice(i,1);
}

}
  for (var i = aliens.length-1; i >=0 ; i--) {
  if (aliens[i].toDie==true) {
  aliens.splice(i,1);
  points+=10;
	if (!canUseBomb) {
		pointsForBomb+=10;
	}
	if (pointsForBomb>=100) {
		canUseBomb = true;
	}
  }

  }
	for (var i = aliensM.length-1; i >=0 ; i--) {
  if (aliensM[i].toDie==true) {
  aliensM.splice(i,1);
  points+=10;
	if (!canUseBomb2) {
		pointsForBomb2+=10;
	}
	if (pointsForBomb>=100) {
		canUseBomb2 = true;
	}
  }

  }
	for (var i = zorgsM.length-1; i >=0 ; i--) {
  if (zorgsM[i].toDie==true) {
  zorgsM.splice(i,1);
  points+=20;
	if (!canUseBomb2) {
		pointsForBomb2+=20;
	}
	if (pointsForBomb2>=100) {
		canUseBomb2 = true;
	}
  }

  }
	for (var i = meduzasM.length-1; i >=0 ; i--) {
  if (meduzasM[i].toDie==true) {
  meduzasM.splice(i,1);
  points+=30;
	if (!canUseBomb2) {
		pointsForBomb2+=30;
	}
	if (pointsForBomb2>=100) {
		canUseBomb2 = true;
	}
  }

  }
  }
  for (var i = zorgs.length-1; i >=0 ; i--) {
  if (zorgs[i].toDie==true) {
  zorgs.splice(i,1);
  points+=20;
	if (!canUseBomb) {
		pointsForBomb+=20;
	}
	if (pointsForBomb>=100) {
		canUseBomb = true;
	}
  }

  }
  for (var i = meduzas.length-1; i >=0 ; i--) {
  if (meduzas[i].toDie==true) {
  meduzas.splice(i,1);
  points+=30;
	if (!canUseBomb) {
		pointsForBomb+=30;
	}
	if (pointsForBomb>=100) {
		canUseBomb = true;
	}
  }

  }

	if (paused) {
		fill(255);
		textAlign(CENTER,CENTER);
		text('ИГРАТА Е НА ПАУЗА. НАТИСНЕТЕ "P" ЗА ДА ПРОДЪЛЖИТЕ.',windowWidth/2,windowHeight/2);
		textAlign(LEFT,LEFT);
	}
    //console.log(aliens.length, zorgs.length, meduzas.length);
//fly();
  }


function animAliens() {
  for (var i = 0; i < aliens.length; i++) {
aliens[i].animate();

  }
  setTimeout(animAliens, 1000);
}
function animAliensM() {
  for (var i = 0; i < aliensM.length; i++) {
aliensM[i].animate();

  }
  setTimeout(animAliensM, 1000);
}
function animZorgsM() {
  for (var i = 0; i < zorgsM.length; i++) {
zorgsM[i].animate();

  }
  setTimeout(animZorgsM, 1000);
}
function animMeduzasM() {
  for (var i = 0; i < meduzasM.length; i++) {
meduzasM[i].animate();

  }
  setTimeout(animMeduzasM, 1000);
}
function animZorgs() {
  for (var i = 0; i < zorgs.length; i++) {
zorgs[i].animate();

  }
  setTimeout(animZorgs, 1000);
}
function animMeduzas() {
  for (var i = 0; i < meduzas.length; i++) {
meduzas[i].animate();


  }
  setTimeout(animMeduzas, 1000);
}
function attack(){
	if(aliens.length!=0){
  var index = random(0,aliens.length);
  index=floor(index);
  var lazer = new Lazer(aliens[index].x,aliens[index].y);
	if(started && canAttackAliens)
  lazers.push(lazer);
  setTimeout(attack,3000);
	}

	if(aliens.length==0 && zorgs.length!=0){
		var index = random(0,zorgs.length);
  index=floor(index);
  var lazer = new Lazer(zorgs[index].x,zorgs[index].y);
  if(spawningY>windowWidth/2-200 && started)
  lazers.push(lazer);
  setTimeout(attack,3000);
	}
	if(eplodedForMeduzas && meduzas.length!=0){
		var index = random(0,meduzas.length);
  index=floor(index);
  var lazer = new Lazer(meduzas[index].x,meduzas[index].y);
	if(started)

  lazers.push(lazer);
  setTimeout(attack,3000);
	}
console.log(meduzas.length);
	if(meduzas.length == 0 && aliensM.length !=0){
		console.log("hi");
		var index = random(0,aliensM.length);
  index=floor(index);
  var lazer = new Lazer(aliensM[index].x,aliensM[index].y);
  lazers.push(lazer);
  setTimeout(attack,3000);
	}
	if(aliens.length==0 && zorgs.length == 0 && meduzas.length ==0 && aliensM.length == 0 && zorgsM.length !=0){
		var index = random(0,zorgsM.length);
  index=floor(index);
  var lazer = new Lazer(zorgsM[index].x,zorgsM[index].y);
	if(started)

  lazers.push(lazer);
  setTimeout(attack,3000);
	}
	if(aliens.length==0 && zorgs.length == 0 && meduzas.length ==0 && aliensM.length == 0 && zorgsM.length == 0){
		var index = random(0,meduzasM.length);
  index=floor(index);
  var lazer = new Lazer(meduzasM[index].x,meduzasM[index].y);
	if(started)

  lazers.push(lazer);
  setTimeout(attack,3000);
	}
}
function fly() {
  flying.play();
  setTimeout(fly, 16000);
}
function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
	if (keyCode == '66' || keyCode == "191") {
		if (canUseBomb && lvl2ImgShowed == false) {
			console.log("using bomb");
			usingBomb = true;

			canUseBomb = false;
			pointsForBomb = 0;
		}
		else if (canUseBomb2) {
			usingBomb2 = true;
			canUseBomb2 = false;
			pointsForBomb2 = 0;
		}
		else {
			console.log("can`t use bomb now");
			console.log(pointsForBomb2);
		}
	}
	if (keyCode ==  '80') {

		if(!paused){
			paused = true;
			noLoop();
			textAlign(CENTER,CENTER);
			text('ИГРАТА Е НА ПАУЗА. НАТИСНЕТЕ "P" ЗА ДА ПРОДЪЛЖИТЕ.',windowWidth/2,windowHeight/2);
			textAlign(LEFT,LEFT);
		}
		else {
			loop();
			paused = false;
		}
	}
	if(keyCode == '52' || keyCode == '100'){
		goToNewPage = true;
			location.reload();

	}
	if(keyCode == '49' && !started || keyCode == '97' && !started){
		ammo = 120;
		difficulty = "easy";
		started = true;
	}
	if(keyCode == '48' && !started || keyCode == '96' && !started){
		firstTextShowed = true;
		secondTextShowed = true;
		thirdTextShowed = true;
		text(text3,300,500);
		skipText = true;
	}
	if (skipText && !win && !clearScreen && !paused) {
		textSize(sizeOfTxt);
		fill(255);
		textAlign(LEFT);
		text(text1,200,100);
		text(text2,200,300);
	}
	if(keyCode == '50' && !started || keyCode == '98' && !started){
		ammo = 100;
		started = true;
		difficulty = "hard";
	}
	if(keyCode == '51' && !started || keyCode == '99' && !started){
		ammo = 80;
		started = true;
		difficulty = "very hard";
	}
  if (key === ' ') {
    if (ammo>0) {
      //console.log(ammo);
			if (usingBomb) {

				var bullet = new Bullet(ship.x+25, height);
	      bullets.push(bullet);
	      //explozionAlien.play();
	      ammo--;
			}
			else {


      var bullet = new Bullet(ship.x+25, height);
      bullets.push(bullet);
      shooting.play();
      ammo--;
		}
    }
    else {
      clearScreen=true;
    }


  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
	img = shipR;

  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
	img = shipL;
  }



}

function typing() {
if(iTxt<text1.length && !skipText){
  text1UntilNow+=text1.charAt(iTxt);
  fill(255);
  textSize(sizeOfTxt);
  text(text1UntilNow,200,100);
iTxt++;
}
else{
  textSize(sizeOfTxt);

  text(text1,200,100);
  firstTextShowed = true;
}

}
function typing2() {
if(jTxt<text2.length && firstTextShowed && !skipText){
  text2UntilNow+=text2.charAt(jTxt);
  fill(255);
  textSize(sizeOfTxt);
  text(text2UntilNow,200,300);
jTxt++;
}
else if(firstTextShowed && !skipText && !paused){
  textSize(sizeOfTxt);

  text(text2UntilNow,200,300);
  secondTextShowed = true;
}
else if(firstTextShowed  && skipText && !paused){
  textSize(sizeOfTxt);

  text(text2,200,300);
  secondTextShowed = true;
}
}
function typing3() {
if(kTxt<text3.length && !skipText){
  text3UntilNow+=text3.charAt(kTxt);
  textSize(sizeOfTxt);
  fill(255);

  text(text3UntilNow,200,600);
kTxt++;
}
else if(!paused){
  textSize(sizeOfTxt);
  text(text3,200,600);
  thirdTextShowed = true;
}

}
