var shantae;
var quicksand;
var quicksandSink
var GRAVITY = 0.75;
var JUMP = 10;
var SCENE_W = 2000;
var SCENE_H = 600;
var bg;
var music, sound, jump, damage;
var enemy;
var cactusImg, treeImg;
var hitCounter = 0;
var gameOver;

function preload(){
  //This is the music I chose to use for my "game", which is Scuttle Town from Shantae and the Pirate's Curse. Game Over is from Sega Rally.
  music = loadSound('music/scuttletown_loop.wav')
  //Game Over will be the only time this sound will play.
  sound = loadSound('music/gameover.mp3')
  //Jump happens when the sprite's velocity is less than -9.
  jump = loadSound('sound/Jump.wav')
  //Damage is supposed to happen
  damage = loadSound('sound/ShantaeDamaged.wav')
}

function setup() {
 createCanvas(2000, 600);
 frameRate(60);
 bg = loadImage("resources/background_sample.png")
 cactusImg = loadImage("resources/cactus.png");
 treeImg = loadImage("resources/tree.png");
 // I had to set the volume very low, since it will otherwise blow the ears out of everyone in the room.
 // Establishing a variable called "myAnimation" that holds all the animation in set-up. Use var shantae to create a sprite at pos X, pos Y.
  shantae = createSprite(25, 534);
  shantae.maxSpeed.x = 3;
//  shantae.friction = 0.5;
  ground = createSprite(1000, 300);
  ground.addImage(loadImage("resources/ground.png"));
  quicksand = createSprite(144,560);
  quicksandSink = createSprite(144, 560);
  // enemy = new Group();
  cactus = new Group(); //A group of cacti that only appears to make a tower of two cacti on top of a mound of ground
  for(var i = 0; i < 2; i++){
    var newCactus = createSprite(398, 530+(16*i));
    newCactus.addAnimation("cactus", "resources/cactus.png");
    newCactus.setCollider(0, 0, 16, 16);
    cactus.add(newCactus);
  }
//Every animation I've used in the animation, only two of these aren't used and they are both Shantae's: "land" (can't put a conditional down for it) and "die" (Sprites stop updating after a game over call automatically. Plus, a little rotation will deform the sprite when a new game starts.)
  var myAnimation = shantae.addAnimation("idle", "idle/r_shantae_idle_1.png", "idle/r_shantae_idle_2.png", "idle/r_shantae_idle_3.png", "idle/r_shantae_idle_4.png", "idle/r_shantae_idle_5.png", "idle/r_shantae_idle_6.png", "idle/r_shantae_idle_7.png", "idle/r_shantae_idle_8.png", "idle/r_shantae_idle_9_0.png", "idle/r_shantae_idle_9_1.png", "idle/r_shantae_idle_9_2.png", "idle/r_shantae_idle_9_3.png");
 shantae.addAnimation("walk", "walk/r_shantae_walk_1.png", "walk/r_shantae_walk_2.png", "walk/r_shantae_walk_3.png", "walk/r_shantae_walk_4.png", "walk/r_shantae_walk_5.png", "walk/r_shantae_walk_6.png", "walk/r_shantae_walk_7.png", "walk/r_shantae_walk_8.png", "walk/r_shantae_walk_9_0.png", "walk/r_shantae_walk_9_1.png");
 shantae.addAnimation("crouch", "crouch/r_shantae_prone_1.png", "crouch/r_shantae_prone_2.png", "crouch/r_shantae_prone_3.png", "crouch/r_shantae_prone_4.png", "crouch/r_shantae_prone_5.png", "crouch/r_shantae_prone_6.png", "crouch/r_shantae_prone_7.png", "crouch/r_shantae_prone_8.png");
 shantae.addAnimation("jump", "jump/shantae_jump_1.png", "jump/shantae_jump_2.png", "jump/shantae_jump_3.png");
 shantae.addAnimation("fall", "jump/shantae_jump_4.png", "jump/shantae_jump_5.png", "jump/shantae_jump_6.png", "jump/shantae_jump_7.png");
// shantae.addAnimation("land", "jump/shantae_land_1.png", "jump/shantae_land_2.png", "jump/shantae_land_3.png", "jump/shantae_land_4.png");
 shantae.addAnimation("die", "resources/shantaedie.png");
 quicksandSink.addAnimation("quicksandsink", "resources/quicksand_sink.png");
 quicksandSink.setCollider(0, 0, 64, 79);
 shantae.addAnimation("quicksandjump", "jump/shantae_jump_1.png", "jump/shantae_land_1.png", "jump/shantae_land_2.png", "jump/shantae_land_3.png", "jump/shantae_land_4.png");
 quicksand.addAnimation("quicksand", "resources/quicksand_1.png", "resources/quicksand_2.png", "resources/quicksand_3.png", "resources/quicksand_4.png");
  gameOver = true;
}

