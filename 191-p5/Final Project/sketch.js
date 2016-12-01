var shantae
// var platform1
 var quicksand
// var ground
var GRAVITY = 1;
var JUMP = 15
var SCENE_W = 2000;
var SCENE_H = 600;
var bg
// var music, enableSound
// var frameCount = 0

/* function preload(){
  music = loadSound('music/scuttletown.mp3')
} */

function setup() {
 createCanvas(2000, 600);
 frameRate(60);
 bg = loadImage("resources/background_sample.png")
 // Establishing a variable called "myAnimation" that holds all the animation in set-up. Use var shantae to create a sprite at pos X, pos Y.
  shantae = createSprite(100, 550);
//  platform = createSprite(0, 550);
  quicksand = createSprite(64,560)

  var myAnimation = shantae.addAnimation("idle", "idle/r_shantae_idle_1.png", "idle/r_shantae_idle_2.png", "idle/r_shantae_idle_3.png", "idle/r_shantae_idle_4.png", "idle/r_shantae_idle_5.png", "idle/r_shantae_idle_6.png", "idle/r_shantae_idle_7.png", "idle/r_shantae_idle_8.png", "idle/r_shantae_idle_9_0.png", "idle/r_shantae_idle_9_1.png", "idle/r_shantae_idle_9_2.png", "idle/r_shantae_idle_9_3.png")
 shantae.addAnimation("walk", "walk/r_shantae_walk_1.png", "walk/r_shantae_walk_2.png", "walk/r_shantae_walk_3.png", "walk/r_shantae_walk_4.png", "walk/r_shantae_walk_5.png", "walk/r_shantae_walk_6.png", "walk/r_shantae_walk_7.png", "walk/r_shantae_walk_8.png", "walk/r_shantae_walk_9_0.png", "walk/r_shantae_walk_9_1.png")
 shantae.addAnimation("crouch", "crouch/r_shantae_prone_1.png", "crouch/r_shantae_prone_2.png", "crouch/r_shantae_prone_3.png", "crouch/r_shantae_prone_4.png", "crouch/r_shantae_prone_5.png", "crouch/r_shantae_prone_6.png", "crouch/r_shantae_prone_7.png", "crouch/r_shantae_prone_8.png")
 quicksand.addAnimation("quicksand", "resources/quicksand_1.png", "resources/quicksand_2.png", "resources/quicksand_3.png", "resources/quicksand_4.png");
}

function draw() {
  fill(0);
  textAlign(CENTER);
  text("Shantae (C) Wayforward, all sprites are from Spriter's Resource. Music from YouTube.", width/2, 20);
  background(bg);
  drawSprites();

  if(mouseIsPressed){
    camera.zoom = 1.5;
  } else{
    camera.zoom = 1;
  }

  camera.position.x = shantae.position.x
  camera.position.y = shantae.position.y

  if(camera.position.x <= 1000){
    camera.position.x = 1000;
  } if(camera.position.x >= SCENE_W-670){
      camera.position.x = SCENE_W-670;
    }

  if(shantae.position.x < 15){
    shantae.position.x = 15;
  } if (shantae.position.y < 15){
    shantae.position.y = 15;
  } if (shantae.position.x > SCENE_W-15){
    shantae.position.x = SCENE_W-15;
  } if (shantae.position.y > SCENE_H-15){
    shantae.position.y = SCENE_H-15;
  }

/*  if(keyWentDown(UP_ARROW)){
    shantae.changeAnimation("idle");
    shantae.mirrorX(random(-1, 1);
    shantae.velocity.y = -JUMP;
  } */
  /*else if */ if(keyIsDown(RIGHT_ARROW)){
    shantae.changeAnimation("walk");
    shantae.mirrorX(1);
    shantae.velocity.x = 2;
  }
  else if(keyIsDown(LEFT_ARROW)){
    shantae.changeAnimation("walk");
    shantae.mirrorX(-1);
    shantae.velocity.x = -2;
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
  camera.on();
  shantae.debug = true;
}