function draw() {
  if(gameOver && keyWentDown("x")){
    newGame();

  }
  if(!gameOver){
//It initially starts out with just a white screen, but with a mousePress, the game will come on, blaring Scuttle Town's theme. So turn it down.
  fill(0);
  background(bg);
  drawSprites();
//Camera's x-position will only matter at the end of the day.
  camera.position.x = shantae.position.x
//Camera will only follow Shantae.
  if(camera.position.x <= 1000){
    camera.position.x = 1000;
  } if(camera.position.x >= SCENE_W-1000){
      camera.position.x = SCENE_W-1000;
    }
 //The player will fall in the pit and die without any restrictions on the bottom y position.
  if(shantae.position.x < 15){
    shantae.position.x = 15;
  } if (shantae.position.y < 15){
    shantae.position.y = 15;
  } if (shantae.position.x > SCENE_W-15){
    shantae.position.x = SCENE_W-15;
  }
/*
  for(var i = 0; i < 10; i++){
    enemy = createSprite(random(ground.position.x[i]), random(ground.position.y[i]));
    var enemyAnimation = enemy.addAnimation("enemy", "resources/goomba1.png", "resources/goomba2.png");
  } One of the few failed pieces of code, which I previously didn't know what was happening. However, I still can't add this because I can't set effective collision checks between it and the ground in the set-up area.
*/
  if(ground.overlapPixel(shantae.position.x, shantae.position.y+25)== false){
    shantae.velocity.y += GRAVITY; //Essentially, if she's not on the ground at all times, she'll fall down.
  }
  while(ground.overlapPixel(shantae.position.x, shantae.position.y+17)){
    shantae.position.y--; //If she's on the ground, she'll stay grounded with no velocity y applied to her.
    shantae.velocity.y = 0;
  }
  if(shantae.collide(quicksandSink)){ //It didn't overall work out well enough, but it acts like an elevator to your doom.
    quicksandSink.velocity.y = quicksandSink.velocity.y + 0.01;
    if(keyWentDown(UP_ARROW)){
      shantae.changeAnimation("quicksandjump");
      shantae.mirrorX(random(-1, 1));
      shantae.velocity.y = -JUMP/10;
    } else if(keyIsDown(LEFT_ARROW)){
      shantae.changeAnimation("walk");
      shantae.mirrorX(-1);
      shantae.velocity.x = -2.5/5
    } else if(keyIsDown(RIGHT_ARROW)){
      shantae.changeAnimation("walk");
      shantae.mirrorX(1);
      shantae.velocity.x = 2.5/5
    } else{
      shantae.changeAnimation("idle");
      shantae.mirrorX(random(-1, 1));
      shantae.velocity.x = 0;
    }
  }
  if(keyWentDown(UP_ARROW)){ //The sequence is critical here, for if it was out of order, many of the effects would not work at all.
    shantae.mirrorX(random(-1, 1));
    shantae.velocity.y = -JUMP;
    console.log(shantae.velocity.y);
  }else if(shantae.velocity.y > 0.1){ //To make sure that the else if boolean won't interfere with the velocity.y checks and the subsequent change animations.
    shantae.changeAnimation("fall");
    if(keyIsDown(LEFT_ARROW)){
      shantae.velocity.x = -2.5;
    }else if(keyIsDown(RIGHT_ARROW)){
      shantae.velocity.x = 2.5;
    }else{
      shantae.mirrorX(random(-1, 1));
      shantae.velocity.x = 0;
    }
  }else if(shantae.velocity.y < -9){ //Should load up the jump sound first before allowing the jump animation to play out.
    jump.setVolume(0.1);
    jump.play();
  }else if(shantae.velocity.y < -0.1){ //Trying to keep the animation in playing, but it'll load in the other keyIsDown functions between -0.1 and 0.1. Also, sound does play multiple frames.
    shantae.changeAnimation("jump");
    if(keyIsDown(LEFT_ARROW)){
      shantae.velocity.x = -2.5;
    }else if(keyIsDown(RIGHT_ARROW)){
      shantae.velocity.x = 2.5;
    }else{
      shantae.mirrorX(random(-1, 1));
      shantae.velocity.x = 0;
    }
  } //Otherwise, the rest of the key presses are for the birds in that the idle animation is the bottom while the UP_ARROW is the top.
  else if(keyIsDown(RIGHT_ARROW)){
    shantae.changeAnimation("walk");
    shantae.mirrorX(1);
    shantae.velocity.x = 2.5;
  }
  else if(keyIsDown(LEFT_ARROW)){
    shantae.changeAnimation("walk");
    shantae.mirrorX(-1);
    shantae.velocity.x = -2.5;
  }
  else if (keyIsDown(DOWN_ARROW)){
    shantae.changeAnimation("crouch");
    shantae.mirrorX(random(-1, 1));
    shantae.velocity.x = 0;
  }
  else{
    shantae.changeAnimation("idle");
    shantae.mirrorX(random(-1, 1));
    shantae.velocity.x = 0;
  }
    if(shantae.collide(cactus)){
      console.log("Shantae got hit by cactus.");
      shantae.hitCounter = shantae.hitCounter + 1 //inflicts some "pain" on the character per frame.
      if(shantae.hitCounter % 15 === 0){ //Limits the sound so it won't be spammed by the hitCounter.
      damage.setVolume(0.1);
      damage.play();
    }
      if(shantae.hitCounter > 60){
        shantaeDie(); //If she gets hit over 60 times, she'll die.
      }
    }
    if(shantae.position.y >= 610){
      console.log("Shantae fell into a pit.");
      shantaeDie(); //If she falls into a pit, she'll also die.
    }
  }
}

function mousePressed(){ //Allows you to use a mouse press to get out of a game over.
  if(gameOver){
    newGame();
  }
}

function newGame(){ //The conditions of the world of any moving sprites are put here.
  gameOver = false;
  shantae.position.x = 25;
  shantae.position.y = 534;
  shantae.velocity.x = 0;
  quicksandSink.position.y = 560;
  quicksandSink.velocity.y = 0;
  ground.position.x = 1000;
  ground.position.y = 300;
  shantae.hitCounter = 0;
  sound.stop(); //The Game Over music stops playing and sets the main music to be music.
  music.setVolume(0.03); //Controls the volume so you won't just become deaf by the music alone.
  music.loop(); //Loops the music until a game over is played.
}

function shantaeDie(){ //Displays any text needed for the copyrights and the Game Over text.
  textAlign(CENTER);
  textSize(40);
  textFont("TimesNewRoman");
  text("Shantae (C) Wayforward, all sprites are from Spriter's Resource. Music from YouTube.", width/2, 40);
  text("Game Over, Yeeaaaaaaah!", width/2, 80);
  music.stop(); //stops the music so you can hear the Game Over music. Only once, though.
  sound.setVolume(0.3); //Also to prevent your ears from blowing out.
  sound.play(); //GAME OVER, YEAAAAAAAH!
  gameOver = true; //Makes sure that all sprites and control are frozen, unless if a button is specifically designed to allow a new game.
}
